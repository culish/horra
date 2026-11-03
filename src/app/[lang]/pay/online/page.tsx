import { pageMetadata } from "@/lib/metadata";
import { getT } from "@/i18n/server";
import { serviceIds } from "@/lib/payments/orders";
import { PageHero } from "@/components/sections/sections";
import { Container, Section } from "@/components/ui/primitives";
import { ServicePaymentSlot } from "@/components/payments/PaymentSlot";

export async function generateMetadata() {
  const t = await getT();
  return pageMetadata({
    title: t.pay.service.title,
    description: t.pay.service.intro,
    path: "/pay/online",
    noindex: true,
  });
}

/** One place to pay any quoted service. Visas with a fixed price are paid in the visa application instead. */
export default async function PayOnlinePage() {
  const t = await getT();
  return (
    <>
      <PageHero
        crumbs={[{ label: t.common.home, href: "/" }, { label: t.pay.service.title }]}
        title={t.pay.service.title}
        lead={t.pay.service.intro}
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-[48rem]">
            <ServicePaymentSlot services={[...serviceIds]} title={t.pay.service.title} intro={t.pay.service.notice} />
          </div>
        </Container>
      </Section>
    </>
  );
}
