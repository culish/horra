import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { getT } from "@/i18n/server";
import { PageHero } from "@/components/sections/sections";
import { Container, Section } from "@/components/ui/primitives";
import { DisclaimerNotice } from "@/components/ui/notices";
import { LegalBody } from "@/components/sections/LegalBody";

export async function generateMetadata() {
  const t = await getT();
  const p = t.legal.terms;
  return pageMetadata({ title: p.metaTitle, description: p.metaDescription, path: "/terms" });
}

export default async function TermsPage() {
  const t = await getT();
  const p = t.legal.terms;
  return (
    <>
      <PageHero crumbs={[{ label: t.common.home, href: "/" }, { label: p.title }]} title={p.title} lead={p.lead} />
      <Section>
        <Container>
          <div className="mx-auto max-w-[44rem]">
            <DisclaimerNotice title={t.legal.draftTitle}>
              <p>{p.draft}</p>
            </DisclaimerNotice>
            <LegalBody sections={p.sections} vars={{ company: siteConfig.legalName }} />
          </div>
        </Container>
      </Section>
    </>
  );
}
