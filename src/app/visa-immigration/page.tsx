import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { c1Summary, officialSources, visaServices } from "@/content/consulting";
import { PageHero, CTASection } from "@/components/sections/sections";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ServiceCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { ImmigrationDisclaimer, OfficialSources } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata = pageMetadata({
  title: "Visa & Immigration",
  description:
    "Assistance with Indonesian tourist and business visas, Investor KITAS, Family KITAS, work permits and visa extensions. Decisions rest with the immigration authorities.",
  path: "/visa-immigration",
});

const faqs = [
  {
    q: "Which visa do I need?",
    a: "That depends on your nationality, the purpose of your stay and how long you plan to stay. Tell us your plans and we will explain the options that appear to fit under current rules.",
  },
  {
    q: "Do you submit the application for me?",
    a: "We help you prepare and check your documents and support the application through the official channel. The decision is made by the Indonesian immigration authorities.",
  },
  {
    q: "What do your services cost?",
    a: "Fees depend on the service and your circumstances, and are discussed during your consultation. Government fees are set by the authorities and can change.",
  },
  {
    q: "Can you guarantee approval or timing?",
    a: "No. Approval, processing times, extensions and conversions are decided by the authorities and depend on the regulations in force.",
  },
];

export default function VisaImmigrationPage() {
  return (
    <>
      <PageHero
        division="consulting"
        label="Business Consulting"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Business Consulting", href: "/business-consulting" },
          { label: "Visa & Immigration" },
        ]}
        title="Visa & Immigration"
        lead="Guidance on visas and stay permits for visiting, investing, working or living in Indonesia — and help preparing a complete application."
      >
        <ButtonLink href="#inquiry">Request a consultation</ButtonLink>
        <ButtonLink href="/visa-immigration/c1-tourist-visa" variant="outline">
          C1 Tourist Visa
        </ButtonLink>
      </PageHero>

      <Section labelledBy="services-title">
        <Container>
          <SectionHeader
            id="services-title"
            title="Visa and stay-permit services"
            intro="Choose a service to read more, or ask us which one fits your situation."
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visaServices.map((s) => (
              <ServiceCard
                key={s.id}
                title={s.name}
                text={s.description}
                href={s.href}
                linkLabel={s.href.includes("#inquiry") ? "Ask about this service" : "Read more"}
              />
            ))}
          </div>
          <ImmigrationDisclaimer className="mt-16" />
        </Container>
      </Section>

      <Section surface="white" labelledBy="featured-title">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-[6px] bg-navy p-8 text-ivory sm:p-10" data-surface="dark">
              <h2 id="featured-title" className="text-title font-semibold">
                C1 Tourist Visa
              </h2>
              <p className="mt-3 leading-relaxed text-mist">
                A single-entry visit visa for tourism, family visits, exhibitions and business visits that do not
                involve employment.
              </p>
              <dl className="mt-7 grid gap-3 sm:grid-cols-3">
                {c1Summary.map((item) => (
                  <div key={item.term} className="border-t border-ivory/20 pt-3">
                    <dt className="text-sm text-mist">{item.term}</dt>
                    <dd className="mt-1 text-[0.9375rem] font-semibold">{item.detail}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/visa-immigration/c1-tourist-visa"
                className="mt-auto inline-flex items-center gap-2 pt-9 font-semibold text-gold underline-offset-4 hover:underline"
              >
                Read about the C1 visa
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </article>
            <article className="flex flex-col rounded-[6px] border border-navy/10 bg-sand p-8 sm:p-10">
              <h2 className="text-title font-semibold text-navy">Investor KITAS</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                A limited stay permit for foreign nationals investing in an Indonesian company. We can coordinate it
                with setting up your PT PMA.
              </p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                Moving from a C1 visa to an Investor KITAS may be possible once a PT PMA is established and the
                requirements are met — subject to current law and approval by the authorities.
              </p>
              <Link
                href="/visa-immigration/investor-kitas"
                className="mt-auto inline-flex items-center gap-2 pt-9 font-semibold text-forest underline-offset-4 hover:underline"
              >
                Read about Investor KITAS
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </article>
          </div>
        </Container>
      </Section>

      <Section labelledBy="faq-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="faq-title" className="text-headline font-semibold text-navy">
                Common questions
              </h2>
              <OfficialSources className="mt-10" sources={[officialSources.immigration, officialSources.evisa]} />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                Need help understanding your visa options?
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                Share your travel purpose and nationality so our team can explain the next steps and the information you
                may need.
              </p>
            </div>
            <div className="lg:col-span-8">
              <InquiryForm variant="visa" />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Planning to invest or set up a company?"
        text="Our business setup team can help establish your PT PMA or local PT."
        primary={{ label: "Business Setup", href: "/business-setup" }}
        secondary={{ label: "Contact Our Team", href: "/contact" }}
      />
    </>
  );
}
