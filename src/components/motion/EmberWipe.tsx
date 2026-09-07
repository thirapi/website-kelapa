"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Ember Wipe — transisi antar-section (§2.2): clip-path wipe scrub.
// Selektif: 3 boundary saja (motion fatigue §5.1). Mobile: fade biasa.
export function EmberWipe({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        ref.current,
        { clipPath: "inset(10% 4% 10% 4% round 32px)", opacity: 0.35 },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 95%", end: "top 45%", scrub: 0.6 },
        },
      );
    });
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          ease: "expo.out",
          duration: 0.8,
          scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        },
      );
    });
    return () => mm.revert();
  }, [reduced]);

  return (
    <div ref={ref} className={className} style={{ willChange: "clip-path, opacity" }}>
      {children}
    </div>
  );
}
