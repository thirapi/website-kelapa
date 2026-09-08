export type TrackEvent =
  | "hero_cta_quote"
  | "hero_cta_explore"
  | "product_line_click"
  | "numbers_section_viewed"
  | "faq_item_open"
  | "quote_submit"
  | "quote_whatsapp_click"
  | "closing_cta_quote"
  | "footer_link_click"
  | "inquiry_add"
  | "inquiry_submit";

export function track(event: TrackEvent, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("ck:track", { detail: { event, data } }));
  if (process.env.NODE_ENV === "development") {
    console.debug("[track]", event, data ?? {});
  }
}
