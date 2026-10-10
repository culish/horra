import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig, whatsappHref } from "@/config/site";
import { divisions } from "@/content/divisions";
import { PageHero } from "@/components/sections/sections";
import { Container, Section, buttonClass } from "@/components/ui/primitives";
import { ContactDetails } from "@/components/layout/ContactDetails";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact PT. Horra Prime Group about business consulting, visa and immigration, international trading or tours and travel.",
  path: "/contact",
});

const nextSteps = [
  "We read your inquiry and pass it to the right division.",
  "We reply to ask any questions or arrange a consultation.",
  "You receive the proposed next steps before anything proceeds.",
];

export default function ContactPage() {
  const wa = whatsappHref("Hello Horra Prime Group, I would like to ask about your services.");
  const anyContact = Object.values(siteConfig.contact).some(Boolean);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Contact our team"
        lead="Tell us what you need — a visa, a company, a product or a trip — and the right division will follow up."
      />

      <Section labelledBy="contact-form-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <h2 id="contact-form-title" className="sr-only">
                Inquiry form
              </h2>
              <InquiryForm variant="general" />
            </div>

            <aside className="space-y-10 lg:col-span-4" aria-label="Contact details and next steps">
              <div>
                <h2 className="text-title font-semibold text-navy">Contact details</h2>
                <ContactDetails className="mt-6" />
                {!anyContact && (
                  <p className="mt-6 text-sm leading-relaxed text-stone">
                    Official contact details will be published once confirmed. Until then, please use the form.
                  </p>
                )}
                {wa && (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass("outline", "mt-6 w-full")}
                  >
                    Message us on WhatsApp
                  </a>
                )}
              </div>

              <div className="border-t border-navy/12 pt-8">
                <h2 className="text-title font-semibold text-navy">What happens next</h2>
                <ol className="mt-5 space-y-4">
                  {nextSteps.map((s, i) => (
                    <li key={s} className="flex gap-4 text-ink-soft">
                      <span
                        aria-hidden
                        className="flex size-7 shrink-0 items-center justify-center rounded-full border border-navy/25 text-sm font-semibold text-navy"
                      >
                        {i + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-navy/12 pt-8">
                <h2 className="text-title font-semibold text-navy">Looking for a division?</h2>
                <ul className="mt-4 space-y-2.5">
                  {divisions.map((d) => (
                    <li key={d.key}>
                      <Link
                        href={d.href}
                        className="font-semibold text-forest underline decoration-forest/30 underline-offset-[5px] hover:decoration-forest"
                      >
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
