# PRD — Design System & Motion Direction
## Hancoco — "Tropical Heritage" Theme

**Versi:** 1.0
**Dokumen terkait:** `00-Planning-Brief.md`, `01-PRD-Landing-Page.md`, `03-Workflow-Development.md`

> Pathing / blueprint: gunakan skill `cinematic-web-motion` sebagai **baseline minimum** (motion DNA, jumlah staggery, masking, cleanups). Dokumen ini *menyesuaikan/retune* theme tersebut ke brand Hancoco — tidak pernah menurunkan kualitas di bawah baseline.

---

## 1. Filosofi Desain

Hancoco adalah export house produk kelapa — hangat, natural, earthy. Tapi targetnya B2B global (importir, industri, trader), jadi desain harus tetap **bersih, percaya diri, premium** — bukan "petani shabby" atau "retail cute".

Keseimbangan dua referensi:
- **Craft/Origin** — foto agrikultur sinematik, hangat, natural (kelapa, arang, tangan petani, tanah).
- **Export/Confidence** — tipografi besar, whitespace lega, layout bersih, data-driven.

**Brand keywords:** *Origin. Consistency. Scale. Trust. Sustainability.*

Prinsip: setiap section boleh punya kepribadian layout sendiri, dalam satu sistem warna/tipografi/motion yang konsisten. Yang tidak boleh berulang: *pola layout kartu seragam* (lihat §3).

---

## 2. Signature Move — "Hearth & Harvest"

Big idea untuk Hancoco: **from raw harvest to global product** — perjalanan yang hangat (api/arang = energi) dan terpercaya (asal jelas). Elemen-elemen reusable:

### 2.1 Custom Cursor — "Ember Glow" (DINONAKTIFKAN)
- ~~Cursor default radial glow~~ — **dibuang pasca-review**: mengganggu di tema terang +
  melanggar anti-slop (custom cursor = tell). File dihapus dari layout.
- **Nonaktif di touch** (`(pointer: coarse)` / `(hover: none)`) — tetap berlaku bila dihidupkan lagi.

### 2.2 Transisi Antar-Section — "Ember Wipe" (Curtain Reveal variant)
- Alih-alih fade polos, transisi antar section besar (Hero → Product Lines, Process → Why, CTA → Footer) memakai `clip-path` wipe yang menyerupai "bara api menyapu".
- Dipicu scroll (GSAP `scrub`), bukan on-load.
- Selektif: 3–4 boundary utama saja (motion fatigue — lihat §5.1).

### 2.3 Komponen "Rundown" untuk Process (Signature)
- Section Process (Homepage §05, About/Process pages) ditata seperti **alur produksi/lantai alur** — nomor besar (seperti tahap produksi), garis progress vertikal terisi (seperti conveyor/fader) mengikuti scroll.
- Tahap aktif menyala; yang belum redup.
- Ini *hero interaction* kedua setelah Hero.

### 2.4 Fade Mask Imagery
- Foto/video background **tidak pernah hard rectangle** — tepi larut ke `--base` via CSS `mask-image`.
  - **Linear (top & bottom)** — hero/full-bleed.
  - **Radial (vignette)** — foto tunggal (petani, produk, tim).
- Membuat semua foto (kualitas/pencahayaan beragam) tetap satu kesatuan visual cinematic.

**Penerapan minimum lintas halaman:**

| Halaman | Fade Mask dipakai di |
|---|---|
| Homepage | Hero (01), Quality (04), Sourcing (08), CTA Closing (13) |
| About | Hero, Sourcing/Heritage |
| Products | Hero, tiap foto produk (radial) |
| Process | Hero, galeri |
| Contact | Hero, Closing CTA |

**Acceptance:** Tidak ada tepi gambar garis lurus kontras tinggi; teks di atas fade tetap kontras AA.

### 2.5 Bonus — Intro Sequence (opsional, first-visit)
- Logo muncul lewat light-sweep, lalu "api menyala" ke Hero video. Session-based flag saja.

---

## 3. Aturan Layout — Tidak Ada Baris Kartu Seragam

**Aturan keras:** section tidak boleh diselesaikan hanya dengan 3–6 kartu identik sejajar sebagai satu-satunya layout.

| Section (Homepage) | Pola Generik (hindari) | Pola Terpilih |
|---|---|---|
| 02 Product Lines | 2 kartu identik | **Split-scroll / bento asimetris** |
| 03 Quick Numbers | kartu angka x6 | **Kinetic large-digit** asimetris/mengambang |
| 04 Quality & Trace | grid kartu | **Split-scroll sticky** (scrollytelling) |
| 05 Process | list angka biasa | **Rundown component** (§2.3) |
| 06 Compliance | grid badge | **Marquee/kinetic list** atau list bernomor besar |
| 07 Why Hancoco | grid 6 kartu | **Bento asimetris** |
| 08 Sourcing | grid galeri rata | **Masonry + parallax** |
| 09 Testimonial | grid kartu | **Stacked deck / slide takeover** |
| 10 Market/Industries | grid kartu | **Marquee/kinetic list / accordion** |
| 11 FAQ | kartu accordion border | List minimal, divider tipis, ikon plus rotate |
| 12 Contact | — | form + maps, layout split |

Prinsip pengganti kartu-sejajar:
1. **Split-scroll / scrollytelling**
2. **Horizontal pin** (jarang — Hancoco lebih subtle; hanya bila perlu)
3. **Bento asimetris**
4. **Marquee / kinetic type**
5. **Stacked / deck takeover**

---

## 4. Sistem Visual

### 4.1 Warna — "Tropical Heritage"
| Token | Nilai (referensi) | Penggunaan |
|---|---|---|
| `--base` (stage) | `#14100C` (dark brown-black) | Background dominan |
| `--surface` | `#1E1812` | Kartu/blok di atas base |
| `--surface-alt` | `#2A2118` | Layer lebih terang |
| `--ember` (accent) | `#F28C28` (warm ember/orange) | CTA, highlight, aktif state, selection |
| `--ember-glow` | `#F28C28` @ 15–25% | Glow, gradient, cursor |
| `--palm` (secondary, sparing) | `#A8C686` / muted green | "harvest" accent — dipakai <10% freq |
| `--paper` | `#F5F0E8` (warm off-white) | Teks utama |
| `--muted` | `#A39B8D` | Teks sekunder, caption |
| `--signal` | hijau tipis | status form sukses, minim |

- Kontras wajib WCAG AA (body ≥ 4.5:1).
- **Palet deviate-lah dari baseline** (yellow #FFC72C → ember orange) — keputusan ini harus diputuskan di design review SEBELUM build (lesson dari Java Management).

### 4.2 Tipografi
- **Display/Headline:** *Fraunces* — serif hangat berkarakter heritage (ganti Space Grotesk yang terlalu techy). Headline besar 48–110px desktop, tracking sedikit rapat.
- **Body:** *Plus Jakarta Sans* — karya desainer Indonesia, netral & bersahabat (ganti Inter). 16–18px, line-height 1.6.
- **Angka/rundown/counter:** tabular figures (tidak goyang saat counting).
- Maksimal 2 family (anti-slop gate 37); italic dilarang di heading (gate 38a).

### 4.3 Grid & Spacing
- Container max ~1440px, padding responsif (24px mobile → 96px desktop).
- Spacing scale kelipatan 4/8px; antar-section 120–160px desktop.

### 4.4 Ikonografi
- Lucide, stroke 1.5–1.75, ukuran 20–24px.
- Hover: sedikit glow/scale, bukan cuma ganti warna.

### 4.5 Glass/Elevation (About page)
- Value/why blocks bergaya glass morphism (`backdrop-blur` + border translucent) — terbatas.

---

## 5. Motion Design System

### 5.1 Prinsip Global (baseline — dari skill)
- **Signature easing:** `cubic-bezier(0.16, 1, 0.3, 1)` + expo family.
- **Durasi:** micro 150–250ms · reveal 400–700ms · section 800–1200ms (scrubbed).
- **Stagger:** 60–100ms antar elemen.
- **Motion fatigue:** section "berat" (pin/horizontal) max 3–4 titik (Hero, Process/Rundown, satu-dua lagi). Sisanya reveal ringan.
- **Reduced motion:** semua scroll-heavy punya fallback statis; konten tetap tampil penuh.

### 5.2 Spesifikasi Motion per Section

| # | Section | Entrance | Scroll | Hover/Interaksi |
|---|---|---|---|---|
| 01 Hero | Fade+blur reveal teks, video setelah poster | parallax teks vs media, scroll indicator fade | CTA scale 1.03 + glow |
| 02 Product Lines | split reveal dua sisi | parallax ringan | item scale 1.02 + glow |
| 03 Numbers | counter ease-out, kinetic digits | trigger sekali @50% | — |
| 04 Quality | item fade+translateY | visual kanan sticky crossfade (scrub) | indicator aktif slide |
| 05 Process | progress line kosong awal | **scrub**: garis terisi, tahap menyala | tahap aktif membesar + ember |
| 06 Compliance | fade masuk | marquee linear loop | grayscale→color on hover |
| 07 Why | bento stagger (besar dulu) | parallax kedalaman ringan | scale 1.02 + glow |
| 08 Sourcing | masonry fade+scale stagger | parallax multi-layer | overlay info on hover/tap |
| 09 Testimonial | slide pertama fade+scale | — (swipe/drag/autoplay) | drag physics |
| 10 Market | fade masuk | marquee/accordion | — |
| 11 FAQ | fade+translateY per item | — | expand/collapse, ikon rotate |
| 12 Contact | form & maps fade+translateY | — | input focus glow |
| 13 CTA Closing | overlay fade, blur reveal | video lazy-play | magnetic button |
| 14 Footer | fade in | — | social hover |

### 5.3 Cursor & Interactive States
- Default: glow ~120–160px, opacity ~15%.
- Hover (link/button): radius ~60–80px, intensity ~35%.
- Klik: pulse (0.8→1.2→1, 200ms).

### 5.4 Page/Section Transition
- Ember Wipe di 3–4 boundary utama (§2.2).
- Teknis: `clip-path: inset()` scrub.

---

## 6. Komponen & State

| Komponen | Varian/State |
|---|---|
| Button | Primary (ember solid), Secondary (outline), disabled, loading, magnetic |
| Nav | transparent → solid, mobile drawer |
| Accordion (FAQ) | collapsed/expanded/focus-visible |
| Marquee | default/hover-slow |
| Counter | idle/counting/completed |
| Deck (Testimonial) | idle/dragging/autoplay/paused |
| Form | default/focus/error/success/loading |
| Custom Cursor | default/hover/click-pulse/hidden-touch |
| `FadeMaskImage` | linear & radial, prop intensitas |

---

## 7. Panduan Responsif

- Mobile: interaksi berat (pin/horizontal) → swipeable carousel / scroll snap native.
- Custom cursor nonaktif di touch.
- Ember Wipe → fade+slide biasa di mobile.
- Parallax multi-layer → 1 layer di mobile.

---

## 8. Checklist Sebelum Development
- [ ] Semua section dipetakan ke layout non-kartu-sejajar (§3).
- [ ] Palet & tipografi final diverifikasi kontras AA.
- [ ] Motion spec (§5.2) direview (motion fatigue).
- [ ] Reduced-motion fallback per motion berat.
- [ ] Aset foto/video sumber cukup cinematic (hangat, natural, terang-datar akan merusak theme).
- [ ] Daftar section per halaman pakai Fade Mask dikonfirmasi, media punya area "aman" di tepi.
