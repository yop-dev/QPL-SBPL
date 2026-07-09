import SectionLabel from "./SectionLabel";
import Waveform from "./Waveform";

type Tone = "amber" | "grid" | "eco";

export default function PageHeader({
  index,
  eyebrow,
  tone = "amber",
  title,
  intro,
  wave = "grid",
}: {
  index: string;
  eyebrow: string;
  tone?: Tone;
  title: React.ReactNode;
  intro?: React.ReactNode;
  wave?: "grid" | "amber" | "eco";
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-2 pt-28 lg:pt-32">
      <div className="schematic absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 pb-14 lg:px-10">
        <SectionLabel index={index} tone={tone}>
          {eyebrow}
        </SectionLabel>
        <h1 className="max-w-4xl text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold uppercase leading-[0.98] text-mist">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            {intro}
          </p>
        )}
      </div>
      <Waveform className="w-full" height={48} opacity={0.5} tone={wave} />
    </section>
  );
}
