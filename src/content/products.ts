// CMS-ready catalog — docs/05-PRD-Ecommerce.md §2.1 + 04 §2 (English-first)

export type ProductCategory = "charcoal" | "briquettes" | "copra";
export type ProductStatus = "available" | "pre-order" | "on-request";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDesc: string;
  specs: { label: string; value: string }[];
  packing: string;
  moq: string;
  price: string;
  status: ProductStatus;
  leadTime: string;
  capability: string;
  flagship: boolean;
};

export const CATEGORIES = [
  {
    id: "charcoal",
    name: "Coconut Shell Charcoal",
    desc: "Raw lump charcoal for BBQ, industry, and high-volume needs.",
  },
  {
    id: "briquettes",
    name: "Coconut Charcoal Briquettes",
    desc: "Hexagon/pillow briquettes for shisha, retail BBQ, and HoReCa.",
  },
  {
    id: "copra",
    name: "Copra",
    desc: "Dried coconut (smoke/sun-dried) for oil mills & food processing.",
  },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "coconut-shell-charcoal-lump",
    name: "Coconut Shell Charcoal — Lump",
    category: "charcoal",
    shortDesc: "Raw lump charcoal, high caloric value, for BBQ & industry.",
    specs: [
      { label: "Moisture", value: "≤ 8%" },
      { label: "Ash content", value: "≤ 3%" },
      { label: "Size", value: "40–120 mm, screened" },
      { label: "Caloric value", value: "≥ 6,500 kcal/kg" },
    ],
    packing: "15 kg bag / 20ft container",
    moq: "1 × 20ft container",
    price: "on request",
    status: "available",
    leadTime: "14–21 days",
    capability: "120 tons/month",
    flagship: true,
  },
  {
    id: "p2",
    slug: "coconut-charcoal-briquettes-hexagon",
    name: "Coconut Charcoal Briquettes — Hexagon",
    category: "briquettes",
    shortDesc: "Hexagon briquettes, long burn, low ash — for shisha & BBQ.",
    specs: [
      { label: "Moisture", value: "≤ 6%" },
      { label: "Ash content", value: "≤ 2.5%" },
      { label: "Burn time", value: "2–2.5 hours" },
      { label: "Shape", value: "Hexagon, pillow (custom)" },
    ],
    packing: "1 kg / 10 kg inner + master carton",
    moq: "1 × 20ft container",
    price: "on request",
    status: "available",
    leadTime: "21–28 days",
    capability: "80 tons/month",
    flagship: true,
  },
  {
    id: "p3",
    slug: "copra-smoke-dried",
    name: "Copra — Smoke Dried",
    category: "copra",
    shortDesc: "Dried coconut for coconut oil mills & food processing.",
    specs: [
      { label: "Moisture", value: "≤ 7%" },
      { label: "Purity", value: "Hand-sorted, low mould" },
      { label: "Cut", value: "Cup / half-cut" },
      { label: "Oil yield", value: "62–65%" },
    ],
    packing: "50 kg jute bag / bulk container",
    moq: "25 tons",
    price: "on request",
    status: "on-request",
    leadTime: "14 days",
    capability: "200 tons/month",
    flagship: false,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
