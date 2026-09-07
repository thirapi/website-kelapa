import type { Metadata } from "next";
import { CONTACT } from "@/content/site";
import { FAQS } from "@/content/shared";
import { Container, Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ICONS } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
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

      {/* 3 Contact Info — WA unggulan full-width, sisanya 2 kolom */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Kontak Langsung.</h2>
        <a href={CONTACT.whatsapp} className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-ember p-6 text-base transition-[background-color] hover:bg-[#8d5c28] md:p-7">
          <span className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <ICONS.wa size={22} aria-hidden />
            </span>
            <span>
              <span className="font-display block text-xl font-bold">WhatsApp Nagari</span>
              <span className="text-sm opacity-80">Respon tercepat — jam kerja WIB</span>
            </span>
          </span>
          <span aria-hidden className="font-display text-3xl font-bold">→</span>
        </a>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <a href={CONTACT.email} className="flex items-center gap-4 rounded-2xl border border-paper/15 bg-surface p-6 transition-[border-color] hover:border-ember/50">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember">
              <ICONS.mail size={22} aria-hidden />
            </span>
            <span>
              <span className="block font-bold">Email</span>
              <span className="text-sm text-muted">{CONTACT.emailText}</span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-paper/15 bg-surface p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember">
              <ICONS.pin size={22} aria-hidden />
            </span>
            <span>
              <span className="block font-bold">Alamat</span>
              <span className="text-sm text-muted">{CONTACT.address}</span>
            </span>
          </div>
        </div>
      </Section>

      {/* 4 Request Quote Form */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Request Quote Form.</h2>
        <div className="mt-6">
          <QuoteForm variant="full" />
        </div>
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

      {/* 7 Office/Location — embed tanpa API key; ganti mapsQuery saat alamat final */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Lokasi.</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-paper/15">
          <iframe
            title="Nagari Katapiang location map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&z=5&output=embed`}
            loading="lazy"
            className="min-h-64 w-full border-0 grayscale-[35%] contrast-[1.05]"
          />
        </div>
      </Section>

      {/* 8 Social */}
      <Section spacing="compact">
        <h2 className="font-display text-2xl font-bold">Kanal.</h2>
        <p className="mt-2 text-muted">LinkedIn / Instagram / WhatsApp Channel (menunggu akun resmi).</p>
      </Section>

      {/* 9 Closing CTA */}
      <section className="border-t border-paper/15 py-24 md:py-32">
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
