import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion-ui";
import { company, orgs, leaders, legacy, heroStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Quezon Power (Philippines), Limited Co. — the first Build-Own-Operate power project in the Philippines, and the three companies behind it.",
};

/* eslint-disable @next/next/no-img-element */

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        index="[01]"
        eyebrow="The company"
        tone="grid"
        title={<>Quezon Power <span className="text-grid">(Philippines), Ltd.</span></>}
        intro={company.tagline}
      />

      {/* Overview */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-28">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {company.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line">
              {heroStats.map((s) => (
                <div key={s.label} className="px-4 py-5 first:pl-0">
                  <div className="font-display text-2xl font-extrabold text-mist sm:text-3xl">
                    {s.prefix ?? ""}{s.value}{s.suffix ?? ""}
                  </div>
                  <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="photo relative aspect-[4/5] overflow-hidden">
              <img src="/img/plant-01.jpg" alt="Aerial view of the Quezon Power facility" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The three companies */}
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <SectionLabel index="[02]" tone="grid">Structure</SectionLabel>
            <h2 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase text-mist">
              Three companies, one plant.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {orgs.map((o, i) => (
              <Reveal key={o.code} delay={i * 0.1}>
                <div className="flex h-full flex-col bg-ink p-8">
                  <span className="font-display text-3xl font-black text-grid">{o.code}</span>
                  <h3 className="mt-4 text-base font-bold leading-tight text-mist">{o.name}</h3>
                  <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-amber">
                    {o.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <SectionLabel index="[03]" tone="grid">Leadership</SectionLabel>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase text-mist">
              The people in charge.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <div className="flex items-center gap-4 border border-line bg-ink-2 p-4">
                  <div className="photo relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    <img src={l.img} alt={l.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-mist">{l.name}</div>
                    <div className="font-mono text-xs uppercase tracking-wider text-muted">{l.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The firsts */}
      <section className="relative overflow-hidden">
        <div className="schematic absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <SectionLabel index="[04]" tone="grid">Legacy</SectionLabel>
            <h2 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase text-mist">
              Three ways Quezon Power went <span className="text-grid">first</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {legacy.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.1}>
                <div className="flex h-full flex-col bg-ink p-8">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-grid">First</span>
                  <h3 className="mt-6 text-lg font-bold leading-tight text-mist">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
