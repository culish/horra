"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useI18n } from "@/i18n/client";
import { localeNames, localeShort, locales, stripLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

/** Language menu. Plain links (full navigation), so the new language also applies to metadata. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const pathname = stripLocale(usePathname());
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const hrefFor = (l: Locale) => `/${l}${pathname === "/" ? "" : pathname}`;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={`${t.common.chooseLanguage}: ${localeNames[locale]}`}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-11 items-center gap-1.5 rounded-[3px] px-2 text-[0.875rem] font-semibold whitespace-nowrap text-navy hover:bg-navy/[0.05] sm:px-2.5"
      >
        <Globe aria-hidden className="size-[18px]" />
        <span>{localeShort[locale]}</span>
        <ChevronDown aria-hidden className={cn("hidden size-4 transition-transform sm:block", open && "rotate-180")} />
      </button>
      <ul
        id="language-menu"
        hidden={!open}
        aria-label={t.common.language}
        className="absolute right-0 z-[60] mt-1 w-52 overflow-hidden rounded-[6px] border border-navy/10 bg-white py-1 shadow-[0_18px_40px_-18px_rgb(21_43_129/0.45)]"
      >
        {locales.map((l) => (
          <li key={l}>
            <a
              href={hrefFor(l)}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? "true" : undefined}
              onClick={(e) => {
                // Keep the query string and hash (e.g. ?visa=c1) when switching language
                e.currentTarget.href = hrefFor(l) + window.location.search + window.location.hash;
                setOpen(false);
              }}
              className={cn(
                "flex min-h-11 items-center justify-between gap-3 px-4 text-[0.9375rem] hover:bg-sand",
                l === locale ? "font-semibold text-navy" : "text-ink-soft",
              )}
            >
              {localeNames[l]}
              {l === locale && <Check aria-hidden className="size-4 text-forest" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
