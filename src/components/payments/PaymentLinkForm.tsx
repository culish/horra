"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, Check, Copy, LoaderCircle } from "lucide-react";
import { buttonClass } from "@/components/ui/primitives";

type Errors = Record<string, string>;

const input =
  "min-h-12 w-full rounded-[3px] border border-navy/20 bg-white px-3.5 text-[1rem] text-charcoal placeholder:text-stone/70 focus:border-forest aria-[invalid=true]:border-[#B42318]";

const fields: {
  name: string;
  label: string;
  hint?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}[] = [
  { name: "invoice", label: "Invoice number", required: true, placeholder: "INV-2026-0012" },
  { name: "amount", label: "Amount (IDR)", required: true, placeholder: "3500000", hint: "Whole rupiah, no decimals." },
  { name: "description", label: "Description", required: true, placeholder: "Investor KITAS processing" },
  { name: "customerName", label: "Customer name", required: true },
  {
    name: "customerEmail",
    label: "Customer email",
    type: "email",
    hint: "Midtrans sends the receipt here.",
  },
  { name: "customerPhone", label: "Customer phone", type: "tel" },
  { name: "validDays", label: "Link valid for (days)", type: "number", placeholder: "7" },
];

/** Staff tool: creates a signed payment link for an invoice. */
export function PaymentLinkForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [problem, setProblem] = useState<string>();
  const [result, setResult] = useState<{ url: string; expiresAt: string }>();
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = Object.fromEntries([...form.entries()].map(([k, v]) => [k, String(v)]));
    const { adminKey, ...body } = values;
    setBusy(true);
    setProblem(undefined);
    setErrors({});
    setResult(undefined);
    setCopied(false);
    try {
      const res = await fetch("/api/payments/links", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminKey}` },
        body: JSON.stringify(body),
      });
      const data = (await res.json()) as {
        ok: boolean;
        url?: string;
        expiresAt?: string;
        reason?: string;
        errors?: Errors;
      };
      if (data.ok && data.url && data.expiresAt) setResult({ url: data.url, expiresAt: data.expiresAt });
      else if (data.reason === "validation" && data.errors) setErrors(data.errors);
      else if (data.reason === "unauthorized") setErrors({ adminKey: "Wrong staff key." });
      else if (data.reason === "not_configured")
        setProblem("Payment links are not configured on the server (PAYMENT_LINK_SECRET / PAYMENT_ADMIN_KEY).");
      else setProblem("Something went wrong. Please try again.");
    } catch {
      setProblem("Could not reach the server. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function copy() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.url);
      setCopied(true);
    } catch {
      /* the link is visible and selectable anyway */
    }
  }

  const field = (
    f:
      | (typeof fields)[number]
      | { name: string; label: string; type?: string; required?: boolean; hint?: string; placeholder?: string },
  ) => (
    <div key={f.name}>
      <label htmlFor={`pl-${f.name}`} className="block font-semibold text-navy">
        {f.label}
        {!f.required && <span className="font-normal text-stone"> (optional)</span>}
      </label>
      <input
        id={`pl-${f.name}`}
        name={f.name}
        type={f.type ?? "text"}
        required={f.required}
        placeholder={f.placeholder}
        autoComplete={f.name === "adminKey" ? "current-password" : "off"}
        aria-invalid={errors[f.name] ? true : undefined}
        aria-describedby={errors[f.name] || f.hint ? `pl-${f.name}-desc` : undefined}
        className={`${input} mt-2`}
      />
      {(errors[f.name] || f.hint) && (
        <p id={`pl-${f.name}-desc`} className={`mt-1.5 text-sm ${errors[f.name] ? "text-[#912018]" : "text-stone"}`}>
          {errors[f.name] ?? f.hint}
        </p>
      )}
    </div>
  );

  return (
    <div className="rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10">
      <form onSubmit={submit} className="space-y-6" noValidate>
        {field({ name: "adminKey", label: "Staff key", type: "password", required: true })}
        <hr className="border-navy/10" />
        {fields.map(field)}

        {problem && (
          <p role="alert" className="flex gap-2 rounded-[4px] bg-[#FEF3F2] p-4 text-[#912018]">
            <AlertCircle aria-hidden className="mt-0.5 size-5 shrink-0" />
            {problem}
          </p>
        )}

        <button type="submit" disabled={busy} className={buttonClass("primary", "w-full disabled:opacity-70")}>
          {busy && <LoaderCircle aria-hidden className="size-5 animate-spin" />}
          Create payment link
        </button>
      </form>

      <div aria-live="polite">
        {result && (
          <div className="mt-8 rounded-[4px] border border-forest/30 bg-forest/[0.06] p-5">
            <p className="font-semibold text-forest">Payment link ready</p>
            <p className="mt-1 text-sm text-ink-soft">
              Valid until{" "}
              {new Date(result.expiresAt).toLocaleString("en-GB", {
                dateStyle: "long",
                timeStyle: "short",
                timeZone: "Asia/Jakarta",
              })}{" "}
              WIB. Send it to the customer by email or WhatsApp.
            </p>
            <textarea
              readOnly
              value={result.url}
              rows={3}
              aria-label="Payment link"
              onFocus={(e) => e.currentTarget.select()}
              className="mt-4 w-full rounded-[3px] border border-navy/20 bg-white p-3 font-mono text-xs break-all text-charcoal"
            />
            <div className="mt-3 flex flex-wrap gap-3">
              <button type="button" onClick={copy} className={buttonClass("outline", undefined, "sm")}>
                {copied ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
                {copied ? "Copied" : "Copy link"}
              </button>
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("outline", undefined, "sm")}
              >
                Open payment page
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
