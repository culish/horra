import { Check } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { getDivisions } from "@/content/divisions";
import { getT } from "@/i18n/server";
import { PageHero, CTASection } from "@/components/sections/sections";
import { DivisionCard } from "@/components/cards/cards";
import { Container, Section, SectionHeader } from "@/components/ui/primitives";
import { PendingContent } from "@/components/ui/notices";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({ title: t.about.metaTitle, description: t.about.metaDescription, path: "/about" });
}

export default async function AboutPage() {
  const t = await getT();
  const a = t.about;
  return (
    <>
      <PageHero crumbs={[{ label: t.common.home, href: "/" }, { label: t.nav.items.about }]} title={a.title} lead={a.lead} />

      <Section labelledBy="divisions-title">
        <Container>
          <SectionHeader id="divisions-title" title={a.whatTitle} intro={a.whatIntro} />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getDivisions(t).map((d) => (
              <DivisionCard key={d.key} division={d} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="white" labelledBy="principles-title">
        <Container>
          <SectionHeader id="principles-title" title={a.howTitle} />
          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.company.principles.map((p) => (
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
                {a.promiseTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{a.promiseIntro}</p>
            </div>
            <dl className="lg:col-span-7 lg:col-start-6">
              {a.commitments.map((c) => (
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
            {a.companyInfo}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {a.pending.map((p) => (
              <PendingContent key={p.title} title={p.title}>
                <p>{p.text}</p>
              </PendingContent>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title={t.common.cta.buildTogether}
        primary={{ label: t.common.contactOurTeam, href: "/contact" }}
        secondary={{ label: t.nav.items.consulting, href: "/business-consulting" }}
      />
    </>
  );
}
