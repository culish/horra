import Link from "@/components/ui/Link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { Division } from "@/content/divisions";
import type { TradingCategory } from "@/content/trading";
import { productCount } from "@/content/trading";
import { getT } from "@/i18n/server";
import { fmt } from "@/lib/fmt";
import { RegionMap, regionTones } from "@/components/art/RegionMap";
import { MediaFrame } from "@/components/art/MediaFrame";
import { categoryIcons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ DivisionCard */

export async function DivisionCard({
  division,
  headingLevel = "h3",
}: {
  division: Division;
  headingLevel?: "h2" | "h3";
}) {
  const t = await getT();
  const Heading = headingLevel;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[6px] border border-navy/10 bg-white">
      <MediaFrame slot={division.key} className={cn("aspect-[16/10]", regionTones[division.key].bg)}>
        <RegionMap division={division.key} fit="slice" className="absolute inset-0 h-full w-full" />
      </MediaFrame>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <Heading className="text-title font-semibold text-navy">
          <Link href={division.href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {division.name}
          </Link>
        </Heading>
        <p className="mt-3 leading-relaxed text-ink-soft">{division.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={fmt(t.common.servicesOf, { name: division.name })}>
          {division.services.map((s) => (
            <li key={s.label} className="rounded-full border border-navy/12 px-3 py-1 text-sm text-ink-soft">
              {s.label}
            </li>
          ))}
        </ul>
        <span className="mt-auto flex items-center gap-2 pt-8 text-[0.9375rem] font-semibold text-forest">
          {t.common.explore}
          <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ ServiceCard */

export async function ServiceCard({
  icon: Icon,
  title,
  text,
  href,
  linkLabel,
  id,
  headingLevel = "h3",
  tone = "light",
}: {
  icon?: LucideIcon;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
  id?: string;
  headingLevel?: "h2" | "h3";
  tone?: "light" | "dark";
}) {
  const Heading = headingLevel;
  const dark = tone === "dark";
  const label = linkLabel ?? (await getT()).common.learnMore;
  return (
    <article
      id={id}
      className={cn("relative flex flex-col border-t pt-6", dark ? "border-ivory/20" : "border-navy/15")}
    >
      {Icon && <Icon aria-hidden strokeWidth={1.6} className={cn("mb-5 size-6", dark ? "text-gold" : "text-forest")} />}
      <Heading className={cn("text-lg font-semibold tracking-[-0.01em]", dark ? "text-ivory" : "text-navy")}>
        {href ? (
          <Link href={href} className="underline-offset-4 after:absolute after:inset-0 hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </Heading>
      <p className={cn("mt-2.5 leading-relaxed", dark ? "text-mist" : "text-ink-soft")}>{text}</p>
      {href && (
        <span aria-hidden className={cn("mt-4 text-sm font-semibold", dark ? "text-gold" : "text-forest")}>
          {label}
        </span>
      )}
    </article>
  );
}

/* ------------------------------------------------------------------ ProductCategoryCard */

export async function ProductCategoryCard({ category }: { category: TradingCategory }) {
  const t = await getT();
  const copy = t.trading.categories[category.slug];
  const Icon = categoryIcons[category.icon];
  const count = productCount(category);
  return (
    <article className="group relative flex flex-col rounded-[6px] border border-navy/10 bg-white p-6 transition-colors duration-200 hover:border-navy/35">
      <span className="flex size-11 items-center justify-center rounded-[4px] bg-forest/[0.08] text-forest">
        <Icon aria-hidden strokeWidth={1.6} className="size-[22px]" />
      </span>
      <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-navy">
        <Link href={`/international-trading/${category.slug}`} className="after:absolute after:inset-0">
          {copy.name}
        </Link>
      </h3>
      <p className="mt-2 mb-6 text-[0.9375rem] leading-relaxed text-ink-soft">{copy.summary}</p>
      <p className="mt-auto flex items-center justify-between gap-3 border-t border-navy/10 pt-4 text-sm text-stone">
        <span>{count ? fmt(t.nav.links.productsListed, { count }) : t.nav.links.rangeOnRequest}</span>
        <ArrowRight
          aria-hidden
          className="size-4 text-forest transition-transform duration-200 group-hover:translate-x-1"
        />
      </p>
    </article>
  );
}
