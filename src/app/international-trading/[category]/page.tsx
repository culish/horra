import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { getCategory, productCount, tradingCategories } from "@/content/trading";
import { PageHero, ProcessSteps } from "@/components/sections/sections";
import { Container, ButtonLink, Section } from "@/components/ui/primitives";
import { PendingContent, TradeDisclaimer } from "@/components/ui/notices";
import { categoryIcons } from "@/components/ui/icons";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { tradeProcess } from "@/content/trading";

export function generateStaticParams() {
  return tradingCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/international-trading/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const count = productCount(category);
  return pageMetadata({
    title: category.name,
    description: count
      ? `${category.name} from Indonesia: ${category.summary} Send a buyer inquiry — availability, specifications and terms are confirmed individually.`
      : `Inquiries for ${category.name.toLowerCase()} from Indonesia. Share your requirement and we will confirm what we can offer.`,
    path: `/international-trading/${category.slug}`,
  });
}

export default async function TradingCategoryPage({ params }: PageProps<"/international-trading/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const Icon = categoryIcons[category.icon];
  const count = productCount(category);
  const others = tradingCategories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHero
        division="trading"
        label="International Trading"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "International Trading", href: "/international-trading" },
          { label: category.name },
        ]}
        title={category.name}
        lead={category.intro}
      >
        <ButtonLink href="#inquiry">Send a product inquiry</ButtonLink>
        {count > 0 && (
          <ButtonLink href="#products" variant="outline">
            {`View ${count} products`}
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
                {count ? "Products" : "Product range"}
              </h2>
              <p className="mt-4 text-lead text-ink-soft">
                {count
                  ? "Products we currently handle inquiries for. Grades, specifications and packing are confirmed per inquiry."
                  : "The specific products in this category are confirmed on request."}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {count ? (
                <div className="space-y-10">
                  {category.groups.map((group, gi) => (
                    <div key={group.label ?? gi}>
                      {group.label && <h3 className="text-sm font-semibold text-stone">{group.label}</h3>}
                      <ul className={group.label ? "mt-3 border-t border-navy/12" : "border-t border-navy/12"}>
                        {group.items.map((p) => (
                          <li
                            key={p.name}
                            className="flex items-baseline justify-between gap-6 border-b border-navy/12 py-4"
                          >
                            <span className="text-lg font-medium text-navy">{p.name}</span>
                            {p.code && (
                              <abbr
                                title={p.name}
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
                <PendingContent title={`${category.name} catalogue`}>
                  <p>
                    We have not published a product list for this category yet. Send an inquiry describing the product,
                    specification and volume you need, and we will confirm what we can offer.
                  </p>
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
            How a trade inquiry moves forward
          </h2>
          <ProcessSteps
            className="mt-14"
            steps={tradeProcess}
            note="A general workflow; terms are agreed case by case and nothing is guaranteed until confirmed in writing."
          />
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                {`Inquire about ${category.name.toLowerCase()}`}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                Tell us the product, your company and destination. We will respond with what we can confirm.
              </p>
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
            Other categories
          </h2>
          <ul className="mt-6 grid border-t border-navy/12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug} className="border-b border-navy/12">
                <Link
                  href={`/international-trading/${c.slug}`}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-medium text-navy group-hover:text-forest">{c.name}</span>
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
