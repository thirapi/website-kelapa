import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Rundown } from "@/components/motion/Rundown";
import { CERTIFICATIONS, PROCESS_STEPS } from "@/content/shared";

export const metadata: Metadata = {
  title: "Process",
  description: "Rantai pasok & QC: dari lahan ke pelabuhan.",
};

// Process — 7 section per 04-PRD §3
export default function ProcessPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* 1 Hero */}
      <section className="relative flex min-h-[60dvh] items-center pt-24">
        <div className="fade-mask-linear pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,78,31,0.12),transparent_65%)]" />
        <Container className="relative py-20">
          <p className="text-xs font-semibold tracking-widest text-ember uppercase">Our Process</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            Transparan dari Lahan hingga Kontainer.
          </h1>
        </Container>
      </section>

      {/* 2 Process Overview — Rundown signature */}
      <div className="border-y border-paper/15 bg-surface-alt/60">
        <Section>
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">Alur Inti Kami.</h2>
          </Reveal>
          <Rundown
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
          <div className="fade-mask-radial min-h-56 rounded-2xl bg-surface-alt p-6">
            <p className="text-sm text-muted">Visual QC (sticky crossfade Fase 3).</p>
          </div>
        </div>
      </Section>

      {/* 4 Traceability */}
      <Section spacing="compact">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Traceability.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Setiap batch tercatat: asal lahan, tanggal produksi, hasil uji, dan nomor kontainer.
        </p>
      </Section>

      {/* 5 Sustainability */}
      <Section width="narrow" className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-5xl">“Limbah Jadi Energi.”</h2>
        <p className="mt-4 text-muted">Tempurung — sampingan pertanian — menjadi arang bernilai ekonomi bagi nagari.</p>
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
          <h2 className="font-display text-3xl font-bold md:text-5xl">Audit Rantai Kami Kapan Saja.</h2>
          <div className="mt-8">
            <Button href="/contact">Request Quote</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
