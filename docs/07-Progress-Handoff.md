# 07 — Progress & Handoff (untuk model/AI penerus)

> Terakhir diperbarui: 2026-09-08. Fase 0–3 SELESAI, terverifikasi.
> Baca `00–06` dulu sebelum menyentuh kode. Kontrak di `04` + standar di `01-§5`, `06` mengikat.

## 1. Status fase

- [x] **Fase 0 — Fondasi.** Scaffold Next.js 16.3 + React 19 + Tailwind v4 + TS.
  Dep: `gsap`, `framer-motion`, `lenis`, `lucide-react`. Token `@theme` di
  `src/app/globals.css`. Provider Lenis + Inquiry cart (localStorage `ck-inquiry-cart`).
- [x] **Fase 1 — Statis.** Home 11 section + 8 route + 2 dinamis, semua markup.
  Form RFQ + cart state jalan (endpoint env → fallback WA prefill).
- [x] **Fase 2 — Motion ringan.** Reveal sekali via GSAP/ScrollTrigger pada section
  dan page header; counter Impact siap untuk metrik terverifikasi; FAQ accordion dan
  deck Portfolio memakai Framer Motion; marquee dapat dijeda. Reduced-motion dan
  varian offset mobile tersedia.
- [x] **Fase 3 — Signature.** Hero parallax responsif; timeline Process interaktif
  di Home dan route Process; rute Global animasi; progress navbar; footer reveal.
  GSAP menangani scroll, Framer menangani state, tanpa pin, dengan fallback reduced-motion.
- [ ] **Fase 4 — Integrasi & QA.** Endpoint RFQ riil, Maps, screenshot QA semua route ×
  viewport + checklist anti-slop (`06`).

## 2. Verifikasi terakhir (2026-09-08)

`npx tsc --noEmit` bersih · `npx eslint src/` bersih · diagnostik editor bersih ·
`npm run build` hijau (19 halaman, diverifikasi ulang setelah Fase 3) · smoke test
Fase 1: 9 URL → 200.
Perintah: `npm run dev` / `npm run build`.

## 3. Peta file (yang penting)

- `src/app/` — `layout.tsx` (font+metadata EN), `page.tsx` (11 section),
  `products/`, `products/[slug]/`, `story/`, `process/`, `impact/`,
  `journal/`, `journal/[slug]/`, `contact/` (client: tab tipe + FAQ).
- `src/components/` — `providers.tsx` · `layout/` (Navbar/Footer/Breadcrumb/PageHeader)
  · `ui/` (Section, Button, Accordion, Marquee, icons, Placeholder) · `motion/`
  (Reveal, Counter, DeckSlider, HeroParallax, ProcessTimeline, GlobalRoute,
  ScrollProgress) · `sections/` (11 file home) · `forms/RfqForm.tsx`
  · `inquiry/` (Provider + AddToInquiry) · `products/ProductCatalog.tsx`.
- `src/content/` — `site.ts`, `products.ts` (5 produk, 2 future), `articles.ts` (4),
  `metrics.ts` (semua `pending` → tampil "—/forthcoming").
- `src/lib/` — `cn.ts`, `analytics.ts` (11 event), `inquiry.ts` (WA + endpoint).
- Env opsional: `NEXT_PUBLIC_WA_NUMBER`, `NEXT_PUBLIC_RFQ_ENDPOINT` (tanpa ini → fallback WA).

## 4. Keputusan terkunci (jangan diubah tanpa user)

EN-only · nav 5-item + INQUIRE (Contact via CTA/footer) · B2B cart→RFQ bukan checkout ·
metrik pending tampil "forthcoming", tanpa angka karangan · media = Placeholder
berlabel sampai foto stakeholder tiba · radius hanya full/xl/2xl · ikon Lucide saja.

## 5. Diketahui belum beres (jangan dianggap bug)

- `Button.tsx` + `Portfolio.tsx` = client component (wajib — server→client function props
  merusak prerender; lihat riwayat build).
- Navbar auto-close-on-route dihapus (redundan — semua link sudah `close()`).
- Foto asli stakeholder, angka Impact, profil tim, spec PDF, harga/MOQ, sosmed,
  endpoint = materi stakeholder (`00-§4`). Backend Exantara = keputusan eksternal.

## 6. Library aset stock (SELESAI 2026-09-08)

- `public/assets/` — 22 WebP (~3.1 MB): `hero/` 3, `origin/` 2, `products/` 10,
  `process/` 7. Manifest + kredit: `public/assets/CREDITS.md`.
- Komponen MASIH render `Placeholder` — wiring `next/image` (`sizes`, lazy kecuali
  LCP, `priority` hero) adalah task berikutnya, cocok untuk model standar.
