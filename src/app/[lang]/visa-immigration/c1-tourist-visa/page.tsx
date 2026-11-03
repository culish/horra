import Link from "@/components/ui/Link";
import { Check, FileText } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { sources } from "@/content/consulting";
import { getVisa } from "@/content/visa-catalog";
import { getLocale, getT } from "@/i18n/server";
import { formatIdr } from "@/lib/format";
import { PageHero, ProcessSteps } from "@/components/sections/sections";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { DisclaimerNotice, ImmigrationDisclaimer, OfficialSources } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({
    title: t.c1.metaTitle,
    description: t.c1.metaDescription,
    path: "/visa-immigration/c1-tourist-visa",
  });
}

export default async function C1TouristVisaPage() {
  const t = await getT();
  const locale = await getLocale();
  const c = t.c1;
  const visa = getVisa("c1")!;
  return (
    <>
      <PageHero
        division="consulting"
        label={c.label}
        crumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.groups.visa, href: "/visa-immigration" },
          { label: c.crumb },
        ]}
        title={c.title}
        lead={
          <>
            {c.lead}
            <span className="mt-5 block text-[1rem] font-semibold text-navy">
              {`${c.priceLabel}: ${formatIdr(visa.standard, locale)} – ${formatIdr(visa.express!, locale)}`}
              <span className="ml-2 rounded-full bg-gold/20 px-2.5 py-0.5 text-sm text-gold-ink">
                {t.apply.catalog.bdBadge}
              </span>
            </span>
          </>
        }
      >
        <ButtonLink href="/visa-immigration/apply?visa=c1">{c.apply}</ButtonLink>
        <ButtonLink href="#documents" variant="outline">
          {c.checklist}
        </ButtonLink>
      </PageHero>

      {/* Overview */}
      <Section labelledBy="overview-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h2 id="overview-title" className="text-headline font-semibold text-balance text-navy">
                {c.overviewTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{c.overviewIntro}</p>
              <ul className="mt-7 space-y-3">
                {c.purposes.map((p) => (
                  <li key={p} className="flex gap-3 text-[1.0625rem] text-charcoal">
                    <Check aria-hidden className="mt-1 size-5 shrink-0 text-forest" strokeWidth={2.2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="rounded-[6px] bg-navy p-8 text-ivory" data-surface="dark">
                <h3 className="font-semibold">{c.glance}</h3>
                <dl className="mt-5 divide-y divide-ivory/15 border-y border-ivory/15">
                  {c.summary.map((item) => (
                    <div key={item.term} className="flex items-baseline justify-between gap-6 py-4">
                      <dt className="text-mist">{item.term}</dt>
                      <dd className="text-right font-semibold">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-sm leading-relaxed text-mist">{c.glanceNote}</p>
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
                {c.whoTitle}
              </h2>
            </div>
            <div className="space-y-5 text-lead text-ink-soft lg:col-span-6 lg:col-start-7">
              {c.who.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <OfficialSources
                className="pt-4 text-base"
                sources={sources(t, ["evisa", "immigration"])}
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
                  {c.processTitle}
                </h2>
                <p className="mt-5 text-lead text-ink-soft">{c.processIntro}</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ProcessSteps
                steps={c.process}
                layout="column"
                note={c.processNote}
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
            title={c.documentsTitle}
            intro={c.documentsIntro}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.documents.map((d) => (
              <li key={d} className="flex gap-4 rounded-[6px] border border-navy/10 bg-white p-6">
                <FileText aria-hidden strokeWidth={1.6} className="mt-0.5 size-5 shrink-0 text-forest" />
                <span className="font-medium text-navy">{d}</span>
              </li>
            ))}
          </ul>
          <DisclaimerNotice className="mt-8" title={c.variesTitle}>
            <p>{c.variesText}</p>
          </DisclaimerNotice>
        </Container>
      </Section>

      {/* Investor KITAS conversion */}
      <Section surface="white" labelledBy="kitas-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 id="kitas-title" className="text-headline font-semibold text-balance text-navy">
                {c.kitasTitle}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lead text-ink-soft">{c.kitasLead}</p>
              <p className="mt-5 leading-relaxed text-ink-soft">{c.kitasText}</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <Link
                  href="/visa-immigration/investor-kitas"
                  className="font-semibold text-forest underline decoration-forest/30 underline-offset-[5px] hover:decoration-forest"
                >
                  {c.aboutKitas}
                </Link>
                <Link
                  href="/business-setup"
                  className="font-semibold text-forest underline decoration-forest/30 underline-offset-[5px] hover:decoration-forest"
                >
                  {c.aboutSetup}
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
              <h2 className="text-title font-semibold text-navy">{c.whyTitle}</h2>
              <ul className="mt-6 space-y-3">
                {c.reasons.map((r) => (
                  <li key={r} className="flex gap-3 text-ink-soft">
                    <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-forest" strokeWidth={2.2} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 id="faq-title" className="text-headline font-semibold text-navy">
                {c.faqTitle}
              </h2>
              <FAQAccordion className="mt-8" items={c.faqs} />
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
                {c.inquiryTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{c.inquiryText}</p>
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
