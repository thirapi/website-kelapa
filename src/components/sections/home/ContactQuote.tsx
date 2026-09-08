"use client";

import { CONTACT } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { track } from "@/lib/analytics";

// 12 Contact / Request Quote — 01-PRD §12: form fungsional (Fase 4)
export function ContactQuote() {
  return (
    <Section ariaLabel="Request quote">
      <Reveal>
        <h2 className="font-display max-w-2xl text-3xl font-bold md:text-5xl">
          Discuss Your Supply Needs.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <QuoteForm variant="short" />
          <div className="space-y-3 text-muted">
            <p>
              WhatsApp:{" "}
              <a
                href={CONTACT.whatsapp}
                onClick={() => track("quote_whatsapp_click", { source: "homepage-side" })}
                className="text-paper underline underline-offset-4"
              >
                Chat our team
              </a>
            </p>
            <p>
              Email:{" "}
              <a href={CONTACT.email} className="text-paper underline underline-offset-4">
                {CONTACT.emailText}
              </a>
            </p>
            <p>Location: {CONTACT.address}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
