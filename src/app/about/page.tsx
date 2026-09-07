import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { JOURNEY, VALUES } from "@/content/shared";

export const metadata: Metadata = {
  title: "About — Hancoco",
  description: "Lebih dari pemasok: mitra pasokan kelapa yang tertelusur.",
};

// About — 9 section per 04-PRD-Other-Pages.md §1
export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* 1 Hero */}
      <section className="relative flex min-h-[70dvh] items-center pt-24">
        <div className="fade-mask-linear pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,140,40,0.12),transparent_65%)]" />
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
            Hancoco menghubungkan lahan petani kelapa dengan buyer global — arang tempurung
            dan kopra dengan QC terdokumentasi dan jadwal kirim yang bisa dipegang.
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
      <div className="border-y border-white/10 bg-surface/50">
        <Section>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Perjalanan yang Dibangun dari Kepercayaan.
          </h2>
          <ol className="mt-10">
            {JOURNEY.map((j, i) => (
              <li key={j.year} className="flex gap-6 border-t border-white/10 py-6 last:border-b">
                <span className="tnum font-display text-2xl font-bold text-ember">{j.year}</span>
                <div>
                  <h3 className="font-display text-lg font-bold">
                    0{i + 1} — {j.title}
                  </h3>
                  <p className="text-muted">{j.desc}</p>
                </div>
              </li>
            ))}
          </ol>
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
          <div className="rounded-2xl border border-white/10 bg-surface p-8 md:col-span-5">
            <h2 className="font-display text-2xl font-bold">Visi</h2>
            <p className="mt-3 text-muted">Rantai pasok kelapa Indonesia yang paling bisa diandalkan.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface-alt p-8 md:col-span-7">
            <h2 className="font-display text-2xl font-bold">Misi</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>Volume konsisten & spec terdokumentasi.</li>
              <li>Kemitraan petani yang adil & tertelusur.</li>
              <li>Limbah jadi nilai (energi).</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 6 Our Values — bento + glass */}
      <Section spacing="none" className="pb-24 md:pb-32">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Nilai yang Menjadi Fondasi Setiap Pengiriman.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <article
              key={v.title}
              className={`rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <h3 className="font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 7 Sourcing Network */}
      <Section spacing="none" className="pb-24 md:pb-32">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Jaringan Lahan yang Terkelola.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Sulawesi", "Maluku", "Jawa"].map((l) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-surface p-7">
              <h3 className="font-display text-xl font-bold">{l}</h3>
              <p className="text-sm text-muted">Kemitraan petani + titik kumpul.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8 Behind the Harvest — masonry */}
      <Section spacing="none" className="pb-24 md:pb-32">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Di Balik Setiap Ton, Ada Proses yang Tertelusur.
        </h2>
        <div className="mt-8 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {["Sortir", "Jemur", "Kiln", "Packing", "Stuffing", "Sail"].map((t) => (
            <div key={t} className="fade-mask-radial break-inside-avoid rounded-2xl bg-surface-alt p-6">
              <p className="text-sm text-muted">{t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 9 Closing Statement — reuse CTA */}
      <section className="border-t border-white/10 py-24 md:py-32">
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
