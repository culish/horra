import { tradingCategories } from "./trading";

/** Every public page, without the language prefix. Used by the sitemap. */
export const staticRoutes = [
  "/",
  "/about",
  "/business-consulting",
  "/visa-immigration",
  "/visa-immigration/apply",
  "/visa-immigration/c1-tourist-visa",
  "/visa-immigration/investor-kitas",
  "/business-setup",
  "/international-trading",
  ...tradingCategories.map((c) => `/international-trading/${c.slug}`),
  "/tours-travel",
  "/contact",
  "/privacy-policy",
  "/terms",
];
