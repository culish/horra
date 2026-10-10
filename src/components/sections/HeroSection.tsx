import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, ButtonLink } from "@/components/ui/primitives";
import { ArchipelagoMap } from "@/components/art/ArchipelagoMap";
import { divisions } from "@/content/divisions";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" data-surface="dark" className="relative overflow-hidden bg-navy text-ivory">
      <Container className="relative pt-14 sm:pt-20 lg:pt-24">
        <p className="text-[0.9375rem] font-medium text-mist">PT. Horra Prime Group</p>
        <h1 id="hero-title" className="mt-5 max-w-[62rem] text-display font-semibold text-balance">
          Your Trusted Partner for Business, Trade &amp; Travel in Indonesia
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4 lg:pt-4">
            <p className="max-w-[30rem] text-lead text-mist">
              Integrated business consulting, international trading, and travel assistance designed to connect
              opportunities across Indonesia and global markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#divisions" variant="accent">
                Explore Our Services
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-light">
                Contact Our Team
              </ButtonLink>
            </div>
          </div>
          <div className="-mx-5 sm:-mx-8 lg:col-span-8 lg:-mr-24 lg:ml-0 xl:-mr-40">
            <ArchipelagoMap />
          </div>
        </div>
      </Container>

      <div className="relative mt-10 border-t border-ivory/12 lg:mt-6">
        <Container>
          <ul className="grid divide-y divide-ivory/12 md:grid-cols-3 md:divide-x md:divide-y-0">
            {divisions.map((d) => (
              <li key={d.key} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <Link href={d.href} className="group flex h-full items-start justify-between gap-6 py-6 md:py-8">
                  <span>
                    <span className="block font-semibold text-ivory">{d.name}</span>
                    <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-mist">
                      {d.services
                        .slice(0, 2)
                        .map((s) => s.label)
                        .join(", ")}
                      {d.services.length > 2 ? " and more" : ""}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="mt-1 size-5 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
