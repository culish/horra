import { tradingCategories } from "./trading";

/** Every public page. Used by the sitemap (and handy for link checks). */
export const staticRoutes = [
  "/",
  "/about",
  "/business-consulting",
  "/visa-immigration",
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
