import Link from "next/link";
import { ArrowRight, Building2, Stamp } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { businessSetupServices, visaServices } from "@/content/consulting";
import { generalProcess } from "@/content/company";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { ImmigrationDisclaimer } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata = pageMetadata({
  title: "Business Consulting",
  description:
    "Visa and immigration assistance and company setup in Indonesia — tourist and business visas, Investor KITAS, PT PMA, local PT, NIB & OSS and virtual office.",
  path: "/business-consulting",
});

const pillars = [
  {
    icon: Stamp,
    title: "Visa & Immigration",
    href: "/visa-immigration",
    text: "Help choosing a suitable visa or stay permit and preparing a complete application.",
    services: visaServices,
  },
  {
    icon: Building2,
    title: "Business Setup",
    href: "/business-setup",
    text: "Help establishing a company in Indonesia and completing its business registration.",
    services: businessSetupServices,
  },
];

const pathway = [
  { title: "Visit", text: "Come to Indonesia on a suitable visit visa, such as the C1, to explore the market." },
  { title: "Establish", text: "Set up a PT PMA and register the business through OSS." },
  { title: "Stay", text: "Where eligible, apply for an Investor KITAS linked to your investment." },
];

export default function BusinessConsultingPage() {
  return (
    <>
      <PageHero
        division="consulting"
        crumbs={[{ label: "Home", href: "/" }, { label: "Business Consulting" }]}
        title="Business Consulting"
        lead="Visa, stay-permit and company-setup assistance for people and businesses coming to Indonesia — from a first visit to establishing a company."
      >
        <ButtonLink href="#inquiry">Discuss your plans</ButtonLink>
        <ButtonLink href="/visa-immigration/c1-tourist-visa" variant="outline">
          C1 Tourist Visa
        </ButtonLink>
      </PageHero>

      <Section labelledBy="pillars-title">
        <Container>
          <SectionHeader
            id="pillars-title"
            title="Two areas of consulting"
            intro="Most clients come to us for one of these. Many need both, and we coordinate between them."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {pillars.map(({ icon: Icon, ...p }) => (
              <article key={p.title} className="flex flex-col rounded-[6px] border border-navy/10 bg-white p-7 sm:p-10">
                <Icon aria-hidden strokeWidth={1.6} className="size-7 text-forest" />
                <h3 className="mt-6 text-title font-semibold text-navy">
                  <Link href={p.href} className="underline-offset-4 hover:underline">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
                <ul className="mt-7 divide-y divide-navy/10 border-y border-navy/10">
                  {p.services.map((s) => (
                    <li key={s.id}>
                      <Link href={s.href} className="group flex items-center justify-between gap-4 py-3.5">
                        <span className="font-medium text-navy group-hover:text-forest">{s.name}</span>
                        <ArrowRight aria-hidden className="size-4 text-stone group-hover:text-forest" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="mt-7 font-semibold text-forest underline decoration-forest/30 underline-offset-[5px] hover:decoration-forest"
                >
                  {`Go to ${p.title}`}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="white" labelledBy="pathway-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 id="pathway-title" className="text-headline font-semibold text-balance text-navy">
                From a first visit to an investor stay permit
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                For investors, our two consulting areas often connect. This is one common route — whether it applies to
                you depends on your plans and the rules in force.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ProcessSteps steps={pathway} layout="column" />
              <ImmigrationDisclaimer className="mt-10" />
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="process-title">
        <Container>
          <SectionHeader id="process-title" title="How we work with you" />
          <ProcessSteps
            className="mt-14"
            steps={generalProcess}
            note="A general workflow: documents, steps and timing depend on the service and your circumstances, and are not guaranteed."
          />
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                Tell us about your plans
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                Tell us what you want to do in Indonesia — visit, invest, set up a company or relocate. We will explain
                the options and the information needed.
              </p>
            </div>
            <div className="lg:col-span-8">
              <InquiryForm variant="general" />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Looking to trade or travel instead?"
        text="Our other divisions handle commodity inquiries and travel arrangements."
        primary={{ label: "International Trading", href: "/international-trading" }}
        secondary={{ label: "Tours & Travel", href: "/tours-travel" }}
      />
    </>
  );
}
