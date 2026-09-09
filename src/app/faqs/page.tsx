import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about ordering coconut products from COCO KATAPIANG: MOQ, samples, private label, lead times and payment.",
};

const FAQS = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQs vary by product and packaging. Copra and shell charcoal typically start at 1 metric ton, briquettes at 500 kg for private-label runs. Send your specification and we will confirm the exact MOQ with your quotation.",
  },
  {
    q: "Do you provide samples?",
    a: "Yes. We ship specification samples (up to 2 kg) for laboratory or burn testing. Sample cost plus courier is quoted per destination and is deductible from your first confirmed order.",
  },
  {
    q: "Can you do private-label or custom packaging?",
    a: "Yes. Bulk bags, retail cartons and custom-printed packaging are available for briquettes and oils. Share your artwork and target market and we will confirm feasibility and lead time.",
  },
  {
    q: "What are typical lead times?",
    a: "Stock grades ship within 7 to 14 days of confirmed payment. Custom or private-label runs need 3 to 5 weeks including packaging production. Exact schedules are confirmed on every quotation.",
  },
  {
    q: "Which shipping terms do you support?",
    a: "EXW, FOB Padang/Teluk Bayur and CIF to major world ports. Tell us your destination port and we will quote the matching term.",
  },
  {
    q: "How do payments work?",
    a: "T/T with deposit for first orders, and L/C at sight for larger contracts. Details are fixed per order on the proforma invoice.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Frequently Asked Questions."
        intro="Ordering, samples, packaging, lead times and payment: the essentials for new buyers."
        trail={[{ label: "FAQs" }]}
      />
      <Section>
        <Container className="max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-surface p-5"
              >
                <summary className="cursor-pointer text-base font-bold tracking-tight marker:text-brand">
                  {item.q}
                </summary>
                <p className="mt-3 leading-relaxed text-ink/80">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-muted">
            Still need answers?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand underline-offset-4 hover:underline"
            >
              Contact our team
            </Link>
            . We reply within 1 to 2 business days.
          </p>
        </Container>
      </Section>
    </>
  );
}
