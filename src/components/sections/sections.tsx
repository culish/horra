import type { ReactNode } from "react";
import { Container, ButtonLink } from "@/components/ui/primitives";
import { Breadcrumbs, type Crumb } from "@/components/ui/notices";
import { RegionMap } from "@/components/art/RegionMap";
import { KawungPattern } from "@/components/art/KawungPattern";
import type { DivisionKey } from "@/content/divisions";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ PageHero (inner pages) */

export function PageHero({
  crumbs,
  title,
  lead,
  division,
  label,
  logo,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lead: ReactNode;
  division?: DivisionKey;
  /** Short context line above the title, e.g. the division a page belongs to */
  label?: string;
  /** Division logo shown above the title */
  logo?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="relative overflow-hidden border-b border-navy/10 bg-sand">
      {division && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-[-12%] hidden w-[54%] max-w-[760px] opacity-[0.55] lg:block"
        >
          <RegionMap division={division} land="rgb(16 36 58 / 0.2)" neighbors="rgb(16 36 58 / 0.07)" />
        </div>
      )}
      <Container className="relative pt-10 pb-16 md:pt-14 md:pb-24">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 max-w-[46rem] md:mt-16">
          {logo && <div className="mb-8">{logo}</div>}
          {label && <p className="mb-4 text-[0.9375rem] font-semibold text-forest">{label}</p>}
          <h1 id="page-title" className="text-display font-semibold text-balance text-navy">
            {title}
          </h1>
          <div className="mt-6 max-w-[40rem] text-lead text-ink-soft">{lead}</div>
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ ProcessSteps */

export function ProcessSteps({
  steps,
  note,
  layout = "row",
  tone = "light",
  className,
}: {
  steps: { title: string; text: string }[];
  note?: ReactNode;
  layout?: "row" | "column";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const row = layout === "row";
  return (
    <div className={className}>
      <ol className={cn("grid gap-x-8", row ? "gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0" : "gap-y-0")}>
        {steps.map((step, i) => (
          <li key={step.title} className={cn("relative", row ? "lg:pt-0" : "flex gap-5 pb-8 last:pb-0")}>
            {/* connector line */}
            {row
              ? i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-[18px] right-0 left-12 hidden h-px lg:block",
                      dark ? "bg-ivory/20" : "bg-navy/15",
                    )}
                  />
                )
              : i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className={cn("absolute top-10 bottom-0 left-[18px] w-px", dark ? "bg-ivory/20" : "bg-navy/15")}
                  />
                )}
            <span
              aria-hidden
              className={cn(
                "relative flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold tabular-nums",
                dark ? "border-gold/70 text-gold" : "border-navy/30 bg-ivory text-navy",
              )}
            >
              {i + 1}
            </span>
            <div className={row ? "mt-5" : "pt-1.5"}>
              <h3 className={cn("font-semibold tracking-[-0.01em]", dark ? "text-ivory" : "text-navy")}>
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className={cn("mt-2 text-[0.9375rem] leading-relaxed", dark ? "text-mist" : "text-ink-soft")}>
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {note && (
        <p className={cn("mt-10 max-w-[44rem] text-sm leading-relaxed", dark ? "text-mist" : "text-stone")}>{note}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ CTASection */

export function CTASection({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="cta-title" data-surface="dark" className="relative overflow-hidden bg-navy text-ivory">
      <KawungPattern
        className="absolute inset-y-0 right-0 w-full [mask-image:linear-gradient(to_left,black_15%,transparent_75%)] md:w-2/3"
        opacity={0.12}
      />
      <Container className="relative py-20 md:py-28">
        <div className="max-w-[44rem]">
          <h2 id="cta-title" className="text-headline font-semibold text-balance">
            {title}
          </h2>
          {text && <p className="mt-5 text-lead text-mist">{text}</p>}
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={primary.href} variant="accent">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="outline-light">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
