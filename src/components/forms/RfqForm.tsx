"use client";

import { useState } from "react";
import { PRODUCTS } from "@/content/products";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { buildWhatsAppLink, submitRfq, type RfqPayload } from "@/lib/inquiry";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const inputCls =
  "h-11 w-full rounded-xl border border-line bg-surface px-4 text-sm text-ink placeholder:text-muted/70 transition-[border-color] duration-200 hover:border-brand/40 focus:border-brand focus:outline-none";

type Status = "idle" | "sending" | "sent" | "error";

export function RfqForm({
  fixedProduct,
  inquiryType = "buyer",
  compact = false,
}: {
  fixedProduct?: string;
  inquiryType?: RfqPayload["inquiryType"];
  compact?: boolean;
}) {
  const { lines, clear } = useInquiry();
  const [status, setStatus] = useState<Status>("idle");
  const [waLink, setWaLink] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload: RfqPayload = {
      items:
        lines.length > 0
          ? lines
          : [{ product: String(fd.get("product") ?? fixedProduct ?? "General inquiry"), quantity: "On request" }],
      specification: String(fd.get("specification") ?? ""),
      packaging: String(fd.get("packaging") ?? ""),
      destination: String(fd.get("destination") ?? ""),
      deliveryDate: String(fd.get("deliveryDate") ?? ""),
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      whatsapp: String(fd.get("whatsapp") ?? ""),
      inquiryType,
    };
    const ok = await submitRfq(payload);
    if (ok) {
      setStatus("sent");
      track("quote_submit", { type: inquiryType });
      clear();
    } else {
      setWaLink(buildWhatsAppLink(payload));
      setStatus(ok ? "sent" : "error");
      if (!ok) setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-palm/30 bg-palm/10 p-6 text-sm" role="status">
        <p className="font-bold text-palm">Inquiry received.</p>
        <p className="mt-1 text-ink/80">
          Our team will respond within 1–2 business days. For urgent volumes, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-3", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
      {!fixedProduct && lines.length === 0 && (
        <select name="product" required aria-label="Product" className={cn(inputCls, "sm:col-span-2")} defaultValue="">
          <option value="" disabled>Select product</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.name}>{p.name}</option>
          ))}
        </select>
      )}
      {(fixedProduct || lines.length > 0) && (
        <p className="rounded-xl bg-surface-alt px-4 py-3 text-sm font-medium sm:col-span-2">
          {fixedProduct ?? `${lines.length} product${lines.length > 1 ? "s" : ""} in your inquiry list`}
        </p>
      )}
      <input name="name" required placeholder="Full name" autoComplete="name" className={inputCls} aria-label="Full name" />
      <input name="company" required placeholder="Company" autoComplete="organization" className={inputCls} aria-label="Company" />
      <input name="email" required type="email" placeholder="Business email" autoComplete="email" className={inputCls} aria-label="Business email" />
      <input name="whatsapp" required placeholder="WhatsApp number" autoComplete="tel" className={inputCls} aria-label="WhatsApp number" />
      {!compact && (
        <>
          <input name="specification" placeholder="Specification (grade, size…)" className={inputCls} aria-label="Specification" />
          <input name="packaging" placeholder="Packaging preference" className={inputCls} aria-label="Packaging" />
          <input name="destination" placeholder="Destination port / country" className={inputCls} aria-label="Destination" />
          <input name="deliveryDate" placeholder="Target delivery date" className={inputCls} aria-label="Target delivery date" />
        </>
      )}
      <p aria-live="polite" className="min-h-5 text-sm sm:col-span-2">
        {status === "error" && waLink && (
          <span>
            Online submit is unavailable —{" "}
            <a href={waLink} target="_blank" rel="noreferrer" className="font-semibold text-brand underline underline-offset-4" onClick={() => track("quote_whatsapp_click")}>
              continue via WhatsApp
            </a>
            .
          </span>
        )}
      </p>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream transition-[background-color,transform,box-shadow] duration-200 hover:bg-brand-deep hover:shadow-lg hover:shadow-brand/25 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Request a Quotation"}
        </button>
      </div>
    </form>
  );
}
