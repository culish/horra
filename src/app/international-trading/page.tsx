import { pageMetadata } from "@/lib/metadata";
import { tradeProcess, tradingCategories } from "@/content/trading";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { ProductCategoryCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { TradeDisclaimer } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata = pageMetadata({
  title: "International Trading",
  description:
    "Buyer inquiries for Indonesian commodities: spices and herbs, palm oil products, coffee and cocoa, coconut products, petrochemicals, coal and minerals, and seafood.",
  path: "/international-trading",
});

const askFor = [
  { title: "Product and grade", text: "What you need, and any specification or quality standard you work to." },
  { title: "Volume", text: "An estimate of quantity and frequency, if you know it." },
  { title: "Destination", text: "The country and port, and your preferred delivery terms." },
  { title: "Documentation", text: "Any certificates or documents your market requires." },
];

export default function InternationalTradingPage() {
  return (
    <>
      <PageHero
        division="trading"
        crumbs={[{ label: "Home", href: "/" }, { label: "International Trading" }]}
        title="International Trading"
        lead="We handle inquiries from international buyers for Indonesian commodities across eight product categories. Availability, specifications and terms are confirmed for each inquiry."
      >
        <ButtonLink href="#categories">Browse categories</ButtonLink>
        <ButtonLink href="#inquiry" variant="outline">
          Send a product inquiry
        </ButtonLink>
      </PageHero>

      <Section id="categories" labelledBy="categories-title">
        <Container>
          <SectionHeader
            id="categories-title"
            title="Product categories"
            intro="Three categories list specific products. For the others, tell us what you need and we will confirm what we can offer."
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
            title="What helps us respond"
            intro="The more we know about your requirement, the more precisely we can confirm availability and terms."
          />
          <dl className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {askFor.map((a) => (
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
          <SectionHeader id="process-title" title="How a trade inquiry moves forward" />
          <ProcessSteps
            className="mt-14"
            steps={tradeProcess}
            note="A general workflow. Specifications, pricing, documentation and shipping terms are agreed case by case; no timeline or supply is guaranteed until confirmed in writing."
          />
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                Send a product inquiry
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                Not sure which category fits? Describe the product and we will route it to the right team.
              </p>
            </div>
            <div className="lg:col-span-8">
              <InquiryForm variant="trading" />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Travelling to Indonesia to meet suppliers?"
        text="Our Tours & Travel division can help with flights, hotels and airport transfers, and our consulting team with business visas."
        primary={{ label: "Tours & Travel", href: "/tours-travel" }}
        secondary={{ label: "Visa & Immigration", href: "/visa-immigration" }}
      />
    </>
  );
}
