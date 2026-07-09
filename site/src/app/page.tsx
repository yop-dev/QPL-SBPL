import Link from "next/link";
import Hero from "@/components/Hero";
import Teaser from "@/components/Teaser";
import Waveform from "@/components/Waveform";
import SectionLabel from "@/components/SectionLabel";
import { Reveal, Counter } from "@/components/motion-ui";
import { news, contact } from "@/lib/content";

export default function Home() {
  const latest = news.slice(0, 3);

  return (
    <main>
      <Hero />

      <Teaser
        index="[01]"
        eyebrow="Who we are"
        tone="grid"
        title={<>The first <span className="text-grid">Build-Own-Operate</span> power project in the Philippines</>}
        body="A 460 MW facility in Mauban, Quezon — privately financed, built and run without a sovereign guarantee, feeding the Luzon grid since 2000."
        href="/about"
        cta="About the company"
        img="/img/plant-05.jpg"
        alt="Aerial view of the Quezon Power facility and coastline"
      />

      <Teaser
        index="[02]"
        eyebrow="The asset"
        tone="amber"
        title={<>A power plant engineered to run <span className="text-amber">around the clock</span></>}
        body="GE steam turbine, Foster Wheeler boiler, once-through seawater cooling, and a 31 km privately-owned transmission line into the grid."
        href="/plant"
        cta="See the specs"
        img="/img/plant-02.jpg"
        alt="The Quezon Power generating hall at night"
        reverse
      />

      <Teaser
        index="[03]"
        eyebrow="Beyond the megawatts"
        tone="eco"
        title={<>We go beyond <span className="text-eco">generating power</span></>}
        body="A sustainable development program across all 40 barangays of Mauban — health, education, livelihood, and the coastline."
        href="/sustainability"
        cta="Our programs"
        img="/img/impact-coastal.jpg"
        alt="Coastal cleanup and tree-planting in Mauban"
      />

      {/* Awards + News row */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-7xl gap-px border-x border-line bg-line md:grid-cols-2">
          {/* Awards */}
          <Reveal className="bg-ink-2">
            <div className="flex h-full flex-col justify-between p-8 lg:p-12">
              <div>
                <SectionLabel index="[04]" tone="grid">Recognition</SectionLabel>
                <p className="font-display text-5xl font-black text-mist">
                  <Counter to={20} suffix="+" />
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  awards · <span className="text-grid">28 years running</span>
                </p>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                  From project financing to environmental stewardship, recognized
                  at home and across Asia since 1997.
                </p>
              </div>
              <Link href="/awards" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                All awards <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>

          {/* News */}
          <Reveal delay={0.1} className="bg-ink-2">
            <div className="flex h-full flex-col justify-between p-8 lg:p-12">
              <div>
                <SectionLabel index="[05]" tone="amber">Latest news</SectionLabel>
                <ul className="divide-y divide-line-soft">
                  {latest.map((n) => (
                    <li key={n.title} className="py-4 first:pt-0">
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-faint">
                        {n.date} · {n.tag}
                      </div>
                      <p className="mt-1 text-sm leading-snug text-mist">{n.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/news" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                All news <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.42em] text-amber">
              Energy for Life
            </p>
            <h2 className="max-w-4xl text-[clamp(2.25rem,6vw,5rem)] font-black uppercase text-mist">
              Let&apos;s power <span className="text-amber">what&apos;s next</span>.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 border border-amber px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-amber transition-colors hover:bg-amber hover:text-ink"
              >
                {contact.email}
                <span>→</span>
              </a>
              <Link
                href="/contact"
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-mist"
              >
                Contact details →
              </Link>
            </div>
          </Reveal>
        </div>
        <Waveform className="w-full" height={64} opacity={0.5} />
      </section>
    </main>
  );
}
