import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { staticRoutes } from "@/content/routes";
import { htmlLang, locales } from "@/i18n/config";

const abs = (locale: string, path: string) => new URL(`/${locale}${path === "/" ? "" : path}`, siteConfig.url).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.flatMap((path) =>
    locales.map((locale) => ({
      url: abs(locale, path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
      alternates: { languages: Object.fromEntries(locales.map((l) => [htmlLang[l], abs(l, path)])) },
    })),
  );
}
