"use client";

import { cn } from "@/lib/cn";

export interface PillOption<T extends string> {
  value: T;
  label: string;
}

// Filter pills. Default: single-line horizontally scrollable (see docs/01 Jarak & Deck).
// With `wrap`: pills wrap onto multiple lines instead of scrolling (F1-style
// category row). Used by product catalog (scroll) and journal (wrap): do not
// build one-off variants.
export function FilterPills<T extends string>({
  options,
  value,
  onChange,
  label,
  wrap = false,
}: {
  options: readonly PillOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  wrap?: boolean;
}) {
  const pillCls = (active: boolean) =>
    cn(
      "whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-semibold transition-[background-color,color] duration-200",
      active ? "bg-ink text-cream" : "bg-ink/5 text-ink hover:bg-ink/10",
    );

  const pills = options.map((o) => (
    <button
      key={o.value}
      type="button"
      onClick={() => onChange(o.value)}
      aria-pressed={value === o.value}
      className={pillCls(value === o.value)}
    >
      {o.label}
    </button>
  ));

  if (wrap) {
    return (
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {pills}
      </div>
    );
  }

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
            className={pillCls(value === o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
