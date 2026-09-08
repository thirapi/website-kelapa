"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MEDIA } from "@/content/media";
import { Container } from "@/components/ui/Section";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Reveal } from "@/components/motion/Reveal";

// 08 Sourcing & Heritage — masonry + parallax multi-layer (GSAP scrub).
// Desktop: 3 kolom beda kecepatan. Mobile: 1 kolom statis (hemat budget).
function columns<T>(arr: readonly T[], n: number): T[][] {
  return Array.from({ length: n }, (_, c) => arr.filter((_, i) => i % n === c));
}

export function SourcingHeritage() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const cols = columns(MEDIA.sourcing, 3);

  useEffect(() => {
    if (reduced || !root.current) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const speeds = [50, -50, 90];
      gsap.utils.toArray<HTMLElement>("[data-masonry-col]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: speeds[i] ?? 0 },
          {
            y: -(speeds[i] ?? 0),
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
      });
    });
    return () => mm.revert();
  }, [reduced]);

  return (
    <section aria-label="Sourcing and heritage" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
            From Careful Hands, for Global Markets.
          </h2>
        </Reveal>
      </Container>
      <Container className="mt-12">
        <div ref={root}>
          {/* Mobile: single column */}
          <div className="space-y-4 md:hidden">
            {MEDIA.sourcing.map((m) => (
              <MasonryCard key={m.src} src={m.src} alt={m.alt} label={m.label} />
            ))}
          </div>
          {/* Desktop: 3 parallax layers */}
          <div className="hidden gap-4 md:grid md:grid-cols-3">
            {cols.map((col, ci) => (
              <div key={ci} data-masonry-col className="space-y-4">
                {col.map((m) => (
                  <MasonryCard key={m.src} src={m.src} alt={m.alt} label={m.label} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MasonryCard({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="fade-mask-radial group relative break-inside-avoid overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={900}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 33vw"
        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-base/70 px-3 py-1 text-xs text-paper backdrop-blur-sm">
        {label}
      </figcaption>
    </figure>
  );
}
