import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ Container */

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>{children}</div>;
}

/* ------------------------------------------------------------------ Buttons */

type ButtonVariant = "primary" | "accent" | "outline" | "outline-light";

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[3px] font-semibold tracking-[-0.005em] transition-colors duration-200";

const buttonSizes = {
  md: "min-h-12 px-6 text-[0.9375rem]",
  sm: "min-h-11 px-5 text-[0.875rem]",
} as const;

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-navy text-ivory hover:bg-navy-soft",
  accent: "bg-gold text-navy hover:bg-[#d4b77f]",
  outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy/[0.03]",
  "outline-light": "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory/[0.06]",
};

/** Layout classes only (margins, width) in `className` — size and colour come from the arguments. */
export function buttonClass(
  variant: ButtonVariant = "primary",
  className?: string,
  size: keyof typeof buttonSizes = "md",
) {
  return cn(buttonBase, buttonSizes[size], buttonVariants[variant], className);
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; size?: keyof typeof buttonSizes }) {
  return <Link className={buttonClass(variant, className, size)} {...props} />;
}

/* ------------------------------------------------------------------ Text link */

export function TextLink({
  className,
  tone = "light",
  ...props
}: ComponentProps<typeof Link> & { tone?: "light" | "dark" }) {
  return (
    <Link
      className={cn(
        "font-semibold underline underline-offset-[5px] transition-colors",
        tone === "light"
          ? "text-forest decoration-forest/30 hover:decoration-forest"
          : "text-ivory decoration-gold/60 hover:decoration-gold",
        className,
      )}
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ Section header */

export function SectionHeader({
  id,
  title,
  intro,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-12 md:gap-8", className)}>
      <h2
        id={id}
        className={cn(
          "text-headline font-semibold text-balance md:col-span-6",
          tone === "light" ? "text-navy" : "text-ivory",
        )}
      >
        {title}
      </h2>
      {(intro || children) && (
        <div className="md:col-span-5 md:col-start-8 md:self-end">
          {intro && <p className={cn("text-lead", tone === "light" ? "text-ink-soft" : "text-mist")}>{intro}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ Section */

const surfaces = {
  ivory: "bg-ivory",
  sand: "bg-sand",
  white: "bg-white",
  navy: "bg-navy text-ivory",
  forest: "bg-forest text-ivory",
} as const;

export function Section({
  surface = "ivory",
  className,
  labelledBy,
  id,
  compact,
  children,
}: {
  surface?: keyof typeof surfaces;
  /** Less vertical padding, for secondary sections */
  compact?: boolean;
  className?: string;
  labelledBy?: string;
  id?: string;
  children: ReactNode;
}) {
  const dark = surface === "navy" || surface === "forest";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-surface={dark ? "dark" : undefined}
      className={cn(surfaces[surface], compact ? "py-16 md:py-20" : "py-20 md:py-28", className)}
    >
      {children}
    </section>
  );
}
