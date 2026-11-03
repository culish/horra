import Link from "@/components/ui/Link";
import { ArrowRight, Building2, Stamp } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { fmt } from "@/lib/fmt";
import { businessSetupServices, visaServices } from "@/content/consulting";
import { getT } from "@/i18n/server";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { ImmigrationDisclaimer } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({
    title: t.consulting.metaTitle,
    description: t.consulting.metaDescription,
    path: "/business-consulting",
  });
}

export default async function BusinessConsultingPage() {
  const t = await getT();
  const c = t.consulting;
  const pillars = [
    {
      icon: Stamp,
      title: t.nav.groups.visa,
      href: "/visa-immigration",
      text: c.visaText,
      services: visaServices.map((s) => ({ id: s.id, href: s.href, name: t.services.visa[s.id].name })),
    },
    {
      icon: Building2,
      title: t.nav.groups.setup,
      href: "/business-setup",
      text: c.setupText,
      services: businessSetupServices.map((s) => ({ id: s.id, href: s.href, name: t.services.setup[s.id].name })),
    },
  ];

  return (
    <>
      <PageHero
        division="consulting"
        crumbs={[{ label: t.common.home, href: "/" }, { label: t.nav.items.consulting }]}
        title={c.title}
        lead={c.lead}
      >
        <ButtonLink href="#inquiry">{c.discuss}</ButtonLink>
        <ButtonLink href="/visa-immigration/apply" variant="outline">
          {t.nav.links.visaApply}
        </ButtonLink>
      </PageHero>

      <Section labelledBy="pillars-title">
        <Container>
          <SectionHeader id="pillars-title" title={c.pillarsTitle} intro={c.pillarsIntro} />
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
                  {fmt(c.goTo, { title: p.title })}
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
                {c.pathwayTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{c.pathwayIntro}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ProcessSteps steps={c.pathway} layout="column" />
              <ImmigrationDisclaimer className="mt-10" />
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="process-title">
        <Container>
          <SectionHeader id="process-title" title={c.howTitle} />
          <ProcessSteps className="mt-14" steps={t.company.process} note={c.howNote} />
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                {c.inquiryTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{c.inquiryText}</p>
            </div>
            <div className="lg:col-span-8">
              <InquiryForm variant="general" />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={c.ctaTitle}
        text={c.ctaText}
        primary={{ label: t.nav.items.trading, href: "/international-trading" }}
        secondary={{ label: t.nav.items.travel, href: "/tours-travel" }}
      />
    </>
  );
}
