import type { Metadata } from "next";
import { CONTACT } from "@/content/site";
import { FAQS } from "@/content/shared";
import { Container, Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";

export const metadata: Metadata = {
  title: "Contact — Hancoco",
  description: "Request quote: respon cepat untuk kebutuhan volume Anda.",
};

// Contact — 9 section per 04-PRD §4
export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* 1 Hero */}
      <section className="pt-24">
        <Container className="pt-20 pb-10">
          <p className="text-xs font-semibold tracking-widest text-ember uppercase">Contact</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            Ceritakan Kebutuhan Volume Anda.
          </h1>
        </Container>
      </section>

      {/* 2 Let's Talk */}
      <Section spacing="none" className="pb-8">
        <p className="max-w-2xl text-lg text-muted">
          Importir, trader, atau purchasing — kirim spec & target jadwal Anda, kami balas dengan
          penawaran + lead time.
        </p>
      </Section>

      {/* 3 Contact Info */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Kontak Langsung.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <a href={CONTACT.whatsapp} className="rounded-2xl border border-white/10 bg-surface p-6 hover:border-ember/50">
            <h3 className="font-bold">WhatsApp Export</h3>
            <p className="text-sm text-muted">Respon tercepat →</p>
          </a>
          <a href={CONTACT.email} className="rounded-2xl border border-white/10 bg-surface p-6 hover:border-ember/50">
            <h3 className="font-bold">Email</h3>
            <p className="text-sm text-muted">{CONTACT.emailText}</p>
          </a>
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <h3 className="font-bold">Alamat</h3>
            <p className="text-sm text-muted">{CONTACT.address}</p>
          </div>
        </div>
      </Section>

      {/* 4 Request Quote Form */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Request Quote Form.</h2>
        <form className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-surface p-7 md:grid-cols-2">
          {["Nama*", "Perusahaan", "Email*", "WhatsApp*", "Produk interest", "Volume / kontainer", "Negara tujuan", "Lead time target"].map(
            (f) => (
              <label key={f} className="block text-sm">
                {f}
                <input
                  placeholder={f}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-base px-4 py-2.5 placeholder:text-muted"
                />
              </label>
            ),
          )}
          <label className="block text-sm md:col-span-2">
            Deskripsi kebutuhan
            <textarea
              rows={4}
              placeholder="Spec, packaging, jadwal kirim…"
              className="mt-1 w-full rounded-lg border border-white/10 bg-base px-4 py-2.5 placeholder:text-muted"
            />
          </label>
          <button type="submit" className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-base md:col-span-2">
            Submit RFQ
          </button>
        </form>
      </Section>

      {/* 5 Quick Links */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Navigasi Cepat.</h2>
        <ul className="mt-4 space-y-2">
          {[
            ["Charcoal →", "/products"],
            ["Briket →", "/products"],
            ["Copra →", "/products"],
            ["Proses & QC →", "/process"],
          ].map(([label, href]) => (
            <li key={label}>
              <a href={href} className="text-paper/80 hover:text-ember">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6 FAQ */}
      <Section spacing="compact" width="narrow">
        <h2 className="font-display text-2xl font-bold">FAQ.</h2>
        <div className="mt-6">
          <FaqList items={FAQS} />
        </div>
      </Section>

      {/* 7 Office/Location */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Lokasi.</h2>
        <div className="mt-6 min-h-64 rounded-2xl border border-white/10 bg-surface-alt p-8">
          <p className="text-muted">Google Maps embed (Fase 4 — butuh Maps key & alamat final).</p>
        </div>
      </Section>

      {/* 8 Social */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Kanal.</h2>
        <p className="mt-2 text-muted">LinkedIn / Instagram / WhatsApp Channel (menunggu akun resmi).</p>
      </Section>

      {/* 9 Closing CTA */}
      <section className="border-t border-white/10 py-24 md:py-32">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Siap Diskusi Hari Ini?</h2>
          <a
            href={CONTACT.whatsapp}
            className="mt-8 inline-block rounded-full bg-ember px-8 py-3 text-sm font-semibold text-base"
          >
            Chat WhatsApp
          </a>
        </Container>
      </section>
    </div>
  );
}
