import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/sections";
import { Container, Section } from "@/components/ui/primitives";
import { DisclaimerNotice } from "@/components/ui/notices";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How PT. Horra Prime Group handles information submitted through this website. Draft pending legal review.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const email = siteConfig.contact.email;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        title="Privacy Policy"
        lead="How we handle the information you share through this website."
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-[44rem]">
            <DisclaimerNotice title="Draft — pending legal review">
              <p>
                This is a starting draft based on how the website&apos;s forms work. It must be reviewed against
                Indonesia&apos;s Personal Data Protection Law (Law No. 27 of 2022) and any other applicable rules, and
                completed with the company&apos;s actual data practices, before the website is published.
              </p>
            </DisclaimerNotice>

            <div className="prose-body mt-12">
              <h2>Who we are</h2>
              <p>
                This website is operated by {siteConfig.legalName} (“we”, “us”). Our registered address and contact
                details are listed on the <Link href="/contact">contact page</Link> once confirmed.
              </p>

              <h2>Information we collect</h2>
              <p>
                When you send an inquiry, we collect the details you enter in the form. Depending on the form, this may
                include:
              </p>
              <ul>
                <li>your name, email address and, if you choose to provide it, your phone or WhatsApp number;</li>
                <li>your country or nationality, and your company name for trade inquiries;</li>
                <li>the service or product you are asking about, and the details you include in your message.</li>
              </ul>
              <p>
                Please do not include passport numbers, financial details or other sensitive documents in the form. If
                documents are needed, we will explain how to share them securely.
              </p>

              <h2>How we use it</h2>
              <p>
                We use your information to respond to your inquiry, to provide the service you ask for, and to keep a
                record of our correspondence. We do not sell your information.
              </p>

              <h2>Sharing</h2>
              <p>
                We may share information with service providers who help us operate the website or handle inquiries, and
                — where your request requires it and with your knowledge — with relevant authorities or partners
                involved in delivering the service.
                <strong> [To be completed: list categories of providers and any transfers outside Indonesia.]</strong>
              </p>

              <h2>Retention</h2>
              <p>
                <strong>[To be completed: how long inquiry data is kept and how it is deleted.]</strong>
              </p>

              <h2>Your choices</h2>
              <p>
                You may ask to access, correct or delete the personal information we hold about you, or withdraw your
                consent, subject to applicable law.{" "}
                {email ? (
                  <>
                    Contact us at <a href={`mailto:${email}`}>{email}</a>.
                  </>
                ) : (
                  <strong>[To be completed: contact address for privacy requests.]</strong>
                )}
              </p>

              <h2>Cookies</h2>
              <p>
                This website does not use advertising or analytics cookies in its current form. If analytics are added,
                this section must be updated before they are enabled.
              </p>

              <h2>Changes</h2>
              <p>
                We may update this policy. The current version is always published on this page.
                <strong> [Add “last updated” date on publication.]</strong>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
