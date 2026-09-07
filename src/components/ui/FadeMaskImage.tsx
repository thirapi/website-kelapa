import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  variant?: "linear" | "radial";
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function FadeMaskImage({
  src,
  alt,
  variant = "linear",
  className = "",
  fill = true,
  width,
  height,
}: Props) {
  const mask =
    variant === "linear" ? "fade-mask-linear" : "fade-mask-radial";
  return (
    <div className={`relative overflow-hidden ${mask} ${className}`}>
      {fill ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 800}
          height={height ?? 600}
          className="object-cover"
        />
      )}
    </div>
  );
}
