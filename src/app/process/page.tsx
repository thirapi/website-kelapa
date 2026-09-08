import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Rundown } from "@/components/motion/Rundown";
import { CERTIFICATIONS, PROCESS_STEPS } from "@/content/shared";

export const metadata: Metadata = {
  title: "Process",
  description: "Supply chain & QC: from grove to container.",
};

// Process — 7 section per 04-PRD §3
export default function ProcessPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* 1 Hero — foto tungku + scrim terang */}
      <section className="relative flex min-h-[60dvh] items-center overflow-hidden pt-24">
        <Image
          src="/assets/sourcing/kiln.webp"
          alt="Traditional carbonization kiln"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/45 to-base" />
        <Container className="relative py-20">
          <p className="text-xs font-semibold tracking-widest text-ember uppercase">Our Process</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            Transparent from Grove to Container.
          </h1>
        </Container>
      </section>

      {/* 2 Process Overview — Rundown signature di band gelap */}
      <div className="border-y border-white/10 bg-[#1f130b]">
        <Section>
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-[#faf6ef] md:text-5xl">Our Core Flow.</h2>
          </Reveal>
          <Rundown
            tone="dark"
            items={PROCESS_STEPS.map((s, i) => ({
              marker: String(i + 1).padStart(2, "0"),
              title: s.title,
              desc: s.desc,
            }))}
          />
        </Section>
      </div>

      {/* 3 Quality Control — split */}
      <Section>
        <h2 className="font-display text-3xl font-bold md:text-4xl">Quality Control.</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ul className="space-y-4">
            {["Moisture control", "Ash testing", "Size grading", "Purity & mould check", "Batch record"].map((t) => (
              <li key={t} className="border-l-2 border-ember/60 pl-4 font-semibold">
                {t}
              </li>
            ))}
          </ul>
          <div className="fade-mask-radial relative min-h-56 overflow-hidden rounded-2xl bg-surface-alt">
            <Image
              src="/assets/sourcing/kiln.webp"
              alt="Traditional charcoal kiln — carbonization site"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 4 Traceability — kartu contoh batch */}
      <Section spacing="compact">
        <h2 className="font-display max-w-2xl text-3xl font-bold md:text-4xl">Traceability.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Every batch is logged: grove origin, production date, test results, and container number.
        </p>
        <div className="mt-8 max-w-xl rounded-2xl border border-paper/15 bg-surface p-6">
          <div className="flex items-center justify-between">
            <p className="tnum text-sm font-bold tracking-widest text-ember uppercase">
              Batch CK-2602-014
            </p>
            <p className="rounded-full bg-ember/10 px-3 py-1 text-xs font-bold text-ember">
              Sample format
            </p>
          </div>
          <dl className="mt-4 space-y-2 text-sm">
            {[
              ["Grove origin", "North Katapiang, Block 3"],
              ["Production", "Feb 12, 2026 · Carbonization Kiln 2"],
              ["Moisture / Ash", "6.8% / 2.4%"],
              ["Status", "QC passed — ready to pack"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-t border-paper/15 py-2">
                <dt className="text-muted">{k}</dt>
                <dd className="text-right font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 5 Sustainability */}
      <Section width="narrow" className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-5xl">“Waste Into Energy.”</h2>
        <p className="mt-4 text-muted">Shells — farm byproduct — turned into charcoal of economic value for the village.</p>
      </Section>

      {/* 6 Certifications — marquee */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold md:text-4xl">Compliance.</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {CERTIFICATIONS.map((c) => (
            <li key={c} className="rounded-full border border-paper/20 px-5 py-2.5 text-sm">
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* 7 CTA */}
      <section className="border-t border-paper/15 py-24 md:py-32">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Audit Our Chain Anytime.</h2>
          <div className="mt-8">
            <Button href="/contact">Request Quote</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
