import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal, Counter } from "@/components/motion-ui";
import { awards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "Awards and recognitions earned by Quezon Power from 1997 to 2025 — project financing, environmental stewardship, operations, and community programs.",
};

export default function AwardsPage() {
  return (
    <main>
      <PageHeader
        index="[04]"
        eyebrow="Recognition"
        tone="grid"
        title={<>Awards &amp; <span className="text-grid">recognitions</span></>}
        intro="From project financing to environmental stewardship, recognized at home and across Asia since 1997."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end gap-x-4 gap-y-1">
              <span className="font-display text-5xl font-black text-grid">
                <Counter to={20} suffix="+" />
              </span>
              <span className="pb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                awards · 28 years running
              </span>
            </div>
          </Reveal>

          <div className="border-t border-line">
            {awards.map((a, i) => (
              <Reveal key={a.year + i} delay={Math.min(i * 0.03, 0.3)}>
                <div className="group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-line py-5 transition-colors hover:bg-surface/30">
                  <span className="font-display text-xl font-extrabold text-faint transition-colors group-hover:text-grid sm:text-2xl">
                    {a.year}
                  </span>
                  <p className="text-sm leading-relaxed text-mist">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
