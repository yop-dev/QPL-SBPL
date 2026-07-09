import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion-ui";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and events from Quezon Power — recognitions, operations, governance, and community programs.",
};

export default function NewsPage() {
  return (
    <main>
      <PageHeader
        index="[05]"
        eyebrow="News & events"
        tone="amber"
        wave="amber"
        title={<>What&apos;s <span className="text-amber">happening</span></>}
        intro="Selected recognitions, operations updates, and community milestones. Full coverage lives on qpl.com.ph."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={Math.min(i * 0.06, 0.3)}>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between border border-line bg-ink-2 p-8 transition-colors hover:border-amber/50 hover:bg-surface/40"
                >
                  <div>
                    <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em]">
                      <span className="text-amber">{n.tag}</span>
                      <span className="h-px w-6 bg-line" />
                      <span className="text-faint">{n.date}</span>
                    </div>
                    <h2 className="mt-5 text-xl font-bold leading-snug text-mist">{n.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{n.blurb}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-amber">
                    Read on qpl.com.ph
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <a href="https://www.qpl.com.ph/news-and-events/" target="_blank" rel="noopener noreferrer" className="hover:text-amber">
              All news on qpl.com.ph →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
