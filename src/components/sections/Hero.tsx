import { HeroParallax } from "@/components/motion/HeroParallax";
import { Reveal } from "@/components/motion/Reveal";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { Container } from "@/components/ui/Section";
import { PertaminaBadge } from "@/components/ui/PertaminaBadge";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";

const TRUST = [
  { value: "100%", label: "Traceable to Katapiang groves", short: "Traceable" },
  { value: "3+", label: "Export-ready product lines", short: "Export-ready" },
  // TODO: placeholder dummy — replace with verified stakeholder customer metric.
  { value: "10+", label: "B2B customers served worldwide", short: "Customers" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <HeroParallax>
        <HeroVideo />
        {/* Gradient: clear at top so the groves show, dark at bottom for text contrast.
            Desktop stops are all ink/60 (= flat overlay, unchanged). */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink/80 md:from-ink/60 md:via-ink/60 md:to-ink/60" />
      </HeroParallax>
      <Reveal className="relative">
        <Container className="flex min-h-[92svh] flex-col justify-end pb-16 pt-28 md:pb-20">
          <PertaminaBadge priority className="mb-5" />
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
            The Value of Coconut, Reimagined.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream md:text-lg">
            {SITE.commerce} Premium copra, shell charcoal and briquettes,
            processed in the village, specified for world buyers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/store" event="hero_cta_explore" className="w-full py-4 text-base sm:w-auto sm:py-3 sm:text-sm">
              Visit Store
            </Button>
            <Button
              href="/contact"
              variant="secondaryDark"
              event="hero_cta_quote"
              className="w-full py-4 text-base sm:w-auto sm:py-3 sm:text-sm"
            >
              Start a Conversation
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-cream/15 pt-6 md:mt-12 md:gap-4">
            {TRUST.map((t) => (
              <div key={t.label}>
                <dt className="order-2 mt-1 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.12em] text-cream/80 sm:text-xs sm:tracking-[0.14em]">
                  <span className="sm:hidden">{t.short}</span>
                  <span className="hidden sm:inline">{t.label}</span>
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
