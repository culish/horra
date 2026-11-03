import Link from "@/components/ui/Link";
import { Container, ButtonLink } from "@/components/ui/primitives";
import { getDivisions } from "@/content/divisions";
import { getT } from "@/i18n/server";

export default async function NotFound() {
  const t = await getT();
  const n = t.notFound;
  return (
    <section aria-labelledby="nf-title" className="bg-sand">
      <Container className="py-24 md:py-32">
        <p className="text-[0.9375rem] font-semibold text-forest">{n.label}</p>
        <h1 id="nf-title" className="mt-4 max-w-[40rem] text-display font-semibold text-balance text-navy">
          {n.title}
        </h1>
        <p className="mt-6 max-w-[36rem] text-lead text-ink-soft">
          {n.text}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">{n.home}</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            {t.common.contactOurTeam}
          </ButtonLink>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
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
      </Container>
    </section>
  );
}
