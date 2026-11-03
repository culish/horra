import { getStatus, isPaid, verifySignature } from "@/lib/payments/midtrans";

/**
 * Midtrans HTTP notification (webhook) endpoint.
 * Set "Payment Notification URL" in the Midtrans dashboard to
 *   https://<your-domain>/api/payments/midtrans/notification
 *
 * 1. Verifies signature_key with the server key.
 * 2. Re-reads the transaction from Midtrans (the API is the source of truth, not the POST body).
 * 3. Forwards a small JSON event to PAYMENT_WEBHOOK_URL (CRM, Zapier/Make, Google Sheets, email…).
 * Responds non-2xx when forwarding fails, so Midtrans retries the notification.
 */

const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  let n: Record<string, unknown>;
  try {
    n = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, reason: "invalid_json" }, 400);
  }

  if (!verifySignature(n)) return json({ ok: false, reason: "invalid_signature" }, 401);

  let tx;
  try {
    tx = await getStatus(String(n.order_id));
  } catch (e) {
    console.error("[payments] status lookup failed:", (e as Error).message);
    return json({ ok: false, reason: "provider_error" }, 502);
  }
  if (!tx) return json({ ok: false, reason: "unknown_order" }, 404);

  const event = {
    source: "horra-prime-group-website",
    event: "payment.status",
    provider: "midtrans",
    kind: tx.custom?.kind ?? "invoice",
    invoice: tx.custom?.invoice ?? null,
    details: tx.custom?.linkId ?? null,
    orderId: tx.orderId,
    status: tx.transactionStatus,
    fraudStatus: tx.fraudStatus ?? null,
    paid: isPaid(tx),
    amount: Number(tx.grossAmount) || tx.grossAmount,
    currency: "IDR",
    paymentType: tx.paymentType ?? null,
    transactionId: tx.transactionId ?? null,
    transactionTime: tx.transactionTime ?? null,
    settlementTime: tx.settlementTime ?? null,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.PAYMENT_WEBHOOK_URL?.trim();
  if (!webhook) {
    // Still acknowledged: the transaction is visible in the Midtrans dashboard.
    console.info(`[payments] ${event.orderId} → ${event.status} (no PAYMENT_WEBHOOK_URL set)`);
    return json({ ok: true, forwarded: false });
  }

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const token = process.env.PAYMENT_WEBHOOK_TOKEN?.trim();
    if (token) headers.Authorization = `Bearer ${token}`;
    const res = await fetch(webhook, {
      method: "POST",
      headers,
      body: JSON.stringify(event),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error(`[payments] webhook responded ${res.status}`);
      return json({ ok: false, reason: "delivery_failed" }, 502);
    }
    return json({ ok: true, forwarded: true });
  } catch {
    console.error("[payments] webhook request failed");
    return json({ ok: false, reason: "delivery_failed" }, 502);
  }
}
