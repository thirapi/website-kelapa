import { Hero } from "@/components/sections/home/Hero";
import { ProductLines } from "@/components/sections/home/ProductLines";
import { QuickNumbers } from "@/components/sections/home/QuickNumbers";
import { QualityTraceability } from "@/components/sections/home/QualityTraceability";
import { ProcessRundown } from "@/components/sections/home/ProcessRundown";
import { Compliance } from "@/components/sections/home/Compliance";
import { WhyCoco } from "@/components/sections/home/WhyCoco";
import { SourcingHeritage } from "@/components/sections/home/SourcingHeritage";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { MarketIndustries } from "@/components/sections/home/MarketIndustries";
import { Faq } from "@/components/sections/home/Faq";
import { ContactQuote } from "@/components/sections/home/ContactQuote";
import { CtaClosing } from "@/components/sections/home/CtaClosing";
import { EmberWipe } from "@/components/motion/EmberWipe";

// Homepage — 14 section per 01-PRD-Landing-Page.md (Footer di layout = §14).
// EmberWipe di 3 boundary (§2.2): Hero→ProductLines, Process→Why, CTA→Footer.
export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <EmberWipe>
        <ProductLines />
      </EmberWipe>
      <QuickNumbers />
      <QualityTraceability />
      <ProcessRundown />
      <Compliance />
      <EmberWipe>
        <WhyCoco />
      </EmberWipe>
      <SourcingHeritage />
      <Testimonials />
      <MarketIndustries />
      <Faq />
      <ContactQuote />
      <EmberWipe>
        <CtaClosing />
      </EmberWipe>
    </div>
  );
}
