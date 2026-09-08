import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  className,
  dark = false,
  compact = false,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-16 md:py-24" : "py-24 md:py-32",
        dark ? "bg-ink text-cream" : "bg-cream text-ink",
        className,
      )}
    >
      <Reveal>{children}</Reveal>
    </section>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-[0.25em]",
        dark ? "text-surface-alt" : "text-ember",
      )}
    >
      {children}
    </p>
  );
}
