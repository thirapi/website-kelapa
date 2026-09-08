"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
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
    <header className="sticky top-0 z-50">
      {!dismissed && (
        <div className="bg-ink text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 md:px-10">
            <p className="truncate text-xs font-medium">{SITE.announcement}</p>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss announcement"
              className="rounded-full p-1 transition-colors duration-200 hover:bg-white/10"
            >
              <Icons.X size={14} />
            </button>
          </div>
        </div>
      )}
      <div className="border-b border-line bg-white/95 shadow-[0_4px_24px_rgba(33,19,12,0.04)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:h-[72px] md:px-10">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="COCO KATAPIANG home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-base text-lg font-extrabold">
              C
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-extrabold tracking-tight">
                COCO KATAPIANG
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Katapiang · Indonesia
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
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
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-bold text-base">
                  {count}
                </span>
              )}
            </Link>
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
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-base lg:hidden"
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
              className="rounded-full p-2.5 transition-colors duration-200 hover:bg-white/10"
            >
              <Icons.X size={22} />
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col justify-center gap-1 px-6"
            aria-label="Mobile"
          >
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-white/10 py-4 text-3xl font-extrabold tracking-tight transition-colors duration-200 hover:text-surface-alt"
              >
                <span className="mr-3 text-sm font-semibold text-white/40">
                  0{i + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3 px-6 pb-10">
            <Button href="/contact" className="w-full" event="hero_cta_quote">
              Inquire Now
            </Button>
            <p className="text-center text-xs text-white/60">{SITE.email}</p>
          </div>
        </div>
      )}
    </header>
  );
}
