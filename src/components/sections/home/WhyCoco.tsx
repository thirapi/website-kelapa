import { Section } from "@/components/ui/Section";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { ICONS, type IconName } from "@/components/ui/icons";

// 07 Why Katapiang — bento asimetris: ikon sebaris judul (bukan tile generik),
// copy spesifik nagari. Stagger reveal, blok besar dulu.
const ITEMS: { icon: IconName; title: string; desc: string; big?: boolean }[] = [
  {
    icon: "repeat",
    title: "Volume konsisten",
    desc: "Produksi berjalan tiap minggu di nagari — dari karung eceran hingga kontainer, jadwalnya bisa dipegang.",
    big: true,
  },
  {
    icon: "percent",
    title: "Harga langsung dari sumber",
    desc: "Tanpa perantara berlapis. Negosiasi langsung dengan pengelola nagari.",
  },
  {
    icon: "chat",
    title: "Fast respon",
    desc: "Tanya spec atau minta foto batch terbaru — dibalas via WA/email, bukan tiket.",
  },
  {
    icon: "calendar",
    title: "Lead time transparan",
    desc: "Tanggal produksi dan kirim dikonfirmasi di awal, bukan kira-kira.",
  },
  {
    icon: "origin",
    title: "Asal tertelusur",
    desc: "Tiap batch tercatat dari lahan petani Katapiang hingga pengemasan.",
  },
  {
    icon: "fileCheck",
    title: "Siap kirim",
    desc: "Dokumen rapi, packing aman sampai tujuan.",
  },
];

export function WhyCoco() {
  return (
    <Section ariaLabel="Why COCO KATAPIANG">
      <Reveal>
        <p className="text-xs font-bold tracking-[0.25em] text-ember uppercase">Kenapa nagari</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
          Mengapa Memilih Kami.
        </h2>
      </Reveal>
      <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
        {ITEMS.map((it) => {
          const Icon = ICONS[it.icon];
          return (
            <article
              key={it.title}
              data-reveal-item
              className={`rounded-2xl border border-paper/15 bg-surface p-7 transition-[border-color] hover:border-ember/40 ${
                it.big ? "md:col-span-2 md:p-10" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="font-display text-xl font-bold">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{it.desc}</p>
            </article>
          );
        })}
      </RevealStagger>
    </Section>
  );
}
