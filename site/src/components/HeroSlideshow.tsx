"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Hero backdrop slideshow — a slow crossfade through the plant, echoing the
 * rotating hero on the original QPL site. Photos are shown in natural colour;
 * the section's gradient handles legibility. Auto-advance pauses for users who
 * prefer reduced motion, who can still step through with the indicators.
 */
const SLIDES = [
  { src: "/img/plant-03.jpg", alt: "The Quezon Power facility in Mauban lit at dusk" },
  { src: "/img/plant-05.jpg", alt: "Aerial view of the plant, its jetty, and the Mauban coastline" },
  { src: "/img/plant-02.jpg", alt: "The generating hall at nightfall with traffic light trails" },
  { src: "/img/plant-01.jpg", alt: "Aerial view of the facility along the reef" },
];

const INTERVAL = 6000;

export default function HeroSlideshow() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(
      () => setActive((v) => (v + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <>
      <div className="absolute inset-0 bg-ink">
        {SLIDES.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            src={s.src}
            alt={i === active ? s.alt : ""}
            aria-hidden={i !== active}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out motion-reduce:transition-none"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-28 right-6 z-20 flex items-center gap-2.5 lg:right-10">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1} of ${SLIDES.length}`}
            aria-current={i === active}
            className="group py-2"
          >
            <span
              className={`block h-[3px] transition-all duration-500 ${
                i === active
                  ? "w-8 bg-amber"
                  : "w-4 bg-mist/30 group-hover:bg-mist/60"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
