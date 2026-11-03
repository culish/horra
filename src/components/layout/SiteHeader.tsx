"use client";

import Link from "@/components/ui/Link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type FocusEvent, type PointerEvent } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import type { NavItem } from "@/content/navigation";
import { useI18n, fmt } from "@/i18n/client";
import { stripLocale } from "@/i18n/config";
import { Container, ButtonLink } from "@/components/ui/primitives";
import { Wordmark } from "./Wordmark";
import { MobileNavigation } from "./MobileNavigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/cn";

const isActive = (pathname: string, item: NavItem) => {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
  return Boolean(item.groups?.some((g) => g.links.some((l) => l.href.split("#")[0] === pathname)));
};

/** Elements outside the header that become inert while the mobile menu covers the page */
const setPageInert = (inert: boolean) => {
  for (const id of ["main", "site-footer"]) {
    const el = document.getElementById(id);
    if (el) el.inert = inert;
  }
  document.documentElement.style.overflow = inert ? "hidden" : "";
};

export function SiteHeader({ nav }: { nav: NavItem[] }) {
  const pathname = stripLocale(usePathname());
  const { t } = useI18n();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setPageInert(false);
  }, []);

  // Shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes any open menu; clicking outside closes the desktop menu
  useEffect(() => {
    if (!openMenu && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (openMenu) {
        document.getElementById(`toggle-${openMenu}`)?.focus();
        setOpenMenu(null);
      }
      if (mobileOpen) {
        setMobileOpen(false);
        setPageInert(false);
        mobileButtonRef.current?.focus();
      }
    };
    const onPointer = (e: globalThis.PointerEvent) => {
      if (openMenu && navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openMenu, mobileOpen]);

  // Leaving a page (e.g. via browser back) should never leave the page inert
  useEffect(() => () => setPageInert(false), []);

  const openNow = (id: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenMenu(id);
  };
  const closeSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  };
  const onItemPointerEnter = (id: string) => (e: PointerEvent) => {
    if (e.pointerType === "mouse") openNow(id);
  };
  const onItemPointerLeave = (e: PointerEvent) => {
    if (e.pointerType === "mouse") closeSoon();
  };
  const onItemBlur = (e: FocusEvent<HTMLLIElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null);
  };

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    setOpenMenu(null);
    setPageInert(next);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-ivory/95 backdrop-blur-md transition-shadow duration-300 supports-[backdrop-filter]:bg-ivory/90",
          scrolled ? "border-navy/10 shadow-[0_1px_24px_-12px_rgb(21_43_129/0.35)]" : "border-navy/[0.07]",
        )}
      >
        <Container className="flex h-[72px] items-center justify-between gap-4">
          <Wordmark />

          <nav ref={navRef} aria-label={t.nav.main} className="hidden xl:block">
            <ul className="flex items-center">
              {nav.map((item) => {
                const active = isActive(pathname, item);
                const linkClass = cn(
                  "relative flex h-[72px] items-center px-2.5 text-[0.875rem] font-medium whitespace-nowrap transition-colors 2xl:px-3 2xl:text-[0.9375rem]",
                  active ? "text-navy" : "text-ink-soft hover:text-navy",
                  active &&
                    "after:absolute after:inset-x-2.5 after:bottom-[18px] after:h-[2px] after:bg-gold after:content-['']",
                );

                if (!item.groups) {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={linkClass}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const open = openMenu === item.id;
                return (
                  <li
                    key={item.id}
                    onPointerEnter={onItemPointerEnter(item.id)}
                    onPointerLeave={onItemPointerLeave}
                    onBlur={onItemBlur}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={linkClass}
                        aria-current={pathname === item.href ? "page" : undefined}
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        id={`toggle-${item.id}`}
                        aria-expanded={open}
                        aria-controls={`menu-${item.id}`}
                        onClick={() => (open ? setOpenMenu(null) : openNow(item.id))}
                        className="mr-0.5 -ml-1 flex size-7 items-center justify-center rounded-[3px] text-ink-soft hover:bg-navy/[0.05] hover:text-navy"
                      >
                        <span className="sr-only">{fmt(t.nav.submenu, { label: item.label })}</span>
                        <ChevronDown
                          aria-hidden
                          className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
                        />
                      </button>
                    </div>
                    <div
                      id={`menu-${item.id}`}
                      hidden={!open}
                      className="absolute inset-x-0 top-full border-y border-navy/10 bg-ivory shadow-[0_24px_40px_-24px_rgb(21_43_129/0.35)]"
                    >
                      <MegaPanel item={item} onNavigate={closeAll} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <LanguageSwitcher />
            <div className="hidden sm:block xl:hidden 2xl:block">
              <ButtonLink href="/contact" size="sm" onClick={closeAll}>
                {t.nav.discuss}
              </ButtonLink>
            </div>
            <button
              ref={mobileButtonRef}
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={toggleMobile}
              className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[3px] px-2 text-[0.9375rem] font-semibold whitespace-nowrap text-navy hover:bg-navy/[0.05] sm:px-3 xl:hidden"
            >
              {mobileOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
              <span className="sr-only sm:not-sr-only">{mobileOpen ? t.nav.close : t.nav.menu}</span>
            </button>
          </div>
        </Container>
      </header>
      {/* Outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel */}
      <MobileNavigation nav={nav} open={mobileOpen} pathname={pathname} onNavigate={closeAll} />
    </>
  );
}

function MegaPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const { t } = useI18n();
  const groups = item.groups ?? [];
  const single = groups.length === 1;
  return (
    <Container className="grid grid-cols-12 gap-10 py-10">
      <div className="col-span-4 border-r border-navy/10 pr-10">
        <p className="text-title font-semibold text-navy">{item.label}</p>
        {item.intro && <p className="mt-3 leading-relaxed text-ink-soft">{item.intro}</p>}
        <Link
          href={item.href}
          onClick={onNavigate}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-forest underline-offset-4 hover:underline"
        >
          {fmt(t.nav.overview, { label: item.label })}
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
      <div className={cn("col-span-8 grid gap-10", !single && "grid-cols-2")}>
        {groups.map((group) => (
          <div key={group.heading}>
            <p className="text-sm font-semibold text-stone">
              {group.href ? (
                <Link
                  href={group.href}
                  onClick={onNavigate}
                  className="underline-offset-4 hover:text-navy hover:underline"
                >
                  {group.heading}
                </Link>
              ) : (
                group.heading
              )}
            </p>
            <ul className={cn("mt-4 grid gap-x-8", single && group.links.length > 4 ? "grid-cols-2" : "grid-cols-1")}>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="group flex items-baseline justify-between gap-4 border-b border-navy/[0.08] py-3 hover:border-navy/30"
                  >
                    <span className="font-medium text-navy group-hover:text-forest">{link.label}</span>
                    {link.note && <span className="shrink-0 text-sm text-stone">{link.note}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
