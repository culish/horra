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

export const mainNav: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  {
    id: "consulting",
    label: "Business Consulting",
    href: "/business-consulting",
    intro: "Visas, stay permits and company setup for people and businesses coming to Indonesia.",
    groups: [
      {
        heading: "Visa & Immigration",
        href: "/visa-immigration",
        links: [
          { label: "Visa & Immigration overview", href: "/visa-immigration" },
          { label: "C1 Tourist Visa", href: "/visa-immigration/c1-tourist-visa" },
          { label: "Investor KITAS", href: "/visa-immigration/investor-kitas" },
        ],
      },
      {
        heading: "Business Setup",
        href: "/business-setup",
        links: [
          { label: "PT PMA Setup", href: "/business-setup#pt-pma" },
          { label: "Local PT Setup", href: "/business-setup#local-pt" },
          { label: "NIB & OSS", href: "/business-setup#nib-oss" },
          { label: "Virtual Office", href: "/business-setup#virtual-office" },
        ],
      },
    ],
  },
  {
    id: "trading",
    label: "International Trading",
    href: "/international-trading",
    intro: "Buyer inquiries for Indonesian commodities. Terms are confirmed for each inquiry.",
    groups: [
      {
        heading: "Product categories",
        links: tradingCategories.map((c) => ({
          label: c.name,
          href: `/international-trading/${c.slug}`,
          note: productCount(c) ? `${productCount(c)} products listed` : "Range on request",
        })),
      },
    ],
  },
  {
    id: "travel",
    label: "Tours & Travel",
    href: "/tours-travel",
    intro: "Tickets, hotels, tours, transfers and guidance for trips in Indonesia.",
    groups: [
      {
        heading: "Services",
        links: [
          { label: "Ticket & Hotel", href: "/tours-travel#ticket-hotel" },
          { label: "Tour Package", href: "/tours-travel#tour-package" },
          { label: "Airport Drop & Pick Up", href: "/tours-travel#airport-transfer" },
          { label: "Travel Guide", href: "/tours-travel#travel-guide" },
        ],
      },
    ],
  },
  { id: "contact", label: "Contact", href: "/contact" },
];
