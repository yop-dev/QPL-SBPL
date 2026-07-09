"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Quezon Power home">
          {/* Their real logo mark, clipped from the official lockup */}
          <span className="block h-8 w-[34px] shrink-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/qpl-logo.png" alt="Quezon Power" className="h-8 w-auto max-w-none" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-mist">
              Quezon <span className="text-grid">Power</span>
            </span>
            <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted">
              (Philippines), Limited Co.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-mist"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group flex items-center gap-2 border border-line px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors hover:border-amber hover:text-amber"
        >
          Get in touch
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
}
