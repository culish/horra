import { cacheLife } from "next/cache";

/**
 * Copyright year. Cached for a day so pages stay statically prerendered while the year
 * still rolls over on its own after a new year (on the next revalidation or deploy).
 */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
