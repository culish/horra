import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight, ExternalLink, Info, ClipboardList } from "lucide-react";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ Breadcrumbs */

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-stone">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="underline-offset-4 hover:text-navy hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-ink-soft" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight aria-hidden className="size-3.5 text-stone/70" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ Disclaimer */

export function DisclaimerNotice({
  title = "Subject to current regulations",
  children,
  tone = "light",
  className,
}: {
  title?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <aside
      role="note"
      aria-label={title}
      className={cn(
        "flex gap-4 rounded-[4px] border-l-2 border-gold p-5 sm:p-6",
        tone === "light" ? "bg-sand text-ink-soft" : "bg-navy-deep/45 text-ivory/90",
        className,
      )}
    >
      <Info aria-hidden className={cn("mt-0.5 size-5 shrink-0", tone === "light" ? "text-gold-ink" : "text-gold")} />
      <div className="text-[0.9375rem] leading-relaxed">
        <p className={cn("font-semibold", tone === "light" ? "text-navy" : "text-ivory")}>{title}</p>
        <div className="mt-1.5 space-y-2">{children}</div>
      </div>
    </aside>
  );
}

export function ImmigrationDisclaimer({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <DisclaimerNotice
      tone={tone}
      className={className}
      title="Immigration information is subject to current Indonesian rules"
    >
      <p>
        Visa and stay-permit requirements, durations and fees can change. Decisions are made by the Indonesian
        immigration authorities, and we cannot guarantee approval, processing times, extensions or conversions. This
        page is general information, not legal advice — confirm details with official sources before you apply.
      </p>
    </DisclaimerNotice>
  );
}

export function TradeDisclaimer({ className }: { className?: string }) {
  return (
    <DisclaimerNotice className={className} title="Confirmed for each inquiry">
      <p>
        Availability, specifications, pricing, documentation and shipping terms are confirmed individually for each
        inquiry. Nothing on this page is an offer to sell.
      </p>
    </DisclaimerNotice>
  );
}

/* ------------------------------------------------------------------ Pending content */

export function PendingContent({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[4px] border border-dashed border-navy/25 p-6", className)}>
      <p className="flex items-center gap-2 text-sm font-semibold text-gold-ink">
        <ClipboardList aria-hidden className="size-4" />
        Pending confirmation
      </p>
      <p className="mt-2 font-semibold text-navy">{title}</p>
      <div className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ Official sources */

export function OfficialSources({
  sources,
  className,
}: {
  sources: { label: string; href: string; note: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="font-semibold text-navy">Check official sources</p>
      <ul className="mt-3 divide-y divide-navy/10 border-y border-navy/10">
        {sources.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-3.5"
            >
              <span>
                <span className="block font-medium text-navy underline-offset-4 group-hover:underline">{s.label}</span>
                <span className="block text-sm text-stone">{s.note}</span>
              </span>
              <ExternalLink aria-hidden className="size-4 shrink-0 text-stone" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
