import type { AssetKey } from "@/content/assets";

export type ProductCategory = "copra" | "charcoal" | "oil" | "future";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  shortDesc: string;
  image: AssetKey;
  gallery: AssetKey[];
  specs: { label: string; value: string }[];
  packingOptions: string[];
  moq: string;
  price: string | null;
  availability: "In stock" | "Made to order" | "Coming soon";
  flagship?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: "copra",
    name: "Copra",
    tagline: "Sun-dried coconut kernels, graded for oil milling.",
    category: "copra",
    shortDesc:
      "Premium sun-dried copra from selected Katapiang coconuts, consistent moisture, clean cut, ready for milling.",
    image: "copra-split",
    gallery: ["copra-split", "copra-hands", "copra-table", "grove-fruit"],
    specs: [
      { label: "Moisture", value: "≤ 7%" },
      { label: "Oil content", value: "≥ 62%" },
      { label: "Cut", value: "Whole / halves" },
      { label: "Packaging", value: "50 kg PP bags" },
      { label: "Origin", value: "Katapiang, West Sumatra" },
    ],
    packingOptions: ["Bulk 50 kg PP bags", "Custom buyer bags"],
    moq: "1 × 20ft container",
    price: null,
    availability: "In stock",
    flagship: true,
  },
  {
    slug: "coconut-shell-charcoal",
    name: "Coconut Shell Charcoal",
    tagline: "High fixed-carbon charcoal from mature shells.",
    category: "charcoal",
    shortDesc:
      "Dense, long-burning charcoal carbonized from mature coconut shells: the raw material for premium briquettes and activated carbon.",
    image: "charcoal-fire",
    gallery: ["charcoal-fire", "embers-close", "shell-texture", "kiln-embers"],
    specs: [
      { label: "Fixed carbon", value: "≥ 75%" },
      { label: "Ash content", value: "≤ 3%" },
      { label: "Moisture", value: "≤ 8%" },
      { label: "Size", value: "Lump, graded" },
      { label: "Origin", value: "Katapiang, West Sumatra" },
    ],
    packingOptions: ["Bulk 25 kg bags", "Jumbo bags"],
    moq: "1 × 20ft container",
    price: null,
    availability: "In stock",
  },
  {
    slug: "briquettes",
    name: "Coconut Briquettes",
    tagline: "Smokeless, long-burning fuel for shisha & BBQ.",
    category: "charcoal",
    shortDesc:
      "Odorless, smokeless briquettes pressed from shell charcoal, steady heat for shisha lounges, grills and food industry.",
    image: "briquettes-grill",
    gallery: ["briquettes-grill", "charcoal-dark", "embers-close", "sacks-pile"],
    specs: [
      { label: "Fixed carbon", value: "≥ 80%" },
      { label: "Ash content", value: "≤ 2.5%" },
      { label: "Burn time", value: "≥ 2 hours" },
      { label: "Shapes", value: "Cube, finger, hexagonal" },
      { label: "Origin", value: "Katapiang, West Sumatra" },
    ],
    packingOptions: ["1 kg inner boxes", "10/20 kg master cartons", "Private label"],
    moq: "1 × 20ft container",
    price: null,
    availability: "Made to order",
    flagship: true,
  },
  {
    slug: "coconut-oil",
    name: "Coconut Oil",
    tagline: "RBD coconut oil for food & industrial use.",
    category: "oil",
    shortDesc:
      "Refined coconut oil milled from our own copra. Food-grade and industrial grades in bulk packaging.",
    image: "oil-bottle",
    gallery: ["oil-bottle", "copra-split", "grove-fruit"],
    specs: [
      { label: "Grade", value: "RBD, food & industrial" },
      { label: "Packaging", value: "Jerry cans, drums, flexitank" },
      { label: "Origin", value: "Katapiang, West Sumatra" },
    ],
    packingOptions: ["19 L jerry cans", "200 L drums", "Flexitank"],
    moq: "On request",
    price: null,
    availability: "Coming soon",
  },
  {
    slug: "virgin-coconut-oil",
    name: "Virgin Coconut Oil",
    tagline: "Cold-pressed VCO for wellness & cosmetics.",
    category: "future",
    shortDesc:
      "Cold-pressed virgin coconut oil from fresh kernels, in development for wellness, food and cosmetics buyers.",
    image: "vco-bottle",
    gallery: ["vco-bottle", "oil-bottle", "copra-hands", "grove-fruit"],
    specs: [
      { label: "Method", value: "Cold-pressed" },
      { label: "Packaging", value: "TBD" },
      { label: "Origin", value: "Katapiang, West Sumatra" },
    ],
    packingOptions: ["TBD"],
    moq: "On request",
    price: null,
    availability: "Coming soon",
  },
];

export const PRODUCT_FILTERS = [
  { value: "all", label: "All" },
  { value: "copra", label: "Copra" },
  { value: "charcoal", label: "Charcoal" },
  { value: "oil", label: "Oil" },
  { value: "future", label: "Future" },
] as const;

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
