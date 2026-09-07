import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Rundown } from "@/components/motion/Rundown";
import { JOURNEY, VALUES } from "@/content/shared";
import { MEDIA } from "@/content/media";
import { ICONS } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About",
  description: "COCO KATAPIANG dari Nagari Katapiang: arang & kopra dikelola masyarakat, didukung Pertamina.",
};

// About — 9 section per 04-PRD-Other-Pages.md §1
export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* 1 Hero */}
      <section className="relative flex min-h-[70dvh] items-center pt-24">
        <div className="fade-mask-linear pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,78,31,0.12),transparent_65%)]" />
        <Container className="relative py-20">
          <p className="text-xs font-semibold tracking-widest text-ember uppercase">About Us</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            Berakar dari Kelapa, Bertumbuh untuk Dunia.
          </h1>
        </Container>
      </section>

      {/* 2 Who We Are */}
      <Section>
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Lebih dari Pemasok. Mitra Pasokan yang Tertelusur.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="text-muted">
            COCO KATAPIANG mengolah kelapa Nagari Katapiang menjadi arang tempurung
            dan kopra — dengan QC terdokumentasi dan jadwal kirim yang bisa dipegang.
            Sebuah inisiatif yang didukung Pertamina melalui Desa Energi Berdikari.
          </p>
          <div className="fade-mask-radial relative min-h-56 overflow-hidden rounded-2xl bg-surface-alt">
            <Image
              src="/assets/sourcing/husking.webp"
              alt="Hand-husking coconut"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 3 Our Journey — reuse Rundown */}
      <div className="border-y border-paper/15 bg-surface-alt/60">
        <Section>
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Perjalanan yang Dibangun dari Kepercayaan.
            </h2>
          </Reveal>
          <Rundown
            items={JOURNEY.map((j, i) => ({
              marker: `${j.year} — 0${i + 1}`,
              title: j.title,
              desc: j.desc,
            }))}
          />
        </Section>
      </div>

      {/* 4 Philosophy */}
      <Section width="narrow" className="text-center">
        <h2 className="font-display text-3xl leading-tight font-bold md:text-5xl">
          “Dari Lahan ke Pelabuhan, Bertanggung Jawab di Setiap Langkah.”
        </h2>
      </Section>

      {/* 5 Vision & Mission — 2 kolom asimetris */}
      <Section spacing="none" className="pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="rounded-2xl border border-paper/15 bg-surface p-8 md:col-span-5">
            <h2 className="font-display text-2xl font-bold">Visi</h2>
            <p className="mt-3 text-muted">Rantai pasok kelapa Indonesia yang paling bisa diandalkan.</p>
          </div>
          <div className="rounded-2xl border border-paper/15 bg-surface-alt p-8 md:col-span-7">
            <h2 className="font-display text-2xl font-bold">Misi</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>Volume konsisten & spec terdokumentasi.</li>
              <li>Kemitraan petani yang adil & tertelusur.</li>
              <li>Limbah jadi nilai (energi).</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 6 Our Values — bento + glass + ikon */}
      <Section spacing="none" className="pb-24 md:pb-32">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.25em] text-ember uppercase">Fondasi</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
            Nilai yang Menjadi Fondasi Setiap Pengiriman.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = ICONS[v.icon];
            return (
              <article
                key={v.title}
                className={`rounded-2xl border border-paper/15 bg-paper/5 p-7 backdrop-blur transition-[border-color] hover:border-ember/40 ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember">
                    <Icon size={20} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="font-display text-xl font-bold">{v.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.desc}</p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* 7 Sourcing Network — daftar bernomor, bukan grid kartu */}
      <Section spacing="none" className="pb-24 md:pb-32">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Jaringan Lahan yang Terkelola.</h2>
        <ol className="mt-8 divide-y divide-paper/15 border-y border-paper/15">
          {[
            { region: "Sulawesi", note: "Kemitraan petani + titik kumpul kopra" },
            { region: "Maluku", note: "Lahan kelapa + karbonisasi" },
            { region: "Jawa", note: "Sortir, packing & stuffing kontainer" },
          ].map((l, i) => (
            <li key={l.region} className="flex items-baseline gap-5 py-5">
              <span className="tnum font-display text-sm font-bold text-ember">0{i + 1}</span>
              <div>
                <h3 className="font-display text-xl font-bold md:text-2xl">{l.region}</h3>
                <p className="text-sm text-muted">{l.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 8 Behind the Harvest — foto proses asli */}
      <Section spacing="none" className="pb-24 md:pb-32">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.25em] text-ember uppercase">Proses</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
            Di Balik Setiap Ton, Ada Proses yang Tertelusur.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {MEDIA.sourcing.slice(0, 4).map((m, i) => (
            <figure
              key={m.src}
              className={`fade-mask-radial relative overflow-hidden rounded-2xl ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <Image
                src={m.src}
                alt={m.alt}
                width={800}
                height={i === 0 ? 1000 : 600}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 25vw"
                className="h-full min-h-52 w-full object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-base/70 px-3 py-1 text-xs text-paper backdrop-blur-sm">
                {m.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 9 Closing Statement — reuse CTA */}
      <section className="border-t border-paper/15 py-24 md:py-32">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Mari Bangun Pasokan yang Konsisten Bersama.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Request Quote</Button>
            <Button href="/products" variant="secondary">
              Explore Products
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
