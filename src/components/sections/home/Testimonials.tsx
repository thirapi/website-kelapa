"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { track } from "@/lib/analytics";

// 09 Testimonials — stacked deck / slide takeover (Framer drag + autoplay).
// Murni state-driven: tidak ada GSAP di elemen ini (split rule §2).
const AUTOPLAY_MS = 6000;

export function Testimonials() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const paginate = (dir: number) => {
    setIndex(([i]) => [(i + dir + TESTIMONIALS.length) % TESTIMONIALS.length, dir]);
  };

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex(([i]) => {
        track("testimonial_slide_change", { index: (i + 1) % TESTIMONIALS.length });
        return [(i + 1) % TESTIMONIALS.length, 1];
      });
    }, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const t = TESTIMONIALS[index];

  return (
    <div className="border-y border-white/10 bg-surface/50">
      <Section ariaLabel="Testimonials">
        <h2 className="font-display max-w-xl text-3xl font-bold md:text-5xl">
          Kepercayaan Mitra Adalah Standar Kami.
        </h2>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative mx-auto mt-12 max-w-3xl"
        >
          <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-base p-8 md:min-h-56 md:p-12">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 120 : -120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -120 : 120 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) paginate(1);
                  else if (info.offset.x > 80) paginate(-1);
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <blockquote className="font-display text-xl leading-relaxed md:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted">
                  {t.name} · {t.origin}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Testimonial selector">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 28 : 8,
                    background: i === index ? "var(--color-ember)" : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-ember hover:text-ember"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-ember hover:text-ember"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
