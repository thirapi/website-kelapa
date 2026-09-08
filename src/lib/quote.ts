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
  if (p.name.trim().length < 2) errors.name = "Enter your full name (min. 2 characters).";
  if (!EMAIL_RE.test(p.email.trim())) errors.email = "Email address is invalid.";
  if (p.whatsapp.trim() && !PHONE_RE.test(p.whatsapp.trim()))
    errors.whatsapp = "WhatsApp number is invalid.";
  if (!p.whatsapp.trim() && !p.company.trim())
    errors.whatsapp = "Fill WhatsApp or Company so we can reach you.";
  return errors;
}

export function productName(slug: string): string {
  return PRODUCTS.find((p) => p.slug === slug)?.name ?? slug;
}

// Pesan WA otomatis dari payload — sales/tim nagari follow-up off-platform.
export function buildWhatsAppUrl(p: QuotePayload): string {
  const lines = [
    "Hello COCO KATAPIANG, I would like to request a quotation:",
    `• Name: ${p.name || "-"}`,
    `• Company: ${p.company || "-"}`,
    `• Email: ${p.email || "-"}`,
    `• Product: ${p.product ? productName(p.product) : "-"}`,
    `• Volume: ${p.volume || "-"}`,
    `• Destination country: ${p.country || "-"}`,
    `• Lead time: ${p.leadTime || "-"}`,
    p.message ? `• Notes: ${p.message}` : null,
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
    body: JSON.stringify({ ...p, source: "coco-katapiang-web" }),
  });
  if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
  return { ok: true, demo: false };
}
