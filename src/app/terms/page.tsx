import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for ordering coconut products from COCO KATAPIANG.",
};

const BLOCKS = [
  {
    title: "Ordering",
    text: "Orders are confirmed by a signed proforma invoice stating product, specification, quantity, packaging, shipping term and delivery schedule. Anything not written on the confirmation is not part of the order.",
  },
  {
    title: "Payment",
    text: "Standard terms are T/T with a deposit for first orders, or irrevocable L/C at sight for larger contracts. Goods ship after payment conditions on the proforma invoice are met.",
  },
  {
    title: "Quality and claims",
    text: "Specifications and tolerances are agreed before production and verified by certificate of analysis. Claims for non-conforming goods must be filed within 7 days of receipt with supporting evidence, and are settled by replacement or credit.",
  },
  {
    title: "Force majeure",
    text: "Neither party is liable for delays caused by events beyond reasonable control, including natural disasters, port closures and export-regulation changes. Affected obligations are suspended and rescheduled in good faith.",
  },
  {
    title: "Governing terms",
    text: "These terms are governed by the laws of Indonesia. Disputes are first settled by negotiation, then by arbitration in Padang, West Sumatra, if no agreement is reached.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Terms of Service."
        intro="The working rules behind every quotation, order and shipment."
        trail={[{ label: "Terms of Service" }]}
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
          <p className="mt-8 text-sm leading-relaxed text-muted">
            Last updated: September 2026. For contract-specific terms, the signed
            sales confirmation takes precedence over this page.
          </p>
        </Container>
      </Section>
    </>
  );
}
