"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { RfqForm } from "@/components/forms/RfqForm";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { SITE } from "@/content/site";
import { Accordion } from "@/components/ui/Accordion";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import type { RfqPayload } from "@/lib/inquiry";

const TYPES = [
  {
    value: "buyer",
    label: "Buyer",
    desc: "Bulk orders, private label, quotations.",
  },
  {
    value: "supplier",
    label: "Supplier",
    desc: "Sell coconuts or materials to us.",
  },
  {
    value: "partner",
    label: "Partner",
    desc: "Distribution, CSR & program collaboration.",
  },
  {
    value: "general",
    label: "General",
    desc: "Press, visits & everything else.",
  },
] as const;

const FAQS = [
  {
    question: "How do I order?",
    answer:
      "Add products to your inquiry list, submit the form with quantity, specification, packaging and destination. We reply within 1–2 business days.",
  },
  {
    question: "What is the minimum order?",
    answer:
      "One 20ft container per product line for export. Smaller trial lots can be discussed.",
  },
  {
    question: "Do you offer private label?",
    answer:
      "Yes, briquettes and oil support custom packaging and buyer branding.",
  },
  {
    question: "How is the price set?",
    answer:
      "Prices are quoted per lot based on specification, volume, packaging and destination. Use the form for a quotation.",
  },
  {
    question: "Where do you ship?",
    answer:
      "Domestic Indonesia and export by sea container. Tell us your destination port for freight options.",
  },
];

export default function ContactPage() {
  const [type, setType] = useState<RfqPayload["inquiryType"]>("buyer");
  const { lines, remove } = useInquiry();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a Conversation."
        intro="Buyers, suppliers, partners: tell us what you need. Real replies from Katapiang, within 1–2 business days."
        trail={[{ label: "Contact" }]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div
              className="grid grid-cols-2 gap-2"
              role="group"
              aria-label="Inquiry type"
            >
              {TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setType(t.value)}
                  aria-pressed={type === t.value}
                  className={cn(
                    "rounded-2xl border p-4 text-left transition-[border-color,background-color] duration-200",
                    type === t.value
                      ? "border-brand bg-brand/5"
                      : "border-line bg-surface hover:border-brand/50",
                  )}
                >
                  <span className="block text-sm font-extrabold">
                    {t.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">
                    {t.desc}
                  </span>
                </button>
              ))}
            </div>

            {lines.length > 0 && (
              <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
                <h2 className="text-sm font-bold uppercase tracking-[0.14em]">
                  Your inquiry list ({lines.length})
                </h2>
                <ul className="mt-3 space-y-2">
                  {lines.map((l) => (
                    <li
                      key={l.product}
                      className="flex items-center justify-between gap-3 text-sm"
                    >
                      <span>
                        <span className="font-semibold">{l.product}</span>
                        <span className="text-muted">: {l.quantity}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => remove(l.product)}
                        aria-label={`Remove ${l.product}`}
                        className="rounded-full p-1.5 transition-colors duration-200 hover:bg-surface-alt"
                      >
                        <Icons.X size={15} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 space-y-3 rounded-2xl bg-ink p-6 text-sm text-cream">
              <p className="flex items-start gap-2.5">
                <Icons.MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  aria-hidden
                />
                {SITE.address}
              </p>
              <p className="flex items-center gap-2.5">
                <Icons.Mail size={16} className="shrink-0" aria-hidden />
                <a
                  href={`mailto:${SITE.email}`}
                  className="underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Icons.Phone size={16} className="shrink-0" aria-hidden />
                {SITE.whatsapp}
              </p>
              <div className="overflow-hidden rounded-xl pt-1">
                <iframe
                  title="Map: Nagari Katapiang, Padang Pariaman"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=100.10%2C-0.62%2C100.22%2C-0.50&layer=mapnik&marker=-0.56%2C100.16"
                  className="h-56 w-full border-0"
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nagari+Katapiang,+Padang+Pariaman,+West+Sumatra"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
              >
                Get directions
                <Icons.ArrowUpRight size={15} aria-hidden />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-xl font-extrabold tracking-tight">
              {TYPES.find((t) => t.value === type)?.label} inquiry
            </h2>
            <p className="mb-6 mt-1 text-sm text-muted">
              {TYPES.find((t) => t.value === type)?.desc}
            </p>
            <RfqForm inquiryType={type} />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-alt/50">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Frequently asked.
          </h2>
          <div className="mt-6">
            <Accordion items={FAQS} />
          </div>
        </Container>
      </Section>
    </>
  );
}
