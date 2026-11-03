"use client";

import { useState } from "react";
import { ArrowRight, CalendarDays, RefreshCw } from "lucide-react";
import Link from "@/components/ui/Link";
import { useI18n } from "@/i18n/client";
import type { VisaCategory } from "@/content/visa-catalog";
import { formatIdr } from "@/lib/format";
import { cn } from "@/lib/cn";

export type CatalogItem = {
  id: string;
  code: string;
  category: VisaCategory;
  standard: number;
  express?: number;
  bdStandard: number;
};

type Tab = "all" | VisaCategory;

/** Visa cards with category tabs, modelled on an online visa portal. */
export function VisaCatalog({ items }: { items: CatalogItem[] }) {
  const { t, locale } = useI18n();
  const v = t.apply.visas;
  const [tab, setTab] = useState<Tab>("all");
  const labels = t.apply.catalog;
  const shown = tab === "all" ? items : items.filter((i) => i.category === tab);

  return (
    <div>
      <div role="tablist" aria-label={labels.all} className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {(["all", "B", "C", "D", "E"] as Tab[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-4 text-[0.9375rem] font-semibold whitespace-nowrap transition-colors",
              tab === k
                ? "border-navy bg-navy text-ivory"
                : "border-navy/20 bg-white text-navy hover:border-navy/50",
            )}
          >
            {k !== "all" && <span className="mr-1.5 opacity-70">{k}</span>}
            {labels[k]}
          </button>
        ))}
      </div>
      {tab !== "all" && <p className="mt-4 text-ink-soft">{labels.text[tab]}</p>}

      <ul role="tabpanel" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => {
          const copy = v[item.id as keyof typeof v];
          return (
            <li
              key={item.id}
              className="group relative flex flex-col rounded-[8px] border border-navy/10 bg-white p-6 transition-shadow hover:shadow-[0_18px_40px_-24px_rgb(21_43_129/0.45)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-[4px] bg-navy px-2 py-1 text-xs font-bold tracking-wide text-ivory">
                  {item.code}
                </span>
                <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-semibold text-gold-ink">
                  {labels.bdBadge}
                </span>
              </div>
              <h3 className="mt-4 text-lg leading-snug font-semibold text-navy">{copy.name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{copy.short}</p>
              <dl className="mt-4 space-y-1.5 text-sm text-ink-soft">
                <div className="flex items-center gap-2">
                  <CalendarDays aria-hidden className="size-4 shrink-0 text-forest" />
                  <dt className="sr-only">{labels.stay}</dt>
                  <dd>{copy.stay}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw aria-hidden className="size-4 shrink-0 text-forest" />
                  <dt className="sr-only">{labels.extension}</dt>
                  <dd>{copy.extension}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-6">
                <div className="border-t border-navy/10 pt-4">
                  <p className="text-sm text-stone">{t.apply.price}</p>
                  <p className="mt-0.5 text-xl font-bold text-navy tabular-nums">
                    {formatIdr(item.standard, locale)}
                    {item.express && (
                      <span className="text-base font-semibold text-stone">
                        {" – "}
                        {formatIdr(item.express, locale)}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm font-medium text-gold-ink">
                    {labels.bdPrice}: {formatIdr(item.bdStandard, locale)}
                  </p>
                </div>
                <Link
                  href={`/visa-immigration/apply?visa=${item.id}`}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[3px] bg-navy px-5 text-[0.9375rem] font-semibold text-ivory transition-colors after:absolute after:inset-0 hover:bg-navy-soft"
                >
                  {labels.apply}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
