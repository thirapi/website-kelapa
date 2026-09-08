"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/content/site";
import { track } from "@/lib/analytics";

// Navbar "Export House Bar" — identitas COCO KATAPIANG:
// full-width editorial (bukan pill): announcement ember → nav transparan di hero
// → solid blur + border + hairline progress ember saat scroll.
// Framer Motion only (state-driven); GSAP tidak menyentuh elemen ini.
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll + Escape saat drawer terbuka
  useEffect(() => {
    if (!isDrawerOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
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
      <header className="fixed right-0 left-0 z-50">
        {/* Announcement — ember, dismissible, collapse saat scroll */}
        <AnimatePresence>
          {!isScrolled && announcementVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden bg-ember text-sm font-medium text-base"
            >
              <p className="relative mx-auto max-w-7xl px-6 py-2 pr-12 text-center text-[13px] md:px-10 md:text-sm">
                <span className="mr-2 hidden rounded-full bg-base/20 px-2 py-0.5 text-[11px] font-bold tracking-widest uppercase sm:inline-block">
                  Village
                </span>
                {/* Mobile: short copy. Desktop: full copy. */}
                <span className="sm:hidden">
                  Village production ready.{" "}
                  <Link href="/contact" className="font-bold underline underline-offset-2">
                    Get Quote
                  </Link>
                </span>
                <span className="hidden sm:inline">
                  Village charcoal & copra in production — documented QC.
                  <Link href="/contact" className="ml-2 font-bold underline underline-offset-2">
                    Request Quote
                  </Link>
                </span>
                <button
                  onClick={() => setAnnouncementVisible(false)}
                  aria-label="Dismiss announcement"
                  className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-1 outline-none hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-base"
                >
                  <X size={16} />
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nav row */}
        <div
          className={`transition-[background-color,border-color,box-shadow] duration-300 ${
            isScrolled
              ? "border-b border-paper/15 bg-base/85 shadow-lg shadow-[#2b1d12]/10 backdrop-blur-xl"
              : "border-b border-transparent bg-gradient-to-b from-base/70 to-transparent"
          }`}
        >
          <nav
            aria-label="Primary"
            className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-6 md:h-[72px] md:px-10"
          >
            {/* Wordmark + micro tag */}
            <Link
              href="/"
              onClick={handleHomeClick}
              className="group flex shrink-0 flex-col leading-none outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-label="COCO KATAPIANG — home"
            >
              <span className="font-display text-xl font-bold tracking-tight text-paper md:text-2xl">
                COCO KATAPIANG<span className="text-ember">.</span>
              </span>
              <span className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-muted uppercase transition-colors group-hover:text-ember">
                Coconut Products
              </span>
            </Link>

            {/* Desktop links — underline aktif meluncur */}
            <ul className="hidden items-center gap-7 lg:flex">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href} className="shrink-0">
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      onClick={l.href === "/" ? handleHomeClick : undefined}
                      className={`relative pb-1 text-sm font-medium tracking-wide transition-colors duration-200 outline-none hover:text-paper focus-visible:ring-2 focus-visible:ring-ember ${
                        active ? "text-paper" : "text-paper/65"
                      }`}
                    >
                      {l.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-ember"
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/contact"
                onClick={() => track("hero_cta_quote", { source: "nav" })}
                className="group hidden h-10 items-center gap-1.5 rounded-full bg-ember px-5 text-xs font-bold whitespace-nowrap text-base shadow-[0_0_24px_-8px_rgba(122,78,31,0.7)] outline-none transition-[background-color] duration-200 hover:bg-[#8d5c28] focus-visible:ring-2 focus-visible:ring-paper lg:flex"
              >
                Request Quote
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <button
                className="rounded-full p-2 text-paper transition-colors outline-none hover:text-ember focus-visible:ring-2 focus-visible:ring-ember lg:hidden"
                onClick={() => setIsDrawerOpen((v) => !v)}
                aria-expanded={isDrawerOpen}
                aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
              >
                {isDrawerOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>

          {/* Hairline progress scroll */}
          <motion.div
            aria-hidden
            style={{ scaleX: isScrolled ? progress : 0 }}
            className="h-[2px] origin-left bg-gradient-to-r from-ember/60 via-ember to-ember/60"
          />
        </div>
      </header>

      {/* Mobile fullscreen drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-base/95 backdrop-blur-xl"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center gap-1 px-8 pt-20"
            >
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setIsDrawerOpen(false)}
                    aria-current={pathname === l.href ? "page" : undefined}
                    className="group flex items-center justify-between border-b border-paper/15 py-4 outline-none focus-visible:ring-2 focus-visible:ring-ember"
                  >
                    <span
                      className={`font-display text-3xl font-bold transition-colors group-hover:text-ember ${
                        pathname === l.href ? "text-ember" : "text-paper"
                      }`}
                    >
                      {l.label}
                    </span>
                    <ArrowUpRight
                      size={22}
                      aria-hidden
                      className="text-muted transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 px-8 pb-10"
            >
              <Link
                href="/contact"
                onClick={() => setIsDrawerOpen(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-ember text-sm font-bold text-base"
              >
                Request Quote <ArrowUpRight size={16} />
              </Link>
              <p className="text-center text-xs text-muted">
                <a href={CONTACT.whatsapp} className="hover:text-paper">WhatsApp</a>
                {" · "}
                <a href={CONTACT.email} className="hover:text-paper">{CONTACT.emailText}</a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
