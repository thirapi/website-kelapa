"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgress() {
  const progress = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = progress.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: 0.15,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={progress}
      aria-hidden
      className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-ember motion-reduce:hidden"
    />
  );
}
