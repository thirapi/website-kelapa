"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { track } from "@/lib/analytics";
import {
  EMPTY_QUOTE,
  buildWhatsAppUrl,
  productName,
  submitQuote,
  validateQuote,
  type QuoteErrors,
  type QuotePayload,
} from "@/lib/quote";

const SHORT_FIELDS: (keyof QuotePayload)[] = ["name", "email", "whatsapp", "volume", "message"];
const FULL_FIELDS: (keyof QuotePayload)[] = [
  "name",
  "company",
  "email",
  "whatsapp",
  "product",
  "volume",
  "country",
  "leadTime",
  "message",
];

const LABELS: Record<keyof QuotePayload, string> = {
  name: "Nama*",
  company: "Perusahaan",
  email: "Email*",
  whatsapp: "WhatsApp",
  product: "Produk interest",
  volume: "Volume / kontainer",
  country: "Negara tujuan",
  leadTime: "Lead time target",
  message: "Deskripsi kebutuhan",
};

function QuoteFormInner({ variant }: { variant: "short" | "full" }) {
  const params = useSearchParams();
  const prefill = params.get("product") ?? "";
  const [form, setForm] = useState<QuotePayload>({ ...EMPTY_QUOTE, product: prefill });
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [demo, setDemo] = useState(false);

  const fields = variant === "short" ? SHORT_FIELDS : FULL_FIELDS;

  const set = (k: keyof QuotePayload, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateQuote(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("submitting");
    try {
      const res = await submitQuote(form);
      setDemo(res.demo);
      setStatus("success");
      track("quote_submit", { variant, product: form.product || "general" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-ember/40 bg-surface p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-ember" />
        <h3 className="font-display mt-4 text-2xl font-bold">Permintaan terkirim.</h3>
        <p className="mt-2 text-sm text-muted">
          {demo
            ? "Mode demo — endpoint tim nagari belum dikonfigurasi. Lanjutkan via WhatsApp agar langsung diproses."
            : "Tim nagari akan menghubungi Anda via email/WhatsApp."}
          {form.product && (
            <>
              {" "}Produk: <span className="text-paper">{productName(form.product)}</span>
            </>
          )}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={buildWhatsAppUrl(form)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("quote_whatsapp_click", { source: "form-success" })}
            className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-base"
          >
            Lanjut via WhatsApp
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setForm({ ...EMPTY_QUOTE, product: prefill });
            }}
            className="rounded-full border border-paper/25 px-6 py-3 text-sm font-semibold hover:border-paper/50"
          >
            Kirim lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`grid gap-4 rounded-2xl border border-paper/15 bg-surface p-7 ${
        variant === "full" ? "md:grid-cols-2" : ""
      }`}
    >
      {fields.map((k) => {
        const err = errors[k];
        const id = `quote-${k}`;
        if (k === "product") {
          return (
            <label key={k} htmlFor={id} className="block text-sm">
              {LABELS[k]}
              <select
                id={id}
                value={form.product}
                onChange={(e) => set("product", e.target.value)}
                className="mt-1 w-full rounded-lg border border-paper/15 bg-base px-4 py-3 text-paper"
              >
                <option value="">Umum / belum tahu</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
          );
        }
        if (k === "message") {
          return (
            <label
              key={k}
              htmlFor={id}
              className={`block text-sm ${variant === "full" ? "md:col-span-2" : ""}`}
            >
              {LABELS[k]}
              <textarea
                id={id}
                rows={4}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Spec, packaging, jadwal kirim…"
                className="mt-1 min-h-24 w-full resize-y rounded-lg border border-paper/15 bg-base px-4 py-3 placeholder:text-muted"
              />
            </label>
          );
        }
        return (
          <label key={k} htmlFor={id} className="block text-sm">
            {LABELS[k]}
            <input
              id={id}
              value={form[k]}
              onChange={(e) => set(k, e.target.value)}
              placeholder={LABELS[k].replace("*", "")}
              aria-invalid={Boolean(err)}
              aria-describedby={`${id}-error`}
              className={`mt-1 w-full rounded-lg border bg-base px-4 py-3 placeholder:text-muted ${
                err ? "border-red-600" : "border-paper/15"
              }`}
            />
            <span
              id={`${id}-error`}
              role={err ? "alert" : undefined}
              className={`mt-1 block min-h-[1.25rem] text-xs text-red-700 ${err ? "" : "invisible"}`}
            >
              {err ?? ""}
            </span>
          </label>
        );
      })}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700 md:col-span-2">
          Gagal mengirim. Coba lagi atau hubungi langsung via WhatsApp.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold whitespace-nowrap text-base outline-none transition-[background-color,opacity] focus-visible:ring-2 focus-visible:ring-paper disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
      >
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? "Mengirim…" : variant === "short" ? "Kirim Request Quote" : "Submit RFQ"}
      </button>
    </form>
  );
}

// useSearchParams wajib di dalam Suspense (Next.js).
export function QuoteForm({ variant = "short" }: { variant?: "short" | "full" }) {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-paper/15 bg-surface p-7 text-sm text-muted">
          Memuat form…
        </div>
      }
    >
      <QuoteFormInner variant={variant} />
    </Suspense>
  );
}
