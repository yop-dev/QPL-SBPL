import Link from "next/link";
import { Reveal } from "./motion-ui";
import SectionLabel from "./SectionLabel";

/* eslint-disable @next/next/no-img-element */

type Tone = "amber" | "grid" | "eco";

export default function Teaser({
  index,
  eyebrow,
  tone = "amber",
  title,
  body,
  href,
  cta = "Explore",
  img,
  alt,
  reverse = false,
}: {
  index: string;
  eyebrow: string;
  tone?: Tone;
  title: React.ReactNode;
  body: React.ReactNode;
  href: string;
  cta?: string;
  img: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div className="photo relative aspect-[4/3] overflow-hidden">
            <img src={img} alt={alt} className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionLabel index={index} tone={tone}>
            {eyebrow}
          </SectionLabel>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase leading-[1.02] text-mist">
            {title}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">{body}</p>
          <Link
            href={href}
            className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber"
          >
            {cta}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
