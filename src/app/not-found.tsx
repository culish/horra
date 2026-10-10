import Link from "next/link";
import { Container, ButtonLink } from "@/components/ui/primitives";
import { divisions } from "@/content/divisions";

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="bg-sand">
      <Container className="py-24 md:py-32">
        <p className="text-[0.9375rem] font-semibold text-forest">Page not found</p>
        <h1 id="nf-title" className="mt-4 max-w-[40rem] text-display font-semibold text-balance text-navy">
          This page doesn’t exist
        </h1>
        <p className="mt-6 max-w-[36rem] text-lead text-ink-soft">
          The link may be out of date. Go to the home page, or choose a division below.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">Go to the home page</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact our team
          </ButtonLink>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
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
      </Container>
    </section>
  );
}
