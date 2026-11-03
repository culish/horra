"use client";

import NextLink from "next/link";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";
import { defaultLocale, isLocale, localizeHref } from "@/i18n/config";

/** next/link that keeps the visitor in their language: "/about" → "/id/about". */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const params = useParams<{ lang?: string }>();
  const locale = isLocale(params?.lang) ? params.lang : defaultLocale;
  const target = typeof href === "string" ? localizeHref(href, locale) : href;
  return <NextLink href={target} {...props} />;
}
