import { HeroParallax } from "@/components/motion/HeroParallax";
import { Reveal } from "@/components/motion/Reveal";
import Image from "next/image";
import { Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";
import { ASSETS } from "@/content/assets";

const TRUST = [
  { value: "100%", label: "Traceable to Katapiang groves" },
  { value: "3+", label: "Export-ready product lines" },
  { value: "B2B", label: "Bulk, private-label & custom packing" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <HeroParallax>
        <Image
          src={ASSETS["grove-hero-mobile"]}
          alt="Coconut groves of Nagari Katapiang at golden hour"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="h-full w-full object-cover opacity-50 md:hidden"
        />
        <Image
          src={ASSETS["grove-hero"]}
          alt="Coconut groves of Nagari Katapiang at golden hour"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hidden h-full w-full object-cover opacity-50 md:block"
        />
        <div className="absolute inset-0 bg-ink/45" />
      </HeroParallax>
      <Reveal className="relative">
        <Container className="flex min-h-[92svh] flex-col justify-end pb-16 pt-28 md:pb-20">
          <p className="mb-5 inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-cream/25 py-1 pl-3 pr-3 text-[11px] font-bold uppercase tracking-[0.18em] text-cream/85">
            <span className="hidden sm:inline">Supported by</span>
            <span className="inline-flex items-center rounded-full bg-surface px-2 py-0.5">
              <Image
                src="/assets/brand/pertamina.svg"
                alt="Pertamina"
                width={52}
                height={12}
                className="h-3 w-auto"
                priority
              />
            </span>
            <span className="hidden sm:inline" aria-hidden>
              ·
            </span>
            <span className="hidden sm:inline">Desa Energi Berdikari</span>
            <span className="sm:hidden">Desa Energi Berdikari</span>
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
            The Value of Coconut, Reimagined.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            {SITE.commerce} Premium copra, shell charcoal and briquettes —
            processed in the village, specified for world buyers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/products" event="hero_cta_explore" className="w-full sm:w-auto">
              Explore Products
            </Button>
            <Button
              href="/contact"
              variant="secondaryDark"
              event="hero_cta_quote"
              className="w-full sm:w-auto"
            >
              Start a Conversation
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-cream/15 pt-6 md:mt-12 md:gap-4">
            {TRUST.map((t) => (
              <div key={t.label}>
                <dt className="order-2 mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-cream/60 sm:text-xs sm:tracking-[0.14em]">
                  {t.label}
                </dt>
                <dd className="order-1 text-xl font-extrabold tabular-nums sm:text-2xl">
                  {t.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Reveal>
    </section>
  );
}
