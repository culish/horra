import { verifyLinkToken } from "@/lib/payments/links";
import { baseOrderId, createSnap, getStatus, isPaid, midtransConfigured } from "@/lib/payments/midtrans";
import { siteConfig } from "@/config/site";

/**
 * Starts a Midtrans Snap checkout for a signed payment link.
 * The amount always comes from the verified link, never from the browser.
 */

const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  let body: { token?: unknown };
  try {
    body = (await request.json()) as { token?: unknown };
  } catch {
    return json({ ok: false, reason: "invalid_json" }, 400);
  }

  const verified = verifyLinkToken(body.token);
  if (!verified.ok)
    return json({ ok: false, reason: verified.reason }, verified.reason === "not_configured" ? 503 : 400);
  if (!midtransConfigured()) return json({ ok: false, reason: "not_configured" }, 503);

  const { link, linkId } = verified;
  const base = baseOrderId(link, linkId);
  const finishUrl = new URL("/pay/finish", siteConfig.url).toString();

  try {
    // Don't take a second payment for a link that has already been paid.
    const existing = await getStatus(base);
    if (existing && isPaid(existing)) return json({ ok: false, reason: "already_paid" }, 409);

    try {
      const snap = await createSnap({ link, linkId, orderId: base, finishUrl });
      return json({ ok: true, token: snap.token, redirectUrl: snap.redirectUrl, orderId: base });
    } catch (e) {
      if ((e as { code?: string }).code !== "order_id_taken") throw e;
      // An earlier attempt on this link expired, failed or is still open — start a fresh attempt.
      const orderId = `${base}-${Date.now().toString(36)}`;
      const snap = await createSnap({ link, linkId, orderId, finishUrl });
      return json({ ok: true, token: snap.token, redirectUrl: snap.redirectUrl, orderId });
    }
  } catch (e) {
    console.error("[payments] checkout failed:", (e as Error).message);
    return json({ ok: false, reason: "provider_error" }, 502);
  }
}
