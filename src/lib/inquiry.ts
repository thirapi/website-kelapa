export interface RfqItem {
  product: string;
  quantity: string;
}

export interface RfqPayload extends Record<string, unknown> {
  items: RfqItem[];
  specification: string;
  packaging: string;
  destination: string;
  deliveryDate: string;
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  inquiryType: "buyer" | "supplier" | "partner" | "general";
}

export function buildWhatsAppLink(payload: RfqPayload): string {
  const number = process.env.NEXT_PUBLIC_WA_NUMBER ?? "6280000000000";
  const lines = [
    "New inquiry: COCO KATAPIANG",
    `Type: ${payload.inquiryType}`,
    `Name: ${payload.name} (${payload.company})`,
    `Email: ${payload.email}`,
    ...payload.items.map((i) => `• ${i.product}: ${i.quantity}`),
    payload.specification ? `Spec: ${payload.specification}` : "",
    payload.packaging ? `Packaging: ${payload.packaging}` : "",
    payload.destination ? `Destination: ${payload.destination}` : "",
    payload.deliveryDate ? `Delivery: ${payload.deliveryDate}` : "",
  ].filter(Boolean);
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export async function submitRfq(payload: RfqPayload): Promise<boolean> {
  const endpoint = process.env.NEXT_PUBLIC_RFQ_ENDPOINT;
  if (!endpoint) return false;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
