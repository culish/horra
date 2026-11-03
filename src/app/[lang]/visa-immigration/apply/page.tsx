import { Suspense } from "react";
import { connection } from "next/server";
import { pageMetadata } from "@/lib/metadata";
import { snapConfig } from "@/lib/payments/config";
import { getT } from "@/i18n/server";
import { PageHero } from "@/components/sections/sections";
import { Container, Section } from "@/components/ui/primitives";
import { ImmigrationDisclaimer } from "@/components/ui/notices";
import { VisaApplication } from "@/components/visa/VisaApplication";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({ title: t.apply.metaTitle, description: t.apply.metaDescription, path: "/visa-immigration/apply" });
}

/** Payment keys are read per request so they can be changed without a rebuild. */
async function LiveApplication() {
  await connection();
  return <VisaApplication snap={snapConfig()} />;
}

export default async function VisaApplyPage() {
  const t = await getT();
  return (
    <>
      <PageHero
        crumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.groups.visa, href: "/visa-immigration" },
          { label: t.apply.crumb },
        ]}
        title={t.apply.title}
        lead={t.apply.lead}
      />
      <Section labelledBy="page-title" className="!pt-12 md:!pt-16">
        <Container>
          <Suspense fallback={<div className="h-[36rem] animate-pulse rounded-[8px] border border-navy/10 bg-white" />}>
            <LiveApplication />
          </Suspense>
          <ImmigrationDisclaimer className="mt-12" />
        </Container>
      </Section>
    </>
  );
}
