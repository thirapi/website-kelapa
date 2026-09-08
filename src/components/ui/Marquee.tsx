"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function Marquee({ items }: { items: string[] }) {
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const shouldPause = paused || reduceMotion;

  return (
    <div
      className="border-y border-line bg-surface"
      aria-label="COCO KATAPIANG product qualities"
    >
      <div className="flex min-h-14 items-center overflow-hidden">
        <div
          className={cn(
            "marquee-track flex min-w-max items-center",
            shouldPause && "marquee-paused",
          )}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {items.map((item) => (
                <li
                  key={`${copy}-${item}`}
                  className="flex items-center text-xs font-bold uppercase tracking-[0.18em] text-ink"
                >
                  <span
                    className="mx-6 h-1.5 w-1.5 rounded-full bg-ember"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="sticky right-0 ml-auto flex self-stretch items-center bg-linear-to-l from-surface via-surface to-transparent pl-10 pr-4">
          <motion.button
            type="button"
            onClick={() => setPaused((value) => !value)}
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            aria-label={
              paused
                ? "Play product qualities ticker"
                : "Pause product qualities ticker"
            }
            aria-pressed={paused}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors duration-200 hover:text-brand"
          >
            {paused ? (
              <Icons.Play size={15} aria-hidden />
            ) : (
              <Icons.Pause size={15} aria-hidden />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
