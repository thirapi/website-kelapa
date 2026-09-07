import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { MEDIA } from "@/content/media";

// 13 CTA Closing — 01-PRD §13: cinematic embers (video lazy Fase 3)
export function CtaClosing() {
  return (
    <section aria-label="Closing CTA" className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
      <Image
        src={MEDIA.closing.image}
        alt={MEDIA.closing.alt}
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-base/70" />
      <div className="fade-mask-linear pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,140,40,0.15),transparent_65%)]" />
      <Container className="relative text-center">
        <h2 className="font-display mx-auto max-w-2xl text-4xl font-bold md:text-6xl">
          Siap Memenuhi Kebutuhan Produksi Anda?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Request Quote</Button>
          <Button href="/products" variant="secondary">
            Explore Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
