import Image from "next/image";
import { ASSETS, type AssetKey } from "@/content/assets";
import { cn } from "@/lib/cn";

// Real photography wrapper. Replaces Placeholder everywhere.
export function SiteImage({
  asset,
  alt,
  ratio = "aspect-[16/10]",
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  asset: AssetKey;
  alt: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-surface-alt", ratio, className)}>
      <Image
        src={ASSETS[asset]}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
