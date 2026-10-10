/**
 * The three business divisions, as listed in the company profile.
 */

export type DivisionKey = "consulting" | "trading" | "travel";

export type Division = {
  key: DivisionKey;
  name: string;
  href: string;
  summary: string;
  services: { label: string; href: string }[];
};

export const divisions: Division[] = [
  {
    key: "consulting",
    name: "Business Consulting",
    href: "/business-consulting",
    summary: "Visa, stay-permit and company-setup assistance for people and businesses coming to Indonesia.",
    services: [
      { label: "Visa & Immigration", href: "/visa-immigration" },
      { label: "Business Setup", href: "/business-setup" },
    ],
  },
  {
    key: "trading",
    name: "International Trading",
    href: "/international-trading",
    summary:
      "Buyer inquiries for Indonesian commodities, from spices and palm oil products to coffee, cocoa and minerals.",
    services: [
      { label: "Spices & Herbs", href: "/international-trading/spices-herbs" },
      { label: "Palm Oil Products", href: "/international-trading/palm-oil" },
      { label: "Coffee & Cocoa", href: "/international-trading/coffee-cocoa" },
      { label: "Five more categories", href: "/international-trading#categories" },
    ],
  },
  {
    key: "travel",
    name: "Tours & Travel",
    href: "/tours-travel",
    summary: "Help with tickets, hotels, tour packages, airport transfers and travel guidance across Indonesia.",
    services: [
      { label: "Ticket & Hotel", href: "/tours-travel#ticket-hotel" },
      { label: "Tour Package", href: "/tours-travel#tour-package" },
      { label: "Airport Drop & Pick Up", href: "/tours-travel#airport-transfer" },
      { label: "Travel Guide", href: "/tours-travel#travel-guide" },
    ],
  },
];

export const getDivision = (key: DivisionKey) => divisions.find((d) => d.key === key)!;
