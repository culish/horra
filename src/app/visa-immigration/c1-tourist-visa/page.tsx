import Link from "next/link";
import { Check, FileText } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { c1Documents, c1Faqs, c1Process, c1Purposes, c1Summary, officialSources } from "@/content/consulting";
import { PageHero, ProcessSteps } from "@/components/sections/sections";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { DisclaimerNotice, ImmigrationDisclaimer, OfficialSources } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata = pageMetadata({
  title: "C1 Tourist Visa for Indonesia",
  description:
    "What the C1 visit visa covers, a preliminary document checklist and how we assist with the application. Requirements are subject to current Indonesian immigration rules.",
  path: "/visa-immigration/c1-tourist-visa",
});

const reasons = [
  "Professional immigration consultation",
  "Visa extension assistance",
  "Business setup support",
  "Investor KITAS assistance",
  "End-to-end coordination",
  "Customer support",
];

export default function C1TouristVisaPage() {
  return (
    <>
      <PageHero
        division="consulting"
        label="Visa & Immigration"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Visa & Immigration", href: "/visa-immigration" },
          { label: "C1 Tourist Visa" },
        ]}
        title="C1 Tourist Visa for Indonesia"
        lead="A single-entry visit visa for tourism and other permitted short stays. We help you check whether it suits your trip and prepare a complete application."
      >
        <ButtonLink href="#inquiry">Request a Consultation</ButtonLink>
        <ButtonLink href="#documents" variant="outline">
          Document checklist
        </ButtonLink>
      </PageHero>

      {/* Overview */}
      <Section labelledBy="overview-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h2 id="overview-title" className="text-headline font-semibold text-balance text-navy">
                What the C1 visa is for
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                The C1 is generally used for short visits that do not involve employment in Indonesia. Permitted
                purposes include:
              </p>
              <ul className="mt-7 space-y-3">
                {c1Purposes.map((p) => (
                  <li key={p} className="flex gap-3 text-[1.0625rem] text-charcoal">
                    <Check aria-hidden className="mt-1 size-5 shrink-0 text-forest" strokeWidth={2.2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="rounded-[6px] bg-navy p-8 text-ivory" data-surface="dark">
                <h3 className="font-semibold">At a glance</h3>
                <dl className="mt-5 divide-y divide-ivory/15 border-y border-ivory/15">
                  {c1Summary.map((item) => (
                    <div key={item.term} className="flex items-baseline justify-between gap-6 py-4">
                      <dt className="text-mist">{item.term}</dt>
                      <dd className="text-right font-semibold">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-sm leading-relaxed text-mist">
                  As currently described. Durations and extension options are set by Indonesian immigration regulations
                  and may change.
                </p>
              </div>
            </div>
          </div>
          <ImmigrationDisclaimer className="mt-14" />
        </Container>
      </Section>

      {/* Who needs a visa */}
      <Section surface="white" labelledBy="who-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 id="who-title" className="text-headline font-semibold text-balance text-navy">
                Who may need a visa?
              </h2>
            </div>
            <div className="space-y-5 text-lead text-ink-soft lg:col-span-6 lg:col-start-7">
              <p>
                Foreign nationals who are not eligible for visa-free entry or a Visa on Arrival (including e-VOA) may
                need to obtain a visa before they travel.
              </p>
              <p>
                Eligibility depends on your nationality and the purpose of your trip, and the lists of eligible
                countries change from time to time. Check the current rules on the official immigration website, or ask
                us for an assessment.
              </p>
              <OfficialSources
                className="pt-4 text-base"
                sources={[officialSources.evisa, officialSources.immigration]}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section labelledBy="process-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 id="process-title" className="text-headline font-semibold text-balance text-navy">
                  How we assist
                </h2>
                <p className="mt-5 text-lead text-ink-soft">
                  From the first conversation to your arrival — and beyond, if you decide to stay longer or invest.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ProcessSteps
                steps={c1Process}
                layout="column"
                note="Steps 5 and 6 are carried out by the Indonesian immigration authorities. Steps 8 and 9 apply only where you are eligible and the rules permit. Timing is not guaranteed."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Documents */}
      <Section id="documents" surface="sand" labelledBy="documents-title">
        <Container>
          <SectionHeader
            id="documents-title"
            title="Preliminary document checklist"
            intro="A starting point only. Exact requirements vary by applicant and must be verified before you apply."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c1Documents.map((d) => (
              <li key={d} className="flex gap-4 rounded-[6px] border border-navy/10 bg-white p-6">
                <FileText aria-hidden strokeWidth={1.6} className="mt-0.5 size-5 shrink-0 text-forest" />
                <span className="font-medium text-navy">{d}</span>
              </li>
            ))}
          </ul>
          <DisclaimerNotice className="mt-8" title="Requirements vary">
            <p>
              The immigration authorities may ask for different or additional documents depending on your nationality,
              circumstances and the regulations in force. We will tell you what applies to your case during document
              verification.
            </p>
          </DisclaimerNotice>
        </Container>
      </Section>

      {/* Investor KITAS conversion */}
      <Section surface="white" labelledBy="kitas-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 id="kitas-title" className="text-headline font-semibold text-balance text-navy">
                From a C1 visa to an Investor KITAS
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lead text-ink-soft">
                If you decide to invest in Indonesia, moving from a C1 visa to an Investor KITAS may be possible after a
                PT PMA has been established and the immigration requirements are met.
              </p>
              <p className="mt-5 leading-relaxed text-ink-soft">
                This is conditional. It depends on current law, your eligibility and approval by the authorities — it is
                not available to every C1 holder. We can coordinate the company setup and the stay-permit application
                together.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <Link
                  href="/visa-immigration/investor-kitas"
                  className="font-semibold text-forest underline decoration-forest/30 underline-offset-[5px] hover:decoration-forest"
                >
                  About Investor KITAS
                </Link>
                <Link
                  href="/business-setup"
                  className="font-semibold text-forest underline decoration-forest/30 underline-offset-[5px] hover:decoration-forest"
                >
                  About business setup
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why + FAQ */}
      <Section labelledBy="faq-title">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-title font-semibold text-navy">Why contact Horra Prime Group?</h2>
              <ul className="mt-6 space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex gap-3 text-ink-soft">
                    <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-forest" strokeWidth={2.2} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 id="faq-title" className="text-headline font-semibold text-navy">
                Questions about the C1 visa
              </h2>
              <FAQAccordion className="mt-8" items={c1Faqs} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Inquiry */}
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
              <InquiryForm variant="visa" defaults={{ service: "tourist-visa", purpose: "tourism" }} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
