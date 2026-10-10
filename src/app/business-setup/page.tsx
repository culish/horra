import Link from "next/link";
import { Building2, Building, FileBadge, MapPinned } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { businessSetupQuestions, businessSetupServices, officialSources } from "@/content/consulting";
import { generalProcess } from "@/content/company";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { ServiceCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { DisclaimerNotice, OfficialSources } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata = pageMetadata({
  title: "Business Setup in Indonesia",
  description:
    "Assistance with PT PMA and local PT establishment, NIB registration through OSS, and virtual office services in Indonesia.",
  path: "/business-setup",
});

const icons = { "pt-pma": Building2, "local-pt": Building, "nib-oss": FileBadge, "virtual-office": MapPinned } as const;

export default function BusinessSetupPage() {
  return (
    <>
      <PageHero
        division="consulting"
        label="Business Consulting"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Business Consulting", href: "/business-consulting" },
          { label: "Business Setup" },
        ]}
        title="Business Setup"
        lead="Help establishing a company in Indonesia — a foreign-investment PT PMA or a local PT — and completing its business registration."
      >
        <ButtonLink href="#inquiry">Request a consultation</ButtonLink>
        <ButtonLink href="/visa-immigration/investor-kitas" variant="outline">
          Investor KITAS
        </ButtonLink>
      </PageHero>

      <Section labelledBy="services-title">
        <Container>
          <SectionHeader
            id="services-title"
            title="Company setup services"
            intro="Requirements such as permitted business fields, capital and licences depend on your activity and on current regulations. We confirm what applies to you during consultation."
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {businessSetupServices.map((s) => (
              <ServiceCard
                key={s.id}
                id={s.id}
                icon={icons[s.id as keyof typeof icons]}
                title={s.name}
                text={s.description}
              />
            ))}
          </div>
          <DisclaimerNotice className="mt-16" title="No fixed timelines or outcomes">
            <p>
              Company establishment involves government registrations and approvals. Timelines, fees and outcomes depend
              on your business and the authorities, and are not guaranteed. This page is general information, not legal
              advice.
            </p>
          </DisclaimerNotice>
        </Container>
      </Section>

      <Section surface="white" labelledBy="questions-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 id="questions-title" className="text-headline font-semibold text-balance text-navy">
                What we will ask you
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                A few details help us suggest the right company type and the steps involved.
              </p>
              <OfficialSources className="mt-10" sources={[officialSources.oss]} />
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {businessSetupQuestions.map((q) => (
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
            title="How we work with you"
            intro={
              <>
                Foreign investors often combine company setup with an{" "}
                <Link
                  href="/visa-immigration/investor-kitas"
                  className="font-semibold text-forest underline underline-offset-4"
                >
                  Investor KITAS
                </Link>
                . We can coordinate both.
              </>
            }
          />
          <ProcessSteps
            className="mt-14"
            steps={generalProcess}
            note="A general workflow. The documents, steps and timing depend on your business and are not guaranteed."
          />
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                Tell us about your business
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                Describe what you want to set up and how you prefer to be contacted. We will come back with the options
                and next steps.
              </p>
            </div>
            <div className="lg:col-span-8">
              <InquiryForm variant="business-setup" />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Also need a visa or stay permit?"
        text="Our immigration team works alongside business setup."
        primary={{ label: "Visa & Immigration", href: "/visa-immigration" }}
        secondary={{ label: "Contact Our Team", href: "/contact" }}
      />
    </>
  );
}
