import { Section } from "@/components/ui/Section";

// 04 Quality & Traceability — 01-PRD §04: split-scroll static (motion di Fase 3)
const POINTS = [
  { title: "QC per batch", desc: "Moisture, ash, size, purity diuji tiap batch." },
  { title: "Spesifikasi terdokumentasi", desc: "Spec sheet menyertai tiap shipment." },
  { title: "Asal lahan tertelusur", desc: "Dari lahan petani terkelola hingga pelabuhan." },
  { title: "Konsistensi shipment", desc: "Deviasi dikontrol, repeat order stabil." },
];

export function QualityTraceability() {
  return (
    <Section ariaLabel="Quality and traceability">
      <h2 className="font-display max-w-xl text-3xl font-bold md:text-5xl">Kualitas Tidak Terjadi Secara Kebetulan.</h2>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <ul className="space-y-8">
          {POINTS.map((p, i) => (
            <li key={p.title} className="border-l-2 border-ember/60 pl-6">
              <p className="text-xs text-muted">0{i + 1}</p>
              <h3 className="font-display mt-1 text-xl font-bold">{p.title}</h3>
              <p className="mt-1 text-muted">{p.desc}</p>
            </li>
          ))}
        </ul>
        <div className="fade-mask-radial min-h-72 rounded-2xl bg-surface-alt p-8">
          <p className="text-sm text-muted">Visual QC / traceability (sticky crossfade di Fase 3).</p>
        </div>
      </div>
    </Section>
  );
}
