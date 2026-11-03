import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Signed payment links.
 *
 * The site has no database and publishes no prices, so the amount for each invoice is set by
 * staff when they create a link (/pay/admin). The link carries the invoice details in its `t`
 * parameter, signed with PAYMENT_LINK_SECRET (HMAC-SHA256). The server re-verifies the signature
 * before showing the invoice and again before asking Midtrans for a payment, so a visitor cannot
 * change the amount. Server-only: never import this from a client component.
 */

export type PaymentLink = {
  /** Invoice number, e.g. INV-2026-0012 */
  invoice: string;
  /** Amount in whole rupiah */
  amount: number;
  /** What is being paid for, shown to the customer */
  description: string;
  customerName: string;
  customerEmail?: string;
  customerPhone?: string;
  /** Expiry, unix seconds */
  expiresAt: number;
};

export const LIMITS = {
  minAmount: 10_000,
  maxAmount: 1_000_000_000,
  maxDays: 30,
} as const;

const INVOICE_RE = /^[A-Za-z0-9][A-Za-z0-9._~-]{1,29}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const secret = () => process.env.PAYMENT_LINK_SECRET?.trim() || undefined;

export const linksConfigured = () => {
  const s = secret();
  return Boolean(s && s.length >= 32);
};

const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64url");
const unb64 = (s: string) => Buffer.from(s, "base64url").toString("utf8");
const sign = (data: string, key: string) => createHmac("sha256", key).update(data).digest("base64url");

export type LinkInput = {
  invoice?: unknown;
  amount?: unknown;
  description?: unknown;
  customerName?: unknown;
  customerEmail?: unknown;
  customerPhone?: unknown;
  validDays?: unknown;
};

/** Validates staff input. Returns field errors, or the normalised link. */
export function validateLinkInput(
  input: LinkInput,
  now = Date.now(),
): { ok: true; link: PaymentLink } | { ok: false; errors: Record<string, string> } {
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const errors: Record<string, string> = {};

  const invoice = str(input.invoice);
  if (!INVOICE_RE.test(invoice))
    errors.invoice = "Use 2–30 characters: letters, numbers, dot, dash, underscore or tilde.";

  const amountRaw = typeof input.amount === "number" ? String(input.amount) : str(input.amount).replace(/[.,\s]/g, "");
  const amount = /^\d+$/.test(amountRaw) ? Number(amountRaw) : NaN;
  if (!Number.isSafeInteger(amount) || amount < LIMITS.minAmount || amount > LIMITS.maxAmount)
    errors.amount = `Enter a whole rupiah amount between ${LIMITS.minAmount.toLocaleString("id-ID")} and ${LIMITS.maxAmount.toLocaleString("id-ID")}.`;

  const description = str(input.description);
  if (description.length < 3 || description.length > 200)
    errors.description = "Describe the payment in 3–200 characters.";

  const customerName = str(input.customerName);
  if (customerName.length < 2 || customerName.length > 100) errors.customerName = "Enter the customer's name.";

  const customerEmail = str(input.customerEmail) || undefined;
  if (customerEmail && (!EMAIL_RE.test(customerEmail) || customerEmail.length > 120))
    errors.customerEmail = "Enter a valid email address or leave it empty.";

  const customerPhone = str(input.customerPhone).replace(/[^\d+]/g, "") || undefined;
  if (customerPhone && (customerPhone.length < 8 || customerPhone.length > 16))
    errors.customerPhone = "Enter a valid phone number or leave it empty.";

  const daysRaw = typeof input.validDays === "number" ? input.validDays : Number(str(input.validDays) || 7);
  if (!Number.isInteger(daysRaw) || daysRaw < 1 || daysRaw > LIMITS.maxDays)
    errors.validDays = `Choose between 1 and ${LIMITS.maxDays} days.`;

  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    link: {
      invoice,
      amount,
      description,
      customerName,
      customerEmail,
      customerPhone,
      expiresAt: Math.floor(now / 1000) + daysRaw * 86_400,
    },
  };
}

/** Creates the `t` token for /pay?t=… */
export function createLinkToken(link: PaymentLink): string {
  const key = secret();
  if (!key || !linksConfigured()) throw new Error("PAYMENT_LINK_SECRET is not configured");
  const data = b64(JSON.stringify(link));
  return `${data}.${sign(data, key)}`;
}

export type VerifyResult =
  | { ok: true; link: PaymentLink; linkId: string }
  | { ok: false; reason: "not_configured" | "invalid" | "expired"; link?: PaymentLink };

/** Verifies the signature and expiry of a token. */
export function verifyLinkToken(token: unknown, now = Date.now()): VerifyResult {
  const key = secret();
  if (!key || !linksConfigured()) return { ok: false, reason: "not_configured" };
  if (typeof token !== "string" || token.length > 2000) return { ok: false, reason: "invalid" };

  const [data, sig, extra] = token.split(".");
  if (!data || !sig || extra !== undefined) return { ok: false, reason: "invalid" };

  const expected = Buffer.from(sign(data, key));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return { ok: false, reason: "invalid" };

  let link: PaymentLink;
  try {
    link = JSON.parse(unb64(data)) as PaymentLink;
  } catch {
    return { ok: false, reason: "invalid" };
  }
  if (typeof link?.invoice !== "string" || !Number.isSafeInteger(link.amount) || typeof link.expiresAt !== "number")
    return { ok: false, reason: "invalid" };
  if (link.expiresAt * 1000 < now) return { ok: false, reason: "expired", link };

  // Short, stable id for this exact link — becomes part of the Midtrans order id.
  const linkId = createHmac("sha256", key).update(`id:${data}`).digest("hex").slice(0, 8);
  return { ok: true, link, linkId };
}

/** Constant-time check of the staff key used to create links. */
export function isAdminKey(given: unknown): boolean {
  const key = process.env.PAYMENT_ADMIN_KEY?.trim();
  if (!key || key.length < 12 || typeof given !== "string") return false;
  const a = createHmac("sha256", "admin").update(key).digest();
  const b = createHmac("sha256", "admin").update(given.trim()).digest();
  return timingSafeEqual(a, b);
}

export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
