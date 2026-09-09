import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section, Eyebrow } from "@/components/ui/Section";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How COCO KATAPIANG collects, uses and protects buyer inquiry data.",
};

const BLOCKS = [
  {
    title: "What we collect",
    text: "When you request a quotation we collect your name, company, business email, WhatsApp number, product interest and order details. Website analytics are aggregated and contain no personal identifiers.",
  },
  {
    title: "How we use it",
    text: "Your details are used only to prepare quotations, arrange samples and shipments, and follow up on active inquiries. We do not sell buyer data and we do not add you to marketing lists without consent.",
  },
  {
    title: "Messaging handoff",
    text: "If you continue a conversation on WhatsApp or email, that provider's own privacy terms also apply. We keep shared threads only as long as the commercial relationship requires.",
  },
  {
    title: "Retention and deletion",
    text: "Inactive inquiry records are removed within 24 months. You can request a copy or deletion of your data at any time through the contact below.",
  },
  {
    title: "Contact",
    text: `Data requests: ${SITE.email}. We respond within 5 business days.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Privacy Policy."
        intro="Buyer data exists to serve your order. Nothing more."
        trail={[{ label: "Privacy Policy" }]}
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
            Last updated: September 2026.
          </p>
        </Container>
      </Section>
    </>
  );
}
