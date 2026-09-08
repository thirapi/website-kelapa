import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { MEDIA } from "@/content/media";

// 13 CTA Closing — 01-PRD §13: cinematic embers (video lazy Fase 3)
export function CtaClosing() {
  return (
    <section aria-label="Closing CTA" className="relative overflow-hidden border-t border-paper/15 py-24 md:py-32">
      <Image
        src={MEDIA.closing.image}
        alt={MEDIA.closing.alt}
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1a120b]/72" />
      <div className="fade-mask-linear pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,78,31,0.25),transparent_65%)]" />
      <Container className="relative text-center">
        <h2 className="font-display mx-auto max-w-2xl text-4xl font-bold text-[#faf6ef] md:text-6xl">
          Ready to Meet Your Production Needs?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Request Quote</Button>
          <Button
            href="/products"
            variant="secondary"
            className="border-white/40 text-white hover:border-white"
          >
            Explore Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
