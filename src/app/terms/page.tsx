import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/sections";
import { Container, Section } from "@/components/ui/primitives";
import { DisclaimerNotice } from "@/components/ui/notices";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms for using the PT. Horra Prime Group website. Draft pending legal review.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
        title="Terms of Use"
        lead="The basis on which you may use this website and the information on it."
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-[44rem]">
            <DisclaimerNotice title="Draft — pending legal review">
              <p>
                These terms are a starting draft. They must be reviewed by a qualified professional and completed before
                the website is published. They cover use of the website only, not the terms of any service agreement.
              </p>
            </DisclaimerNotice>

            <div className="prose-body mt-12">
              <h2>About this website</h2>
              <p>This website is operated by {siteConfig.legalName}. By using it, you agree to these terms.</p>

              <h2>Information only</h2>
              <p>
                Content on this website is general information about our services. It is not legal, immigration, tax or
                investment advice, and it is not an offer to sell any product or service. Requirements — especially
                immigration and company-registration rules — change, and you should confirm them with official sources
                or a qualified professional before acting.
              </p>

              <h2>No guarantees</h2>
              <ul>
                <li>
                  Visa and permit decisions are made by the Indonesian authorities. We do not guarantee approval,
                  processing times, extensions or conversions.
                </li>
                <li>
                  Product availability, specifications, prices, documentation and shipping terms apply only when
                  confirmed for a specific inquiry.
                </li>
                <li>Travel bookings depend on provider availability and conditions at the time of booking.</li>
              </ul>

              <h2>Services</h2>
              <p>
                Any service we provide is governed by a separate agreement or written confirmation, which takes priority
                over anything on this website.
              </p>

              <h2>External links</h2>
              <p>
                We link to official and third-party websites for convenience. We are not responsible for their content
                or availability.
              </p>

              <h2>Intellectual property</h2>
              <p>
                The text, design and graphics on this website belong to {siteConfig.legalName} or are used with
                permission. Do not reproduce them without consent.
              </p>

              <h2>Governing law</h2>
              <p>
                <strong>
                  [To be confirmed: governing law and jurisdiction, e.g. the laws of the Republic of Indonesia.]
                </strong>
              </p>

              <h2>Changes</h2>
              <p>
                We may update these terms. The current version is published on this page.
                <strong> [Add “last updated” date on publication.]</strong>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
