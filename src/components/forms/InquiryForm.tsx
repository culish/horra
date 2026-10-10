"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Info, LoaderCircle } from "lucide-react";
import {
  getFields,
  validateField,
  validateInquiry,
  type FieldDef,
  type InquiryErrors,
  type InquiryValues,
  type InquiryVariant,
} from "@/lib/inquiry";
import { buttonClass } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "sent" | "demo" | "error";

const submitLabels: Record<InquiryVariant, string> = {
  general: "Send inquiry",
  visa: "Request a consultation",
  "business-setup": "Request a consultation",
  trading: "Send product inquiry",
  travel: "Send travel request",
};

const inputBase =
  "w-full rounded-[3px] border bg-white px-3.5 text-[1rem] text-charcoal transition-colors placeholder:text-stone/70 focus:border-forest";

/**
 * Inquiry form with client-side validation (shared rules with /api/inquiry), an accessible
 * error summary, and honest submission states. If delivery isn't configured on the server,
 * the visitor is told plainly that nothing was sent.
 *
 * Select fields can be preselected from the URL, e.g. /visa-immigration?service=work-visa#inquiry
 */
export function InquiryForm({
  variant,
  context,
  id = "inquiry",
  title,
  intro,
  defaults,
  className,
}: {
  variant: InquiryVariant;
  /** Extra context, e.g. the trading category slug (used for product options) */
  context?: string;
  id?: string;
  title?: string;
  intro?: string;
  /** Preselected values for select fields, e.g. { service: "tourist-visa" } */
  defaults?: Record<string, string>;
  className?: string;
}) {
  const fields = useMemo(() => getFields(variant, context), [variant, context]);
  const uid = useId().replace(/:/g, "");
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [showSummary, setShowSummary] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [replyTo, setReplyTo] = useState("");

  // Preselect options passed in the URL (?service=…, ?topic=…). Writes to the DOM directly.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    for (const f of fields) {
      if (f.type !== "select") continue;
      const v = params.get(f.name);
      if (v && f.options?.some((o) => o.value === v)) {
        const el = form.elements.namedItem(f.name);
        if (el instanceof HTMLSelectElement) el.value = v;
      }
    }
  }, [fields]);

  const fieldId = (name: string) => `${uid}-${name}`;

  const readValues = (): InquiryValues => {
    const data = new FormData(formRef.current!);
    const values: InquiryValues = {};
    for (const f of fields) {
      const v = data.get(f.name);
      values[f.name] = typeof v === "string" ? v : "";
    }
    return values;
  };

  // Once a field has shown an error, re-check it as the visitor corrects it
  const onChange = (e: ChangeEvent<HTMLFormElement>) => {
    const target = e.target as unknown as HTMLInputElement;
    const field = fields.find((f) => f.name === target.name);
    if (!field || !errors[field.name]) return;
    const value = target.type === "checkbox" ? (target.checked ? "yes" : "") : target.value;
    const message = validateField(field, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[field.name] = message;
      else delete next[field.name];
      return next;
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    const values = readValues();
    const found = validateInquiry(fields, values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("idle");
      setShowSummary(true);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setShowSummary(false);
    setStatus("submitting");

    let next: Status = "error";
    try {
      const data = new FormData(formRef.current!);
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant,
          context,
          values,
          website: data.get("website") ?? "",
          page: window.location.pathname,
        }),
      });
      let body: { ok?: boolean; reason?: string; errors?: InquiryErrors } | null = null;
      try {
        body = await res.json();
      } catch {
        body = null;
      }
      if (res.ok && body?.ok) {
        next = "sent";
        setReplyTo(values.email ?? "");
        formRef.current?.reset();
      } else if (body?.reason === "validation" && body.errors) {
        setErrors(body.errors);
        setShowSummary(true);
        setStatus("idle");
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      } else if (body?.reason === "not_configured" || [404, 405, 501].includes(res.status)) {
        next = "demo";
      }
    } catch {
      next = "error";
    }
    setStatus(next);
    requestAnimationFrame(() => resultRef.current?.focus());
  };

  const errorList = fields.filter((f) => errors[f.name]);

  return (
    <div id={id} className={cn("rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10", className)}>
      {title && <h2 className="text-headline font-semibold text-balance text-navy">{title}</h2>}
      {intro && <p className="mt-4 max-w-[38rem] text-lead text-ink-soft">{intro}</p>}

      <form
        ref={formRef}
        noValidate
        onSubmit={onSubmit}
        onChange={onChange}
        data-inquiry-form={variant}
        aria-label={title ?? "Inquiry form"}
        className={cn(title || intro ? "mt-8" : "")}
      >
        {showSummary && errorList.length > 0 && (
          <div
            ref={summaryRef}
            tabIndex={-1}
            role="alert"
            className="mb-8 rounded-[4px] border border-[#B42318]/30 bg-[#FEF3F2] p-5 focus:outline-none focus-visible:outline-2"
          >
            <p className="flex items-center gap-2 font-semibold text-[#912018]">
              <AlertCircle aria-hidden className="size-5" />
              {errorList.length === 1 ? "Check 1 field" : `Check ${errorList.length} fields`}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-7 text-[0.9375rem] text-[#912018]">
              {errorList.map((f) => (
                <li key={f.name}>
                  <a href={`#${fieldId(f.name)}`} className="underline underline-offset-2">
                    {f.type === "checkbox" ? "Privacy consent" : f.label.replace(/\?$/, "")}
                  </a>
                  : {errors[f.name]}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
          {fields.map((f) => (
            <Field
              key={f.name}
              field={f}
              id={fieldId(f.name)}
              error={errors[f.name]}
              defaultValue={defaults?.[f.name]}
            />
          ))}
        </div>

        {/* Honeypot: hidden from people and assistive tech; bots tend to fill it in */}
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[26rem] text-sm leading-relaxed text-stone">
            We use your details only to respond to this inquiry. See our{" "}
            <Link href="/privacy-policy" className="text-forest underline underline-offset-2">
              privacy policy
            </Link>
            .
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className={buttonClass("primary", "shrink-0 disabled:cursor-wait disabled:opacity-70")}
          >
            {status === "submitting" && <LoaderCircle aria-hidden className="size-4 animate-spin" />}
            {status === "submitting" ? "Sending…" : submitLabels[variant]}
          </button>
        </div>

        <div ref={resultRef} tabIndex={-1} role="status" aria-live="polite" className="focus:outline-none">
          {status === "sent" && (
            <ResultPanel tone="success" title="Inquiry sent">
              Thank you. We will reply to {replyTo || "the email address you provided"}.
            </ResultPanel>
          )}
          {status === "demo" && (
            <ResultPanel tone="info" title="Demo mode: your inquiry was not sent">
              Your details passed validation, but inquiry delivery is not connected yet, so nothing was sent or stored.
              Site owner: connect the inquiry endpoint (INQUIRY_WEBHOOK_URL — see README) before launch.
            </ResultPanel>
          )}
          {status === "error" && (
            <ResultPanel tone="error" title="Your inquiry couldn’t be sent">
              Check your connection and try again. Your details are still in the form.
            </ResultPanel>
          )}
        </div>
      </form>
    </div>
  );
}

function ResultPanel({
  tone,
  title,
  children,
}: {
  tone: "success" | "info" | "error";
  title: string;
  children: React.ReactNode;
}) {
  const styles = {
    success: { box: "border-forest/30 bg-forest/[0.06]", text: "text-forest-deep", Icon: CheckCircle2 },
    info: { box: "border-gold/50 bg-sand", text: "text-navy", Icon: Info },
    error: { box: "border-[#B42318]/30 bg-[#FEF3F2]", text: "text-[#912018]", Icon: AlertCircle },
  }[tone];
  const { Icon } = styles;
  return (
    <div className={cn("mt-6 flex gap-3.5 rounded-[4px] border p-5", styles.box)}>
      <Icon aria-hidden className={cn("mt-0.5 size-5 shrink-0", styles.text)} />
      <div>
        <p className={cn("font-semibold", styles.text)}>{title}</p>
        <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{children}</p>
      </div>
    </div>
  );
}

function Field({
  field: f,
  id,
  error,
  defaultValue,
}: {
  field: FieldDef;
  id: string;
  error?: string;
  defaultValue?: string;
}) {
  const hintId = f.hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const span = f.half ? "sm:col-span-1" : "sm:col-span-2";
  const border = error ? "border-[#B42318]" : "border-navy/20 hover:border-navy/35";

  const label = (
    <>
      {f.label}
      {!f.required && <span className="font-normal text-stone"> (optional)</span>}
    </>
  );

  const hint = f.hint && (
    <p id={hintId} className="mt-1.5 text-sm text-stone">
      {f.hint}
    </p>
  );
  const errorMessage = error && (
    <p id={errorId} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-[#B42318]">
      <AlertCircle aria-hidden className="mt-px size-4 shrink-0" />
      {error}
    </p>
  );

  if (f.type === "checkbox") {
    return (
      <div className="sm:col-span-2">
        <div className="flex gap-3">
          <input
            id={id}
            name={f.name}
            type="checkbox"
            value="yes"
            required={f.required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className="mt-1 size-[18px] shrink-0 accent-forest"
          />
          <label htmlFor={id} className="text-[0.9375rem] leading-relaxed text-ink-soft">
            {f.label}
          </label>
        </div>
        {errorMessage}
      </div>
    );
  }

  if (f.type === "radio") {
    return (
      <fieldset className={span} aria-describedby={describedBy} aria-invalid={Boolean(error)} id={id} tabIndex={-1}>
        <legend className="text-[0.9375rem] font-semibold text-navy">{label}</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {f.options!.map((o) => (
            <label
              key={o.value}
              className={cn(
                "flex min-h-11 cursor-pointer items-center gap-2.5 rounded-[3px] border bg-white px-4 has-[:checked]:border-forest has-[:checked]:bg-forest/[0.05]",
                border,
              )}
            >
              <input
                type="radio"
                name={f.name}
                value={o.value}
                required={f.required}
                className="size-4 accent-forest"
              />
              <span className="text-[0.9375rem] text-charcoal">{o.label}</span>
            </label>
          ))}
        </div>
        {hint}
        {errorMessage}
      </fieldset>
    );
  }

  const common = {
    id,
    name: f.name,
    required: f.required,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy,
    autoComplete: f.autoComplete,
  };

  return (
    <div className={span}>
      <label htmlFor={id} className="block text-[0.9375rem] font-semibold text-navy">
        {label}
      </label>
      <div className="mt-2">
        {f.type === "textarea" ? (
          <textarea
            {...common}
            rows={f.rows ?? 4}
            maxLength={f.maxLength}
            className={cn(inputBase, border, "py-3 leading-relaxed")}
          />
        ) : f.type === "select" ? (
          <select
            {...common}
            defaultValue={defaultValue ?? ""}
            className={cn(inputBase, border, "select-chevron h-12 appearance-none pr-10")}
          >
            <option value="" disabled>
              Select an option
            </option>
            {f.options!.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...common}
            type={f.type}
            maxLength={f.maxLength}
            inputMode={f.type === "tel" ? "tel" : f.type === "email" ? "email" : undefined}
            className={cn(inputBase, border, "h-12")}
          />
        )}
      </div>
      {hint}
      {errorMessage}
    </div>
  );
}
