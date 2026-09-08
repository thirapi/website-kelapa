// Manifest media terpusat — semua path di /public.
// Foto: Unsplash + Pexels License (bebas pakai komersial). Kredit di bawah —
// ganti dengan foto asli nagari saat tersedia (docs/09-Shot-List-Foto.md).

import type { ProductCategory } from "./products";

export const MEDIA = {
  hero: {
    // Poster = elemen LCP (priority). Video loop <15s menyusul (workflow §6).
    poster: "/assets/hero/plantation.webp",
    posterAlt: "Village coconut grove by the sea",
    videoWebm: "",
    videoMp4: "",
  },
  closing: {
    image: "/assets/hero/embers.webp",
    alt: "Glowing coconut shell charcoal embers",
  },
  products: {
    charcoal: "/assets/products/charcoal.webp",
    briquettes: "/assets/products/briquettes.webp",
    copra: "/assets/products/copra.webp",
  } as Record<ProductCategory, string>,
  sourcing: [
    { src: "/assets/sourcing/husking.webp", alt: "Husking coconut by hand", label: "Hand harvest & husking" },
    { src: "/assets/sourcing/palms.webp", alt: "Coconut palms against the sky", label: "Coconut groves" },
    { src: "/assets/sourcing/harvest.webp", alt: "Fresh harvested coconuts", label: "Fresh harvest" },
    { src: "/assets/sourcing/kiln.webp", alt: "Traditional charcoal kiln with worker", label: "Carbonization kiln" },
    { src: "/assets/products/copra.webp", alt: "Halved coconuts ready for drying", label: "Split copra" },
    { src: "/assets/sourcing/still.webp", alt: "Whole and halved coconut still life", label: "Selected raw material" },
    { src: "/assets/sourcing/tree.webp", alt: "Coconut tree heavy with fruit", label: "Coconut palms" },
    { src: "/assets/sourcing/grove.webp", alt: "Lush coconut grove", label: "Village groves" },
    { src: "/assets/sourcing/banten.webp", alt: "Farmer peeling coconuts in the field", label: "Farmer at work" },
  ],
} as const;

export const PHOTO_CREDITS = [
  { photo: "plantation", by: "Unsplash", url: "https://unsplash.com/photos/green-coconut-palm-trees-near-sea-during-daytime-Q-cVdEz9tC4" },
  { photo: "palms", by: "Alex Bunday", url: "https://unsplash.com/photos/coconut-trees-under-blue-sky-during-daytime-_MdUz-1Ofsg" },
  { photo: "embers", by: "Al Butler", url: "https://unsplash.com/photos/glowing-embers-and-charcoal-in-a-fire-pit-zN0semvwGPQ" },
  { photo: "flame", by: "Unsplash", url: "https://unsplash.com/photos/burning-charcoal-emits-flames-and-smoke-8UhjO_ow6pQ" },
  { photo: "husking", by: "Unsplash", url: "https://unsplash.com/photos/man-holding-coconut-shell-dBTw2Em6Nr0" },
  { photo: "harvest", by: "Unsplash", url: "https://unsplash.com/photos/heap-of-fresh-green-coconuts-piled-together-b9pis-g1F6g" },
  { photo: "kiln", by: "Pexels", url: "https://www.pexels.com/photo/worker-arranging-firewood-in-traditional-charcoal-kiln-37140017/" },
  { photo: "halves", by: "Pexels", url: "https://www.pexels.com/photo/close-up-of-coconuts-halves-11865861/" },
  { photo: "still", by: "Pexels", url: "https://www.pexels.com/photo/rustic-still-life-with-whole-and-half-coconut-29415944/" },
  { photo: "tree", by: "Humphrey M", url: "https://unsplash.com/photos/a-coconut-tree-is-full-of-green-coconuts-30pbE4rxKUc" },
  { photo: "grove", by: "Pexels", url: "https://www.pexels.com/photo/green-coconut-trees-on-the-field-9470500/" },
  { photo: "banten", by: "Pexels", url: "https://www.pexels.com/photo/coconut-harvesting-in-banten-indonesia-37579030/" },
] as const;

export function hasHeroVideo() {
  return Boolean(MEDIA.hero.videoMp4 || MEDIA.hero.videoWebm);
}
