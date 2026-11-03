import { getFields, isVariant, validateInquiry, type InquiryValues } from "@/lib/inquiry";
import { isLocale } from "@/i18n/config";
import { messages } from "@/i18n/messages";

/**
 * Inquiry endpoint.
 *
 * Validates the submission with the same rules as the client form, then forwards it as JSON to
 * INQUIRY_WEBHOOK_URL (any HTTPS endpoint: a CRM, Zapier/Make hook, Formspree, a serverless
 * mailer, etc.). If no webhook is configured it responds 503 `not_configured`, and the form tells
 * the visitor plainly that nothing was sent. Personal data is never logged.
 *
 * Before launch, also consider rate limiting (e.g. at the CDN / platform level) and a CAPTCHA.
 */

type Body = {
  locale?: unknown;
  variant?: unknown;
  context?: unknown;
  values?: unknown;
  website?: unknown; // honeypot
  page?: unknown;
};

const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return json({ ok: false, reason: "invalid_json" }, 400);
  }

  if (!isVariant(body.variant)) return json({ ok: false, reason: "invalid_variant" }, 400);

  const context = typeof body.context === "string" ? body.context.slice(0, 80) : undefined;
  const rawValues = body.values && typeof body.values === "object" ? (body.values as Record<string, unknown>) : {};
  const locale = isLocale(body.locale) ? body.locale : "en";
  const t = messages[locale];
  // Labels in English for the team; validation messages in the visitor's language.
  const fields = getFields(body.variant, context);
  const localFields = getFields(body.variant, context, t.form, t.trading.products);

  const values: InquiryValues = {};
  for (const f of fields) {
    const v = rawValues[f.name];
    if (typeof v === "string") values[f.name] = v.trim();
  }

  const errors = validateInquiry(localFields, values, t.form.validation);
  if (Object.keys(errors).length) return json({ ok: false, reason: "validation", errors }, 400);

  // Honeypot filled in: likely a bot. Respond as accepted without forwarding anything.
  if (typeof body.website === "string" && body.website.trim()) return json({ ok: true });

  const webhook = process.env.INQUIRY_WEBHOOK_URL?.trim();
  if (!webhook) return json({ ok: false, reason: "not_configured" }, 503);

  const payload = {
    source: "horra-prime-group-website",
    variant: body.variant,
    context: context ?? null,
    language: locale,
    page: typeof body.page === "string" ? body.page.slice(0, 200) : null,
    submittedAt: new Date().toISOString(),
    fields: fields
      .filter((f) => values[f.name])
      .map((f) => ({
        name: f.name,
        label: f.label,
        value: f.options?.find((o) => o.value === values[f.name])?.label ?? values[f.name],
      })),
  };

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
    if (!res.ok) {
      console.error(`[inquiry] webhook responded ${res.status}`);
      return json({ ok: false, reason: "delivery_failed" }, 502);
    }
    return json({ ok: true });
  } catch {
    console.error("[inquiry] webhook request failed");
    return json({ ok: false, reason: "delivery_failed" }, 502);
  }
}
