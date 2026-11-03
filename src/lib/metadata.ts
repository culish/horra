import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { htmlLang, locales, ogLocale, type Locale } from "@/i18n/config";
import { getLocale } from "@/i18n/server";

/** hreflang alternates for a path without the language prefix. */
export const languageAlternates = (path: string) => ({
  ...Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}${path === "/" ? "" : path}`])),
  "x-default": `/en${path === "/" ? "" : path}`,
});

/** Per-page metadata with a canonical URL, hreflang alternates and matching Open Graph fields. */
export async function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
}: {
  title: string;
  description: string;
  /** Path without the language prefix, e.g. "/about" */
  path: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
}): Promise<Metadata> {
  const locale: Locale = await getLocale();
  const url = `/${locale}${path === "/" ? "" : path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: siteConfig.legalName,
      locale: ogLocale[locale],
      title: absoluteTitle ? title : `${title} | ${siteConfig.name}`,
      description,
      url,
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
