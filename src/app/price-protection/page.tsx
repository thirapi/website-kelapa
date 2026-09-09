import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Price Protection Policy",
  description:
    "How COCO KATAPIANG quotations, price validity and confirmed-order pricing work.",
};

const BLOCKS = [
  {
    title: "Quotation validity",
    text: "Every quotation states its own validity period, normally 14 days. Within that window the quoted price is held, provided specifications, quantity and shipping term stay unchanged.",
  },
  {
    title: "Raw-material movement",
    text: "Copra and shell prices follow harvest and energy markets. If farm-gate prices move materially before your order is confirmed, we re-quote transparently with the cost breakdown instead of silently substituting grades.",
  },
  {
    title: "Confirmed orders are locked",
    text: "Once a proforma invoice is signed and the deposit is received, your unit price is locked for that shipment quantity. Later market movement does not change a confirmed order.",
  },
  {
    title: "Contract and repeat buyers",
    text: "Quarterly and annual contracts can fix pricing bands or index-linked formulas by mutual agreement. Ask our team when requesting a quotation.",
  },
];

export default function PriceProtectionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Price Protection Policy."
        intro="When a price is a promise, and when the market asks for a fresh quote."
        trail={[{ label: "Price Protection" }]}
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
