import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { htmlLang, isLocale, locales, ogLocale } from "@/i18n/config";
import { getMessagesFor, pickClientMessages } from "@/i18n/server";
import { I18nProvider } from "@/i18n/client";
import { getMainNav } from "@/content/navigation";
import { languageAlternates } from "@/lib/metadata";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "../globals.css";

// Plus Jakarta Sans — designed by Tokotype, an Indonesian type foundry. Self-hosted (OFL-1.1).
// Chinese and Bengali text falls back to the system fonts listed in globals.css.
const jakarta = localFont({
  src: "../../fonts/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-jakarta",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getMessagesFor(lang);
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t.meta.title, template: `%s | ${siteConfig.name}` },
    description: t.meta.description,
    applicationName: siteConfig.name,
    openGraph: {
      type: "website",
      siteName: siteConfig.legalName,
      locale: ogLocale[lang],
      title: t.meta.title,
      description: t.meta.description,
      url: `/${lang}`,
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `/${lang}`, languages: languageAlternates("/") },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#152b81",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getMessagesFor(lang);

  return (
    <html lang={htmlLang[lang]} className={`${jakarta.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <I18nProvider locale={lang} t={pickClientMessages(t)}>
          <a
            href="#main"
            className="sr-only z-[60] rounded-[3px] bg-navy px-4 py-3 font-semibold text-ivory focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          >
            {t.common.skipToContent}
          </a>
          <SiteHeader nav={getMainNav(t)} />
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <SiteFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
