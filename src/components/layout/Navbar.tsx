"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/content/site";
import { track } from "@/lib/analytics";

// Navbar — pola floating-pill java-management, di-retune ke theme Hancoco:
// transparent over hero → pill glass + announcement collapse saat scroll > 80.
// Framer Motion only (state-triggered) — tidak menyentuh properti yang dipegang GSAP.
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      const lenisObj = (
        window as unknown as {
          lenis?: { scrollTo?: (target: number, opts?: { immediate?: boolean }) => void };
        }
      ).lenis;
      if (lenisObj && typeof lenisObj.scrollTo === "function") {
        lenisObj.scrollTo(0, { immediate: true });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed right-0 left-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "top-3 px-3 sm:top-4 sm:px-6" : "top-0 px-0"
        }`}
      >
        {/* Announcement — collapse saat scroll */}
        <AnimatePresence>
          {!isScrolled && announcementVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden bg-ember text-sm font-medium text-base"
            >
              <p className="relative mx-auto max-w-7xl px-6 py-2 text-center">
                Export capacity available — consistent monthly volume, documented QC.
                <Link href="/contact" className="ml-2 underline underline-offset-2">
                  Request Quote
                </Link>
                <button
                  onClick={() => setAnnouncementVisible(false)}
                  aria-label="Dismiss announcement"
                  className="absolute top-1/2 right-4 -translate-y-1/2 rounded p-1 hover:bg-black/10"
                >
                  <X size={16} />
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main nav — transparent → floating pill */}
        <nav
          aria-label="Primary"
          className={`mx-auto transition-all duration-500 ease-out ${
            isScrolled
              ? "max-w-6xl rounded-full border border-white/10 bg-surface/90 py-2 shadow-2xl shadow-black/60 backdrop-blur-xl xl:max-w-7xl"
              : "w-full rounded-none border border-transparent bg-gradient-to-b from-base/80 via-base/40 to-transparent"
          }`}
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="font-display shrink-0 font-bold whitespace-nowrap text-paper transition-all duration-300"
            >
              <span className={isScrolled ? "text-base" : "text-lg lg:text-xl"}>
                Hancoco<span className="text-ember">.</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-6 lg:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.href} className="shrink-0">
                  <Link
                    href={l.href}
                    aria-current={pathname === l.href ? "page" : undefined}
                    onClick={l.href === "/" ? handleHomeClick : undefined}
                    className={`text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-200 hover:text-ember ${
                      pathname === l.href ? "text-ember" : "text-paper/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                onClick={() => track("hero_cta_quote", { source: "nav" })}
                className="flex h-9 items-center rounded-full bg-ember px-4 text-xs font-bold whitespace-nowrap text-base shadow-md transition-all duration-300 hover:scale-[1.03]"
              >
                Request Quote
              </Link>
            </div>

            <button
              className="p-1.5 text-paper transition-colors hover:text-ember lg:hidden"
              onClick={() => setIsDrawerOpen((v) => !v)}
              aria-expanded={isDrawerOpen}
              aria-label="Toggle menu"
            >
              {isDrawerOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-base/95 p-6 backdrop-blur-xl"
          >
            <nav className="flex w-full max-w-xs flex-col items-center gap-5 text-center">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className="font-display text-xl font-bold text-paper transition-colors hover:text-ember"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsDrawerOpen(false)}
                  className="inline-flex items-center rounded-full bg-ember px-6 py-3 text-sm font-bold text-base"
                >
                  Request Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
