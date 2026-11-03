import Link from "@/components/ui/Link";
import { pageMetadata } from "@/lib/metadata";
import { sources } from "@/content/consulting";
import { getT } from "@/i18n/server";
import { ServicePaymentSlot } from "@/components/payments/PaymentSlot";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ServiceCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { ImmigrationDisclaimer, OfficialSources } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({
    title: t.kitas.metaTitle,
    description: t.kitas.metaDescription,
    path: "/visa-immigration/investor-kitas",
  });
}

export default async function InvestorKitasPage() {
  const t = await getT();
  const k = t.kitas;
  return (
    <>
      <PageHero
        division="consulting"
        label={k.label}
        crumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.groups.visa, href: "/visa-immigration" },
          { label: k.title },
        ]}
        title={k.title}
        lead={k.lead}
      >
        <ButtonLink href="#inquiry">{t.common.requestConsultation}</ButtonLink>
        <ButtonLink href="/business-setup" variant="outline">
          {k.setupButton}
        </ButtonLink>
      </PageHero>

      <Section labelledBy="help-title">
        <Container>
          <SectionHeader
            id="help-title"
            title={k.helpTitle}
            intro={k.helpIntro}
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {k.help.map((h) => (
              <ServiceCard key={h.title} title={h.title} text={h.text} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="white" labelledBy="pathway-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 id="pathway-title" className="text-headline font-semibold text-balance text-navy">
                {k.pathwayTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{k.pathwayIntro}</p>
              <p className="mt-5 leading-relaxed text-ink-soft">
                {k.readMoreBefore}{" "}
                <Link
                  href="/visa-immigration/c1-tourist-visa"
                  className="font-semibold text-forest underline underline-offset-4"
                >
                  {t.nav.links.c1}
                </Link>
                {k.readMoreAfter}
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ProcessSteps steps={k.pathway} layout="column" />
            </div>
          </div>
          <ImmigrationDisclaimer className="mt-14" />
        </Container>
      </Section>

      <Section labelledBy="faq-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="faq-title" className="text-headline font-semibold text-navy">
                {k.faqTitle}
              </h2>
              <OfficialSources className="mt-10" sources={sources(t, ["immigration", "oss"])} />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={k.faqs} />
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                {k.inquiryTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{k.inquiryText}</p>
            </div>
            <div className="space-y-8 lg:col-span-8">
              <InquiryForm
                variant="visa"
                defaults={{ service: "investor-kitas", purpose: "investment-or-company-setup" }}
              />
              <ServicePaymentSlot
                title={t.visa.payTitle}
                intro={t.visa.payText}
                services={["investor-kitas", "visa-other"]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={k.ctaTitle}
        text={k.ctaText}
        primary={{ label: t.nav.groups.setup, href: "/business-setup" }}
        secondary={{ label: t.common.contactOurTeam, href: "/contact" }}
      />
    </>
  );
}
