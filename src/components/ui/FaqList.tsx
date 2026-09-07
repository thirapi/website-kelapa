"use client";

import { AccordionItem } from "@/components/ui/Accordion";
import { track } from "@/lib/analytics";

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((f) => (
        <AccordionItem
          key={f.q}
          question={f.q}
          answer={f.a}
          onToggle={(open) => {
            if (open) track("faq_item_open", { q: f.q });
          }}
        />
      ))}
    </div>
  );
}
