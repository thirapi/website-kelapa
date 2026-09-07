"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Counter — GSAP onEnter sekali, ≤2 detik, tabular-nums, format ribuan lokal.
export function Counter({
  value,
  suffix = "",
  duration = 1.6,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduced) {
      ref.current.textContent = `${format(value)}${suffix}`;
      return;
    }
    const state = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(state, {
        v: value,
        duration: Math.min(duration, 2),
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = `${format(Math.round(state.v))}${suffix}`;
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [value, suffix, duration, reduced]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {format(0)}
      {suffix}
    </span>
  );
}

function format(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}
