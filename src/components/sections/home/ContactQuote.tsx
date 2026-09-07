import { CONTACT } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

// 12 Contact / Request Quote — 01-PRD §12: form statis Fase 1, wiring Fase 4
export function ContactQuote() {
  return (
    <Section ariaLabel="Request quote">
      <Reveal>
        <h2 className="font-display max-w-xl text-3xl font-bold md:text-5xl">
          Diskusikan Kebutuhan Pasokan Anda.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <form className="space-y-4 rounded-2xl border border-white/10 bg-surface p-7">
            {["Nama", "Perusahaan", "Email", "WhatsApp", "Kebutuhan volume"].map((f) => (
              <label key={f} className="block text-sm">
                {f}
                <input
                  required={f === "Nama" || f === "Email"}
                  placeholder={f}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-base px-4 py-2.5 text-paper placeholder:text-muted"
                />
              </label>
            ))}
            <button type="submit" className="w-full rounded-full bg-ember px-6 py-3 text-sm font-semibold text-base">
              Kirim Request Quote
            </button>
          </form>
          <div className="space-y-3 text-muted">
            <p>
              WhatsApp:{" "}
              <a href={CONTACT.whatsapp} className="text-paper underline underline-offset-4">
                Chat export team
              </a>
            </p>
            <p>
              Email:{" "}
              <a href={CONTACT.email} className="text-paper underline underline-offset-4">
                {CONTACT.emailText}
              </a>
            </p>
            <p>Lokasi: {CONTACT.address}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
