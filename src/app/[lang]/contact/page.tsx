import Link from "@/components/ui/Link";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig, whatsappHref } from "@/config/site";
import { getDivisions } from "@/content/divisions";
import { getT } from "@/i18n/server";
import { PageHero } from "@/components/sections/sections";
import { Container, Section, buttonClass } from "@/components/ui/primitives";
import { ContactDetails } from "@/components/layout/ContactDetails";
import { InquiryForm } from "@/components/forms/InquiryForm";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({ title: t.contact.metaTitle, description: t.contact.metaDescription, path: "/contact" });
}

export default async function ContactPage() {
  const t = await getT();
  const c = t.contact;
  const wa = whatsappHref(t.nav.contact.greeting);
  const anyContact = Object.values(siteConfig.contact).some(Boolean);

  return (
    <>
      <PageHero
        crumbs={[{ label: t.common.home, href: "/" }, { label: t.nav.items.contact }]}
        title={c.title}
        lead={c.lead}
      />

      <Section labelledBy="contact-form-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <h2 id="contact-form-title" className="sr-only">
                {c.formTitle}
              </h2>
              <InquiryForm variant="general" />
            </div>

            <aside className="space-y-10 lg:col-span-4" aria-label={c.asideLabel}>
              <div>
                <h2 className="text-title font-semibold text-navy">{c.details}</h2>
                <ContactDetails className="mt-6" />
                {!anyContact && (
                  <p className="mt-6 text-sm leading-relaxed text-stone">
                    {c.detailsPending}
                  </p>
                )}
                {wa && (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass("outline", "mt-6 w-full")}
                  >
                    {c.whatsapp}
                  </a>
                )}
              </div>

              <div className="border-t border-navy/12 pt-8">
                <h2 className="text-title font-semibold text-navy">{c.nextTitle}</h2>
                <ol className="mt-5 space-y-4">
                  {c.next.map((s, i) => (
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
                <h2 className="text-title font-semibold text-navy">{c.divisionTitle}</h2>
                <ul className="mt-4 space-y-2.5">
                  {getDivisions(t).map((d) => (
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
