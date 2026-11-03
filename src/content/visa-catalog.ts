/**
 * Online visa catalogue and prices.
 *
 * Prices (IDR, per applicant) follow the public price list of visas-indonesia.com as of
 * November 2026. Where that list shows a range, `standard` is the lower and `express` the higher
 * price. Names and descriptions live in the dictionaries (apply.visas.<id>).
 *
 * The server always recalculates the amount from this file — the browser never sets a price.
 */

export type VisaCategory = "B" | "C" | "D" | "E";
export type VisaTier = "standard" | "express";

export type VisaProduct = {
  id: string;
  /** Official code shown as a badge */
  code: string;
  category: VisaCategory;
  standard: number;
  express?: number;
};

export const visaCatalog: VisaProduct[] = [
  { id: "b1", code: "B1", category: "B", standard: 900_000 },
  { id: "b1-ext", code: "B1+", category: "B", standard: 1_050_000, express: 1_350_000 },
  { id: "c1", code: "C1", category: "C", standard: 2_700_000, express: 4_350_000 },
  { id: "c2", code: "C2·C6·C10", category: "C", standard: 3_750_000, express: 5_400_000 },
  { id: "c-ext", code: "C1/D1+", category: "C", standard: 1_900_000, express: 3_900_000 },
  { id: "c12", code: "C12", category: "C", standard: 6_000_000, express: 7_600_000 },
  { id: "c9", code: "C9", category: "C", standard: 3_750_000, express: 5_400_000 },
  { id: "c16", code: "C16", category: "C", standard: 4_800_000, express: 6_500_000 },
  { id: "artist", code: "C·Art", category: "C", standard: 3_950_000, express: 5_500_000 },
  { id: "c-titre", code: "C·TdV", category: "C", standard: 4_350_000, express: 5_900_000 },
  { id: "d-multi", code: "D1·D2", category: "D", standard: 5_900_000, express: 11_300_000 },
  { id: "d12", code: "D12", category: "D", standard: 8_750_000, express: 13_100_000 },
  { id: "e33g", code: "E33G", category: "E", standard: 13_000_000, express: 16_700_000 },
  { id: "e33f", code: "E33F", category: "E", standard: 15_100_000, express: 19_700_000 },
  { id: "e33e", code: "E33E", category: "E", standard: 39_500_000, express: 60_100_000 },
  { id: "e31", code: "E31", category: "E", standard: 13_000_000, express: 16_700_000 },
  { id: "e31-2y", code: "E31·2Y", category: "E", standard: 16_100_000, express: 20_700_000 },
  { id: "e33", code: "E33", category: "E", standard: 39_500_000, express: 60_100_000 },
  { id: "kitas-ext", code: "KITAS+", category: "E", standard: 12_500_000, express: 13_500_000 },
];

export const visaCategories: VisaCategory[] = ["B", "C", "D", "E"];

export const getVisa = (id: unknown) => visaCatalog.find((v) => v.id === id);

/** Special discount for citizens of Bangladesh (ISO 3166-1 alpha-2: BD). */
export const BANGLADESH = "BD";
export const BANGLADESH_DISCOUNT = 0.05;

export const basePrice = (visa: VisaProduct, tier: VisaTier) =>
  tier === "express" && visa.express ? visa.express : visa.standard;

/** Price after any nationality discount. Rounded down to whole rupiah. */
export function quote(visa: VisaProduct, tier: VisaTier, nationality?: string) {
  const base = basePrice(visa, tier);
  const discount = nationality === BANGLADESH ? Math.round(base * BANGLADESH_DISCOUNT) : 0;
  return { base, discount, total: base - discount };
}

export const bangladeshPrice = (amount: number) => amount - Math.round(amount * BANGLADESH_DISCOUNT);

export const lowestPrice = Math.min(...visaCatalog.map((v) => v.standard));
