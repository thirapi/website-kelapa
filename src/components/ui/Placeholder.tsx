import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

// Honest stand-in until stakeholder photography arrives (see docs/06-7).
export function Placeholder({
  label,
  className,
  ratio = "aspect-[16/10]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#eceae7]",
        ratio,
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(79,41,20,0.16), transparent 45%), radial-gradient(circle at 80% 70%, rgba(41,68,50,0.12), transparent 45%)",
        }}
      />
      <p className="relative flex items-center gap-2 px-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
        <Icons.FileText size={16} aria-hidden />
        {label}
      </p>
    </div>
  );
}
