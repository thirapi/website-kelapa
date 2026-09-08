"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroParallax({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    const target = media.current;
    if (!element || !target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = element.closest("section");
    if (!section) return;

    const context = gsap.context(() => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 768px)", () => {
        gsap.fromTo(
          target,
          { yPercent: -4, scale: 1.04 },
          {
            yPercent: 12,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      });

      matchMedia.add("(max-width: 767px)", () => {
        gsap.fromTo(
          target,
          { yPercent: -2, scale: 1.02 },
          {
            yPercent: 5,
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 0.3,
            },
          },
        );
      });

      return () => matchMedia.revert();
    }, element);

    return () => context.revert();
  }, []);

  return (
    <div ref={root} className="absolute inset-0 overflow-hidden" aria-hidden>
      <div ref={media} className="absolute -inset-y-[12%] inset-x-0">
        {children}
      </div>
    </div>
  );
}
