import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

// Satu sinyal hover per varian (bukan scale seragam): primary = lift,
// secondary = border shift. Focus ring instan, pressed-in saat active.
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap outline-none transition-[transform,background-color,border-color] duration-200 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-base active:translate-y-px";
  const styles =
    variant === "primary"
      ? "bg-ember text-base hover:-translate-y-0.5 hover:bg-[#8d5c28]"
      : "border border-paper/25 text-paper hover:-translate-y-0.5 hover:border-paper/60";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
