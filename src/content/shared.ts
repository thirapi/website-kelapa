// docs/04-PRD-Other-Pages.md §1 About + §3 Process + §4 Contact (shared)
// Context: Pertamina Desa Energi Berdikari (DEB) program — Nagari Katapiang.
// Language: English-first.

export const PROCESS_STEPS = [
  { title: "Village Groves", desc: "Coconuts from managed groves & farmer partnerships." },
  { title: "Harvest & Sort", desc: "Raw material selection — only standard-grade enters." },
  { title: "Processing", desc: "Controlled carbonization / drying per product type." },
  { title: "QC", desc: "Moisture, ash, size, and purity tested per batch." },
  { title: "Packing", desc: "Jute bags, cartons, inners — matched to buyer spec." },
  { title: "Delivery", desc: "Packing, documents, shipment to buyers." },
] as const;

export const NUMBERS = [
  { value: 120, suffix: "+", label: "Tons/month charcoal" },
  { value: 200, suffix: "+", label: "Tons/month copra" },
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 12, suffix: "", label: "Partners & market regions" },
] as const;

export const CERTIFICATIONS = [
  "Village business permits",
  "QC documentation per batch",
  "Food-grade handling",
  "Traceable origin",
] as const;

export const FAQS = [
  {
    q: "What is the minimum order (MOQ)?",
    a: "From 1 × 20ft container for charcoal/briquettes, 25 tons for copra. Small samples can be discussed.",
  },
  {
    q: "What is the production & delivery lead time?",
    a: "14–28 days depending on product & volume. Exact schedule confirmed with your RFQ.",
  },
  {
    q: "Is every shipment documented to spec?",
    a: "Yes — QC per batch (moisture, ash, size, purity) plus full documents.",
  },
  {
    q: "How about packaging & private label?",
    a: "Jute bags, cartons, custom inners. Private label available for volume contracts.",
  },
  {
    q: "How do I request a quotation?",
    a: "Fill the Request Quote form or chat on WhatsApp — our team follows up with a proforma.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Consistent supply, clean documents. A partner you can hold to.",
    name: "BBQ Distributor",
    origin: "Jakarta",
  },
  {
    quote: "Stable briquettes, low ash. Repeat orders every month.",
    name: "Shisha Brand",
    origin: "Surabaya",
  },
  {
    quote: "Clean copra, great oil yield.",
    name: "Coconut Oil Mill",
    origin: "Medan",
  },
] as const;

export const INDUSTRIES = [
  { name: "Shisha / Hookah", product: "Hexagon briquettes · low ash" },
  { name: "BBQ & Grill", product: "Lump charcoal · long burn" },
  { name: "Industrial", product: "Bulk charcoal · custom spec" },
  { name: "Food / Coconut Oil", product: "Dried copra · high yield" },
  { name: "HoReCa", product: "Pillow briquettes · retail packing" },
] as const;

export const JOURNEY = [
  { year: "2015", title: "First farmer partnerships", desc: "Initial grove network formed." },
  { year: "2018", title: "Carbonization capacity up", desc: "Investment in kilns & drying." },
  { year: "2021", title: "Regular supply", desc: "Inter-island distributor contracts." },
  { year: "2024", title: "Fully documented QC", desc: "Batch testing + traceability." },
] as const;

export const VALUES = [
  { icon: "repeat", title: "Consistency", desc: "Predictable shipments — batch after batch." },
  { icon: "shield", title: "Integrity", desc: "Spec matches documents. Nothing hidden." },
  { icon: "recycle", title: "Sustainability", desc: "Harvest waste turned into energy — not trash." },
  { icon: "badge", title: "Quality", desc: "Tested every batch: moisture, ash, size, purity." },
  { icon: "handshake", title: "Partnership", desc: "Growing with buyers and village farmers." },
] as const;
