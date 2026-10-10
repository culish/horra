import Link from "next/link";
import { siteConfig } from "@/config/site";
import { tradingCategories } from "@/content/trading";
import { Container } from "@/components/ui/primitives";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Wordmark } from "./Wordmark";
import { ContactDetails } from "./ContactDetails";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Business Consulting",
    links: [
      { label: "Overview", href: "/business-consulting" },
      { label: "Visa & Immigration", href: "/visa-immigration" },
      { label: "C1 Tourist Visa", href: "/visa-immigration/c1-tourist-visa" },
      { label: "Investor KITAS", href: "/visa-immigration/investor-kitas" },
      { label: "Business Setup", href: "/business-setup" },
    ],
  },
  {
    heading: "International Trading",
    links: [
      { label: "Overview", href: "/international-trading" },
      ...tradingCategories.map((c) => ({ label: c.name, href: `/international-trading/${c.slug}` })),
    ],
  },
  {
    heading: "Tours & Travel",
    links: [
      { label: "Overview", href: "/tours-travel" },
      { label: "Ticket & Hotel", href: "/tours-travel#ticket-hotel" },
      { label: "Tour Package", href: "/tours-travel#tour-package" },
      { label: "Airport Drop & Pick Up", href: "/tours-travel#airport-transfer" },
      { label: "Travel Guide", href: "/tours-travel#travel-guide" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="site-footer" data-surface="dark" className="bg-navy-deep text-ivory">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark tone="dark" />
            <p className="mt-6 max-w-sm leading-relaxed text-mist">{siteConfig.shortDescription}</p>
            <div className="mt-8">
              <p className="mb-4 font-semibold">Get in touch</p>
              <ContactDetails tone="dark" />
            </div>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="font-semibold">{col.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-mist underline-offset-4 hover:text-ivory hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/12 pt-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="underline-offset-4 hover:text-ivory hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="underline-offset-4 hover:text-ivory hover:underline">
                Terms of Use
              </Link>
            </li>
            {siteConfig.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-ivory hover:underline"
                >
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
