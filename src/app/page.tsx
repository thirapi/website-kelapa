import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Commodity } from "@/components/sections/Commodity";
import { Portfolio } from "@/components/sections/Portfolio";
import { Commerce } from "@/components/sections/Commerce";
import { Origin } from "@/components/sections/Origin";
import { Process } from "@/components/sections/Process";
import { Quality } from "@/components/sections/Quality";
import { Pertamina } from "@/components/sections/Pertamina";
import { Impact } from "@/components/sections/Impact";
import { Global } from "@/components/sections/Global";
import { BuyerCta } from "@/components/sections/BuyerCta";
import { Marquee } from "@/components/ui/Marquee";

export const metadata: Metadata = {
  title: "COCO KATAPIANG — Source Coconut Products from Indonesia",
  description:
    "Premium B2B coconut products from Nagari Katapiang, West Sumatra: copra, shell charcoal and briquettes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Single-origin sourcing",
          "Batch-level quality",
          "Bulk & private label",
          "Processed in Katapiang",
        ]}
      />
      <Commodity />
      <Portfolio />
      <Commerce />
      <Origin />
      <Process />
      <Quality />
      <Pertamina />
      <Impact />
      <Global />
      <BuyerCta />
    </>
  );
}
