import { Section } from "@/components/ui/Section";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

// 07 Why Hancoco — 01-PRD §07: bento asimetris, stagger reveal (besar dulu)
const ITEMS = [
  { title: "Consistent volume", desc: "Dari kontainer hingga kontrak tahunan.", big: true },
  { title: "Competitive pricing", desc: "Langsung dari sumber.", big: false },
  { title: "Responsive communication", desc: "Quotasi cepat via WA/email.", big: false },
  { title: "Reliable lead time", desc: "Jadwal produksi transparan.", big: false },
  { title: "Traceable origin", desc: "Lahan hingga pelabuhan.", big: false },
  { title: "Experienced export", desc: "Dokumen ekspor rapi.", big: false },
];

export function WhyHancoco() {
  return (
    <Section ariaLabel="Why Hancoco">
      <Reveal>
        <h2 className="font-display max-w-xl text-3xl font-bold md:text-5xl">Mengapa Pemasok Memilih Kami.</h2>
      </Reveal>
      <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
        {ITEMS.map((it) => (
          <article
            key={it.title}
            data-reveal-item
            className={`rounded-2xl border border-white/10 bg-surface p-7 ${it.big ? "md:col-span-2 md:p-10" : ""}`}
          >
            <h3 className="font-display text-xl font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted">{it.desc}</p>
          </article>
        ))}
      </RevealStagger>
    </Section>
  );
}
