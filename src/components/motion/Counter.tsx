"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function decimalPlaces(value: string) {
  const normalized = value.replace(/,/g, "");
  return normalized.includes(".") ? normalized.split(".")[1].length : 0;
}

export function Counter({ value }: { value: string }) {
  const element = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const node = element.current;
    const numeric = Number(value.replace(/,/g, ""));
    if (!node || !Number.isFinite(numeric)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.textContent = value;
      return;
    }

    const state = { current: 0 };
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces(value),
      maximumFractionDigits: decimalPlaces(value),
    });
    const context = gsap.context(() => {
      gsap.to(state, {
        current: numeric,
        duration: 1.6,
        ease: "power3.out",
        snap: { current: numeric % 1 === 0 ? 1 : 0.01 },
        onUpdate: () => {
          node.textContent = formatter.format(state.current);
        },
        onComplete: () => {
          node.textContent = value;
        },
        scrollTrigger: {
          trigger: node,
          start: "top 90%",
          once: true,
        },
      });
    }, node);

    return () => context.revert();
  }, [value]);

  return <span ref={element}>{value}</span>;
}
