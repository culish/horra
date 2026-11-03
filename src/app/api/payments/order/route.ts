import { randomBytes } from "node:crypto";
import { siteConfig } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { en } from "@/i18n/messages/en";
import { createSnapTransaction, midtransConfigured } from "@/lib/payments/midtrans";
import {
  jakartaToday,
  resolveVisa,
  validateApplicant,
  validateService,
  visaQuote,
  type ApplicantInput,
  type ServiceInput,
} from "@/lib/payments/orders";

/**
 * Starts a Midtrans Snap checkout for an online order.
 *
 *  kind "visa":    { visa, tier, applicant }  → amount from the visa catalogue (+5% Bangladesh discount)
 *  kind "service": { service, amount, … }     → the amount on the customer's quotation
 *
 * The full order (including passport details for visas) is forwarded to INQUIRY_WEBHOOK_URL so the
 * team has it; Midtrans only receives the name, email, phone, amount and a short description.
 * Payment results arrive later through /api/payments/midtrans/notification.
 */

const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

/** Order ids: [A-Za-z0-9-_.~], max 50 chars. */
const newOrderId = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}-${randomBytes(3).toString("hex")}`.toUpperCase().replace(/[^A-Z0-9._~-]/g, "").slice(0, 50);

async function forward(payload: Record<string, unknown>) {
  const webhook = process.env.INQUIRY_WEBHOOK_URL?.trim();
  if (!webhook) {
    console.warn(`[orders] ${payload.orderId}: INQUIRY_WEBHOOK_URL is not set, order details are only in Midtrans`);
    return;
  }
  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const token = process.env.INQUIRY_WEBHOOK_TOKEN?.trim();
    if (token) headers.Authorization = `Bearer ${token}`;
    const res = await fetch(webhook, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) console.error(`[orders] ${payload.orderId}: webhook responded ${res.status}`);
  } catch {
    console.error(`[orders] ${payload.orderId}: webhook request failed`);
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, reason: "invalid_json" }, 400);
  }
  if (typeof body.website === "string" && body.website.trim()) return json({ ok: false, reason: "rejected" }, 400);
  if (!midtransConfigured()) return json({ ok: false, reason: "not_configured" }, 503);

  const language = isLocale(body.locale) ? body.locale : "en";
  const finishUrl = new URL(`/${language}/pay/finish`, siteConfig.url).toString();

  if (body.kind === "visa") {
    const resolved = resolveVisa(body.visa, body.tier);
    if (!resolved) return json({ ok: false, reason: "validation", errors: { visa: "required" } }, 400);
    const checked = validateApplicant((body.applicant ?? {}) as ApplicantInput, jakartaToday());
    if (!checked.ok) return json({ ok: false, reason: "validation", errors: checked.errors }, 400);

    const { visa, tier } = resolved;
    const a = checked.applicant;
    const price = visaQuote(visa, tier, a.nationality);
    const orderId = newOrderId(`V-${visa.id}`);
    const name = `${en.apply.visas[visa.id as keyof typeof en.apply.visas]?.name ?? visa.code}${tier === "express" ? " (express)" : ""}`;

    await forward({
      source: "horra-prime-group-website",
      event: "visa.application",
      status: "awaiting_payment",
      orderId,
      language,
      visa: { id: visa.id, code: visa.code, name, tier },
      price: { base: price.base, discount: price.discount, total: price.total, currency: "IDR" },
      discountNote: price.discount ? "Bangladesh special discount 5%" : null,
      applicant: a,
      submittedAt: new Date().toISOString(),
    });

    try {
      const snap = await createSnapTransaction({
        orderId,
        amount: price.total,
        item: { id: visa.id, name },
        customer: { name: a.fullName, email: a.email, phone: a.phone },
        finishUrl,
        expiryMinutes: 60 * 24,
        custom: [orderId, `${visa.code} · ${a.nationality} · arrival ${a.arrival}`, "visa"],
      });
      return json({ ok: true, token: snap.token, orderId, amount: price.total });
    } catch (e) {
      console.error("[orders] visa checkout failed:", (e as Error).message);
      return json({ ok: false, reason: "provider_error" }, 502);
    }
  }

  if (body.kind === "service") {
    const checked = validateService(body as ServiceInput);
    if (!checked.ok) return json({ ok: false, reason: "validation", errors: checked.errors }, 400);
    const o = checked.order;
    const orderId = newOrderId("S");
    const name = en.pay.service.services[o.service];

    await forward({
      source: "horra-prime-group-website",
      event: "service.payment",
      status: "awaiting_payment",
      orderId,
      language,
      service: { id: o.service, name },
      reference: o.reference ?? null,
      amount: o.amount,
      currency: "IDR",
      customer: { name: o.fullName, email: o.email, phone: o.phone },
      notes: o.notes ?? null,
      page: typeof body.page === "string" ? body.page.slice(0, 200) : null,
      submittedAt: new Date().toISOString(),
    });

    try {
      const snap = await createSnapTransaction({
        orderId,
        amount: o.amount,
        item: { id: o.service, name: o.reference ? `${name} — ${o.reference}` : name },
        customer: { name: o.fullName, email: o.email, phone: o.phone },
        finishUrl,
        expiryMinutes: 60 * 24,
        custom: [o.reference ?? orderId, o.service, "service"],
      });
      return json({ ok: true, token: snap.token, orderId, amount: o.amount });
    } catch (e) {
      console.error("[orders] service checkout failed:", (e as Error).message);
      return json({ ok: false, reason: "provider_error" }, 502);
    }
  }

  return json({ ok: false, reason: "invalid_kind" }, 400);
}
