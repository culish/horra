import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { travelProcess, travelServices } from "@/content/travel";
import { PageHero, ProcessSteps, CTASection } from "@/components/sections/sections";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { DisclaimerNotice } from "@/components/ui/notices";
import { travelIcons } from "@/components/ui/icons";
import { InquiryForm } from "@/components/forms/InquiryForm";
import travelLogo from "@/assets/logo/horra-travel.png";

export const metadata = pageMetadata({
  title: "Tours & Travel",
  description:
    "Help with flight tickets, hotels, tour packages, airport transfers and travel guidance for trips in Indonesia.",
  path: "/tours-travel",
});

export default function ToursTravelPage() {
  return (
    <>
      <PageHero
        division="travel"
        logo={
          <Image
            src={travelLogo}
            alt="Horra – Global Visa & Business Solutions"
            priority
            className="h-14 w-auto sm:h-16"
            sizes="240px"
          />
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Tours & Travel" }]}
        title="Tours & Travel"
        lead="Tickets, hotels, tour packages, airport transfers and travel guidance — arranged around your plans, whether you are here for business or leisure."
      >
        <ButtonLink href="#inquiry">Plan your trip</ButtonLink>
        <ButtonLink href="#services" variant="outline">
          Our services
        </ButtonLink>
      </PageHero>

      <Section id="services" labelledBy="services-title">
        <Container>
          <SectionHeader
            id="services-title"
            title="What we can arrange"
            intro="Tell us what you need and we will come back with options. Prices and availability are confirmed before anything is booked."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {travelServices.map((s) => {
              const Icon = travelIcons[s.icon];
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
                    <h3 className="text-title font-semibold text-navy">{s.name}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{s.description}</p>
                    <ul className="mt-5 space-y-1.5 text-[0.9375rem] text-ink-soft">
                      {s.details.map((d) => (
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
          <SectionHeader id="process-title" title="How planning works" />
          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <ProcessSteps className="lg:col-span-7" steps={travelProcess} layout="column" />
            <div className="lg:col-span-4 lg:col-start-9">
              <DisclaimerNotice title="Availability and prices">
                <p>
                  Flights, hotels, tours and transfers depend on availability from providers at the time of booking. We
                  confirm prices and conditions with you before booking; we do not publish fixed packages or rates.
                </p>
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
                Plan your trip
              </h2>
              <p className="mt-5 text-lead text-ink-soft">
                Share your dates, destinations and the help you need. Approximate details are fine to start.
              </p>
            </div>
            <div className="lg:col-span-8">
              <InquiryForm variant="travel" />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Visiting for business?"
        text="Our consulting team can advise on visas, and our trading team on supplier inquiries."
        primary={{ label: "Visa & Immigration", href: "/visa-immigration" }}
        secondary={{ label: "International Trading", href: "/international-trading" }}
      />
    </>
  );
}
