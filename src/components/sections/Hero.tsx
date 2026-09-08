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
    <section className="relative overflow-hidden bg-ink text-white">
      <HeroParallax>
        <Image
          src={ASSETS["grove-hero"]}
          alt="Coconut groves of Nagari Katapiang at golden hour"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-ink/45" />
      </HeroParallax>
      <Reveal className="relative">
        <Container className="flex min-h-[92svh] flex-col justify-end pb-16 pt-28 md:pb-20">
          <p className="mb-5 inline-flex w-fit items-center rounded-full border border-white/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
            {SITE.badge}
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            The Value of Coconut, Reimagined.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {SITE.commerce} Premium copra, shell charcoal and briquettes —
            processed in the village, specified for world buyers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/products" event="hero_cta_explore">
              Explore Products
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              event="hero_cta_quote"
              className="border-white/60 bg-white/15 text-white backdrop-blur-sm hover:border-white hover:bg-white/25 hover:text-white"
            >
              Start a Conversation
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
            {TRUST.map((t) => (
              <div key={t.label}>
                <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                  {t.label}
                </dt>
                <dd className="order-1 text-2xl font-extrabold tabular-nums">
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
