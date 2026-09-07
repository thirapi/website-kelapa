import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { homepage } from "@/content/homepage";
import { MEDIA } from "@/content/media";

// 01 Hero — 01-PRD §01: full viewport, poster = LCP (priority), overlay gelap AA.
// Slot video: isi MEDIA.hero.videoMp4/Webm lalu render <video> di sini (Fase 3).
export function Hero() {
  const { hero } = homepage;
  return (
    <section aria-label="Hero" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
      <Image
        src={MEDIA.hero.poster}
        alt={MEDIA.hero.posterAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/55 to-base" />
      <div className="fade-mask-linear pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,140,40,0.12),transparent_65%)]" />
      <Container className="relative py-24">
        <p className="inline-block rounded-full border border-ember/40 bg-base/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-ember uppercase backdrop-blur-sm">
          {hero.badge}
        </p>
        <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">{hero.sub}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
