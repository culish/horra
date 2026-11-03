import { Suspense } from "react";
import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/sections";
import { Container, Section, TextLink } from "@/components/ui/primitives";
import { PayButton } from "@/components/payments/PayButton";
import { formatRupiah, verifyLinkToken } from "@/lib/payments/links";
import { clientKey, isProduction, midtransConfigured, snapScriptUrl } from "@/lib/payments/midtrans";

export const metadata: Metadata = {
  title: "Pay an invoice",
  description: "Secure online payment for an invoice from PT. Horra Prime Group.",
  robots: { index: false, follow: false },
};

export default function PayPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Payment" }]}
        title="Pay your invoice"
        lead="Pay securely by bank transfer (virtual account), QRIS, e-wallet or card. Payments are processed by Midtrans."
      />
      <Section labelledBy="invoice-title">
        <Container>
          <div className="mx-auto max-w-[40rem]">
            <Suspense fallback={<div className="h-80 animate-pulse rounded-[6px] border border-navy/10 bg-white" />}>
              <Invoice searchParams={searchParams} />
            </Suspense>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Problem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10">
      <h2 id="invoice-title" className="text-title font-semibold text-navy">
        {title}
      </h2>
      <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>
      <p className="mt-6">
        <TextLink href="/contact">Contact our team</TextLink>
      </p>
    </div>
  );
}

async function Invoice({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const t = (await searchParams).t;
  const result = verifyLinkToken(Array.isArray(t) ? t[0] : t);

  if (!result.ok) {
    if (result.reason === "not_configured")
      return <Problem title="Online payment is not available yet">Please contact us to arrange payment.</Problem>;
    if (result.reason === "expired")
      return (
        <Problem title="This payment link has expired">
          Invoice {result.link?.invoice} can no longer be paid with this link. Please contact us for a new one.
        </Problem>
      );
    return (
      <Problem title="Payment link not recognised">
        This link is incomplete or has been changed. Please open the link exactly as you received it, or ask us to send
        it again.
      </Problem>
    );
  }

  const { link } = result;
  const key = clientKey();
  const rows: [string, string][] = [
    ["Invoice", link.invoice],
    ["Billed to", link.customerName],
    ["For", link.description],
    [
      "Link valid until",
      new Date(link.expiresAt * 1000).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Jakarta",
      }),
    ],
  ];

  return (
    <div className="rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10">
      {!isProduction() && (
        <p className="mb-6 rounded-[3px] bg-gold/20 px-3 py-2 text-sm font-semibold text-gold-ink">
          Sandbox mode: test payments only, no real money is moved.
        </p>
      )}
      <h2 id="invoice-title" className="text-title font-semibold text-navy">
        Invoice details
      </h2>
      <dl className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm text-stone">{k}</dt>
            <dd className="font-medium break-words text-charcoal sm:col-span-2">{v}</dd>
          </div>
        ))}
        <div className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm text-stone sm:self-center">Amount due</dt>
          <dd className="text-headline font-semibold text-navy sm:col-span-2">{formatRupiah(link.amount)}</dd>
        </div>
      </dl>

      <div className="mt-8">
        {midtransConfigured() && key ? (
          <PayButton token={(Array.isArray(t) ? t[0] : t) as string} clientKey={key} scriptUrl={snapScriptUrl()} />
        ) : (
          <p className="rounded-[4px] bg-sand p-5 text-ink-soft">
            Online payment is not switched on yet. Please contact us to arrange payment for this invoice.
          </p>
        )}
      </div>

      <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-stone">
        <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-forest" />
        Card and bank details are entered in the Midtrans payment window and are never seen or stored by Horra Prime
        Group.
      </p>
    </div>
  );
}
