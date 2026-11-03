import { createLinkToken, isAdminKey, linksConfigured, validateLinkInput, type LinkInput } from "@/lib/payments/links";
import { siteConfig } from "@/config/site";

/**
 * Staff endpoint: creates a signed payment link for one invoice.
 * Auth: `Authorization: Bearer <PAYMENT_ADMIN_KEY>`. Used by /pay/admin, but any internal tool can
 * call it too. Nothing is stored — the link itself carries the signed invoice details.
 */

const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  if (!linksConfigured() || !process.env.PAYMENT_ADMIN_KEY?.trim())
    return json({ ok: false, reason: "not_configured" }, 503);

  const auth = request.headers.get("authorization") ?? "";
  const given = auth.toLowerCase().startsWith("bearer ") ? auth.slice(7) : "";
  if (!isAdminKey(given)) {
    await new Promise((r) => setTimeout(r, 600)); // slow down guessing
    return json({ ok: false, reason: "unauthorized" }, 401);
  }

  let body: LinkInput;
  try {
    body = (await request.json()) as LinkInput;
  } catch {
    return json({ ok: false, reason: "invalid_json" }, 400);
  }

  const result = validateLinkInput(body);
  if (!result.ok) return json({ ok: false, reason: "validation", errors: result.errors }, 400);

  const token = createLinkToken(result.link);
  const url = new URL("/pay", siteConfig.url);
  url.searchParams.set("t", token);
  return json({ ok: true, url: url.toString(), expiresAt: new Date(result.link.expiresAt * 1000).toISOString() });
}
