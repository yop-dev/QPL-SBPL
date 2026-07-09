"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Waveform from "@/components/Waveform";
import { Reveal, Counter } from "@/components/motion-ui";
import {
  plantSpecs,
  legacy,
  impact,
  awards,
  leaders,
  contact,
} from "@/lib/content";

/* eslint-disable @next/next/no-img-element */

const toneClass = {
  amber: "text-amber",
  grid: "text-grid",
  eco: "text-eco",
} as const;

function SectionLabel({
  index,
  tone = "amber",
  children,
}: {
  index: string;
  tone?: keyof typeof toneClass;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className={`font-mono text-xs ${toneClass[tone]}`}>{index}</span>
      <span className="h-px w-8 bg-line" />
      <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-muted">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />

        {/* THE PLANT */}
        <section id="plant" className="relative border-t border-line bg-ink-2">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <Reveal>
              <SectionLabel index="[01]">The asset</SectionLabel>
              <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-extrabold uppercase text-mist">
                A power plant engineered to run{" "}
                <span className="text-amber">around the clock</span>.
              </h2>
              <p className="mt-6 max-w-xl text-muted">
                The first base-load independent power producer to sell electricity
                to a non-government utility in Southeast Asia — and the first to
                privately own its high-voltage transmission line.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Spec sheet */}
              <Reveal>
                <div className="border border-line bg-surface/40">
                  <div className="flex items-center justify-between border-b border-line px-5 py-3">
                    <span className="label text-muted">Specification sheet</span>
                    <span className="font-mono text-xs text-signal">● operational</span>
                  </div>
                  <dl>
                    {plantSpecs.map((s, i) => (
                      <div
                        key={s.k}
                        className={`grid grid-cols-[0.9fr_1.1fr] gap-4 px-5 py-4 ${
                          i !== plantSpecs.length - 1 ? "border-b border-line-soft" : ""
                        }`}
                      >
                        <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                          {s.k}
                        </dt>
                        <dd className="text-sm text-mist">{s.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>

              {/* Big image + thumbs */}
              <Reveal delay={0.1}>
                <div className="flex h-full flex-col gap-4">
                  <div className="photo relative aspect-[4/3] overflow-hidden">
                    <img src="/img/plant-01.jpg" alt="Quezon Power generating facility" className="h-full w-full object-cover" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {["/img/plant-02.jpg", "/img/plant-04.jpg", "/img/plant-05.jpg"].map((src) => (
                      <div key={src} className="photo relative aspect-square overflow-hidden">
                        <img src={src} alt="Facility detail" className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LEGACY — three "firsts" */}
        <section id="legacy" className="relative overflow-hidden border-t border-line">
          <div className="schematic absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <Reveal>
              <SectionLabel index="[02]" tone="grid">Legacy</SectionLabel>
              <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-extrabold uppercase text-mist">
                Three ways Quezon Power went <span className="text-grid">first</span>.
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
              {legacy.map((item, i) => (
                <Reveal key={item.n} delay={i * 0.1}>
                  <div className="flex h-full flex-col bg-ink p-8">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-grid">
                      First
                    </span>
                    <h3 className="mt-6 text-xl font-bold leading-tight text-mist">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section id="impact" className="border-t border-line bg-ink-2">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <Reveal>
              <SectionLabel index="[03]" tone="eco">Beyond the megawatts</SectionLabel>
              <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-extrabold uppercase text-mist">
                We go beyond <span className="text-eco">generating power</span>.
              </h2>
              <p className="mt-6 max-w-xl text-muted">
                A sustainable development program built around the communities of
                Mauban — health, education, livelihood, and the coastline.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {impact.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.1}>
                  <article className="group flex h-full flex-col border border-line bg-ink">
                    <div className="photo relative aspect-[3/2] overflow-hidden">
                      <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-4xl font-black text-eco">{c.stat}</span>
                        <span className="font-mono text-xs uppercase tracking-wider text-muted">{c.unit}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-mist">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AWARDS — chronological */}
        <section id="awards" className="border-t border-line">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <SectionLabel index="[04]" tone="grid">Recognition</SectionLabel>
                  <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-extrabold uppercase text-mist">
                    <Counter to={20} suffix="+" /> awards,
                    <br />
                    <span className="text-grid">28 years running</span>.
                  </h2>
                  <p className="mt-6 max-w-sm text-muted">
                    From project financing to environmental stewardship, recognized
                    at home and across Asia since 1997.
                  </p>
                  <Waveform className="mt-10 max-w-xs" height={40} opacity={0.7} />
                </div>
              </Reveal>

              <div>
                {awards.map((a, i) => (
                  <Reveal key={a.year + i} delay={Math.min(i * 0.05, 0.3)}>
                    <div className="group grid grid-cols-[auto_1fr] gap-6 border-b border-line py-6 transition-colors hover:bg-surface/30">
                      <span className="font-display text-2xl font-extrabold text-faint transition-colors group-hover:text-grid">
                        {a.year}
                      </span>
                      <p className="self-center text-sm leading-relaxed text-mist">{a.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="border-t border-line bg-ink-2">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <Reveal>
              <SectionLabel index="[05]" tone="grid">Leadership</SectionLabel>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {leaders.map((l, i) => (
                <Reveal key={l.name} delay={i * 0.08}>
                  <div className="flex items-center gap-4 border border-line bg-ink p-4">
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

        {/* CONTACT */}
        <section id="contact" className="relative overflow-hidden border-t border-line">
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <Reveal>
              <SectionLabel index="[06]">Get in touch</SectionLabel>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.42em] text-amber">
                Energy for Life
              </p>
              <h2 className="max-w-4xl text-[clamp(2.25rem,6vw,5rem)] font-black uppercase text-mist">
                Let&apos;s power <span className="text-amber">what&apos;s next</span>.
              </h2>
              <a
                href={`mailto:${contact.email}`}
                className="mt-8 inline-flex items-center gap-3 border border-amber px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-amber transition-colors hover:bg-amber hover:text-ink"
              >
                {contact.email}
                <span>→</span>
              </a>
            </Reveal>

            <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
              {contact.offices.map((o, i) => (
                <Reveal key={o.city} delay={i * 0.1}>
                  <div>
                    <div className="label mb-3 text-muted">{o.city}</div>
                    {o.lines.map((line) => (
                      <p key={line} className="text-sm text-mist">{line}</p>
                    ))}
                    <p className="mt-2 font-mono text-sm text-amber">{o.tel}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Waveform className="w-full" height={64} opacity={0.5} />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-line bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span className="flex items-center gap-3 font-mono uppercase tracking-[0.2em]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/qpl-logo.png" alt="Quezon Power" className="h-7 w-auto opacity-80" />
            <span className="text-amber">Energy for Life</span>
          </span>
          <span className="max-w-md font-mono leading-relaxed sm:text-right">
            Concept redesign · not affiliated with or endorsed by Quezon Power.
            Built from publicly available material for demonstration only.
          </span>
        </div>
      </footer>
    </div>
  );
}
