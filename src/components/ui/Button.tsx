"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "secondaryDark";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-cream hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/25 active:translate-y-px",
  secondary:
    "border border-ink/25 bg-transparent text-ink hover:-translate-y-0.5 hover:border-brand/60 hover:text-brand-deep hover:shadow-lg hover:shadow-black/10 active:translate-y-px",
  // Solid cream on dark surfaces — guaranteed contrast, no frosted washout.
  secondaryDark:
    "border border-cream bg-cream text-ink hover:-translate-y-0.5 hover:border-surface hover:bg-surface hover:text-ink hover:shadow-lg hover:shadow-black/30 active:translate-y-px",
};

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  event,
  className,
  type,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  event?: Parameters<typeof track>[0];
  className?: string;
  type?: "submit" | "button";
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-[background-color,border-color,color,transform,box-shadow] duration-200 disabled:cursor-not-allowed disabled:opacity-50",
    styles[variant],
    className,
  );
  const handle = () => {
    if (event) track(event);
    onClick?.();
  };
  if (href) {
    return (
      <Link href={href} className={cls} onClick={handle}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} onClick={handle}>
      {children}
    </button>
  );
}

export function ArrowLink({
  children,
  href,
  dark = false,
  event,
}: {
  children: React.ReactNode;
  href: string;
  dark?: boolean;
  event?: Parameters<typeof track>[0];
}) {
  return (
    <Link
      href={href}
      onClick={() => event && track(event)}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold",
        dark ? "text-cream" : "text-brand",
      )}
    >
      <span className="underline-offset-4 group-hover:underline">
        {children}
      </span>
      <ArrowRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}
