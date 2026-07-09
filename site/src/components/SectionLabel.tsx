const toneClass = {
  amber: "text-amber",
  grid: "text-grid",
  eco: "text-eco",
} as const;

export default function SectionLabel({
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
