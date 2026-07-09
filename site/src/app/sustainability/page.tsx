import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion-ui";
import { impact, csrPrograms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Quezon Power's sustainable development program in Mauban, Quezon — health, education, livelihood, environment, and host-community development.",
};

/* eslint-disable @next/next/no-img-element */

export default function SustainabilityPage() {
  return (
    <main>
      <PageHeader
        index="[03]"
        eyebrow="Beyond the megawatts"
        tone="eco"
        wave="eco"
        title={<>We go beyond <span className="text-eco">generating power</span></>}
        intro="A sustainable development program built around the communities of Mauban — health, education, livelihood, the environment, and host-community development."
      />

      {/* Impact highlights */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <SectionLabel index="[01]" tone="eco">Impact</SectionLabel>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {impact.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <article className="group flex h-full flex-col border border-line bg-ink-2">
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

      {/* CSR programs */}
      <section className="bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <SectionLabel index="[02]" tone="eco">The program</SectionLabel>
            <h2 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase text-mist">
              Five ways we invest in Mauban.
            </h2>
          </Reveal>
          <div className="mt-14 space-y-6">
            {csrPrograms.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i * 0.08, 0.3)}>
                <article className="group grid items-stretch gap-0 overflow-hidden border border-line bg-ink md:grid-cols-[0.9fr_1.4fr]">
                  <div className={`photo relative h-56 overflow-hidden md:h-auto ${i % 2 ? "md:order-2" : ""}`}>
                    <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-eco">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold uppercase text-mist">{p.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
