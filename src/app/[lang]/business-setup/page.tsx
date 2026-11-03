import Link from "@/components/ui/Link";
import { Building2, Building, FileBadge, MapPinned } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { businessSetupServices, sources } from "@/content/consulting";
import { getT } from "@/i18n/server";
import { ServicePaymentSlot } from "@/components/payments/PaymentSlot";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { ServiceCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { DisclaimerNotice, OfficialSources } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({ title: t.setup.metaTitle, description: t.setup.metaDescription, path: "/business-setup" });
}

const icons = { "pt-pma": Building2, "local-pt": Building, "nib-oss": FileBadge, "virtual-office": MapPinned } as const;

export default async function BusinessSetupPage() {
  const t = await getT();
  const b = t.setup;
  return (
    <>
      <PageHero
        division="consulting"
        label={b.label}
        crumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.items.consulting, href: "/business-consulting" },
          { label: b.title },
        ]}
        title={b.title}
        lead={b.lead}
      >
        <ButtonLink href="#inquiry">{t.common.requestConsultation}</ButtonLink>
        <ButtonLink href="#pay-online" variant="outline">
          {t.pay.service.title}
        </ButtonLink>
      </PageHero>

      <Section labelledBy="services-title">
        <Container>
          <SectionHeader
            id="services-title"
            title={b.servicesTitle}
            intro={b.servicesIntro}
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {businessSetupServices.map((s) => (
              <ServiceCard
                key={s.id}
                id={s.id}
                icon={icons[s.id as keyof typeof icons]}
                title={t.services.setup[s.id].name}
                text={t.services.setup[s.id].description}
              />
            ))}
          </div>
          <DisclaimerNotice className="mt-16" title={b.noGuaranteeTitle}>
            <p>{b.noGuaranteeText}</p>
          </DisclaimerNotice>
        </Container>
      </Section>

      <Section surface="white" labelledBy="questions-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 id="questions-title" className="text-headline font-semibold text-balance text-navy">
                {b.questionsTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{b.questionsIntro}</p>
              <OfficialSources className="mt-10" sources={sources(t, ["oss"])} />
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {b.questions.map((q) => (
                <li key={q} className="border-b border-navy/10 py-5 text-lg text-navy first:border-t">
                  {q}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section labelledBy="process-title">
        <Container>
          <SectionHeader
            id="process-title"
            title={b.howTitle}
            intro={
              <>
                {b.howIntroBefore}{" "}
                <Link
                  href="/visa-immigration/investor-kitas"
                  className="font-semibold text-forest underline underline-offset-4"
                >
                  {t.nav.links.kitas}
                </Link>
                {b.howIntroAfter}
              </>
            }
          />
          <ProcessSteps
            className="mt-14"
            steps={t.company.process}
            note={b.howNote}
          />
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                {b.inquiryTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{b.inquiryText}</p>
            </div>
            <div className="space-y-8 lg:col-span-8">
              <InquiryForm variant="business-setup" />
              <ServicePaymentSlot
                title={b.payTitle}
                intro={b.payText}
                services={["pt-pma", "local-pt", "nib-oss", "virtual-office", "other"]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={b.ctaTitle}
        text={b.ctaText}
        primary={{ label: t.nav.groups.visa, href: "/visa-immigration" }}
        secondary={{ label: t.common.contactOurTeam, href: "/contact" }}
      />
    </>
  );
}
