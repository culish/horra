import { isCountryCode } from "@/content/countries";
import { getVisa, quote, type VisaProduct, type VisaTier } from "@/content/visa-catalog";

/**
 * Online orders that are paid straight away with Midtrans (no staff-made link needed):
 *  - visa applications: the price comes from the catalogue, never from the browser
 *  - service payments: the customer pays the amount on a quotation they received
 *
 * Shared by the client form and /api/payments/order so both validate the same way.
 */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^[+\d\s().-]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export type ApplicantInput = {
  fullName?: unknown;
  nationality?: unknown;
  passportNumber?: unknown;
  passportExpiry?: unknown;
  birthDate?: unknown;
  gender?: unknown;
  email?: unknown;
  phone?: unknown;
  arrival?: unknown;
  location?: unknown;
  notes?: unknown;
};

export type Applicant = {
  fullName: string;
  nationality: string;
  passportNumber: string;
  passportExpiry: string;
  birthDate: string;
  gender: "male" | "female";
  email: string;
  phone: string;
  arrival: string;
  location: "outside" | "inside";
  notes?: string;
};

export type ErrorCode =
  | "required"
  | "invalidEmail"
  | "invalidPhone"
  | "invalidPassport"
  | "invalidDate"
  | "passportTooSoon"
  | "arrivalPast";

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const day = (s: string) => (DATE_RE.test(s) ? new Date(`${s}T00:00:00Z`) : null);
const validDay = (s: string) => {
  const d = day(s);
  return d && !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s ? d : null;
};

export const isValidPhone = (v: string) => {
  const digits = v.replace(/\D/g, "");
  return PHONE_RE.test(v) && digits.length >= 6 && digits.length <= 18;
};

/** Validates the applicant. `today` is a YYYY-MM-DD string (Jakarta time on the server). */
export function validateApplicant(
  input: ApplicantInput,
  today: string,
): { ok: true; applicant: Applicant } | { ok: false; errors: Record<string, ErrorCode> } {
  const e: Record<string, ErrorCode> = {};
  const fullName = str(input.fullName);
  if (fullName.length < 2 || fullName.length > 120) e.fullName = "required";
  const nationality = str(input.nationality).toUpperCase();
  if (!isCountryCode(nationality)) e.nationality = "required";

  const passportNumber = str(input.passportNumber).toUpperCase().replace(/\s/g, "");
  if (!passportNumber) e.passportNumber = "required";
  else if (!/^[A-Z0-9]{5,20}$/.test(passportNumber)) e.passportNumber = "invalidPassport";

  const birthDate = str(input.birthDate);
  const birth = validDay(birthDate);
  if (!birthDate) e.birthDate = "required";
  else if (!birth || birthDate >= today || birthDate < "1900-01-01") e.birthDate = "invalidDate";

  const gender = str(input.gender);
  if (gender !== "male" && gender !== "female") e.gender = "required";

  const email = str(input.email);
  if (!email) e.email = "required";
  else if (!EMAIL_RE.test(email) || email.length > 200) e.email = "invalidEmail";

  const phone = str(input.phone);
  if (!phone) e.phone = "required";
  else if (!isValidPhone(phone)) e.phone = "invalidPhone";

  const arrival = str(input.arrival);
  const arrivalDay = validDay(arrival);
  if (!arrival) e.arrival = "required";
  else if (!arrivalDay) e.arrival = "invalidDate";
  else if (arrival < today) e.arrival = "arrivalPast";

  const passportExpiry = str(input.passportExpiry);
  const expiry = validDay(passportExpiry);
  if (!passportExpiry) e.passportExpiry = "required";
  else if (!expiry) e.passportExpiry = "invalidDate";
  else {
    // At least six months of validity after arrival (or after today when no arrival date yet).
    const from = arrivalDay ?? validDay(today)!;
    const min = new Date(from);
    min.setUTCMonth(min.getUTCMonth() + 6);
    if (expiry < min) e.passportExpiry = "passportTooSoon";
  }

  const location = str(input.location);
  if (location !== "outside" && location !== "inside") e.location = "required";

  const notes = str(input.notes).slice(0, 1000) || undefined;

  if (Object.keys(e).length) return { ok: false, errors: e };
  return {
    ok: true,
    applicant: {
      fullName,
      nationality,
      passportNumber,
      passportExpiry,
      birthDate,
      gender: gender as Applicant["gender"],
      email,
      phone,
      arrival,
      location: location as Applicant["location"],
      notes,
    },
  };
}

export const isTier = (v: unknown): v is VisaTier => v === "standard" || v === "express";

export function resolveVisa(visaId: unknown, tier: unknown): { visa: VisaProduct; tier: VisaTier } | null {
  const visa = getVisa(visaId);
  if (!visa) return null;
  const t: VisaTier = isTier(tier) && (tier === "standard" || visa.express) ? tier : "standard";
  return { visa, tier: t };
}

export const visaQuote = quote;

/* ------------------------------------------------------------------ Service payments */

/** Must match the keys of pay.service.services in the dictionaries. */
export const serviceIds = [
  "visa-other",
  "investor-kitas",
  "work-visa",
  "pt-pma",
  "local-pt",
  "nib-oss",
  "virtual-office",
  "trade-deposit",
  "trade-invoice",
  "ticket-hotel",
  "tour-package",
  "airport-transfer",
  "travel-guide",
  "other",
] as const;
export type ServiceId = (typeof serviceIds)[number];
export const isServiceId = (v: unknown): v is ServiceId =>
  typeof v === "string" && (serviceIds as readonly string[]).includes(v);

export const SERVICE_LIMITS = { min: 10_000, max: 1_000_000_000 } as const;

export type ServiceInput = {
  service?: unknown;
  reference?: unknown;
  amount?: unknown;
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  notes?: unknown;
};

export type ServiceOrder = {
  service: ServiceId;
  reference?: string;
  amount: number;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
};

export const parseAmount = (v: unknown) => {
  const raw = typeof v === "number" ? String(v) : str(v).replace(/[.,\s]/g, "").replace(/^rp/i, "");
  return /^\d+$/.test(raw) ? Number(raw) : NaN;
};

export function validateService(
  input: ServiceInput,
): { ok: true; order: ServiceOrder } | { ok: false; errors: Record<string, ErrorCode | "amount"> } {
  const e: Record<string, ErrorCode | "amount"> = {};
  const service = str(input.service);
  if (!isServiceId(service)) e.service = "required";
  const reference = str(input.reference).slice(0, 40) || undefined;
  const amount = parseAmount(input.amount);
  if (!Number.isSafeInteger(amount) || amount < SERVICE_LIMITS.min || amount > SERVICE_LIMITS.max) e.amount = "amount";
  const fullName = str(input.fullName);
  if (fullName.length < 2 || fullName.length > 120) e.fullName = "required";
  const email = str(input.email);
  if (!email) e.email = "required";
  else if (!EMAIL_RE.test(email)) e.email = "invalidEmail";
  const phone = str(input.phone);
  if (!phone) e.phone = "required";
  else if (!isValidPhone(phone)) e.phone = "invalidPhone";
  const notes = str(input.notes).slice(0, 500) || undefined;
  if (Object.keys(e).length) return { ok: false, errors: e };
  return { ok: true, order: { service: service as ServiceId, reference, amount, fullName, email, phone, notes } };
}

/** Today's date in Jakarta, YYYY-MM-DD. */
export const jakartaToday = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jakarta", year: "numeric", month: "2-digit", day: "2-digit" }).format(
    new Date(),
  );
