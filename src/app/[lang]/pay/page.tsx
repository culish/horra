import { Suspense } from "react";
import { ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/sections";
import { Container, Section, TextLink } from "@/components/ui/primitives";
import { PayButton } from "@/components/payments/PayButton";
import { verifyLinkToken } from "@/lib/payments/links";
import { getLocale, getT } from "@/i18n/server";
import { fmt } from "@/lib/fmt";
import { formatDate, formatIdr } from "@/lib/format";
import { clientKey, isProduction, midtransConfigured, snapScriptUrl } from "@/lib/payments/midtrans";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({
    title: t.pay.invoice.metaTitle,
    description: t.pay.invoice.metaDescription,
    path: "/pay",
    noindex: true,
  });
}

export default async function PayPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const t = await getT();
  const p = t.pay.invoice;
  return (
    <>
      <PageHero crumbs={[{ label: t.common.home, href: "/" }, { label: p.crumb }]} title={p.title} lead={p.lead} />
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

async function Problem({ title, children }: { title: string; children: React.ReactNode }) {
  const t = await getT();
  return (
    <div className="rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10">
      <h2 id="invoice-title" className="text-title font-semibold text-navy">
        {title}
      </h2>
      <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>
      <p className="mt-6">
        <TextLink href="/contact">{t.common.contactOurTeam}</TextLink>
      </p>
    </div>
  );
}

async function Invoice({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const raw = (await searchParams).t;
  const token = Array.isArray(raw) ? raw[0] : raw;
  const result = verifyLinkToken(token);
  const p = (await getT()).pay.invoice;
  const locale = await getLocale();

  if (!result.ok) {
    if (result.reason === "not_configured") return <Problem title={p.notConfiguredTitle}>{p.notConfiguredText}</Problem>;
    if (result.reason === "expired")
      return <Problem title={p.expiredTitle}>{fmt(p.expiredText, { invoice: result.link?.invoice ?? "" })}</Problem>;
    return <Problem title={p.invalidTitle}>{p.invalidText}</Problem>;
  }

  const { link } = result;
  const key = clientKey();
  const rows: [string, string][] = [
    [p.invoice, link.invoice],
    [p.billedTo, link.customerName],
    [p.for, link.description],
    [p.validUntil, formatDate(new Date(link.expiresAt * 1000), locale)],
  ];

  return (
    <div className="rounded-[6px] border border-navy/10 bg-white p-6 sm:p-10">
      {!isProduction() && (
        <p className="mb-6 rounded-[3px] bg-gold/20 px-3 py-2 text-sm font-semibold text-gold-ink">
          {p.sandbox}
        </p>
      )}
      <h2 id="invoice-title" className="text-title font-semibold text-navy">
        {p.details}
      </h2>
      <dl className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm text-stone">{k}</dt>
            <dd className="font-medium break-words text-charcoal sm:col-span-2">{v}</dd>
          </div>
        ))}
        <div className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm text-stone sm:self-center">{p.amountDue}</dt>
          <dd className="text-headline font-semibold text-navy sm:col-span-2">{formatIdr(link.amount, locale)}</dd>
        </div>
      </dl>

      <div className="mt-8">
        {midtransConfigured() && key ? (
          <PayButton token={token as string} clientKey={key} scriptUrl={snapScriptUrl()} />
        ) : (
          <p className="rounded-[4px] bg-sand p-5 text-ink-soft">
            {p.notOn}
          </p>
        )}
      </div>

      <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-stone">
        <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-forest" />
        {p.secure}
      </p>
    </div>
  );
}
