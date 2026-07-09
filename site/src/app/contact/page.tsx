import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion-ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Quezon Power — offices in Mauban, Quezon and Makati City.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        index="[06]"
        eyebrow="Get in touch"
        tone="amber"
        wave="amber"
        title={<>Let&apos;s power <span className="text-amber">what&apos;s next</span></>}
        intro="Energy for Life. Reach the team by email, or visit one of our offices."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 border border-amber px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-amber transition-colors hover:bg-amber hover:text-ink"
            >
              {contact.email}
              <span>→</span>
            </a>
          </Reveal>

          <div className="mt-16 grid gap-8 border-t border-line pt-12 sm:grid-cols-2">
            {contact.offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.1}>
                <div>
                  <div className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-amber">
                    {o.city}
                  </div>
                  {o.lines.map((line) => (
                    <p key={line} className="text-sm text-mist">{line}</p>
                  ))}
                  <p className="mt-2 font-mono text-sm text-amber">{o.tel}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
