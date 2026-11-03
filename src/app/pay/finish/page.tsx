import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/sections/sections";
import { Container, Section, TextLink } from "@/components/ui/primitives";
import { getStatus, isPaid, midtransConfigured } from "@/lib/payments/midtrans";

export const metadata: Metadata = {
  title: "Payment status",
  description: "Status of your payment to PT. Horra Prime Group.",
  robots: { index: false, follow: false },
};

/** Midtrans sends the customer here after some payment methods (e.g. e-wallet apps). */
export default function FinishPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Payment status" }]}
        title="Payment status"
        lead="Thank you for paying online with Horra Prime Group."
      />
      <Section labelledBy="status-title">
        <Container>
          <div className="mx-auto max-w-[40rem] rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10">
            <Suspense fallback={<p className="text-ink-soft">Checking your payment…</p>}>
              <Status searchParams={searchParams} />
            </Suspense>
            <p className="mt-6">
              <TextLink href="/contact">Questions? Contact our team</TextLink>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

async function Status({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const raw = (await searchParams).order_id;
  const orderId = Array.isArray(raw) ? raw[0] : raw;

  let title = "We are confirming your payment";
  let body = "If you completed the payment, our team is notified automatically. You do not need to pay again.";

  if (orderId && /^[A-Za-z0-9._~-]{1,50}$/.test(orderId) && midtransConfigured()) {
    try {
      const tx = await getStatus(orderId);
      if (tx && isPaid(tx)) {
        title = "Payment received";
        body = `Thank you. Payment for ${tx.custom?.invoice ?? "your invoice"} was successful.`;
      } else if (tx?.transactionStatus === "pending") {
        title = "Waiting for your payment";
        body = "Your payment has not arrived yet. Please follow the payment instructions you were given.";
      } else if (tx && ["deny", "cancel", "expire", "failure"].includes(tx.transactionStatus)) {
        title = "Payment not completed";
        body = "This payment did not go through and nothing was charged. You can try again from your payment link.";
      }
    } catch {
      /* fall back to the neutral message */
    }
  }

  return (
    <>
      <h2 id="status-title" className="text-title font-semibold text-navy">
        {title}
      </h2>
      <p className="mt-3 leading-relaxed text-ink-soft">{body}</p>
    </>
  );
}
