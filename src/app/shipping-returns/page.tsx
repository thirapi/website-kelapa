import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Export shipping terms, lead times, packaging and claims policy for COCO KATAPIANG coconut products.",
};

const BLOCKS = [
  {
    title: "Shipping terms",
    text: "We ship EXW Katapiang, FOB Padang/Teluk Bayur, or CIF to major world ports. Freight, insurance and destination charges for CIF orders are itemised on every quotation so landed cost is transparent.",
  },
  {
    title: "Lead times",
    text: "Stock grades ship within 7 to 14 days of confirmed payment. Private-label and custom-packaging runs need 3 to 5 weeks including packaging production. Vessel schedules are confirmed before loading.",
  },
  {
    title: "Packaging",
    text: "Bulk PP bags, vacuum packs, retail cartons and custom-printed packaging, palletised and fumigated for export. Packaging specifications are recorded on the sales confirmation.",
  },
  {
    title: "Inspection",
    text: "Pre-shipment inspection by an independent surveyor (SGS, Sucofindo or equivalent) can be arranged at buyer request. Certificates of analysis accompany every shipment.",
  },
  {
    title: "Damage, loss and returns",
    text: "Report visible damage or shortage within 7 days of receipt with photos and the packing list. For verified non-conforming goods we replace the affected quantity or credit the order. Because most orders are made to specification, returns are handled case by case rather than as automatic refunds.",
  },
];

export default function ShippingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Shipping & Returns."
        intro="How your order travels from Katapiang to your port, and what happens if something arrives wrong."
        trail={[{ label: "Shipping & Returns" }]}
      />
      <Section>
        <Container className="max-w-3xl">
          <div className="space-y-8">
            {BLOCKS.map((block) => (
              <div key={block.title}>
                <Eyebrow>{block.title}</Eyebrow>
                <p className="mt-3 leading-relaxed text-ink/80">{block.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
