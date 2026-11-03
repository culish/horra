import { Check } from "lucide-react";
import { getDivisions } from "@/content/divisions";
import { featuredServices } from "@/content/company";
import { tradingCategories } from "@/content/trading";
import { lowestPrice } from "@/content/visa-catalog";
import { getLocale, getT } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { formatIdr } from "@/lib/format";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection, ProcessSteps } from "@/components/sections/sections";
import { DivisionCard, ProductCategoryCard, ServiceCard } from "@/components/cards/cards";
import { ButtonLink, Container, Section, SectionHeader, TextLink } from "@/components/ui/primitives";
import { ImmigrationDisclaimer } from "@/components/ui/notices";
import { serviceIcons } from "@/components/ui/icons";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({ title: t.meta.title, description: t.meta.description, path: "/", absoluteTitle: true });
}

export default async function HomePage() {
  const t = await getT();
  const locale = await getLocale();
  const h = t.home;
  const divisions = getDivisions(t);
  return (
    <>
      <HeroSection />

      {/* Divisions */}
      <Section id="divisions" labelledBy="divisions-title">
        <Container>
          <SectionHeader
            id="divisions-title"
            title={h.divisionsTitle}
            intro={h.divisionsIntro}
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
            title={h.servicesTitle}
            intro={h.servicesIntro}
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <ServiceCard
                key={s.id}
                icon={serviceIcons[s.icon]}
                title={t.company.featured[s.id].name}
                text={t.company.featured[s.id].text}
                href={s.href}
                linkLabel={t.common.viewService}
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
                {h.whyTitle}
              </h2>
              <p className="mt-5 max-w-[24rem] text-lead text-ink-soft">{h.whyIntro}</p>
            </div>
            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
              {t.company.principles.map((p) => (
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
            title={h.tradingTitle}
            intro={h.tradingIntro}
          >
            <TextLink href="/international-trading" className="mt-5 inline-block">
              {h.tradingLink}
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
              <p className="text-[0.9375rem] font-semibold text-ivory/90">{h.visaLabel}</p>
              <h2 id="visa-title" className="mt-4 text-headline font-semibold text-balance">
                {h.visaTitle}
              </h2>
              <p className="mt-5 text-lead text-ivory/90">{h.visaLead}</p>
              <p className="mt-8 border-y border-ivory/20 py-5">
                <span className="block text-sm text-ivory/90">{h.visaFrom}</span>
                <span className="mt-1 block text-title font-semibold">{formatIdr(lowestPrice, locale)}</span>
              </p>
              <p className="mt-5 inline-flex rounded-full bg-gold px-3.5 py-1.5 text-sm font-semibold text-navy-deep">
                {t.visa.bdBadge}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/visa-immigration/apply" variant="accent">
                  {h.visaApply}
                </ButtonLink>
                <ButtonLink href="/visa-immigration#visas" variant="outline-light">
                  {h.visaCta}
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <h3 className="font-semibold">{h.visaStepsTitle}</h3>
              <ol className="mt-5 grid gap-x-8">
                {t.visa.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4 border-t border-ivory/15 py-4">
                    <span aria-hidden className="w-5 shrink-0 text-sm font-semibold text-ivory/90 tabular-nums">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-ivory">{step.title}</span>
                      <span className="mt-1 block text-[0.9375rem] leading-relaxed text-ivory/85">{step.text}</span>
                    </span>
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
            title={h.processTitle}
            intro={h.processIntro}
          />
          <ProcessSteps
            className="mt-14"
            steps={t.company.process}
            note={h.processNote}
          />
        </Container>
      </Section>

      <CTASection
        title={t.common.cta.buildTogether}
        text={h.ctaText}
        primary={{ label: t.common.contactOurTeam, href: "/contact" }}
        secondary={{ label: t.common.exploreOurServices, href: "#divisions" }}
      />
    </>
  );
}
