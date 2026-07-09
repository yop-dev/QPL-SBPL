import Link from "next/link";
import { nav } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/qpl-logo.png" alt="Quezon Power" className="h-8 w-auto opacity-90" />
            </span>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-amber">
              Energy for Life
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A 460 MW base-load facility in Mauban, Quezon, supplying the Luzon
              grid since 2000.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-mist"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono uppercase tracking-[0.2em]">
            Quezon Power — Mauban, Quezon
          </span>
          <span className="max-w-md font-mono leading-relaxed sm:text-right">
            Concept redesign · not affiliated with or endorsed by Quezon Power.
            Built from publicly available material for demonstration only.
          </span>
        </div>
      </div>
    </footer>
  );
}
