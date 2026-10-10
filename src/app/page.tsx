import type { Metadata } from "next";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { divisions } from "@/content/divisions";
import { featuredServices, generalProcess, principles } from "@/content/company";
import { tradingCategories } from "@/content/trading";
import { c1Process, c1Summary } from "@/content/consulting";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection, ProcessSteps } from "@/components/sections/sections";
import { DivisionCard, ProductCategoryCard, ServiceCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader, TextLink } from "@/components/ui/primitives";
import { ImmigrationDisclaimer } from "@/components/ui/notices";
import { serviceIcons } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Divisions */}
      <Section id="divisions" labelledBy="divisions-title">
        <Container>
          <SectionHeader
            id="divisions-title"
            title="Three divisions, one point of contact"
            intro="Business consulting, international trading, and tours and travel — with one team to coordinate when your plans involve more than one."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <DivisionCard key={d.key} division={d} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured services */}
      <Section surface="white" labelledBy="services-title">
        <Container>
          <SectionHeader
            id="services-title"
            title="Where most inquiries start"
            intro="Four services that clients ask us about most often. Each one begins with a conversation about what you need."
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <ServiceCard
                key={s.id}
                icon={serviceIcons[s.icon]}
                title={s.name}
                text={s.text}
                href={s.href}
                linkLabel="View service"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Horra Prime Group */}
      <Section labelledBy="why-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="why-title" className="text-headline font-semibold text-balance text-navy">
                Why Horra Prime Group
              </h2>
              <p className="mt-5 max-w-[24rem] text-lead text-ink-soft">
                How we work with clients, whichever division you come to us for.
              </p>
            </div>
            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
              {principles.map((p) => (
                <li key={p.title} className="border-t border-navy/15 pt-6">
                  <h3 className="flex items-center gap-2.5 text-lg font-semibold text-navy">
                    <Check aria-hidden className="size-5 text-forest" strokeWidth={2.2} />
                    {p.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-ink-soft">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Trading categories */}
      <Section surface="sand" labelledBy="trading-title">
        <Container>
          <SectionHeader
            id="trading-title"
            title="Indonesian commodities for international buyers"
            intro="Eight product categories handled by our International Trading division. Availability, specifications and terms are confirmed for each inquiry."
          >
            <TextLink href="/international-trading" className="mt-5 inline-block">
              View the trading division
            </TextLink>
          </SectionHeader>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tradingCategories.map((c) => (
              <ProductCategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Visa feature */}
      <Section surface="forest" labelledBy="visa-title">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <p className="text-[0.9375rem] font-semibold text-ivory/90">Visa &amp; Immigration</p>
              <h2 id="visa-title" className="mt-4 text-headline font-semibold text-balance">
                Visiting Indonesia on a C1 Tourist Visa
              </h2>
              <p className="mt-5 text-lead text-ivory/90">
                The C1 is a single-entry visit visa for tourism, family visits, exhibitions and business visits that do
                not involve employment. We help you check whether it suits your plans and prepare the application.
              </p>
              <dl className="mt-8 grid grid-cols-3 divide-x divide-ivory/20 border-y border-ivory/20">
                {c1Summary.map((item) => (
                  <div key={item.term} className="px-4 py-5 first:pl-0">
                    <dt className="text-sm text-ivory/90">{item.term}</dt>
                    <dd className="mt-1 leading-snug font-semibold">{item.detail}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/visa-immigration/c1-tourist-visa" variant="accent">
                  About the C1 visa
                </ButtonLink>
                <ButtonLink href="/visa-immigration/c1-tourist-visa#inquiry" variant="outline-light">
                  Request a consultation
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <h3 className="font-semibold">How we assist, step by step</h3>
              <ol className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {c1Process.map((step, i) => (
                  <li key={step.title} className="flex gap-4 border-t border-ivory/15 py-3.5">
                    <span aria-hidden className="w-5 shrink-0 text-sm font-semibold text-ivory/90 tabular-nums">
                      {i + 1}
                    </span>
                    <span className="text-[0.9375rem] text-ivory">{step.title}</span>
                  </li>
                ))}
              </ol>
              <ImmigrationDisclaimer tone="dark" className="mt-8" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section labelledBy="process-title">
        <Container>
          <SectionHeader
            id="process-title"
            title="How an inquiry moves forward"
            intro="The same five stages apply across our divisions, adapted to each service."
          />
          <ProcessSteps
            className="mt-14"
            steps={generalProcess}
            note="This is a general workflow. The steps, documents and timing differ by service and by case, and are not a guaranteed timeline."
          />
        </Container>
      </Section>

      <CTASection
        title="Let’s Explore What We Can Build Together"
        text="Tell us what you are planning — a visit, a company, a shipment or a trip — and we will suggest where to start."
        primary={{ label: "Contact Our Team", href: "/contact" }}
        secondary={{ label: "Explore Our Services", href: "#divisions" }}
      />
    </>
  );
}
