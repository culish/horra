import type { Metadata } from "next";
import { PageHero } from "@/components/sections/sections";
import { Container, Section } from "@/components/ui/primitives";
import { PaymentLinkForm } from "@/components/payments/PaymentLinkForm";

export const metadata: Metadata = {
  title: "Create payment link",
  description: "Staff tool for creating invoice payment links.",
  robots: { index: false, follow: false },
};

/** Staff-only tool. The page itself is public but useless without PAYMENT_ADMIN_KEY. */
export default function PaymentAdminPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Create payment link" }]}
        title="Create a payment link"
        lead="For Horra staff. Enter the invoice details agreed with the customer; the link lets them pay that exact amount online."
      />
      <Section labelledBy="payment-link-form">
        <Container>
          <div className="mx-auto max-w-[40rem]">
            <h2 id="payment-link-form" className="sr-only">
              Payment link form
            </h2>
            <PaymentLinkForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
