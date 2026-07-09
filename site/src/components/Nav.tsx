"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const solid = !isHome || scrolled || open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-line bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="Quezon Power home">
          {/* Their real logo mark, clipped from the official lockup */}
          <span className="block h-8 w-[29px] shrink-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/qpl-logo.png" alt="Quezon Power" className="h-8 w-auto max-w-none" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-display text-sm font-extrabold uppercase tracking-[0.12em] text-mist sm:tracking-[0.18em]">
              Quezon <span className="text-grid">Power</span>
            </span>
            <span className="mt-1 hidden whitespace-nowrap font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted sm:block">
              (Philippines), Limited Co.
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                isActive(item.href) ? "text-amber" : "text-muted hover:text-mist"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden shrink-0 items-center gap-2 whitespace-nowrap border border-line px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors hover:border-amber hover:text-amber sm:flex"
          >
            Get in touch
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className={`h-[2px] w-5 bg-mist transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 bg-mist transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 bg-mist transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-line bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem] border-t" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b border-line-soft py-4 font-mono text-sm uppercase tracking-[0.2em] transition-colors ${
                isActive(item.href) ? "text-amber" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-5 mb-2 inline-flex items-center justify-center gap-2 border border-amber px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-amber"
          >
            Get in touch <span>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
