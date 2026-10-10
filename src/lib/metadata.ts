import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Per-page metadata with a canonical URL and matching Open Graph fields. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.legalName,
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
    },
  };
}
