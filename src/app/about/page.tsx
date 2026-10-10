import { Check } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { divisions } from "@/content/divisions";
import { principles } from "@/content/company";
import { PageHero, CTASection } from "@/components/sections/sections";
import { DivisionCard } from "@/components/cards/cards";
import { Container, Section, SectionHeader } from "@/components/ui/primitives";
import { PendingContent } from "@/components/ui/notices";

export const metadata = pageMetadata({
  title: "About",
  description:
    "PT. Horra Prime Group is an Indonesian company working across business consulting, international trading, and tours and travel.",
  path: "/about",
});

const commitments = [
  {
    title: "Immigration decisions rest with the authorities",
    text: "We help clients prepare and follow up, but we never promise approval, processing times or conversions.",
  },
  {
    title: "Trade terms are confirmed per inquiry",
    text: "We do not publish specifications, prices or supply commitments that have not been agreed for a specific order.",
  },
  {
    title: "Travel depends on availability",
    text: "Bookings are confirmed with you, at the price available at the time, before anything is reserved.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="About Horra Prime Group"
        lead="PT. Horra Prime Group is an Indonesian company working across three divisions: business consulting, international trading, and tours and travel."
      />

      <Section labelledBy="divisions-title">
        <Container>
          <SectionHeader
            id="divisions-title"
            title="What we do"
            intro="Each division serves a different need. Together they cover much of what people and businesses look for when they engage with Indonesia."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <DivisionCard key={d.key} division={d} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="white" labelledBy="principles-title">
        <Container>
          <SectionHeader id="principles-title" title="How we work" />
          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li key={p.title} className="border-t border-navy/15 pt-6">
                <h3 className="flex items-start gap-2.5 text-lg font-semibold text-navy">
                  <Check aria-hidden className="mt-1 size-5 shrink-0 text-forest" strokeWidth={2.2} />
                  {p.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{p.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="commitments-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="commitments-title" className="text-headline font-semibold text-balance text-navy">
                Clear about what we can promise
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                Much of our work depends on governments, suppliers and providers. We say so plainly.
              </p>
            </div>
            <dl className="lg:col-span-7 lg:col-start-6">
              {commitments.map((c) => (
                <div key={c.title} className="border-b border-navy/12 py-6 first:border-t">
                  <dt className="text-lg font-semibold text-navy">{c.title}</dt>
                  <dd className="mt-2 leading-relaxed text-ink-soft">{c.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section surface="sand" compact labelledBy="company-title">
        <Container>
          <h2 id="company-title" className="text-title font-semibold text-navy">
            Company information
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <PendingContent title="Our story">
              <p>When and why the company was founded, and how its divisions developed.</p>
            </PendingContent>
            <PendingContent title="Leadership">
              <p>Names and roles of the leadership team, if the company wishes to publish them.</p>
            </PendingContent>
            <PendingContent title="Registered details">
              <p>Registered office address, business registration (NIB) and operating hours.</p>
            </PendingContent>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Let’s Explore What We Can Build Together"
        primary={{ label: "Contact Our Team", href: "/contact" }}
        secondary={{ label: "Business Consulting", href: "/business-consulting" }}
      />
    </>
  );
}
