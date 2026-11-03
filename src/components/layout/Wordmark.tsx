"use client";

import Image from "next/image";
import Link from "@/components/ui/Link";
import { cn } from "@/lib/cn";
import shield from "@/assets/logo/horra-prime-group-shield.png";
import { useI18n } from "@/i18n/client";

/**
 * Main company logo: the official HR shield monogram beside the "HORRA PRIME GROUP" name.
 */
export function Wordmark({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const { t } = useI18n();
  const dark = tone === "dark";
  return (
    <Link href="/" aria-label={t.nav.homeAria} className={cn("flex min-w-0 items-center gap-2.5 sm:gap-3", className)}>
      <Image src={shield} alt="" priority className="h-10 w-auto shrink-0" sizes="34px" />
      <span
        className={cn(
          "text-[0.8125rem] leading-none tracking-[0.12em] whitespace-nowrap min-[400px]:text-[0.875rem] min-[400px]:tracking-[0.17em] sm:text-[0.9375rem]",
          dark ? "text-ivory" : "text-navy",
        )}
      >
        <span className="font-bold">HORRA</span>{" "}
        <span className={cn("font-medium", dark ? "text-ivory/75" : "text-navy/70")}>PRIME GROUP</span>
      </span>
    </Link>
  );
}
