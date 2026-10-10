/**
 * Site-wide configuration.
 *
 * Contact details and social links are read from environment variables so that no unverified
 * detail is ever hard-coded. When a value is missing, the UI shows a clearly labelled
 * "to be confirmed" placeholder and never renders a working link. See README.md → Environment.
 */

const value = (v: string | undefined) => {
  const trimmed = v?.trim();
  return trimmed ? trimmed : undefined;
};

const whatsappDigits = value(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)?.replace(/[^\d]/g, "");

export const siteConfig = {
  legalName: "PT. Horra Prime Group",
  name: "Horra Prime Group",
  url: value(process.env.NEXT_PUBLIC_SITE_URL) ?? "http://localhost:3000",
  title: "PT. Horra Prime Group | Business, Trade & Travel in Indonesia",
  description:
    "Explore business consulting, visa and immigration assistance, international trading, and travel services from PT. Horra Prime Group in Indonesia.",
  shortDescription:
    "An Indonesian company working across business consulting, international trading, and tours and travel.",
  contact: {
    email: value(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    phone: value(process.env.NEXT_PUBLIC_CONTACT_PHONE),
    whatsapp: whatsappDigits && whatsappDigits.length >= 8 ? whatsappDigits : undefined,
    address: value(process.env.NEXT_PUBLIC_OFFICE_ADDRESS),
    hours: value(process.env.NEXT_PUBLIC_OFFICE_HOURS),
  },
  social: [
    { label: "LinkedIn", href: value(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN) },
    { label: "Instagram", href: value(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM) },
    { label: "Facebook", href: value(process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK) },
    { label: "YouTube", href: value(process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE) },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href)),
} as const;

export function whatsappHref(message?: string) {
  const n = siteConfig.contact.whatsapp;
  if (!n) return undefined;
  return `https://wa.me/${n}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}
