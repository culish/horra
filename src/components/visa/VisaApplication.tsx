"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, BadgePercent, Check, CheckCircle2, Clock, FileText, LoaderCircle, Lock } from "lucide-react";
import Link from "@/components/ui/Link";
import { buttonClass } from "@/components/ui/primitives";
import { useI18n, fmt } from "@/i18n/client";
import { htmlLang } from "@/i18n/config";
import { countryCodes } from "@/content/countries";
import { BANGLADESH, getVisa, quote, visaCatalog, visaCategories, type VisaTier } from "@/content/visa-catalog";
import { jakartaToday, validateApplicant, type Applicant, type ErrorCode } from "@/lib/payments/orders";
import { formatIdr } from "@/lib/format";
import { cn } from "@/lib/cn";
import { loadSnap, type SnapConfig } from "@/components/payments/snap";

type Status = "idle" | "loading" | "open" | "success" | "pending" | "closed" | "error";
type Values = Record<keyof Applicant, string>;

const empty: Values = {
  fullName: "",
  nationality: "",
  passportNumber: "",
  passportExpiry: "",
  birthDate: "",
  gender: "",
  email: "",
  phone: "",
  arrival: "",
  location: "",
  notes: "",
};

const input =
  "min-h-12 w-full rounded-[3px] border border-navy/20 bg-white px-3.5 text-[1rem] text-charcoal placeholder:text-stone/70 hover:border-navy/35 focus:border-forest aria-[invalid=true]:border-[#B42318]";

const docKeys = ["passport", "photo", "ticket", "bank", "address", "sponsor", "kitas"] as const;

/**
 * Online visa application in four steps: visa → applicant → documents → review & pay (Midtrans).
 * The price shown here is for display; the server recalculates it from the catalogue.
 */
export function VisaApplication({ snap }: { snap: SnapConfig | null }) {
  const { t, locale } = useI18n();
  const a = t.apply;
  const names = a.visas;
  const [step, setStep] = useState(0);
  const searchParams = useSearchParams();
  // Preselect the visa from ?visa=… (links from the catalogue).
  const [visaId, setVisaId] = useState(() => {
    const id = searchParams.get("visa");
    return id && getVisa(id) ? id : "c1";
  });
  const [tier, setTier] = useState<VisaTier>("standard");
  const [values, setValues] = useState<Values>(empty);
  const [confirm, setConfirm] = useState({ accurate: false, terms: false, privacy: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [orderId, setOrderId] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  const visa = getVisa(visaId)!;
  const effectiveTier: VisaTier = visa.express ? tier : "standard";
  const price = quote(visa, effectiveTier, values.nationality);
  const isBd = values.nationality === BANGLADESH;

  const countries = useMemo(() => {
    let dn: Intl.DisplayNames | undefined;
    try {
      dn = new Intl.DisplayNames([htmlLang[locale], "en"], { type: "region" });
    } catch {
      dn = undefined;
    }
    return countryCodes
      .map((code) => ({ code, name: dn?.of(code) ?? code }))
      .sort((x, y) => x.name.localeCompare(y.name, htmlLang[locale]));
  }, [locale]);
  const countryName = (code: string) => countries.find((c) => c.code === code)?.name ?? code;

  const errorText: Record<ErrorCode, string> = {
    required: a.required,
    invalidEmail: a.invalidEmail,
    invalidPhone: a.invalidPhone,
    invalidPassport: a.invalidPassport,
    invalidDate: a.invalidDate,
    passportTooSoon: a.passportTooSoon,
    arrivalPast: a.arrivalPast,
  };

  const goTo = (n: number) => {
    setStep(n);
    setErrors({});
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const set = (k: keyof Values) => (v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  function checkApplicant() {
    const r = validateApplicant(values, jakartaToday());
    if (r.ok) return true;
    const e: Record<string, string> = {};
    for (const [k, code] of Object.entries(r.errors)) e[k] = errorText[code];
    setErrors(e);
    requestAnimationFrame(() => document.getElementById(`apply-${Object.keys(e)[0]}`)?.focus());
    return false;
  }

  function checkConfirm() {
    const e: Record<string, string> = {};
    if (!confirm.accurate) e.accurate = a.mustConfirm;
    if (!confirm.terms) e.terms = a.mustConfirm;
    if (!confirm.privacy) e.privacy = a.mustConfirm;
    setErrors(e);
    return !Object.keys(e).length;
  }

  async function pay() {
    if (!snap || status === "loading" || status === "open") return;
    if (!checkApplicant()) return goTo(1);
    setStatus("loading");
    try {
      const [res] = await Promise.all([
        fetch("/api/payments/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kind: "visa", locale, visa: visa.id, tier: effectiveTier, applicant: values }),
        }),
        loadSnap(snap),
      ]);
      const body = (await res.json()) as { ok: boolean; token?: string; orderId?: string; reason?: string };
      if (!body.ok || !body.token || !window.snap) {
        setStatus("error");
        if (body.reason === "validation") goTo(1);
        return;
      }
      setOrderId(body.orderId ?? "");
      setStatus("open");
      window.snap.pay(body.token, {
        onSuccess: () => setStatus("success"),
        onPending: () => setStatus("pending"),
        onError: () => setStatus("error"),
        onClose: () => setStatus((s) => (s === "open" ? "closed" : s)),
      });
    } catch {
      setStatus("error");
    }
  }

  const busy = status === "loading" || status === "open";
  const done = status === "success";

  /* ------------------------------------------------------------------ field helpers */

  const field = (k: keyof Values, label: string, control: ReactNode, opts: { hint?: string; full?: boolean } = {}) => (
    <div className={opts.full ? "sm:col-span-2" : undefined}>
      <label htmlFor={`apply-${k}`} className="block text-[0.9375rem] font-semibold text-navy">
        {label}
        {k === "notes" && <span className="font-normal text-stone"> {t.common.optional}</span>}
      </label>
      <div className="mt-2">{control}</div>
      {opts.hint && !errors[k] && <p className="mt-1.5 text-sm text-stone">{opts.hint}</p>}
      {errors[k] && (
        <p id={`apply-${k}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-[#B42318]">
          <AlertCircle aria-hidden className="mt-px size-4 shrink-0" />
          {errors[k]}
        </p>
      )}
    </div>
  );
  const common = (k: keyof Values) => ({
    id: `apply-${k}`,
    name: k,
    value: values[k],
    "aria-invalid": Boolean(errors[k]),
    "aria-describedby": errors[k] ? `apply-${k}-error` : undefined,
  });
  const text = (k: keyof Values, type = "text", extra: Record<string, unknown> = {}) => (
    <input {...common(k)} type={type} onChange={(e) => set(k)(e.target.value)} className={input} {...extra} />
  );

  /* ------------------------------------------------------------------ render */

  return (
    <div ref={topRef} className="grid scroll-mt-28 gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-8">
        {/* Stepper */}
        <ol className="grid grid-cols-4 gap-2" aria-label={fmt(a.stepOf, { n: step + 1, total: 4 })}>
          {a.stepLabels.map((label, i) => (
            <li key={label}>
              <button
                type="button"
                disabled={i > step || busy || done}
                onClick={() => goTo(i)}
                aria-current={i === step ? "step" : undefined}
                className="group flex w-full flex-col items-start gap-2 text-left disabled:cursor-default"
              >
                <span
                  className={cn(
                    "h-1.5 w-full rounded-full",
                    i < step ? "bg-forest" : i === step ? "bg-navy" : "bg-navy/12",
                  )}
                />
                <span
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-semibold",
                    i === step ? "text-navy" : i < step ? "text-forest" : "text-stone",
                  )}
                >
                  {i < step ? <Check aria-hidden className="size-4" /> : <span className="tabular-nums">{i + 1}.</span>}
                  <span className="hidden sm:inline">{label}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-[8px] border border-navy/10 bg-white p-6 sm:p-9">
          <p className="text-sm font-semibold text-stone">{fmt(a.stepOf, { n: step + 1, total: 4 })}</p>

          {/* Step 1 — visa */}
          {step === 0 && (
            <div>
              <h2 className="mt-2 text-title font-semibold text-navy">{a.chooseVisa}</h2>
              <p className="mt-2 text-ink-soft">{a.chooseVisaHint}</p>
              <label htmlFor="apply-visa" className="sr-only">
                {a.chooseVisa}
              </label>
              <select
                id="apply-visa"
                value={visaId}
                onChange={(e) => setVisaId(e.target.value)}
                className={cn(input, "select-chevron mt-6 h-12 appearance-none pr-10 font-medium")}
              >
                {visaCategories.map((cat) => (
                  <optgroup key={cat} label={`${cat} · ${a.catalog[cat]}`}>
                    {visaCatalog
                      .filter((p) => p.category === cat)
                      .map((p) => (
                        <option key={p.id} value={p.id}>
                          {names[p.id as keyof typeof names].name}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
              <div className="mt-5 rounded-[6px] bg-sand p-5">
                <p className="flex items-center gap-2">
                  <span className="rounded-[4px] bg-navy px-2 py-0.5 text-xs font-bold text-ivory">{visa.code}</span>
                  <span className="font-semibold text-navy">{names[visa.id as keyof typeof names].name}</span>
                </p>
                <p className="mt-2 text-[0.9375rem] text-ink-soft">{names[visa.id as keyof typeof names].short}</p>
                <p className="mt-2 text-sm text-stone">
                  {`${a.catalog.stay}: ${names[visa.id as keyof typeof names].stay} · ${a.catalog.extension}: ${names[visa.id as keyof typeof names].extension}`}
                </p>
              </div>

              <fieldset className="mt-7">
                <legend className="text-[0.9375rem] font-semibold text-navy">{a.processing}</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {(["standard", "express"] as VisaTier[])
                    .filter((k) => k === "standard" || visa.express)
                    .map((k) => (
                      <label
                        key={k}
                        className="flex cursor-pointer items-start gap-3 rounded-[6px] border border-navy/20 bg-white p-4 has-[:checked]:border-forest has-[:checked]:bg-forest/[0.05]"
                      >
                        <input
                          type="radio"
                          name="tier"
                          value={k}
                          checked={effectiveTier === k}
                          onChange={() => setTier(k)}
                          className="mt-1 size-4 accent-forest"
                        />
                        <span>
                          <span className="block font-semibold text-navy">
                            {k === "standard" ? a.standard : a.express}
                          </span>
                          <span className="block text-sm text-stone">
                            {k === "standard" ? a.standardHint : a.expressHint}
                          </span>
                          <span className="mt-1 block font-bold text-navy tabular-nums">
                            {formatIdr(k === "express" ? visa.express! : visa.standard, locale)}
                          </span>
                        </span>
                      </label>
                    ))}
                </div>
              </fieldset>

              <p className="mt-6 flex items-start gap-2 text-sm text-gold-ink">
                <BadgePercent aria-hidden className="mt-0.5 size-4 shrink-0" />
                {a.bdNotice}
              </p>
            </div>
          )}

          {/* Step 2 — applicant */}
          {step === 1 && (
            <div>
              <h2 className="mt-2 text-title font-semibold text-navy">{a.applicantTitle}</h2>
              <p className="mt-2 text-ink-soft">{a.applicantHint}</p>
              <div className="mt-7 grid gap-x-6 gap-y-6 sm:grid-cols-2">
                {field("fullName", a.fields.fullName, text("fullName", "text", { autoComplete: "name", maxLength: 120 }), {
                  full: true,
                })}
                {field(
                  "nationality",
                  a.fields.nationality,
                  <select
                    {...common("nationality")}
                    onChange={(e) => set("nationality")(e.target.value)}
                    className={cn(input, "select-chevron h-12 appearance-none pr-10")}
                  >
                    <option value="">{a.selectCountry}</option>
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>,
                )}
                {field(
                  "gender",
                  a.fields.gender,
                  <select
                    {...common("gender")}
                    onChange={(e) => set("gender")(e.target.value)}
                    className={cn(input, "select-chevron h-12 appearance-none pr-10")}
                  >
                    <option value="">{t.form.selectOption}</option>
                    <option value="male">{a.genders.male}</option>
                    <option value="female">{a.genders.female}</option>
                  </select>,
                )}
                {field(
                  "passportNumber",
                  a.fields.passportNumber,
                  text("passportNumber", "text", { autoCapitalize: "characters", maxLength: 20 }),
                )}
                {field("passportExpiry", a.fields.passportExpiry, text("passportExpiry", "date"))}
                {field("birthDate", a.fields.birthDate, text("birthDate", "date", { autoComplete: "bday" }))}
                {field("arrival", a.fields.arrival, text("arrival", "date"))}
                {field("email", a.fields.email, text("email", "email", { autoComplete: "email", inputMode: "email" }))}
                {field("phone", a.fields.phone, text("phone", "tel", { autoComplete: "tel", inputMode: "tel" }), {
                  hint: a.fields.phoneHint,
                })}
                {field(
                  "location",
                  a.fields.location,
                  <select
                    {...common("location")}
                    onChange={(e) => set("location")(e.target.value)}
                    className={cn(input, "select-chevron h-12 appearance-none pr-10")}
                  >
                    <option value="">{t.form.selectOption}</option>
                    <option value="outside">{a.locations.outside}</option>
                    <option value="inside">{a.locations.inside}</option>
                  </select>,
                )}
                {field(
                  "notes",
                  a.fields.notes,
                  <textarea
                    {...common("notes")}
                    rows={3}
                    maxLength={1000}
                    onChange={(e) => set("notes")(e.target.value)}
                    className={cn(input, "py-3")}
                  />,
                  { full: true },
                )}
              </div>
              {isBd && (
                <p className="mt-6 flex items-center gap-2 rounded-[6px] bg-gold/15 px-4 py-3 text-[0.9375rem] font-semibold text-gold-ink">
                  <BadgePercent aria-hidden className="size-5 shrink-0" />
                  {a.bdApplied}
                </p>
              )}
            </div>
          )}

          {/* Step 3 — documents */}
          {step === 2 && (
            <div>
              <h2 className="mt-2 text-title font-semibold text-navy">{a.documentsTitle}</h2>
              <p className="mt-2 text-ink-soft">{a.documentsHint}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {docKeys.map((k) => (
                  <li key={k} className="flex gap-3 rounded-[6px] border border-navy/10 p-4">
                    <FileText aria-hidden strokeWidth={1.6} className="mt-0.5 size-5 shrink-0 text-forest" />
                    <span className="text-[0.9375rem] font-medium text-navy">{a.documents[k]}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-4">
                {(
                  [
                    ["accurate", a.confirmAccurate],
                    ["terms", a.confirmTerms],
                    ["privacy", a.confirmPrivacy],
                  ] as const
                ).map(([k, label]) => (
                  <div key={k}>
                    <div className="flex gap-3">
                      <input
                        id={`apply-${k}`}
                        type="checkbox"
                        checked={confirm[k]}
                        onChange={(e) => {
                          setConfirm((c) => ({ ...c, [k]: e.target.checked }));
                          if (errors[k]) setErrors((p) => ({ ...p, [k]: "" }));
                        }}
                        aria-invalid={Boolean(errors[k])}
                        className="mt-1 size-[18px] shrink-0 accent-forest"
                      />
                      <label htmlFor={`apply-${k}`} className="text-[0.9375rem] leading-relaxed text-ink-soft">
                        {label}
                        {k === "privacy" && (
                          <>
                            {" "}
                            <Link href="/privacy-policy" className="text-forest underline underline-offset-2">
                              {t.form.privacyLink}
                            </Link>
                          </>
                        )}
                      </label>
                    </div>
                    {errors[k] && <p className="mt-1 ml-8 text-sm font-medium text-[#B42318]">{errors[k]}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 — review & pay */}
          {step === 3 && (
            <div>
              <h2 className="mt-2 text-title font-semibold text-navy">{a.reviewTitle}</h2>
              <dl className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
                {(
                  [
                    [t.apply.stepLabels[0], `${names[visa.id as keyof typeof names].name} · ${effectiveTier === "express" ? a.express : a.standard}`, 0],
                    [a.fields.fullName, values.fullName, 1],
                    [a.fields.nationality, countryName(values.nationality), 1],
                    [a.fields.passportNumber, values.passportNumber.toUpperCase(), 1],
                    [a.fields.passportExpiry, values.passportExpiry, 1],
                    [a.fields.arrival, values.arrival, 1],
                    [a.fields.email, values.email, 1],
                    [a.fields.phone, values.phone, 1],
                  ] as const
                ).map(([k, v, s]) => (
                  <div key={k} className="grid gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm text-stone">{k}</dt>
                    <dd className="flex items-start justify-between gap-3 font-medium break-words text-charcoal sm:col-span-2">
                      <span>{v}</span>
                      <button
                        type="button"
                        onClick={() => goTo(s)}
                        disabled={busy || done}
                        className="shrink-0 text-sm font-semibold text-forest underline-offset-4 hover:underline"
                      >
                        {a.edit}
                      </button>
                    </dd>
                  </div>
                ))}
              </dl>

              {snap?.sandbox && (
                <p className="mt-6 rounded-[3px] bg-gold/20 px-3 py-2 text-sm font-semibold text-gold-ink">
                  {a.sandbox}
                </p>
              )}

              <div aria-live="polite">
                {result()}
              </div>

              {!snap ? (
                <div className="mt-6 rounded-[6px] bg-sand p-5">
                  <p className="font-semibold text-navy">{a.unavailableTitle}</p>
                  <p className="mt-1 text-ink-soft">{a.unavailableText}</p>
                  <Link href="/visa-immigration#inquiry" className={buttonClass("outline", "mt-4")}>
                    {t.common.requestConsultation}
                  </Link>
                </div>
              ) : (
                !done && (
                  <button
                    type="button"
                    onClick={pay}
                    disabled={busy}
                    className={buttonClass("primary", "mt-6 w-full disabled:opacity-70")}
                  >
                    {busy ? (
                      <LoaderCircle aria-hidden className="size-5 animate-spin" />
                    ) : (
                      <Lock aria-hidden className="size-4" />
                    )}
                    {status === "open"
                      ? a.windowOpen
                      : status === "loading"
                        ? a.preparing
                        : fmt(a.payNow, { amount: formatIdr(price.total, locale) })}
                  </button>
                )
              )}
              <p className="mt-4 text-center text-sm text-stone">{a.paymentMethods}</p>
            </div>
          )}

          {/* Navigation */}
          {step < 3 && (
            <div className="mt-9 flex items-center justify-between gap-4 border-t border-navy/10 pt-7">
              {step > 0 ? (
                <button type="button" onClick={() => goTo(step - 1)} className={buttonClass("outline")}>
                  {a.back}
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={() => {
                  if (step === 1 && !checkApplicant()) return;
                  if (step === 2 && !checkConfirm()) return;
                  goTo(step + 1);
                }}
                className={buttonClass("primary")}
              >
                {a.next}
              </button>
            </div>
          )}
          {step === 3 && !done && (
            <div className="mt-6">
              <button
                type="button"
                onClick={() => goTo(2)}
                disabled={busy}
                className="text-sm font-semibold text-forest underline-offset-4 hover:underline"
              >
                {a.back}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order summary */}
      <aside className="lg:col-span-4" aria-label={a.summary}>
        <div className="rounded-[8px] bg-navy p-6 text-ivory sm:p-7 lg:sticky lg:top-28" data-surface="dark">
          <p className="text-sm font-semibold text-mist">{a.summary}</p>
          <p className="mt-3 flex items-center gap-2">
            <span className="rounded-[4px] bg-gold px-2 py-0.5 text-xs font-bold text-navy-deep">{visa.code}</span>
            <span className="font-semibold">{names[visa.id as keyof typeof names].name}</span>
          </p>
          <p className="mt-1 text-sm text-mist">
            {effectiveTier === "express" ? a.express : a.standard}
          </p>
          {values.fullName && (
            <p className="mt-4 text-sm text-mist">
              {a.applicant}: <span className="text-ivory">{values.fullName}</span>
              {values.nationality && ` · ${countryName(values.nationality)}`}
            </p>
          )}
          <dl className="mt-6 space-y-2.5 border-t border-ivory/15 pt-5 text-[0.9375rem]">
            <div className="flex justify-between gap-4">
              <dt className="text-mist">{a.price}</dt>
              <dd className="tabular-nums">{formatIdr(price.base, locale)}</dd>
            </div>
            {price.discount > 0 && (
              <div className="flex justify-between gap-4 text-gold">
                <dt>{a.bdDiscount}</dt>
                <dd className="tabular-nums">−{formatIdr(price.discount, locale)}</dd>
              </div>
            )}
            <div className="flex items-baseline justify-between gap-4 border-t border-ivory/15 pt-3">
              <dt className="font-semibold">{a.total}</dt>
              <dd className="text-title font-bold tabular-nums">{formatIdr(price.total, locale)}</dd>
            </div>
          </dl>
          {!isBd && <p className="mt-5 text-sm leading-relaxed text-mist">{a.bdNotice}</p>}
        </div>
      </aside>
    </div>
  );

  function result() {
    const r =
      status === "success"
        ? { tone: "ok", title: a.successTitle, body: fmt(a.successText, { order: orderId }) }
        : status === "pending"
          ? { tone: "wait", title: a.pendingTitle, body: fmt(a.pendingText, { order: orderId }) }
          : status === "closed"
            ? { tone: "wait", title: a.closedTitle, body: a.closedText }
            : status === "error"
              ? { tone: "bad", title: a.errorTitle, body: a.errorText }
              : null;
    if (!r) return null;
    return (
      <div
        className={cn(
          "mt-6 flex gap-3 rounded-[4px] border p-5",
          r.tone === "ok" && "border-forest/30 bg-forest/[0.06] text-forest-deep",
          r.tone === "wait" && "border-gold/50 bg-sand text-ink-soft",
          r.tone === "bad" && "border-[#B42318]/30 bg-[#FEF3F2] text-[#912018]",
        )}
      >
        {r.tone === "ok" ? (
          <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0" />
        ) : r.tone === "wait" ? (
          <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-ink" />
        ) : (
          <AlertCircle aria-hidden className="mt-0.5 size-5 shrink-0" />
        )}
        <div>
          <p className="font-semibold">{r.title}</p>
          <p className="mt-1 text-[0.9375rem] leading-relaxed">{r.body}</p>
        </div>
      </div>
    );
  }
}
