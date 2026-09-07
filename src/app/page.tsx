import { Hero } from "@/components/sections/home/Hero";
import { ProductLines } from "@/components/sections/home/ProductLines";
import { QuickNumbers } from "@/components/sections/home/QuickNumbers";
import { QualityTraceability } from "@/components/sections/home/QualityTraceability";
import { ProcessRundown } from "@/components/sections/home/ProcessRundown";
import { Compliance } from "@/components/sections/home/Compliance";
import { WhyHancoco } from "@/components/sections/home/WhyHancoco";
import { SourcingHeritage } from "@/components/sections/home/SourcingHeritage";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { MarketIndustries } from "@/components/sections/home/MarketIndustries";
import { Faq } from "@/components/sections/home/Faq";
import { ContactQuote } from "@/components/sections/home/ContactQuote";
import { CtaClosing } from "@/components/sections/home/CtaClosing";

// Homepage — 14 section per 01-PRD-Landing-Page.md (Footer di layout = §14)
export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <ProductLines />
      <QuickNumbers />
      <QualityTraceability />
      <ProcessRundown />
      <Compliance />
      <WhyHancoco />
      <SourcingHeritage />
      <Testimonials />
      <MarketIndustries />
      <Faq />
      <ContactQuote />
      <CtaClosing />
    </div>
  );
}
