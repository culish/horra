import type { Messages } from "@/i18n/messages";

/**
 * International Trading categories.
 *
 * Product lists come from the company profile. For categories the profile names without a
 * product list, `groups` is empty and the page shows a "range confirmed on request" state —
 * do not invent a catalogue. No specifications, grades, certifications, origins, prices,
 * MOQs or shipping terms are stated anywhere: they are confirmed per inquiry.
 * Names and descriptions are in the dictionaries (trading.categories / trading.products).
 */

export type CategoryIcon = "spices" | "palm" | "coffee" | "coconut" | "petrochemical" | "coal" | "seafood" | "minerals";

export type ProductId = keyof Messages["trading"]["products"];
export type CategorySlug = keyof Messages["trading"]["categories"];
export type GroupKey = keyof Messages["trading"]["groups"];

export type Product = { id: ProductId; code?: string };

export type TradingCategory = {
  slug: CategorySlug;
  icon: CategoryIcon;
  groups: { label?: GroupKey; items: Product[] }[];
};

const p = (id: ProductId, code?: string): Product => ({ id, code });

export const tradingCategories: TradingCategory[] = [
  {
    slug: "spices-herbs",
    icon: "spices",
    groups: [
      {
        items: [
          p("ginger"),
          p("cinnamon"),
          p("black-pepper"),
          p("cloves"),
          p("star-anise"),
          p("nutmeg"),
          p("mace"),
          p("cardamom"),
        ],
      },
    ],
  },
  {
    slug: "palm-oil",
    icon: "palm",
    groups: [
      {
        label: "palm",
        items: [p("crude-palm-oil", "CPO"), p("refined-palm-oil", "RPO"), p("rbd-palm-olein"), p("rbd-palm-stearin")],
      },
      {
        label: "kernel",
        items: [p("palm-kernel-oil", "PKO"), p("palm-kernel-expeller", "PKE"), p("palm-kernel-shell", "PKS")],
      },
      {
        label: "byproducts",
        items: [p("palm-fatty-acid-distillate", "PFAD"), p("palm-acid-oil", "PAO"), p("palm-oil-mill-effluent", "POME")],
      },
    ],
  },
  {
    slug: "coffee-cocoa",
    icon: "coffee",
    groups: [
      {
        label: "coffee",
        items: [
          p("arabica-coffee-beans"),
          p("robusta-coffee-beans"),
          p("green-coffee-beans"),
          p("roasted-coffee-beans"),
          p("ground-coffee"),
        ],
      },
      {
        label: "cocoa",
        items: [p("cocoa-beans"), p("cocoa-powder"), p("cocoa-butter"), p("cocoa-liquor-cocoa-mass"), p("cocoa-cake")],
      },
    ],
  },
  { slug: "coconut", icon: "coconut", groups: [] },
  { slug: "petrochemical", icon: "petrochemical", groups: [] },
  { slug: "coal-minerals", icon: "coal", groups: [] },
  { slug: "seafood-marine", icon: "seafood", groups: [] },
  { slug: "minerals", icon: "minerals", groups: [] },
];

export const getCategory = (slug: string) => tradingCategories.find((c) => c.slug === slug);

export const productList = (c: TradingCategory) => c.groups.flatMap((g) => g.items);

export const productCount = (c: TradingCategory) => c.groups.reduce((n, g) => n + g.items.length, 0);

/** "Crude Palm Oil (CPO)" */
export const productLabel = (item: Product, names: Messages["trading"]["products"]) =>
  item.code ? `${names[item.id]} (${item.code})` : names[item.id];
