import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion-ui";
import { plantSpecs } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Plant",
  description:
    "The Quezon Power asset — a 460 MW base-load coal-fired plant in Mauban, Quezon: GE turbine, Foster Wheeler boiler, and a privately-owned transmission line.",
};

/* eslint-disable @next/next/no-img-element */

export default function PlantPage() {
  return (
    <main>
      <PageHeader
        index="[02]"
        eyebrow="The asset"
        tone="amber"
        wave="amber"
        title={<>Engineered to run <span className="text-amber">around the clock</span></>}
        intro="The first base-load independent power producer to sell electricity to a non-government utility in Southeast Asia — and the first to privately own its high-voltage transmission line."
      />

      {/* Spec sheet + imagery */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="border border-line bg-surface/40">
                <div className="flex items-center justify-between border-b border-line px-5 py-3">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-amber">
                    Specification sheet
                  </span>
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
                      <dt className="font-mono text-xs uppercase tracking-wider text-faint">{s.k}</dt>
                      <dd className="text-sm text-mist">{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

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

      {/* Systems callout */}
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {[
              { t: "Thermal generation", d: "A GE steam turbine and Foster Wheeler natural-circulation boiler run on pulverized coal for continuous base-load output." },
              { t: "Clean operation", d: "Low-NOx burners under 200 ppm, an upgraded electrostatic precipitator and a wet-scrubber FGD system, with continuous emissions monitoring." },
              { t: "Into the grid", d: "A 31-kilometer, privately-owned high-voltage line carries Mauban's output into the Luzon grid under a 25-year agreement with Meralco." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="flex h-full flex-col bg-ink p-8">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-amber">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-bold leading-tight text-mist">{c.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
