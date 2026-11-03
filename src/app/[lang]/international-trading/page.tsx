import { pageMetadata } from "@/lib/metadata";
import { tradingCategories } from "@/content/trading";
import { getT } from "@/i18n/server";
import { ServicePaymentSlot } from "@/components/payments/PaymentSlot";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { ProductCategoryCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { TradeDisclaimer } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({
    title: t.trading.metaTitle,
    description: t.trading.metaDescription,
    path: "/international-trading",
  });
}

export default async function InternationalTradingPage() {
  const t = await getT();
  const tr = t.trading;
  return (
    <>
      <PageHero
        division="trading"
        crumbs={[{ label: t.common.home, href: "/" }, { label: tr.title }]}
        title={tr.title}
        lead={tr.lead}
      >
        <ButtonLink href="#categories">{tr.browse}</ButtonLink>
        <ButtonLink href="#inquiry" variant="outline">
          {tr.sendInquiry}
        </ButtonLink>
      </PageHero>

      <Section id="categories" labelledBy="categories-title">
        <Container>
          <SectionHeader
            id="categories-title"
            title={tr.categoriesTitle}
            intro={tr.categoriesIntro}
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tradingCategories.map((c) => (
              <ProductCategoryCard key={c.slug} category={c} />
            ))}
          </div>
          <TradeDisclaimer className="mt-12" />
        </Container>
      </Section>

      <Section surface="white" labelledBy="ask-title">
        <Container>
          <SectionHeader
            id="ask-title"
            title={tr.askTitle}
            intro={tr.askIntro}
          />
          <dl className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {tr.askFor.map((a) => (
              <div key={a.title} className="border-t border-navy/15 pt-6">
                <dt className="text-lg font-semibold text-navy">{a.title}</dt>
                <dd className="mt-2.5 leading-relaxed text-ink-soft">{a.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section labelledBy="process-title">
        <Container>
          <SectionHeader id="process-title" title={tr.processTitle} />
          <ProcessSteps
            className="mt-14"
            steps={tr.process}
            note={tr.processNote}
          />
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                {tr.sendInquiry}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{tr.inquiryText}</p>
            </div>
            <div className="space-y-8 lg:col-span-8">
              <InquiryForm variant="trading" />
              <ServicePaymentSlot
                title={tr.payTitle}
                intro={tr.payText}
                services={["trade-deposit", "trade-invoice", "other"]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={tr.ctaTitle}
        text={tr.ctaText}
        primary={{ label: t.nav.items.travel, href: "/tours-travel" }}
        secondary={{ label: t.nav.groups.visa, href: "/visa-immigration" }}
      />
    </>
  );
}
