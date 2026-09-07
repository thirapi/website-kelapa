import Image from "next/image";
import { MEDIA } from "@/content/media";

// 08 Sourcing & Heritage — 01-PRD §08: masonry foto asli (parallax Fase 3)
export function SourcingHeritage() {
  return (
    <section aria-label="Sourcing and heritage" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <h2 className="font-display max-w-xl text-3xl font-bold md:text-5xl">
          Dari Tangan yang Teliti, untuk Pasar Global.
        </h2>
      </div>
      <div className="mx-auto mt-12 w-full max-w-7xl columns-2 gap-4 px-6 md:columns-3 md:px-10 [&>*]:mb-4">
        {MEDIA.sourcing.map((m, i) => (
          <figure
            key={m.src + i}
            className="fade-mask-radial relative break-inside-avoid overflow-hidden rounded-2xl"
          >
            <Image
              src={m.src}
              alt={m.alt}
              width={800}
              height={i % 2 === 0 ? 1000 : 700}
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 33vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-base/70 px-3 py-1 text-xs text-paper backdrop-blur-sm">
              {m.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
