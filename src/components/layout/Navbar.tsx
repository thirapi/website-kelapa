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

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();
  const { count } = useInquiry();
  const [langOpen, setLangOpen] = useState(false);

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

  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-lang]")) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

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
            className="flex min-w-0 items-center gap-2 sm:gap-2.5"
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
            <span className="min-w-0 leading-none">
              <span className="block whitespace-nowrap text-[15px] font-extrabold tracking-tight">
                COCO KATAPIANG
              </span>
              <span className="block whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-muted md:tracking-[0.2em]">
                The world of coconut
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-7"
            aria-label="Primary"
          >
            {NAV.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-sm font-semibold transition-colors duration-200 hover:text-brand",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-brand after:transition-transform after:duration-200",
                    active
                      ? "text-brand after:scale-x-100"
                      : "text-ink after:scale-x-0 hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 xl:gap-2">
            <Link
              href="/contact"
              className="relative flex rounded-full p-2.5 transition-colors duration-200 hover:bg-surface-alt"
              aria-label={`Inquiry list, ${count} items`}
            >
              <Icons.ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-bold text-cream">
                  {count}
                </span>
              )}
            </Link>
            <a
              href="/company-profile.pdf"
              download="COCO-KATAPIANG-Company-Profile.pdf"
              title="Download Company Profile"
              aria-label="Download Company Profile"
              className="hidden rounded-full p-2.5 transition-colors duration-200 hover:bg-surface-alt hover:text-brand-deep xl:inline-flex"
            >
              <Icons.FilePlus size={20} aria-hidden />
            </a>
            <div data-lang className="relative hidden xl:block">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={langOpen}
                aria-label="Language: English"
                className="inline-flex items-center gap-1 rounded-full px-3 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-surface-alt hover:text-brand-deep"
              >
                EN
                <Icons.ChevronDown
                  size={14}
                  aria-hidden
                  className={cn(
                    "transition-transform duration-200",
                    langOpen && "rotate-180",
                  )}
                />
              </button>
              {langOpen && (
                <div
                  role="menu"
                  aria-label="Language"
                  className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-line bg-surface py-1.5 shadow-xl shadow-black/10"
                >
                  <p
                    role="menuitem"
                    aria-current="true"
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold"
                  >
                    English
                    <Icons.Check
                      size={15}
                      aria-hidden
                      className="text-brand"
                    />
                  </p>
                  <p
                    role="menuitem"
                    aria-disabled="true"
                    title="Coming soon"
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-muted"
                  >
                    Bahasa Indonesia
                    <span className="rounded-full bg-surface-alt px-2 py-0.5 text-[11px] font-bold">
                      Soon
                    </span>
                  </p>
                </div>
              )}
            </div>
            <Button
              href="/store"
              event="hero_cta_explore"
              className="hidden sm:inline-flex"
            >
              Store
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
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-cream/10 py-2.5 text-xl font-extrabold tracking-tight transition-colors duration-200 hover:text-surface-alt"
              >
                {item.label}
              </Link>
            ))}
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
              <Icons.FilePlus size={18} aria-hidden />
              Download Company Profile
            </a>
            <p className="flex items-center justify-center gap-2 pt-1 text-[13px] font-semibold text-cream/60">
              <span className="text-cream">EN · English</span>
              <span aria-hidden className="text-cream/25">|</span>
              <span>ID · Soon</span>
            </p>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
