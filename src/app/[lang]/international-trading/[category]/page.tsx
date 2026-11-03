import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { getCategory, productCount, productLabel, tradingCategories } from "@/content/trading";
import { getT } from "@/i18n/server";
import { fmt } from "@/lib/fmt";
import { PageHero, ProcessSteps } from "@/components/sections/sections";
import { Container, ButtonLink, Section } from "@/components/ui/primitives";
import { PendingContent, TradeDisclaimer } from "@/components/ui/notices";
import { categoryIcons } from "@/components/ui/icons";
import { InquiryForm } from "@/components/forms/InquiryForm";

export function generateStaticParams() {
  return tradingCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/international-trading/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const t = await getT();
  const copy = t.trading.categories[category.slug];
  const count = productCount(category);
  return pageMetadata({
    title: copy.name,
    description: count
      ? fmt(t.trading.category.metaCount, { name: copy.name, summary: copy.summary })
      : fmt(t.trading.category.metaNone, { name: copy.name }),
    path: `/international-trading/${category.slug}`,
  });
}

export default async function TradingCategoryPage({ params }: PageProps<"/[lang]/international-trading/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const t = await getT();
  const tr = t.trading;
  const k = tr.category;
  const copy = tr.categories[category.slug];

  const Icon = categoryIcons[category.icon];
  const count = productCount(category);
  const others = tradingCategories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHero
        division="trading"
        label={tr.title}
        crumbs={[
          { label: t.common.home, href: "/" },
          { label: tr.title, href: "/international-trading" },
          { label: copy.name },
        ]}
        title={copy.name}
        lead={copy.intro}
      >
        <ButtonLink href="#inquiry">{tr.sendInquiry}</ButtonLink>
        {count > 0 && (
          <ButtonLink href="#products" variant="outline">
            {fmt(k.viewProducts, { count })}
          </ButtonLink>
        )}
      </PageHero>

      <Section id="products" labelledBy="products-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <span className="flex size-14 items-center justify-center rounded-[6px] bg-forest text-ivory">
                <Icon aria-hidden strokeWidth={1.5} className="size-7" />
              </span>
              <h2 id="products-title" className="mt-7 text-headline font-semibold text-navy">
                {count ? k.products : k.range}
              </h2>
              <p className="mt-4 text-lead text-ink-soft">
                {count ? k.productsIntro : k.rangeIntro}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {count ? (
                <div className="space-y-10">
                  {category.groups.map((group, gi) => (
                    <div key={group.label ?? gi}>
                      {group.label && <h3 className="text-sm font-semibold text-stone">{tr.groups[group.label]}</h3>}
                      <ul className={group.label ? "mt-3 border-t border-navy/12" : "border-t border-navy/12"}>
                        {group.items.map((p) => (
                          <li
                            key={p.id}
                            className="flex items-baseline justify-between gap-6 border-b border-navy/12 py-4"
                          >
                            <span className="text-lg font-medium text-navy">{tr.products[p.id]}</span>
                            {p.code && (
                              <abbr
                                title={productLabel(p, tr.products)}
                                className="text-sm font-semibold tracking-wide text-forest no-underline"
                              >
                                {p.code}
                              </abbr>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <PendingContent title={fmt(k.catalogue, { name: copy.name })}>
                  <p>{k.catalogueText}</p>
                </PendingContent>
              )}
              <TradeDisclaimer className="mt-10" />
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="white" labelledBy="process-title">
        <Container>
          <h2 id="process-title" className="text-headline font-semibold text-navy">
            {tr.processTitle}
          </h2>
          <ProcessSteps className="mt-14" steps={tr.process} note={tr.processNoteShort}
          />
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                {fmt(k.inquire, { name: copy.name })}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{k.inquiryText}</p>
            </div>
            <div className="lg:col-span-8">
              <InquiryForm variant="trading" context={category.slug} />
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="others-title" compact>
        <Container>
          <h2 id="others-title" className="text-title font-semibold text-navy">
            {k.others}
          </h2>
          <ul className="mt-6 grid border-t border-navy/12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug} className="border-b border-navy/12">
                <Link
                  href={`/international-trading/${c.slug}`}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-medium text-navy group-hover:text-forest">{tr.categories[c.slug].name}</span>
                  <ArrowRight aria-hidden className="size-4 text-stone group-hover:text-forest" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
