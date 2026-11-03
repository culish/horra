import { ArrowRight, BadgePercent, CheckCircle2 } from "lucide-react";
import Link from "@/components/ui/Link";
import { pageMetadata } from "@/lib/metadata";
import { formatIdr } from "@/lib/format";
import { sources } from "@/content/consulting";
import { bangladeshPrice, visaCatalog, visaCategories } from "@/content/visa-catalog";
import { getLocale, getT } from "@/i18n/server";
import { PageHero, CTASection } from "@/components/sections/sections";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { ImmigrationDisclaimer, OfficialSources } from "@/components/ui/notices";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { VisaCatalog } from "@/components/visa/VisaCatalog";
import { ServicePaymentSlot } from "@/components/payments/PaymentSlot";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({ title: t.visa.metaTitle, description: t.visa.metaDescription, path: "/visa-immigration" });
}

export default async function VisaImmigrationPage() {
  const t = await getT();
  const locale = await getLocale();
  const v = t.visa;
  const names = t.apply.visas;
  const items = visaCatalog.map((p) => ({ ...p, bdStandard: bangladeshPrice(p.standard) }));

  return (
    <>
      <PageHero
        division="consulting"
        label={v.label}
        crumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.items.consulting, href: "/business-consulting" },
          { label: t.nav.groups.visa },
        ]}
        title={v.title}
        lead={v.lead}
      >
        <ButtonLink href="/visa-immigration/apply">{v.applyNow}</ButtonLink>
        <ButtonLink href="#visas" variant="outline">
          {v.seePrices}
        </ButtonLink>
      </PageHero>

      {/* Trust bar + Bangladesh offer */}
      <section aria-label={v.bdTitle} className="border-b border-navy/10 bg-white">
        <Container className="grid gap-6 py-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-7">
            {v.trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] font-medium text-navy">
                <CheckCircle2 aria-hidden className="size-5 shrink-0 text-forest" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 rounded-[8px] border border-gold/60 bg-gold/10 p-5 lg:col-span-5">
            <BadgePercent aria-hidden className="mt-0.5 size-6 shrink-0 text-gold-ink" />
            <div>
              <p className="font-semibold text-navy">{v.bdTitle}</p>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{v.bdText}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Catalogue */}
      <Section id="visas" labelledBy="visas-title">
        <Container>
          <SectionHeader id="visas-title" title={v.catalogTitle} intro={v.catalogIntro} />
          <div className="mt-12">
            <VisaCatalog items={items} />
          </div>
        </Container>
      </Section>

      {/* Steps */}
      <Section surface="navy" labelledBy="steps-title">
        <Container>
          <SectionHeader id="steps-title" tone="dark" title={v.stepsTitle} />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {v.steps.map((s, i) => (
              <li key={s.title} className="rounded-[8px] border border-ivory/15 bg-navy-deep/40 p-6">
                <span
                  aria-hidden
                  className="flex size-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-deep"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 font-semibold text-ivory">
                  <span className="sr-only">{`${t.common.step} ${i + 1}: `}</span>
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-mist">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-[48rem] text-sm leading-relaxed text-mist">{v.stepsNote}</p>
          <div className="mt-8">
            <ButtonLink href="/visa-immigration/apply" variant="accent">
              {v.applyNow}
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Price list */}
      <Section surface="white" labelledBy="prices-title">
        <Container>
          <SectionHeader id="prices-title" title={v.tableTitle} intro={v.tableIntro} />
          <div className="mt-10 overflow-x-auto rounded-[8px] border border-navy/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-[0.9375rem]">
              <thead className="bg-sand text-navy">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    {v.colVisa}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">
                    {v.colStandard}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">
                    {v.colExpress}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold text-gold-ink">
                    {v.colBd}
                  </th>
                </tr>
              </thead>
              {visaCategories.map((cat) => (
                <tbody key={cat} className="divide-y divide-navy/8">
                  <tr className="bg-ivory">
                    <th colSpan={4} scope="colgroup" className="px-4 py-2 text-sm font-semibold text-stone">
                      {`${cat} · ${t.apply.catalog[cat]}`}
                    </th>
                  </tr>
                  {visaCatalog
                    .filter((p) => p.category === cat)
                    .map((p) => (
                      <tr key={p.id}>
                        <th scope="row" className="px-4 py-3 font-medium text-navy">
                          <Link href={`/visa-immigration/apply?visa=${p.id}`} className="hover:underline">
                            {names[p.id as keyof typeof names].name}
                          </Link>
                        </th>
                        <td className="px-4 py-3 text-right tabular-nums">{formatIdr(p.standard, locale)}</td>
                        <td className="px-4 py-3 text-right tabular-nums">
                          {p.express ? formatIdr(p.express, locale) : "—"}
                        </td>
                        <td className="px-4 py-3 text-right font-semibold text-gold-ink tabular-nums">
                          {formatIdr(bangladeshPrice(p.standard), locale)}
                          {p.express ? ` – ${formatIdr(bangladeshPrice(p.express), locale)}` : ""}
                        </td>
                      </tr>
                    ))}
                </tbody>
              ))}
            </table>
          </div>
          <ImmigrationDisclaimer className="mt-10" />
        </Container>
      </Section>

      {/* Other services */}
      <Section labelledBy="other-title">
        <Container>
          <SectionHeader id="other-title" title={v.otherTitle} intro={v.otherIntro} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-[8px] bg-navy p-8 text-ivory sm:p-10" data-surface="dark">
              <h3 className="text-title font-semibold">{v.c1Title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{v.c1Text}</p>
              <dl className="mt-7 grid gap-3 sm:grid-cols-3">
                {t.c1.summary.map((item) => (
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
                {v.c1Link}
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </article>
            <article className="flex flex-col rounded-[8px] border border-navy/10 bg-white p-8 sm:p-10">
              <h3 className="text-title font-semibold text-navy">{v.kitasTitle}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{v.kitasText}</p>
              <ul className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
                {(["work-visa", "family-kitas", "visa-extension"] as const).map((id) => (
                  <li key={id} className="py-3">
                    <p className="font-medium text-navy">{t.services.visa[id].name}</p>
                    <p className="text-sm text-ink-soft">{t.services.visa[id].description}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/visa-immigration/investor-kitas"
                className="mt-auto inline-flex items-center gap-2 pt-9 font-semibold text-forest underline-offset-4 hover:underline"
              >
                {v.kitasLink}
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </article>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section surface="white" labelledBy="faq-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="faq-title" className="text-headline font-semibold text-navy">
                {v.faqTitle}
              </h2>
              <OfficialSources className="mt-10" sources={sources(t, ["immigration", "evisa"])} />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={v.faqs} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Consultation + pay a quote */}
      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                {v.consultTitle}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{v.consultText}</p>
            </div>
            <div className="space-y-8 lg:col-span-8">
              <InquiryForm variant="visa" />
              <ServicePaymentSlot
                title={v.payTitle}
                intro={v.payText}
                services={["investor-kitas", "work-visa", "visa-other"]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={v.ctaTitle}
        text={v.ctaText}
        primary={{ label: t.nav.groups.setup, href: "/business-setup" }}
        secondary={{ label: t.common.contactOurTeam, href: "/contact" }}
      />
    </>
  );
}
