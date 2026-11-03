import { createHash, timingSafeEqual } from "node:crypto";
import type { PaymentLink } from "./links";

/**
 * Minimal Midtrans client (Snap + notification handling) using fetch — no SDK needed.
 *
 * Env:
 *   MIDTRANS_SERVER_KEY             server key (sandbox keys start with "SB-Mid-server-")
 *   NEXT_PUBLIC_MIDTRANS_CLIENT_KEY client key, used by snap.js in the browser
 *   MIDTRANS_IS_PRODUCTION          "true" for live payments; anything else uses the sandbox
 *
 * Docs: https://docs.midtrans.com/reference/snap-api  ·  https://docs.midtrans.com/docs/https-notification-webhooks
 * Server-only: never import this from a client component.
 */

export const isProduction = () => process.env.MIDTRANS_IS_PRODUCTION?.trim() === "true";

const serverKey = () => process.env.MIDTRANS_SERVER_KEY?.trim() || undefined;
export const clientKey = () => process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY?.trim() || undefined;

export const midtransConfigured = () => Boolean(serverKey() && clientKey());

const snapBase = () => (isProduction() ? "https://app.midtrans.com" : "https://app.sandbox.midtrans.com");
const coreBase = () => (isProduction() ? "https://api.midtrans.com" : "https://api.sandbox.midtrans.com");

export const snapScriptUrl = () => `${snapBase()}/snap/snap.js`;

const authHeader = () => `Basic ${Buffer.from(`${serverKey()}:`).toString("base64")}`;

async function call(url: string, init: RequestInit = {}) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: authHeader(),
      ...init.headers,
    },
    signal: AbortSignal.timeout(15_000),
    cache: "no-store",
  });
  let body: Record<string, unknown> = {};
  try {
    body = (await res.json()) as Record<string, unknown>;
  } catch {
    /* empty or non-JSON body */
  }
  return { status: res.status, body };
}

/** Order ids: [A-Za-z0-9-_.~], max 50 chars. */
export const baseOrderId = (link: PaymentLink, linkId: string) => `${link.invoice}-${linkId}`;

export type TxStatus = {
  orderId: string;
  transactionStatus: string;
  fraudStatus?: string;
  statusCode: string;
  grossAmount: string;
  paymentType?: string;
  transactionId?: string;
  transactionTime?: string;
  settlementTime?: string;
  custom?: { invoice?: string; linkId?: string; kind?: string };
};

/** Looks up a transaction. Returns null when Midtrans has no transaction with this order id. */
export async function getStatus(orderId: string): Promise<TxStatus | null> {
  const { status, body } = await call(`${coreBase()}/v2/${encodeURIComponent(orderId)}/status`);
  const code = String(body.status_code ?? status);
  if (code === "404") return null;
  if (status >= 500 || !body.transaction_status) throw new Error(`Midtrans status lookup failed (${code})`);
  return {
    orderId: String(body.order_id),
    transactionStatus: String(body.transaction_status),
    fraudStatus: body.fraud_status ? String(body.fraud_status) : undefined,
    statusCode: code,
    grossAmount: String(body.gross_amount ?? ""),
    paymentType: body.payment_type ? String(body.payment_type) : undefined,
    transactionId: body.transaction_id ? String(body.transaction_id) : undefined,
    transactionTime: body.transaction_time ? String(body.transaction_time) : undefined,
    settlementTime: body.settlement_time ? String(body.settlement_time) : undefined,
    custom: {
      invoice: body.custom_field1 ? String(body.custom_field1) : undefined,
      linkId: body.custom_field2 ? String(body.custom_field2) : undefined,
      kind: body.custom_field3 ? String(body.custom_field3) : undefined,
    },
  };
}

/** Paid = money captured/settled and not flagged as fraud. */
export const isPaid = (s: Pick<TxStatus, "transactionStatus" | "fraudStatus">) =>
  (s.transactionStatus === "settlement" || s.transactionStatus === "capture") &&
  (!s.fraudStatus || s.fraudStatus === "accept");

export type SnapRequest = {
  orderId: string;
  amount: number;
  item: { id: string; name: string };
  customer: { name: string; email?: string; phone?: string };
  finishUrl: string;
  /** How long the customer has to complete a payment started from this checkout (e.g. a VA transfer). */
  expiryMinutes: number;
  /** Shown in the Midtrans dashboard and returned in notifications. Max 255 characters each. */
  custom?: [string?, string?, string?];
};

/** Creates a Snap transaction. Throws with `code: "order_id_taken"` if the order id was used before. */
export async function createSnapTransaction(r: SnapRequest): Promise<{ token: string; redirectUrl: string }> {
  const [first, ...rest] = r.customer.name.trim().split(/\s+/);
  const payload = {
    transaction_details: { order_id: r.orderId, gross_amount: r.amount },
    item_details: [{ id: r.item.id.slice(0, 50), name: r.item.name.slice(0, 50), price: r.amount, quantity: 1 }],
    customer_details: {
      first_name: (first ?? "").slice(0, 50),
      last_name: rest.join(" ").slice(0, 50) || undefined,
      email: r.customer.email,
      phone: r.customer.phone,
    },
    callbacks: { finish: r.finishUrl },
    expiry: { unit: "minutes", duration: Math.round(r.expiryMinutes) },
    custom_field1: r.custom?.[0]?.slice(0, 255),
    custom_field2: r.custom?.[1]?.slice(0, 255),
    custom_field3: r.custom?.[2]?.slice(0, 255),
  };

  const { status, body } = await call(`${snapBase()}/snap/v1/transactions`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (status === 201 && typeof body.token === "string") {
    return { token: body.token, redirectUrl: String(body.redirect_url ?? "") };
  }
  const messages = Array.isArray(body.error_messages) ? body.error_messages.map(String) : [];
  const err = new Error(`Midtrans Snap error ${status}: ${messages.join("; ")}`) as Error & { code?: string };
  if (messages.some((m) => /order_id/i.test(m) && /(taken|digunakan|used)/i.test(m))) err.code = "order_id_taken";
  throw err;
}

/** Creates a Snap transaction for a signed invoice link. */
export function createSnap({
  link,
  linkId,
  orderId,
  finishUrl,
}: {
  link: PaymentLink;
  linkId: string;
  orderId: string;
  finishUrl: string;
}): Promise<{ token: string; redirectUrl: string }> {
  const minutesLeft = Math.max(60, Math.min(60 * 24 * 7, Math.floor((link.expiresAt * 1000 - Date.now()) / 60_000)));
  return createSnapTransaction({
    orderId,
    amount: link.amount,
    item: { id: link.invoice, name: link.description },
    customer: { name: link.customerName, email: link.customerEmail, phone: link.customerPhone },
    finishUrl,
    expiryMinutes: minutesLeft,
    custom: [link.invoice, linkId, "invoice"],
  });
}

/**
 * Verifies a notification's signature_key:
 * SHA512(order_id + status_code + gross_amount + server_key)
 */
export function verifySignature(n: {
  order_id?: unknown;
  status_code?: unknown;
  gross_amount?: unknown;
  signature_key?: unknown;
}): boolean {
  const key = serverKey();
  if (!key) return false;
  if ([n.order_id, n.status_code, n.gross_amount, n.signature_key].some((v) => typeof v !== "string")) return false;
  const expected = createHash("sha512").update(`${n.order_id}${n.status_code}${n.gross_amount}${key}`).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(String(n.signature_key).toLowerCase());
  return a.length === b.length && timingSafeEqual(a, b);
}
