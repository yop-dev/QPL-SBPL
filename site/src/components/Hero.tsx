"use client";

import { motion, useReducedMotion } from "motion/react";
import { heroStats } from "@/lib/content";
import { Counter } from "./motion-ui";
import Waveform from "./Waveform";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Plant backdrop — a slow crossfade slideshow, natural colour */}
      <HeroSlideshow />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
      <div className="schematic absolute inset-0 opacity-30" />

      {/* Content, bottom-aligned within one viewport */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-28 pt-24 lg:px-10">
        {/* QPL's brand motto — the opening line */}
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mb-3 font-mono text-sm uppercase tracking-[0.42em] text-amber"
        >
          Energy for Life
        </motion.p>
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-muted"
        >
          <span>Quezon Power (Philippines), Ltd.</span>
          <span className="text-faint">/</span>
          <span>14°11′N 121°44′E · Luzon Grid</span>
        </motion.p>

        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="max-w-4xl text-[clamp(2.5rem,7vw,5.25rem)] font-black uppercase text-mist"
        >
          Baseload power for the <span className="text-amber">Luzon grid</span>.
        </motion.h1>

        <motion.p
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
        >
          A 460-megawatt facility in Mauban, Quezon — the first Build-Own-Operate
          power project in the Philippines, supplying the Luzon grid since it began
          commercial operations in May 2000.
        </motion.p>

        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-9 grid max-w-2xl grid-cols-3 divide-x divide-line border-y border-line"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="px-3 py-5 first:pl-0 sm:px-4">
              <div className="font-display text-2xl font-extrabold text-mist sm:text-4xl">
                {s.prefix ? (
                  <>
                    {s.prefix}
                    {s.value}
                  </>
                ) : (
                  <Counter to={s.value} suffix={s.suffix} />
                )}
              </div>
              <div className="label mt-2 text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Signature: the live 60 Hz grid waveform, pinned to the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-line/60 bg-ink/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3 lg:px-10">
          <span className="flex items-center gap-2 whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.2em] text-signal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Grid live · 60 Hz
          </span>
          <Waveform className="flex-1" height={44} />
        </div>
      </div>
    </section>
  );
}
