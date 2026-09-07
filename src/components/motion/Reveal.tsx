"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Reveal ringan Fase 2 — GSAP scroll-linked (sekali, fade+translateY).
// Framer tidak menyentuh elemen ini (split rule §2): entrance = GSAP.
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "expo.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced, delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Grup stagger 60–100ms — untuk bento/list (Why, Showcase, Values).
export function RevealStagger({
  children,
  className = "",
  gap = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal-item]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: gap,
          ease: "expo.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced, gap]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
