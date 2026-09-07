"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export type RundownItem = {
  marker: string;
  title: string;
  desc: string;
};

// Rundown signature — Design System §2.3: garis progress terisi (scrub),
// tahap aktif menyala; yang lewat tetap terbaca, yang belum redup.
// Reuse: homepage Process, halaman Process, About Journey.
// Tanpa pin (hemat motion budget); fallback statis saat reduced-motion/no-JS.
export function Rundown({ items }: { items: readonly RundownItem[] }) {
  const root = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-rundown-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        },
      );
      gsap.utils.toArray<HTMLElement>("[data-rundown-item]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 62%",
          end: "bottom 42%",
          onToggle: (self) => {
            el.dataset.active = String(self.isActive);
            el.dataset.lit = String(self.isActive || el.dataset.passed === "true");
          },
          onUpdate: (self) => {
            const passed = self.progress >= 0.999;
            el.dataset.passed = String(passed);
            el.dataset.lit = String(passed || el.dataset.active === "true");
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <ol ref={root} className="relative mt-12">
      {/* track */}
      <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-paper/10 md:left-[9px]" />
      {/* fill */}
      <span
        aria-hidden
        data-rundown-fill
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-ember via-ember to-ember/40 md:left-[9px]"
      />
      {items.map((s) => (
        <li
          key={s.title}
          data-rundown-item
          data-active="true"
          data-passed="false"
          data-lit="true"
          className="group relative flex gap-6 py-6 pl-8 opacity-40 transition-opacity duration-500 data-[lit=true]:opacity-100 md:pl-10"
        >
          <span
            aria-hidden
            className="absolute top-8 left-[3px] h-2.5 w-2.5 rounded-full bg-paper/20 transition-[background-color,box-shadow] duration-500 group-data-[active=true]:bg-ember group-data-[active=true]:shadow-[0_0_16px_2px_rgba(122,78,31,0.6)] md:left-[5px]"
          />
          <div>
            <p className="tnum font-display text-sm font-bold tracking-widest text-muted uppercase transition-colors duration-500 group-data-[active=true]:text-ember">
              {s.marker}
            </p>
            <h3 className="font-display mt-1 text-xl font-bold md:text-2xl">{s.title}</h3>
            <p className="mt-1 max-w-xl text-muted">{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
