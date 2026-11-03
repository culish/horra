import type { Messages } from "@/i18n/messages";
import { fmt } from "@/lib/fmt";
import { tradingCategories, productCount } from "./trading";

export type NavLink = { label: string; href: string; note?: string };
export type NavGroup = { heading: string; href?: string; links: NavLink[] };
export type NavItem = {
  id: string;
  label: string;
  href: string;
  intro?: string;
  groups?: NavGroup[];
};

export function getMainNav(t: Messages): NavItem[] {
  const n = t.nav;
  return [
    { id: "home", label: n.items.home, href: "/" },
    { id: "about", label: n.items.about, href: "/about" },
    {
      id: "consulting",
      label: n.items.consulting,
      href: "/business-consulting",
      intro: n.intros.consulting,
      groups: [
        {
          heading: n.groups.visa,
          href: "/visa-immigration",
          links: [
            { label: n.links.visaOverview, href: "/visa-immigration" },
            { label: n.links.visaApply, href: "/visa-immigration/apply" },
            { label: n.links.c1, href: "/visa-immigration/c1-tourist-visa" },
            { label: n.links.kitas, href: "/visa-immigration/investor-kitas" },
          ],
        },
        {
          heading: n.groups.setup,
          href: "/business-setup",
          links: [
            { label: n.links.ptPma, href: "/business-setup#pt-pma" },
            { label: n.links.localPt, href: "/business-setup#local-pt" },
            { label: n.links.nibOss, href: "/business-setup#nib-oss" },
            { label: n.links.virtualOffice, href: "/business-setup#virtual-office" },
          ],
        },
      ],
    },
    {
      id: "trading",
      label: n.items.trading,
      href: "/international-trading",
      intro: n.intros.trading,
      groups: [
        {
          heading: n.groups.categories,
          links: tradingCategories.map((c) => ({
            label: t.trading.categories[c.slug].name,
            href: `/international-trading/${c.slug}`,
            note: productCount(c) ? fmt(n.links.productsListed, { count: productCount(c) }) : n.links.rangeOnRequest,
          })),
        },
      ],
    },
    {
      id: "travel",
      label: n.items.travel,
      href: "/tours-travel",
      intro: n.intros.travel,
      groups: [
        {
          heading: n.groups.services,
          links: [
            { label: n.links.ticketHotel, href: "/tours-travel#ticket-hotel" },
            { label: n.links.tourPackage, href: "/tours-travel#tour-package" },
            { label: n.links.airport, href: "/tours-travel#airport-transfer" },
            { label: n.links.guide, href: "/tours-travel#travel-guide" },
          ],
        },
      ],
    },
    { id: "contact", label: n.items.contact, href: "/contact" },
  ];
}
