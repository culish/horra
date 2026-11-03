import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { travelServices } from "@/content/travel";
import { getT } from "@/i18n/server";
import { ServicePaymentSlot } from "@/components/payments/PaymentSlot";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { DisclaimerNotice } from "@/components/ui/notices";
import { travelIcons } from "@/components/ui/icons";
import { InquiryForm } from "@/components/forms/InquiryForm";
import travelLogo from "@/assets/logo/horra-travel.png";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({ title: t.travel.metaTitle, description: t.travel.metaDescription, path: "/tours-travel" });
}

export default async function ToursTravelPage() {
  const t = await getT();
  const tr = t.travel;
  return (
    <>
      <PageHero
        division="travel"
        logo={
          <Image
            src={travelLogo}
            alt={tr.logoAlt}
            priority
            className="h-14 w-auto sm:h-16"
            sizes="240px"
          />
        }
        crumbs={[{ label: t.common.home, href: "/" }, { label: tr.title }]}
        title={tr.title}
        lead={tr.lead}
      >
        <ButtonLink href="#inquiry">{tr.plan}</ButtonLink>
        <ButtonLink href="#services" variant="outline">
          {tr.ourServices}
        </ButtonLink>
      </PageHero>

      <Section id="services" labelledBy="services-title">
        <Container>
          <SectionHeader
            id="services-title"
            title={tr.servicesTitle}
            intro={tr.servicesIntro}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {travelServices.map((s) => {
              const Icon = travelIcons[s.icon];
              const copy = tr.services[s.id];
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="flex flex-col gap-6 rounded-[6px] border border-navy/10 bg-white p-7 sm:flex-row sm:p-9"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sand text-navy">
                    <Icon aria-hidden strokeWidth={1.6} className="size-[22px]" />
                  </span>
                  <div>
                    <h3 className="text-title font-semibold text-navy">{copy.name}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{copy.description}</p>
                    <ul className="mt-5 space-y-1.5 text-[0.9375rem] text-ink-soft">
                      {copy.details.map((d) => (
                        <li
                          key={d}
                          className="flex gap-2.5 before:mt-[0.6em] before:size-1.5 before:shrink-0 before:rounded-full before:bg-gold"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section surface="white" labelledBy="process-title">
        <Container>
          <SectionHeader id="process-title" title={tr.processTitle} />
          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <ProcessSteps className="lg:col-span-7" steps={tr.process} layout="column" />
            <div className="lg:col-span-4 lg:col-start-9">
              <DisclaimerNotice title={tr.availabilityTitle}>
                <p>{tr.availabilityText}</p>
              </DisclaimerNotice>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="sand" labelledBy="inquiry-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="inquiry-heading" className="text-headline font-semibold text-balance text-navy">
                {tr.plan}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{tr.inquiryText}</p>
            </div>
            <div className="space-y-8 lg:col-span-8">
              <InquiryForm variant="travel" />
              <ServicePaymentSlot
                title={tr.payTitle}
                intro={tr.payText}
                services={["ticket-hotel", "tour-package", "airport-transfer", "travel-guide", "other"]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={tr.ctaTitle}
        text={tr.ctaText}
        primary={{ label: t.nav.groups.visa, href: "/visa-immigration" }}
        secondary={{ label: t.nav.items.trading, href: "/international-trading" }}
      />
    </>
  );
}
