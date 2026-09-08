"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

// Standard deck card width (see docs/01-§5 Lebar). Total track content must
// exceed the viewport at every breakpoint: peek is the swipe affordance.
export const deckCardClass =
  "w-[78vw] max-w-md shrink-0 snap-start sm:w-[42vw] lg:w-[31vw]";

export function DeckSlider({
  children,
  className,
  contained = false,
}: {
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
}) {
  const items = Children.toArray(children);
  const deck = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const reduceMotion = useReducedMotion();

  const move = (direction: -1 | 1) => {
    const node = deck.current;
    if (!node) return;
    node.scrollBy({
      left: direction * Math.min(node.clientWidth * 0.82, 420),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const updateActive = useCallback(() => {
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
    const max = node.scrollWidth - node.clientWidth;
    setAtStart(node.scrollLeft <= 4);
    setAtEnd(node.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    updateActive();
    window.addEventListener("resize", updateActive);
    return () => window.removeEventListener("resize", updateActive);
  }, [updateActive]);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={deck}
        onScroll={updateActive}
        className={cn(
          "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          contained ? "px-1" : "px-6 md:px-10",
        )}
      >
        {items}
        <span aria-hidden className="w-1 shrink-0" />
      </div>
      <button
        type="button"
        onClick={() => move(-1)}
        disabled={atStart}
        aria-label="Previous product"
        className={cn(
          "absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 shadow-lg shadow-black/10 backdrop-blur transition-[border-color,color,transform,opacity] duration-200 hover:border-brand/50 hover:text-brand active:translate-y-[calc(-50%+1px)] disabled:cursor-default disabled:opacity-0 md:flex",
          contained ? "left-3" : "left-4 lg:left-8",
        )}
      >
        <Icons.ChevronLeft size={20} aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        disabled={atEnd}
        aria-label="Next product"
        className={cn(
          "absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 shadow-lg shadow-black/10 backdrop-blur transition-[border-color,color,transform,opacity] duration-200 hover:border-brand/50 hover:text-brand active:translate-y-[calc(-50%+1px)] disabled:cursor-default disabled:opacity-0 md:flex",
          contained ? "right-3" : "right-4 lg:right-8",
        )}
      >
        <Icons.ChevronRight size={20} aria-hidden />
      </button>
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
