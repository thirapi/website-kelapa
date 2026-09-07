"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { ScrollTrigger } from "@/lib/gsap";

// Accordion accessible — Framer Motion (state-triggered).
// Refresh ScrollTrigger setelah tinggi konten berubah (checklist §7).
export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
  onToggle,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = useId();

  const toggle = () => {
    const next = !open;
    setOpen(next);
    onToggle?.(next);
  };

  return (
    <div className="py-5">
      <button
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold"
      >
        {question}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 text-ember"
          aria-hidden
        >
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => ScrollTrigger.refresh()}
            className="overflow-hidden"
          >
            <p className="pt-2 text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
