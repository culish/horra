import { Suspense, type ComponentProps } from "react";
import { connection } from "next/server";
import { snapConfig } from "@/lib/payments/config";
import { ServicePayment } from "./ServicePayment";

/**
 * Midtrans keys are read per request (not at build time), so turning payments on only needs the
 * environment variables and a restart. The rest of the page stays statically prerendered.
 */
async function Live(props: Omit<ComponentProps<typeof ServicePayment>, "snap">) {
  await connection();
  return <ServicePayment {...props} snap={snapConfig()} />;
}

export function ServicePaymentSlot(props: Omit<ComponentProps<typeof ServicePayment>, "snap">) {
  return (
    <Suspense fallback={<div className="h-[34rem] animate-pulse rounded-[6px] border border-navy/10 bg-white" />}>
      <Live {...props} />
    </Suspense>
  );
}
