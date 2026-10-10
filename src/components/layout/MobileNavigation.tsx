"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { Container, ButtonLink } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

/**
 * Full-height menu for small screens. Always present in the HTML (hidden when closed) so it
 * works with keyboard, screen readers and before hydration. Sub-sections use native
 * <details>, which is keyboard accessible without extra script.
 */
export function MobileNavigation({
  open,
  pathname,
  onNavigate,
}: {
  open: boolean;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <div
      id="mobile-nav"
      hidden={!open}
      className="fixed inset-x-0 top-[73px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-ivory xl:hidden"
    >
      <Container className="pt-4 pb-12">
        <nav aria-label="Mobile">
          <ul className="divide-y divide-navy/10 border-b border-navy/10">
            {mainNav.map((item) => {
              const current = pathname === item.href;
              if (!item.groups) {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "flex min-h-14 items-center text-lg font-semibold",
                        current ? "text-forest" : "text-navy",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <details className="group">
                    <summary className="flex min-h-14 cursor-pointer items-center justify-between text-lg font-semibold text-navy">
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className="size-5 text-stone transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="pb-5">
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        aria-current={current ? "page" : undefined}
                        className="flex min-h-11 items-center font-semibold text-forest"
                      >
                        {`${item.label} overview`}
                      </Link>
                      {item.groups.map((group) => (
                        <div key={group.heading} className="mt-3">
                          <p className="text-sm font-semibold text-stone">{group.heading}</p>
                          <ul className="mt-1">
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={onNavigate}
                                  aria-current={pathname === link.href ? "page" : undefined}
                                  className="flex min-h-11 items-center text-ink-soft hover:text-navy"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        </nav>
        <ButtonLink href="/contact" onClick={onNavigate} className="mt-8 w-full">
          Discuss Your Needs
        </ButtonLink>
      </Container>
    </div>
  );
}
