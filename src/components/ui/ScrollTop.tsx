"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Scroll-to-top — muncul setelah 600px, Lenis-aware, hormat reduced-motion.
export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenisObj = (
      window as unknown as {
        lenis?: { scrollTo?: (target: number, opts?: { immediate?: boolean }) => void };
      }
    ).lenis;
    if (lenisObj && typeof lenisObj.scrollTo === "function") {
      lenisObj.scrollTo(0, { immediate: reduced });
    } else {
      window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={toTop}
          aria-label="Scroll back to top"
          className="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ember/40 bg-surface/90 text-ember shadow-lg shadow-black/40 backdrop-blur-md transition-colors outline-none hover:bg-ember hover:text-base focus-visible:ring-2 focus-visible:ring-ember md:right-8 md:bottom-8"
        >
          <ArrowUp size={19} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
