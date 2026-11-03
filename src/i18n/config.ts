/**
 * Supported languages. The URL always starts with one of these codes, e.g. /id/visa-immigration.
 * Plain paths (/visa-immigration) are redirected by src/proxy.ts to the visitor's language.
 */
export const locales = ["en", "id", "zh", "bn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (v: unknown): v is Locale => typeof v === "string" && (locales as readonly string[]).includes(v);

/** Name of each language in that language, for the switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  zh: "中文",
  bn: "বাংলা",
};

export const localeShort: Record<Locale, string> = { en: "EN", id: "ID", zh: "中文", bn: "বাং" };

/** BCP 47 tags for <html lang>, Intl formatting and hreflang. */
export const htmlLang: Record<Locale, string> = { en: "en", id: "id", zh: "zh-CN", bn: "bn" };
export const ogLocale: Record<Locale, string> = { en: "en_US", id: "id_ID", zh: "zh_CN", bn: "bn_BD" };

export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Prefixes an internal path with the locale. Leaves external links, hashes and mailto/tel alone. */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const first = href.split(/[/?#]/)[1];
  if (isLocale(first)) return href;
  if (href === "/") return `/${locale}`;
  if (href.startsWith("/#") || href.startsWith("/?")) return `/${locale}${href.slice(1)}`;
  return `/${locale}${href}`;
}

/** Removes the locale prefix from a pathname: /id/about → /about */
export function stripLocale(pathname: string): string {
  const first = pathname.split("/")[1];
  if (!isLocale(first)) return pathname;
  const rest = pathname.slice(first.length + 1);
  return rest || "/";
}
