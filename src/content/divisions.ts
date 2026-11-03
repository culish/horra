import type { Messages } from "@/i18n/messages";

export type DivisionKey = "consulting" | "trading" | "travel";

export type Division = {
  key: DivisionKey;
  name: string;
  href: string;
  summary: string;
  services: { label: string; href: string }[];
};

const structure: { key: DivisionKey; href: string; services: string[] }[] = [
  { key: "consulting", href: "/business-consulting", services: ["/visa-immigration", "/business-setup"] },
  {
    key: "trading",
    href: "/international-trading",
    services: [
      "/international-trading/spices-herbs",
      "/international-trading/palm-oil",
      "/international-trading/coffee-cocoa",
      "/international-trading#categories",
    ],
  },
  {
    key: "travel",
    href: "/tours-travel",
    services: [
      "/tours-travel#ticket-hotel",
      "/tours-travel#tour-package",
      "/tours-travel#airport-transfer",
      "/tours-travel#travel-guide",
    ],
  },
];

export const getDivisions = (t: Messages): Division[] =>
  structure.map((d) => ({
    key: d.key,
    href: d.href,
    name: t.divisions[d.key].name,
    summary: t.divisions[d.key].summary,
    services: d.services.map((href, i) => ({ href, label: t.divisions[d.key].services[i] ?? href })),
  }));
