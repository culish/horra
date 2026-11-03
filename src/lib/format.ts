import { htmlLang, type Locale } from "@/i18n/config";

/** Rupiah, without decimals, in the visitor's language: "Rp 2.700.000" / "IDR 2,700,000" */
export const formatIdr = (n: number, locale: Locale) =>
  new Intl.NumberFormat(locale === "id" ? "id-ID" : htmlLang[locale], {
    style: "currency",
    currency: "IDR",
    currencyDisplay: locale === "id" ? "symbol" : "code",
    maximumFractionDigits: 0,
  }).format(n);

export const formatDate = (d: Date, locale: Locale) =>
  d.toLocaleDateString(htmlLang[locale], { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });
