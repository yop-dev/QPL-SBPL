"use client";

import { useReducedMotion } from "motion/react";

/**
 * The signature element: a live 60 Hz grid-frequency waveform.
 * It scrolls continuously to encode QPL's job — keeping the Luzon grid stable.
 */
const TONES = {
  grid: { a: "#2b9ae6", b: "#7cc6f2" }, // electrical grid — brand blue
  amber: { a: "#ffa51f", b: "#ffc366" }, // thermal generation
  eco: { a: "#34c281", b: "#78dcaf" }, // environment
} as const;

export default function Waveform({
  className = "",
  height = 72,
  opacity = 1,
  tone = "grid",
}: {
  className?: string;
  height?: number;
  opacity?: number;
  tone?: keyof typeof TONES;
}) {
  const reduce = useReducedMotion();
  const { a: c1, b: c2 } = TONES[tone];
  const gradId = `wave-grad-${tone}`;
  const glowId = `wave-glow-${tone}`;
  const w = 1200;
  const cycles = 7;
  const amp = height * 0.3;
  const mid = height / 2;
  const steps = 300;

  let d = `M 0 ${mid}`;
  for (let i = 1; i <= steps; i++) {
    const x = (i / steps) * w;
    const y = mid - Math.sin((i / steps) * cycles * Math.PI * 2) * amp;
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${height}`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ opacity, overflow: "visible" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={c1} stopOpacity="0" />
          <stop offset="0.15" stopColor={c1} stopOpacity="0.9" />
          <stop offset="0.85" stopColor={c2} stopOpacity="0.9" />
          <stop offset="1" stopColor={c2} stopOpacity="0" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#${glowId})`}>
        <path d={d} fill="none" stroke={`url(#${gradId})`} strokeWidth="2" />
        <path
          d={d}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          transform={`translate(${w} 0)`}
        />
        {!reduce && (
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to={`-${w} 0`}
            dur="7s"
            repeatCount="indefinite"
          />
        )}
      </g>
    </svg>
  );
}
