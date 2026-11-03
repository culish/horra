import { Suspense } from "react";
import { pageMetadata } from "@/lib/metadata";
import { getT } from "@/i18n/server";
import { fmt } from "@/lib/fmt";
import { PageHero } from "@/components/sections/sections";
import { Container, Section, TextLink } from "@/components/ui/primitives";
import { getStatus, isPaid, midtransConfigured } from "@/lib/payments/midtrans";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({
    title: t.pay.finish.metaTitle,
    description: t.pay.finish.metaDescription,
    path: "/pay/finish",
    noindex: true,
  });
}

/** Midtrans sends the customer here after some payment methods (e.g. e-wallet apps). */
export default async function FinishPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const f = (await getT()).pay.finish;
  const home = (await getT()).common.home;
  return (
    <>
      <PageHero crumbs={[{ label: home, href: "/" }, { label: f.title }]} title={f.title} lead={f.lead} />
      <Section labelledBy="status-title">
        <Container>
          <div className="mx-auto max-w-[40rem] rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10">
            <Suspense fallback={<p className="text-ink-soft">{f.checking}</p>}>
              <Status searchParams={searchParams} />
            </Suspense>
            <p className="mt-6">
              <TextLink href="/contact">{f.questions}</TextLink>
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

  const f = (await getT()).pay.finish;
  let title = f.confirmingTitle;
  let body = f.confirmingText;

  if (orderId && /^[A-Za-z0-9._~-]{1,50}$/.test(orderId) && midtransConfigured()) {
    try {
      const tx = await getStatus(orderId);
      if (tx && isPaid(tx)) {
        title = f.paidTitle;
        body = fmt(f.paidText, { ref: tx.custom?.invoice ?? f.yourOrder });
      } else if (tx?.transactionStatus === "pending") {
        title = f.pendingTitle;
        body = f.pendingText;
      } else if (tx && ["deny", "cancel", "expire", "failure"].includes(tx.transactionStatus)) {
        title = f.failedTitle;
        body = f.failedText;
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
