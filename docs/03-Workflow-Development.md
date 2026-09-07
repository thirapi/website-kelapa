# Workflow Development — Hancoco
## Next.js + TypeScript

**Versi:** 1.0
**Dokumen terkait:** `01-PRD-Landing-Page.md`, `02-PRD-Design-System.md`, `04-PRD-Other-Pages.md`, `05-PRD-Ecommerce.md`

> Baseline teknis & pattern diambil dari skill `cinematic-web-motion` (foundation files di `references/`). Dokumen ini menetapkan aturan pengembangan project Hancoco.

---

## 1. Tech Stack & Alasan

| Tools | Peran |
|---|---|
| **Next.js (App Router) + TypeScript** | SSR/SSG untuk SEO global & performa, routing, type-safety |
| **Tailwind CSS (v4)** | Utility styling, design token (warna/spacing) via `@theme` di globals.css |
| **GSAP + ScrollTrigger** (+ useGSAP) | Animasi scroll-linked: pin, scrub, parallax, rundown, ember wipe |
| **Lenis** | Smooth-scroll, dasar scroll-linked animation halus lintas device |
| **Framer Motion** | State-triggered: hover/tap/drag/mount-unmount (accordion, drawer, deck) |
| **Lucide React** | Ikon |

---

## 2. Aturan Pembagian Kerja Antar-Library (Penting)

> **GSAP + ScrollTrigger** = animasi yang posisinya terkunci ke scroll (pin, scrub, parallax, split-text reveal, rundown, curtain/ember wipe).
>
> **Framer Motion** = animasi yang dipicu state React (hover, tap, drag, mount/unmount, accordion, modal, magnetic button, cursor).
>
> **Tidak pernah** dua library mengontrol properti CSS sama pada elemen sama secara bersamaan.

### 2.1 Integrasi Lenis + GSAP ScrollTrigger
```ts
// lib/smooth-scroll.ts
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll() {
  const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}
```
- Dipanggil sekali (client `SmoothScrollProvider`), cleanup `lenis.destroy()`.
- `ScrollTrigger.refresh()` setelah perubahan tinggi konten dinamis (accordion).
- `ScrollTrigger.config({ ignoreMobileResize: true })` untuk section pin.

### 2.2 Pola Cleanup GSAP di React
Wajib `gsap.context()` per section (StrictMode-safe):
```ts
useEffect(() => {
  const ctx = gsap.context(() => { /* tweens & triggers */ }, sectionRef);
  return () => ctx.revert();
}, []);
```
Atau gunakan hook `useGSAP` dari `@gsap/react` dengan `scope` + `dependencies`.

---

## 3. Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # root layout + provider (Lenis, Cursor)
│   ├── page.tsx            # homepage
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── process/page.tsx
│   ├── contact/page.tsx
│   └── (e-commerce, lihat 05)
├── components/
│   ├── sections/           # 1 file per section homepage
│   ├── ui/                 # Button, Accordion, Marquee, Counter, FadeMaskImage
│   ├── motion/             # CustomCursor, SmoothScrollProvider, EmberWipe, Rundown
│   └── layout/             # Navbar, Footer, AnnouncementBar
├── lib/
│   ├── gsap.ts             # registerPlugin sekali + eases + utils
│   ├── smooth-scroll.ts
│   ├── split-text.ts
│   └── analytics.ts
├── content/                # copy & data (TS const), CMS-ready
│   ├── homepage.ts
│   ├── products.ts
│   └── ...
├── hooks/
│   ├── useLenis.ts
│   ├── useReducedMotion.ts
│   └── useMagneticHover.ts
└── styles/globals.css      # Tailwind + custom tokens (warna, easing)
```

---

## 4. Arsitektur Komponen Motion Inti

| Komponen | Library | Catatan |
|---|---|---|
| `SmoothScrollProvider` | Lenis + GSAP | wrap layout.tsx |
| `CustomCursor` ("Ember Glow") | Framer Motion spring | nonaktif touch/reduced |
| `EmberWipe` (Curtain Reveal) | GSAP `clip-path` scrub | 3–4 boundary |
| `RundownProcess` | GSAP scrub progress | signature — reuse lintas halaman |
| `SplitScroll` (Quality/Product) | GSAP scrub crossfade | visual kanan sticky |
| `BentoGrid` (Why) | Framer stagger / GSAP | asimetris |
| `MasonryGallery` (Sourcing) | GSAP parallax multi-layer | fallback mobile 1 layer |
| `DeckSlider` (Testimonial) | Framer drag/AnimatePresence | tidak scroll-linked |
| `Accordion` (FAQ) | Framer AnimatePresence | auto-height |
| `Marquee` (Trusted/Compliance) | CSS/GSAP infinite | hover-slow |
| `Counter` (Numbers) | GSAP onEnter sekali | tabular-nums |
| `FadeMaskImage` | CSS mask-image murni | reusable, lihat §4.1 |

### 4.1 `FadeMaskImage` (reusable, murni CSS)
```tsx
// components/ui/FadeMaskImage.tsx
import Image from "next/image";
type Props = { src; alt; variant?: "linear"|"radial"; className? };
export function FadeMaskImage({ src, alt, variant = "linear", className = "" }: Props) {
  const maskClass =
    variant === "linear"
      ? "[mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]"
      : "[mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]";
  return (
    <div className={`relative overflow-hidden ${maskClass} ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
```
- `linear` untuk full-bleed hero; `radial` untuk foto tunggal.
- Tambah varian `FadeMaskVideo` bila perlu (background video).
- Untuk parallax, bungkus dalam client wrapper; komponen sendiri tetap pasif.
- Safari butuh prefix `-webkit-mask-image` — pastikan autoprefixer aktif.

---

## 5. Fase Pengembangan

### Fase 0 — Setup & Fondasi
- Init Next.js + TS + Tailwind; konfigurasi design token (§4 Design System).
- Font via `next/font` (`display: swap`).
- Lenis + GSAP ticker (§2.1); `lib/gsap.ts` register plugin + eases sekali.
- Layout dasar: Navbar (transparent→solid), Footer, AnnouncementBar.
- Analytics helper.

### Fase 1 — Static Section Build (mobile-first, tanpa motion)
- Bangun semua section per `01-PRD-Landing-Page`, fully responsive, tanpa animasi.
- Pastikan struktur & layout non-generik (§3 Design System) benar secara statis.
- Data dari `content/*.ts`, bukan hardcode di komponen.

### Fase 2 — Motion Layer Pass 1 (reveal dasar)
- Entrance/scroll-reveal ringan (fade+translateY, stagger) ke section non-interactive: Numbers, Compliance, Why, Market, FAQ, Contact, Footer.
- `useReducedMotion` guard di semua animasi.

### Fase 3 — Signature Interactions (motion berat)
- `CustomCursor` (Ember Glow) — global.
- `RundownProcess` — Process section.
- `SplitScroll` — Quality.
- `BentoGrid` — Why.
- `MasonryGallery` — Sourcing.
- `DeckSlider` — Testimonial.
- `EmberWipe` — 3–4 boundary.
- QA motion fatigue (≤3–4 berat).

### Fase 4 — Data, Form & Integrasi
- Wiring Contact/Request Quote form (validasi, submit handler, email/webhook/CRM).
- WhatsApp deep-link, Maps embed.
- Wiring data dinamis (Numbers, Products, Testimonials, FAQ) ke sumber final (CMS/JSON/API).

### Fase 5 — QA & Optimisasi
- Audit performa (§6). Cross-browser (terutama Safari iOS untuk video & backdrop-filter).
- Accessibility: keyboard nav, aria-label kontol custom, cursor `aria-hidden`.
- Test `prefers-reduced-motion` di semua motion berat.

### Fase 6 — Deployment
- Deploy Vercel; env vars (form endpoint, analytics, maps key).
- Domain, sitemap.xml, robots.txt, Open Graph.
- Monitoring: Vercel Analytics + error tracking.

*(Fase 0 hanya sekali; halaman lain reuse komponen - lihat §9 & PRD 04/05.)*

---

## 6. Performance Budget

| Area | Target/Aksi |
|---|---|
| Hero video | H.264 MP4 + WebM, max 1080p, loop <15s, poster wajib (LCP), `preload="none"` play via JS |
| CTA video | lazy-load, deteksi saat mendekati viewport |
| Gambar | `next/image`, WebP/AVIF, lazy |
| GSAP mobile | batasi pin aktif; hindari pin bertumpuk |
| Font | subset + `display: swap` |
| JS | dynamic import untuk section berat jika perlu |
| Lighthouse | Perf ≥ 90 mobile, LCP < 2.5s, INP < 200ms, CLS < 0.1 |

---

## 7. Checklist QA Motion & Aksesibilitas
- [ ] Semua scroll-heavy punya fallback statis saat reduced-motion.
- [ ] Custom cursor `aria-hidden`, tidak ganggu focus.
- [ ] Kontrol custom (accordion, slider, drawer) operable keyboard.
- [ ] `ScrollTrigger.refresh()` setelah tinggi konten dinamis berubah.
- [ ] Tidak ada elemen dianimasikan GSAP & Framer bersama pada properti sama.
- [ ] Test low-end device (throttled CPU).
- [ ] `FadeMaskImage` benar di Safari (prefix `-webkit-`).

---

## 8. Ringkasan Urutan Kerja per Section (Homepage)

| Section | Static | Motion | Library utama |
|---|---|---|---|
| Nav | 1 | 2 | FM (state) |
| 01 Hero | 1 | 3 | GSAP + FM (hover) |
| 02 Product Lines | 1 | 3 | GSAP split-scroll |
| 03 Numbers | 1 | 2 | GSAP counter |
| 04 Quality | 1 | 3 | GSAP scrub + FM highlight |
| 05 Process | 1 | 3 | GSAP rundown (signature) |
| 06 Compliance | 1 | 2 | marquee |
| 07 Why | 1 | 3 | FM/GSAP bento |
| 08 Sourcing | 1 | 3 | GSAP masonry parallax |
| 09 Testimonial | 1 | 3 | FM drag deck |
| 10 Market | 1 | 2 | marquee/accordion |
| 11 FAQ | 1 | 2 | FM accordion |
| 12 Contact | 1 | 2 | FM form |
| 13 CTA Closing | 1 | 3 | GSAP lazy video |
| 14 Footer | 1 | 2 | FM stagger |

---

## 9. Perluasan ke Halaman Lain

Fase 0 (tokens, Lenis+GSAP, motion inti) dihitung **sekali**. Halaman lain reuse: `Marquee`, `Counter`, `Accordion`, `FadeMaskImage`, `RundownProcess`, `DeckSlider`, dst (detail mapping di `04-PRD-Other-Pages.md` & `05-PRD-Ecommerce.md`).

**Urutan rilis disarankan:** Homepage → Products + Contact → About + Process → e-commerce (fase 2).

---

## 10. Handoff & Dokumentasi

- Semua nilai desain token terpusat (`globals.css` @theme + `lib/motion-tokens.ts`), bukan angka hardcode tersebar.
- Dokumentasikan komponen motion inti & aturan GSAP/Framer split (§2) di README internal.
