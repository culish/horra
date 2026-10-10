import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Text wordmark used until an official logo is supplied. The mark is an "H" whose gold
 * crossbar reads as a bridge between two sides — business, trade and travel connections.
 * Replace this component with the official logo asset once confirmed.
 */
export function Wordmark({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <Link href="/" aria-label="Horra Prime Group, home" className={cn("flex items-center gap-3", className)}>
      <svg aria-hidden viewBox="0 0 32 32" className="size-8 shrink-0">
        <rect width="32" height="32" rx="3" fill={dark ? "var(--color-ivory)" : "var(--color-navy)"} />
        <rect x="9" y="8" width="3" height="16" fill={dark ? "var(--color-navy)" : "var(--color-ivory)"} />
        <rect x="20" y="8" width="3" height="16" fill={dark ? "var(--color-navy)" : "var(--color-ivory)"} />
        <rect x="6" y="14.5" width="20" height="3" fill="var(--color-gold)" />
      </svg>
      <span
        className={cn(
          "text-[0.875rem] leading-none tracking-[0.17em] whitespace-nowrap sm:text-[0.9375rem]",
          dark ? "text-ivory" : "text-navy",
        )}
      >
        <span className="font-bold">HORRA</span>{" "}
        <span className={cn("font-medium", dark ? "text-ivory/75" : "text-navy/70")}>PRIME GROUP</span>
      </span>
    </Link>
  );
}
