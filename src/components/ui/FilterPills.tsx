"use client";

import { cn } from "@/lib/cn";

export interface PillOption<T extends string> {
  value: T;
  label: string;
}

// Single-line horizontally scrollable filter pills (see docs/01 Jarak & Deck).
// Used by product catalog and journal — do not build one-off variants.
export function FilterPills<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly PillOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="-mx-6 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={cn(
              "whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,color,border-color] duration-200",
              value === o.value
                ? "bg-ink text-cream"
                : "border border-line bg-surface text-ink hover:border-brand/50",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
