import { Container, Section } from "@/components/ui/Section";
import { RfqForm } from "@/components/forms/RfqForm";

export function BuyerCta() {
  return (
    <Section dark>
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-surface-alt">
            For buyers
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Looking for Coconut Products from Indonesia?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Send your specification, packaging and destination. Our team replies
            within 1–2 business days with availability and quotation.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 text-ink shadow-2xl shadow-black/15 md:p-8">
          <RfqForm compact />
        </div>
      </Container>
    </Section>
  );
}
