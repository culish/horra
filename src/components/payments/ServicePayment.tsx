"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Clock, CreditCard, LoaderCircle, Lock } from "lucide-react";
import { buttonClass } from "@/components/ui/primitives";
import { useI18n, fmt } from "@/i18n/client";
import { formatIdr } from "@/lib/format";
import { parseAmount, validateService, type ServiceId } from "@/lib/payments/orders";
import { cn } from "@/lib/cn";
import { loadSnap, type SnapConfig } from "./snap";

type Status = "idle" | "loading" | "open" | "success" | "pending" | "closed" | "error";

const input =
  "min-h-12 w-full rounded-[3px] border border-navy/20 bg-white px-3.5 text-[1rem] text-charcoal placeholder:text-stone/70 hover:border-navy/35 focus:border-forest aria-[invalid=true]:border-[#B42318]";

/**
 * "Pay online" form for services that are priced by quotation (business setup, trading, travel,
 * visa services without a fixed price). The customer enters the quoted amount and pays with Midtrans.
 */
export function ServicePayment({
  services,
  snap,
  id = "pay-online",
  title,
  intro,
  className,
}: {
  services: ServiceId[];
  snap: SnapConfig | null;
  id?: string;
  title?: string;
  intro?: string;
  className?: string;
}) {
  const { t, locale } = useI18n();
  const p = t.pay.service;
  const a = t.apply;
  const uid = useId().replace(/:/g, "");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [orderId, setOrderId] = useState("");
  const [amountPreview, setAmountPreview] = useState<number>();
  const busy = status === "loading" || status === "open";

  const message = (code: string) =>
    code === "amount"
      ? p.amountInvalid
      : code === "invalidEmail"
        ? a.invalidEmail
        : code === "invalidPhone"
          ? a.invalidPhone
          : a.required;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!snap || busy) return;
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const checked = validateService(data);
    const errs: Record<string, string> = {};
    if (!checked.ok) for (const [k, v] of Object.entries(checked.errors)) errs[k] = message(v);
    if (data.consent !== "yes") errs.consent = a.mustConfirm;
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`${uid}-${Object.keys(errs)[0]}`)?.focus();
      return;
    }

    setStatus("loading");
    try {
      const [res] = await Promise.all([
        fetch("/api/payments/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kind: "service", locale, page: window.location.pathname, ...data }),
        }),
        loadSnap(snap),
      ]);
      const body = (await res.json()) as { ok: boolean; token?: string; orderId?: string };
      if (!body.ok || !body.token || !window.snap) return setStatus("error");
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

  const fieldProps = (name: string) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${uid}-${name}-error` : undefined,
  });
  const err = (name: string) =>
    errors[name] && (
      <p id={`${uid}-${name}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-[#B42318]">
        <AlertCircle aria-hidden className="mt-px size-4 shrink-0" />
        {errors[name]}
      </p>
    );
  const label = (name: string, text: string, optional?: boolean) => (
    <label htmlFor={`${uid}-${name}`} className="block text-[0.9375rem] font-semibold text-navy">
      {text}
      {optional && <span className="font-normal text-stone"> {t.common.optional}</span>}
    </label>
  );

  const result =
    status === "success"
      ? { tone: "ok", title: t.pay.button.success.title, body: fmt(a.successText, { order: orderId }) }
      : status === "pending"
        ? { tone: "wait", title: a.pendingTitle, body: fmt(a.pendingText, { order: orderId }) }
        : status === "closed"
          ? { tone: "wait", title: a.closedTitle, body: a.closedText }
          : status === "error"
            ? { tone: "bad", title: a.errorTitle, body: a.errorText }
            : null;

  return (
    <div id={id} className={cn("rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10", className)}>
      <div className="flex items-start gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sand text-navy">
          <CreditCard aria-hidden className="size-5" strokeWidth={1.7} />
        </span>
        <div>
          <h2 className="text-title font-semibold text-navy">{title ?? p.title}</h2>
          <p className="mt-2 leading-relaxed text-ink-soft">{intro ?? p.intro}</p>
        </div>
      </div>

      {!snap ? (
        <p className="mt-8 rounded-[4px] bg-sand p-5 text-ink-soft">
          <span className="block font-semibold text-navy">{a.unavailableTitle}</span>
          {t.pay.invoice.notConfiguredText}
        </p>
      ) : (
        <form noValidate onSubmit={onSubmit} className="mt-8">
          {snap.sandbox && (
            <p className="mb-6 rounded-[3px] bg-gold/20 px-3 py-2 text-sm font-semibold text-gold-ink">{a.sandbox}</p>
          )}
          <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              {label("service", p.service)}
              <select
                {...fieldProps("service")}
                defaultValue={services.length === 1 ? services[0] : ""}
                className={cn(input, "select-chevron mt-2 h-12 appearance-none pr-10")}
              >
                <option value="" disabled>
                  {t.form.selectOption}
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {p.services[s]}
                  </option>
                ))}
              </select>
              {err("service")}
            </div>
            <div>
              {label("reference", p.reference, true)}
              <input {...fieldProps("reference")} maxLength={40} className={cn(input, "mt-2")} />
              <p className="mt-1.5 text-sm text-stone">{p.referenceHint}</p>
            </div>
            <div>
              {label("amount", p.amount)}
              <input
                {...fieldProps("amount")}
                inputMode="numeric"
                placeholder="2500000"
                onChange={(e) => {
                  const n = parseAmount(e.target.value);
                  setAmountPreview(Number.isSafeInteger(n) && n > 0 ? n : undefined);
                }}
                className={cn(input, "mt-2")}
              />
              <p className="mt-1.5 text-sm text-stone">
                {amountPreview ? formatIdr(amountPreview, locale) : p.amountHint}
              </p>
              {err("amount")}
            </div>
            <div>
              {label("fullName", p.fullName)}
              <input {...fieldProps("fullName")} autoComplete="name" maxLength={120} className={cn(input, "mt-2")} />
              {err("fullName")}
            </div>
            <div>
              {label("email", p.email)}
              <input
                {...fieldProps("email")}
                type="email"
                inputMode="email"
                autoComplete="email"
                className={cn(input, "mt-2")}
              />
              {err("email")}
            </div>
            <div>
              {label("phone", p.phone)}
              <input
                {...fieldProps("phone")}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={cn(input, "mt-2")}
              />
              {err("phone")}
            </div>
            <div className="sm:col-span-2">
              {label("notes", p.notes, true)}
              <textarea {...fieldProps("notes")} rows={2} maxLength={500} className={cn(input, "mt-2 py-3")} />
            </div>
            <div className="sm:col-span-2">
              <div className="flex gap-3">
                <input
                  {...fieldProps("consent")}
                  type="checkbox"
                  value="yes"
                  className="mt-1 size-[18px] shrink-0 accent-forest"
                />
                <label htmlFor={`${uid}-consent`} className="text-[0.9375rem] leading-relaxed text-ink-soft">
                  {p.consent}
                </label>
              </div>
              {err("consent")}
            </div>
          </div>

          <div aria-live="polite">
            {result && (
              <div
                className={cn(
                  "mt-6 flex gap-3 rounded-[4px] border p-5",
                  result.tone === "ok" && "border-forest/30 bg-forest/[0.06] text-forest-deep",
                  result.tone === "wait" && "border-gold/50 bg-sand text-ink-soft",
                  result.tone === "bad" && "border-[#B42318]/30 bg-[#FEF3F2] text-[#912018]",
                )}
              >
                {result.tone === "ok" ? (
                  <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0" />
                ) : result.tone === "wait" ? (
                  <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-ink" />
                ) : (
                  <AlertCircle aria-hidden className="mt-0.5 size-5 shrink-0" />
                )}
                <div>
                  <p className="font-semibold">{result.title}</p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed">{result.body}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[26rem] text-sm leading-relaxed text-stone">{p.notice}</p>
            {status !== "success" && (
              <button type="submit" disabled={busy} className={buttonClass("primary", "shrink-0 disabled:opacity-70")}>
                {busy ? (
                  <LoaderCircle aria-hidden className="size-4 animate-spin" />
                ) : (
                  <Lock aria-hidden className="size-4" />
                )}
                {status === "open" ? a.windowOpen : status === "loading" ? a.preparing : p.submit}
              </button>
            )}
          </div>
          <p className="mt-4 text-sm text-stone">{a.paymentMethods}</p>
        </form>
      )}
    </div>
  );
}
