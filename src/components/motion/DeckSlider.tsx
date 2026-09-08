"use client";

import { Children, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function DeckSlider({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const items = Children.toArray(children);
  const deck = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const move = (direction: -1 | 1) => {
    const node = deck.current;
    if (!node) return;
    node.scrollBy({
      left: direction * Math.min(node.clientWidth * 0.82, 420),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const updateActive = () => {
    const node = deck.current;
    if (!node) return;
    const cards = Array.from(node.children) as HTMLElement[];
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(
          card.offsetLeft - node.scrollLeft - node.clientLeft,
        );
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setActive(nearest.index);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="mx-auto mb-4 flex max-w-7xl items-center justify-end gap-2 px-6 md:px-10">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous product"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface transition-[border-color,color] duration-200 hover:border-brand/50 hover:text-brand"
        >
          <Icons.ChevronLeft size={19} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next product"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface transition-[border-color,color] duration-200 hover:border-brand/50 hover:text-brand"
        >
          <Icons.ChevronRight size={19} aria-hidden />
        </button>
      </div>
      <div
        ref={deck}
        onScroll={updateActive}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-10"
      >
        {items}
      </div>
      <div className="mt-5 flex justify-center gap-1.5" aria-hidden>
        {items.map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: active === index ? 1 : 0.35,
              scaleX: active === index ? 1 : 0.55,
            }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            className="h-1.5 w-6 origin-center rounded-full bg-brand"
          />
        ))}
      </div>
    </div>
  );
}
