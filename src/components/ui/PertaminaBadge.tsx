import Image from "next/image";
import { cn } from "@/lib/cn";

// Shared Pertamina · DEB badge. Full version matches the hero;
// `compact` renders the short (mobile) version for tight spaces like footer.
export function PertaminaBadge({
  className,
  priority = false,
  compact = false,
}: {
  className?: string;
  priority?: boolean;
  compact?: boolean;
}) {
  return (
    <p
      className={cn(
        "inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-cream/25 py-1 pl-3 pr-3 text-[10px] font-bold uppercase tracking-[0.16em] text-cream",
        compact && "gap-1.5 pl-2.5 pr-2.5 tracking-[0.12em]",
        className,
      )}
    >
      {!compact && <span className="hidden sm:inline">Supported by</span>}
      <span
        className={cn(
          "inline-flex items-center rounded-full bg-surface px-2 py-0.5",
          compact && "px-1.5",
        )}
      >
        <Image
          src="/assets/brand/pertamina.svg"
          alt="Pertamina"
          width={52}
          height={12}
          className="h-3 w-auto"
          priority={priority}
        />
      </span>
      {!compact && (
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
      )}
      {!compact && <span className="hidden sm:inline">DEB Nagari Katapiang</span>}
      <span className={cn(!compact && "sm:hidden")}>DEB Nagari Katapiang</span>
    </p>
  );
}
