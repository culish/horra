import Link from "@/components/ui/Link";
import { siteConfig } from "@/config/site";
import { tradingCategories } from "@/content/trading";
import { getT } from "@/i18n/server";
import { Container } from "@/components/ui/primitives";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Wordmark } from "./Wordmark";
import { ContactDetails } from "./ContactDetails";

export async function SiteFooter() {
  const t = await getT();
  const n = t.nav;
  const columns = [
    {
      heading: n.footer.company,
      links: [
        { label: n.items.home, href: "/" },
        { label: n.items.about, href: "/about" },
        { label: n.items.contact, href: "/contact" },
      ],
    },
    {
      heading: n.items.consulting,
      links: [
        { label: n.footer.overview, href: "/business-consulting" },
        { label: n.groups.visa, href: "/visa-immigration" },
        { label: n.links.visaApply, href: "/visa-immigration/apply" },
        { label: n.links.c1, href: "/visa-immigration/c1-tourist-visa" },
        { label: n.links.kitas, href: "/visa-immigration/investor-kitas" },
        { label: n.groups.setup, href: "/business-setup" },
      ],
    },
    {
      heading: n.items.trading,
      links: [
        { label: n.footer.overview, href: "/international-trading" },
        ...tradingCategories.map((c) => ({
          label: t.trading.categories[c.slug].name,
          href: `/international-trading/${c.slug}`,
        })),
      ],
    },
    {
      heading: n.items.travel,
      links: [
        { label: n.footer.overview, href: "/tours-travel" },
        { label: n.links.ticketHotel, href: "/tours-travel#ticket-hotel" },
        { label: n.links.tourPackage, href: "/tours-travel#tour-package" },
        { label: n.links.airport, href: "/tours-travel#airport-transfer" },
        { label: n.links.guide, href: "/tours-travel#travel-guide" },
      ],
    },
  ];
  return (
    <footer id="site-footer" data-surface="dark" className="bg-navy-deep text-ivory">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark tone="dark" />
            <p className="mt-6 max-w-sm leading-relaxed text-mist">{t.meta.shortDescription}</p>
            <div className="mt-8">
              <p className="mb-4 font-semibold">{n.footer.getInTouch}</p>
              <ContactDetails tone="dark" />
            </div>
          </div>

          <nav aria-label={n.footer.label} className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
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
            © <CurrentYear /> {siteConfig.legalName}. {n.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="underline-offset-4 hover:text-ivory hover:underline">
                {n.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="underline-offset-4 hover:text-ivory hover:underline">
                {n.footer.terms}
              </Link>
            </li>
            <li>
              <Link href="/pay/online" className="underline-offset-4 hover:text-ivory hover:underline">
                {n.footer.payOnline}
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
                  <span className="sr-only"> {t.common.opensNewTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
