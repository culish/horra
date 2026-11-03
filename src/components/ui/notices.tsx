import Link from "@/components/ui/Link";
import type { ReactNode } from "react";
import { ChevronRight, ExternalLink, Info, ClipboardList } from "lucide-react";
import { cn } from "@/lib/cn";
import { getT } from "@/i18n/server";

/* ------------------------------------------------------------------ Breadcrumbs */

export type Crumb = { label: string; href?: string };

export async function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const t = await getT();
  return (
    <nav aria-label={t.common.breadcrumb} className={className}>
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

export async function DisclaimerNotice({
  title,
  children,
  tone = "light",
  className,
}: {
  title?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const heading = title ?? (await getT()).common.disclaimer.regulationsTitle;
  return (
    <aside
      role="note"
      aria-label={heading}
      className={cn(
        "flex gap-4 rounded-[4px] border-l-2 border-gold p-5 sm:p-6",
        tone === "light" ? "bg-sand text-ink-soft" : "bg-navy-deep/45 text-ivory/90",
        className,
      )}
    >
      <Info aria-hidden className={cn("mt-0.5 size-5 shrink-0", tone === "light" ? "text-gold-ink" : "text-gold")} />
      <div className="text-[0.9375rem] leading-relaxed">
        <p className={cn("font-semibold", tone === "light" ? "text-navy" : "text-ivory")}>{heading}</p>
        <div className="mt-1.5 space-y-2">{children}</div>
      </div>
    </aside>
  );
}

export async function ImmigrationDisclaimer({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const d = (await getT()).common.disclaimer;
  return (
    <DisclaimerNotice tone={tone} className={className} title={d.immigrationTitle}>
      <p>{d.immigrationBody}</p>
    </DisclaimerNotice>
  );
}

export async function TradeDisclaimer({ className }: { className?: string }) {
  const d = (await getT()).common.disclaimer;
  return (
    <DisclaimerNotice className={className} title={d.tradeTitle}>
      <p>{d.tradeBody}</p>
    </DisclaimerNotice>
  );
}

/* ------------------------------------------------------------------ Pending content */

export async function PendingContent({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const t = await getT();
  return (
    <div className={cn("rounded-[4px] border border-dashed border-navy/25 p-6", className)}>
      <p className="flex items-center gap-2 text-sm font-semibold text-gold-ink">
        <ClipboardList aria-hidden className="size-4" />
        {t.common.pendingConfirmation}
      </p>
      <p className="mt-2 font-semibold text-navy">{title}</p>
      <div className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ Official sources */

export async function OfficialSources({
  sources,
  className,
}: {
  sources: { label: string; href: string; note: string }[];
  className?: string;
}) {
  const t = await getT();
  return (
    <div className={className}>
      <p className="font-semibold text-navy">{t.common.checkOfficialSources}</p>
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
              <span className="sr-only">{t.common.opensNewTab}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
