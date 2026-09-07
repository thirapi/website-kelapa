import { CONTACT } from "@/content/site";
import { PRODUCTS } from "@/content/products";

export type QuotePayload = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  product: string;
  volume: string;
  country: string;
  leadTime: string;
  message: string;
};

export const EMPTY_QUOTE: QuotePayload = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  product: "",
  volume: "",
  country: "",
  leadTime: "",
  message: "",
};

export type QuoteErrors = Partial<Record<keyof QuotePayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-\s\d]{8,20}$/;

export function validateQuote(p: QuotePayload): QuoteErrors {
  const errors: QuoteErrors = {};
  if (p.name.trim().length < 2) errors.name = "Isi nama lengkap (min. 2 karakter).";
  if (!EMAIL_RE.test(p.email.trim())) errors.email = "Alamat email tidak valid.";
  if (p.whatsapp.trim() && !PHONE_RE.test(p.whatsapp.trim()))
    errors.whatsapp = "Nomor WhatsApp tidak valid.";
  if (!p.whatsapp.trim() && !p.company.trim())
    errors.whatsapp = "Isi WhatsApp atau Perusahaan agar bisa dihubungi.";
  return errors;
}

export function productName(slug: string): string {
  return PRODUCTS.find((p) => p.slug === slug)?.name ?? slug;
}

// Pesan WA otomatis dari payload — 04-PRD: sales follow-up off-platform.
export function buildWhatsAppUrl(p: QuotePayload): string {
  const lines = [
    "Halo Hancoco, saya ingin meminta penawaran:",
    `• Nama: ${p.name || "-"}`,
    `• Perusahaan: ${p.company || "-"}`,
    `• Email: ${p.email || "-"}`,
    `• Produk: ${p.product ? productName(p.product) : "-"}`,
    `• Volume: ${p.volume || "-"}`,
    `• Negara tujuan: ${p.country || "-"}`,
    `• Lead time: ${p.leadTime || "-"}`,
    p.message ? `• Catatan: ${p.message}` : null,
  ].filter(Boolean);
  const base = CONTACT.whatsapp.split("?")[0];
  return `${base}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// Submit ke endpoint bila dikonfigurasi (Fase 4: email/webhook/CRM milik stakeholder).
// Tanpa endpoint: resolve lokal setelah jeda (mode demo) — diganti saat integrasi nyata.
export async function submitQuote(p: QuotePayload): Promise<{ ok: boolean; demo: boolean }> {
  const endpoint = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT;
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 900));
    return { ok: true, demo: true };
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...p, source: "hancoco-web" }),
  });
  if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
  return { ok: true, demo: false };
}
