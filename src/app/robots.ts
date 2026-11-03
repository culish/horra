import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/pay", "/en/pay", "/id/pay", "/zh/pay", "/bn/pay"] },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
