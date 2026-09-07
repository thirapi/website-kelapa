// Manifest media terpusat — semua path di /public.
// Foto: Unsplash License (bebas pakai komersial). Kredit di bawah —
// ganti dengan foto asli lahan/pabrik saat tersedia (docs §6 open questions).

import type { ProductCategory } from "./products";

export const MEDIA = {
  hero: {
    // Poster = elemen LCP (priority). Video loop <15s menyusul (workflow §6).
    poster: "/assets/hero/plantation.webp",
    posterAlt: "Kebun kelapa nagari di tepi laut",
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
    { src: "/assets/sourcing/husking.webp", alt: "Husking coconut by hand", label: "Panen & kupas manual" },
    { src: "/assets/sourcing/palms.webp", alt: "Coconut palms against the sky", label: "Lahan kelapa" },
    { src: "/assets/sourcing/harvest.webp", alt: "Fresh harvested coconuts", label: "Hasil panen" },
    { src: "/assets/products/charcoal.webp", alt: "Charcoal embers close-up", label: "Karbonisasi" },
    { src: "/assets/products/briquettes.webp", alt: "Charcoal catching flame", label: "Uji bakar" },
    { src: "/assets/hero/plantation.webp", alt: "Coconut grove by the sea", label: "Siap kirim" },
  ],
} as const;

export const PHOTO_CREDITS = [
  { photo: "plantation", by: "Unsplash", url: "https://unsplash.com/photos/green-coconut-palm-trees-near-sea-during-daytime-Q-cVdEz9tC4" },
  { photo: "palms", by: "Alex Bunday", url: "https://unsplash.com/photos/coconut-trees-under-blue-sky-during-daytime-_MdUz-1Ofsg" },
  { photo: "embers", by: "Al Butler", url: "https://unsplash.com/photos/glowing-embers-and-charcoal-in-a-fire-pit-zN0semvwGPQ" },
  { photo: "flame", by: "Unsplash", url: "https://unsplash.com/photos/burning-charcoal-emits-flames-and-smoke-8UhjO_ow6pQ" },
  { photo: "husking", by: "Unsplash", url: "https://unsplash.com/photos/man-holding-coconut-shell-dBTw2Em6Nr0" },
  { photo: "harvest", by: "Unsplash", url: "https://unsplash.com/photos/heap-of-fresh-green-coconuts-piled-together-b9pis-g1F6g" },
] as const;

export function hasHeroVideo() {
  return Boolean(MEDIA.hero.videoMp4 || MEDIA.hero.videoWebm);
}
