import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import shield from "@/assets/logo/horra-prime-group-shield.png";

/**
 * Main company logo: the official HR shield monogram beside the "HORRA PRIME GROUP" name.
 */
export function Wordmark({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <Link href="/" aria-label="Horra Prime Group, home" className={cn("flex items-center gap-3", className)}>
      <Image src={shield} alt="" priority className="h-10 w-auto shrink-0" sizes="34px" />
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
