import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { investorKitasFaqs, investorKitasHelp, investorKitasPathway, officialSources } from "@/content/consulting";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ServiceCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { ImmigrationDisclaimer, OfficialSources } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata = pageMetadata({
  title: "Investor KITAS",
  description:
    "Assistance with the Investor KITAS stay permit for foreign nationals investing in an Indonesian company, coordinated with PT PMA setup. Subject to current regulations.",
  path: "/visa-immigration/investor-kitas",
});

export default function InvestorKitasPage() {
  return (
    <>
      <PageHero
        division="consulting"
        label="Visa & Immigration"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Visa & Immigration", href: "/visa-immigration" },
          { label: "Investor KITAS" },
        ]}
        title="Investor KITAS"
        lead="A limited stay permit for foreign nationals who invest in an Indonesian company, typically a PT PMA. We help you check eligibility and coordinate the company setup and the application."
      >
        <ButtonLink href="#inquiry">Request a consultation</ButtonLink>
        <ButtonLink href="/business-setup" variant="outline">
          Business setup
        </ButtonLink>
      </PageHero>

      <Section labelledBy="help-title">
        <Container>
          <SectionHeader
            id="help-title"
            title="How we can help"
            intro="Eligibility depends on your investment, your company's structure and the immigration rules in force when you apply."
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {investorKitasHelp.map((h) => (
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
                A typical pathway
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                The order below is common, but your route may differ. If you are already in Indonesia on a C1 visa,
                conversion may be possible once the company is established and the requirements are met.
              </p>
              <p className="mt-5 leading-relaxed text-ink-soft">
                Read more about the{" "}
                <Link
                  href="/visa-immigration/c1-tourist-visa"
                  className="font-semibold text-forest underline underline-offset-4"
                >
                  C1 Tourist Visa
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ProcessSteps steps={investorKitasPathway} layout="column" />
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
                Questions about Investor KITAS
              </h2>
              <OfficialSources className="mt-10" sources={[officialSources.immigration, officialSources.oss]} />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={investorKitasFaqs} />
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                Discuss your investment plans
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                Tell us your nationality and what you plan to invest in. We will explain the current requirements and
                the steps involved.
              </p>
            </div>
            <div className="lg:col-span-8">
              <InquiryForm
                variant="visa"
                defaults={{ service: "investor-kitas", purpose: "investment-or-company-setup" }}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Still need to set up your company?"
        text="Our business setup team can help establish a PT PMA and register it through OSS."
        primary={{ label: "Business Setup", href: "/business-setup" }}
        secondary={{ label: "Contact Our Team", href: "/contact" }}
      />
    </>
  );
}
