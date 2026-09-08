"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SiteImage } from "@/components/ui/SiteImage";
import type { AssetKey } from "@/content/assets";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export interface ProcessStep {
  name: string;
  desc: string;
  photo: AssetKey;
}

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const instanceId = useId();
  const panelId = `${instanceId}-process-panel`;
  const active = steps[selected];

  const selectStep = (index: number, moveFocus = false) => {
    const next = (index + steps.length) % steps.length;
    setSelected(next);
    if (moveFocus) {
      requestAnimationFrame(() =>
        document.getElementById(`${instanceId}-process-tab-${next}`)?.focus(),
      );
    }
  };

  return (
    <div className="grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[0.85fr_1.15fr]">
      <div className="border-b border-line p-3 lg:border-b-0 lg:border-r">
        <div
          role="tablist"
          aria-label="Coconut processing stages"
          className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible"
        >
          {steps.map((step, index) => {
            const current = selected === index;
            return (
              <button
                key={step.name}
                id={`${instanceId}-process-tab-${index}`}
                role="tab"
                type="button"
                aria-selected={current}
                aria-controls={panelId}
                tabIndex={current ? 0 : -1}
                onClick={() => selectStep(index)}
                onFocus={() => selectStep(index)}
                onMouseEnter={() => selectStep(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    event.preventDefault();
                    selectStep(index + 1, true);
                  }
                  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    event.preventDefault();
                    selectStep(index - 1, true);
                  }
                  if (event.key === "Home") {
                    event.preventDefault();
                    selectStep(0, true);
                  }
                  if (event.key === "End") {
                    event.preventDefault();
                    selectStep(steps.length - 1, true);
                  }
                }}
                className={cn(
                  "group flex min-w-44 items-center gap-4 rounded-xl px-4 py-3 text-left transition-[background-color,color] duration-200 lg:min-w-0",
                  current
                    ? "bg-brand text-base"
                    : "text-ink hover:bg-surface-alt",
                )}
              >
                <span
                  className={cn(
                    "text-xs font-bold tabular-nums",
                    current ? "text-white/70" : "text-ember",
                  )}
                >
                  0{index + 1}
                </span>
                <span className="font-extrabold tracking-tight">
                  {step.name}
                </span>
                <Icons.ArrowRight
                  size={16}
                  aria-hidden
                  className={cn(
                    "ml-auto transition-transform duration-200",
                    current && "translate-x-1",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${instanceId}-process-tab-${selected}`}
        className="min-w-0"
        tabIndex={0}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <SiteImage
              asset={active.photo}
              alt={`${active.name} — ${active.desc}`}
              ratio="aspect-[16/9] lg:aspect-[16/8]"
              className="rounded-none"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ember">
                Step {selected + 1} of {steps.length}
              </p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight">
                {active.name}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                {active.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
