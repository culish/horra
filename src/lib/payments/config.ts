import { clientKey, isProduction, midtransConfigured, snapScriptUrl } from "./midtrans";

/** Browser-safe Midtrans settings for client payment components, or null when payments are off. */
export function snapConfig() {
  const key = clientKey();
  if (!midtransConfigured() || !key) return null;
  return { clientKey: key, scriptUrl: snapScriptUrl(), sandbox: !isProduction() };
}
