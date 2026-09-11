"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Icons } from "@/components/ui/icons";
import { NAV, SITE } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useInquiry } from "@/components/inquiry/InquiryProvider";

const ABOUT_LINKS = [
  { label: "Our Story", href: "/story" },
  { label: "Process", href: "/process" },
  { label: "Impact", href: "/impact" },
  { label: "Journal", href: "/journal" },
] as const;

const ABOUT_HREFS = ABOUT_LINKS.map((l) => l.href);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();
  const { count } = useInquiry();
  const [aboutOpen, setAboutOpen] = useState<boolean | null>(null);
  const aboutChild = ABOUT_HREFS.some(
    (href) => pathname === href || pathname.startsWith(`${href}/`),
  );
  const isAboutOpen = aboutOpen ?? aboutChild;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {!dismissed && (
        <div className="bg-ink text-cream">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-2 pl-6 pr-4 md:px-10">
            <p className="hidden truncate text-xs font-medium sm:block">
              {SITE.announcement}
            </p>
            <div className="relative flex-1 overflow-hidden sm:hidden" aria-label={SITE.announcement}>
              <div className="marquee-track flex w-max items-center gap-8">
                {[0, 1].map((copy) => (
                  <span key={copy} aria-hidden={copy === 1} className="flex items-center gap-8 whitespace-nowrap text-xs font-medium">
                    {[0, 1, 2].map((i) => (
                      <span key={i}>{SITE.announcement}</span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss announcement"
              className="shrink-0 rounded-full p-1 transition-colors duration-200 hover:bg-surface/10"
            >
              <Icons.X size={14} />
            </button>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50">
      <div className="border-b border-line bg-surface/95 shadow-[0_4px_24px_rgba(33,19,12,0.04)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:h-[72px] md:px-10">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="COCO KATAPIANG home"
          >
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl">
              <Image
                src="/assets/brand/coco-mark.svg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9"
                priority
              />
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-extrabold tracking-tight">
                COCO KATAPIANG
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                The world of coconut
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-7"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors duration-200 hover:text-brand",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-brand"
                    : "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="relative hidden rounded-full p-2.5 transition-colors duration-200 hover:bg-surface-alt sm:flex"
              aria-label={`Inquiry list, ${count} items`}
            >
              <Icons.ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-bold text-cream">
                  {count}
                </span>
              )}
            </Link>
            <Button
              href="/store"
              variant="secondary"
              event="hero_cta_explore"
              className="hidden sm:inline-flex"
            >
              Store
            </Button>
            <Button
              href="/contact"
              event="hero_cta_quote"
              className="hidden sm:inline-flex"
            >
              Inquire
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="rounded-full p-2.5 transition-colors duration-200 hover:bg-surface-alt lg:hidden"
            >
              <Icons.Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      <ScrollProgress />

      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-cream lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <span className="text-[15px] font-extrabold tracking-tight">
              COCO KATAPIANG
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="rounded-full p-2.5 transition-colors duration-200 hover:bg-surface/10"
            >
              <Icons.X size={22} />
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 py-4"
            aria-label="Mobile"
          >
            <Link
              href="/"
              onClick={close}
              className="border-b border-cream/10 py-3 text-2xl font-extrabold tracking-tight transition-colors duration-200 hover:text-surface-alt"
            >
              Home
            </Link>
            <div className="border-b border-cream/10">
              <button
                type="button"
                onClick={() => setAboutOpen((v) => !v)}
                aria-expanded={isAboutOpen}
                className="flex w-full items-center justify-between py-3 text-2xl font-extrabold tracking-tight transition-colors duration-200 hover:text-surface-alt"
              >
                About
                <Icons.ChevronDown
                  size={20}
                  aria-hidden
                  className={cn(
                    "shrink-0 text-cream/60 transition-transform duration-200",
                    isAboutOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isAboutOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  {ABOUT_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="flex items-center gap-3 py-2.5 pl-1 text-lg font-bold text-cream/75 transition-colors duration-200 hover:text-cream"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-cream/40"
                        aria-hidden
                      />
                      {item.label}
                    </Link>
                  ))}
                  <span className="block pb-2" aria-hidden />
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              onClick={close}
              className="border-b border-cream/10 py-3 text-2xl font-extrabold tracking-tight transition-colors duration-200 hover:text-surface-alt"
            >
              Contact
            </Link>
          </nav>
          <div className="space-y-2.5 px-6 pb-7">
            <Link
              href="/store"
              onClick={close}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cream px-6 py-3 text-base font-semibold text-ink transition-[background-color,transform] duration-200 hover:bg-surface-alt active:translate-y-px"
            >
              <Icons.ShoppingBag size={18} aria-hidden />
              Visit Store
            </Link>
            <a
              href="/company-profile.pdf"
              download="COCO-KATAPIANG-Company-Profile.pdf"
              onClick={close}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-base font-semibold text-cream transition-[background-color,transform,box-shadow] duration-200 hover:bg-brand-deep active:translate-y-px"
            >
              <Icons.FileText size={18} aria-hidden />
              Download Company Profile
            </a>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
