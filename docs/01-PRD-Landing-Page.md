# PRD — Homepage (Landing Page)
## Hancoco — Coconut Products B2B

**Versi:** 1.0
**Sumber:** `00-Planning-Brief.md`
**Dokumen terkait:** `02-PRD-Design-System.md`, `03-Workflow-Development.md`

---

## 1. Ringkasan Produk

### 1.1 Latar Belakang
Hancoco adalah pemasok/eksportir produk kelapa (arang & kopra). Homepage adalah titik kontak digital pertama untuk calon pembeli/importir global — dalam <5 detik pengunjung harus paham bahwa Hancoco adalah **mitra pasokan berskala, konsisten, dan tertelusur** untuk kebutuhan B2B mereka.

### 1.2 Tujuan Produk
1. Membangun persepsi *"reliable large-scale coconut product supplier"*.
2. Menjelaskan 2 lini produk & kapasitas pasokan tanpa terasa brosur.
3. Mendorong konversi utama: **Request Quote** (form/WhatsApp).
4. Menjadikan kualitas visual & performa sebagai *proof-of-craft* — Hancoco "menunjukkan" kapabilitas, bukan sekadar "mengatakan".

### 1.3 KPI
Lihat `00-Planning-Brief.md` §5. Kunci: CTR quote ≥ 4–6%, WhatsApp click ≥ 3%, submission ≥ 1.5%, LCP < 2.5s.

---

## 2. Ruang Lingkup
**In-scope:** Navigation (desktop & mobile) + 14 section homepage.
**Out-of-scope:** About, Products detail, Process, Contact, E-commerce — PRD terpisah (`04-PRD-Other-Pages.md`, `05-PRD-Ecommerce.md`).

---

## 3. Navigasi

### 3.1 Desktop
- **Kiri:** Logo + menu (Home, About, Products, Process, Contact).
- **Kanan:** CTA "Request Quote" (primary button).
- **Atas:** Announcement bar (dismissible) — misal kapasitas/lead time promosi.

### 3.2 Mobile
- Announcement bar di atas; logo kiri; menu burger kanan.
- Drawer fullscreen berisi menu + CTA Request Quote.

**Acceptance:** keyboard accessible (Tab/Enter/Esc), `aria-expanded`, transisi < 400ms.

---

## 4. Spesifikasi Section

> Format: **Tujuan → Copy → Functional Requirement → Data/CMS → Acceptance → Tracking**. Motion per section di `02-PRD-Design-System.md`.

### 01. Hero
**Tujuan:** Kesan pertama — supplier berskala, asal-usul jelas, terpercaya.

**Copy:**
- Badge: *Coconut Products — Export Supplier*
- Headline: *From the Coconut Heartlands to the World.*
- Sub: Coconut shell charcoal & premium copra, dipasok konsisten dari lahan terkelola hingga pelabuhan ekspor. Mitra pasokan berskala untuk kebutuhan global Anda.
- CTA Primary: *Request Quote* → form/WhatsApp
- CTA Secondary: *Explore Products* → Products page

**Functional Requirement:**
- Full viewport (100dvh).
- Background **video loop** (kelapa/arang, muted, autoplay) + poster image first paint.
- Overlay gradient gelap (kontras AA).
- **Fade Mask Background** (`linear`) — tepi larut ke base.
- Layout: headline besar dominan, CTA jelas.
- Scroll indicator.

**Data/CMS:** video hero, headline, sub, CTA.
**Acceptance:** video tidak blokir LCP (poster jadi LCP element); CTA clickable walau video belum load.
**Tracking:** `hero_cta_quote`, `hero_cta_explore`.

---

### 02. Product Lines (Karakteristik — bukan kartu seragam)
**Tujuan:** Perkenalkan 2 lini produk utama terintegrasi.

**Copy:** Headline: *Dua Produk Inti. Satu Standar Kualitas.*
- **Coconut Shell Charcoal** — Briket & raw charcoal untuk BBQ, shisha, industri.
- **Copra** — Dried coconut untuk produsen minyak/industri pangan.

**Functional Requirement:**
- **Bukan** 2 kartu identik sejajar. Gunakan pola **split-scroll / bento asimetris** (detail Design System §3).
- Tiap lini punya media + poin spesifikasi singkat + link ke Products detail.

**Data/CMS:** Array 2 produk (nama, deskripsi, spesifikasi, media, link).
**Acceptance:** Tidak terlihat seperti 2 box seragam; accessible di mobile.
**Tracking:** `product_line_click`.

---

### 03. Quick Numbers (Kapasitas)
**Tujuan:** Bukti skala.

**Copy:** Headline: *Kapasitas yang Siap Mendukung Pasokan Anda.*
Stat: Volume/kontainer per bulan, Tahun pengalaman, Negara tujuan, Persentase konsistensi/QC.

**Functional Requirement:** Kinetic large-digit reveal + counter (GSAP onEnter sekali), layout asimetris/mengambang — bukan grid kartu rata.
**Data/CMS:** Angka — **wajib CMS-driven**.
**Acceptance:** Counter selesai ≤ 2 detik, format ribuan lokal.
**Tracking:** `numbers_section_viewed`.

---

### 04. Quality & Traceability
**Tujuan:** Alasan utama kepercayaan B2B — kualitas & asal jelas.

**Copy:** Headline: *Kualitas Tidak Terjadi Secara Kebetulan.*
Poin: QC per batch · Spesifikasi terdokumentasi · Asal lahan tertelusur · Konsistensi shipment.

**Functional Requirement:** Split-scroll (teks kiri, visual kanan yang berubah mengikuti item aktif — scrollytelling) atau bento. Hindari grid seragam.
**Data/CMS:** Array poin (judul, deskripsi, media visual).
**Acceptance:** Kontras AA; visual utama pakai Fade Mask.
**Tracking:** —

---

### 05. Our Process (Signature Moment)
**Tujuan:** Transparansi rantai pasok = key trust signal.

**Copy:** Headline: *Dari Lahan ke Pelabuhan. Terejaga di Setiap Langkah.*
Tahap: Lahan Petani → Panen & Sortir → Pengolahan → QC → Pengemasan → Logistik Ekspor.

**Functional Requirement:** **Rundown component** — progress line scroll-scrubbed, tahap aktif "menyala" (reuse pola Working Process Java Management). Ini salah satu *signature moment* homepage.
**Data/CMS:** 6 tahap (judul, deskripsi).
**Acceptance:** Tahap aktif ter-highlight sesuai scroll; linear & terbaca di mobile.
**Tracking:** —

---

### 06. Compliance & Certifications
**Tujuan:** Dokumentasi & regulatory trust (penting untuk export).

**Copy:** Headline: *Standar yang Kami Penuhi.*
Items: Export permits, food-grade/safety (jika ada), QC documentation, dst.

**Functional Requirement:** Marquee/kinetic list badge atau list bernomor besar — bukan grid kartu. (Konten menunggu data stakeholder.)
**Data/CMS:** Array sertifikasi/badge.
**Acceptance:** Loop mulus, no-jump.
**Tracking:** —

---

### 07. Why Hancoco
**Tujuan:** Diferensiasi vs trader lain.

**Copy:** Headline: *Mengapa Pemasok Memilih Kami.*
Poin: Consistent volume · Competitive pricing · Responsive communication · Reliable lead time · Traceable origin · Experienced export.

**Functional Requirement:** **Bento asimetris** (blok besar highlight + kecil pendukung), stagger reveal.
**Data/CMS:** 6 poin (judul, deskripsi, ikon).
**Acceptance:** Tidak seperti checklist generik.
**Tracking:** —

---

### 08. Sourcing & Heritage (Behind the Source)
**Tujuan:** Manusia & asal-usul di balik produk — trust & story.

**Copy:** Headline: *Dari Tangan yang Teliti, untuk Pasar Global.*
Visual: petani, lahan, proses. Foto pakai **Fade Mask** (`radial`).

**Functional Requirement:** **Masonry + parallax** (layer beda kecepatan). Video bisa inline play.
**Data/CMS:** Array media.
**Acceptance:** Masonry rapi semua breakpoint; video inline tanpa tab baru.
**Tracking:** `source_media_click`.

---

### 09. Testimonials / Client Trust
**Tujuan:** Kepercayaan buyer yang sudah bekerja sama (jika ada).

**Copy:** Headline: *Kepercayaan Mitra Adalah Standar Kami.*
(+ logo/brands bila ada izin.)

**Functional Requirement:** **Stacked deck / slide takeover** (drag/swipe, Framer Motion) — bukan grid kartu.
**Data/CMS:** Array testimoni (nama, jabatan/negara, isi, logo).
**Acceptance:** Keyboard & swipe accessible; autoplay berhenti saat interaksi.
**Tracking:** `testimonial_slide_change`.

---

### 10. Market / Industries
**Tujuan:** Cakupan pasar — buyer melihat "kami ada di sana".

**Copy:** Headline: *Melayani Pasar Global.*
Sektor: Shisha/BBQ · Industrial · Food/Mineral Oil · HoReCa · dsb.

**Functional Requirement:** Marquee/kinetic list atau accordion horizontal — bukan grid kartu rata.
**Data/CMS:** Array sektor.
**Acceptance:** — 
**Tracking:** —

---

### 11. FAQ
**Tujuan:** Jawab keraguan buyer (MOQ, lead time, sertifikat, packaging, pengiriman).

**Copy:** Headline: *Pertanyaan yang Sering Diajukan.*
**Functional Requirement:** Accordion minimal (Framer Motion `AnimatePresence`, auto-height), divider tipis, ikon plus rotate. Accessible.
**Data/CMS:** Array Q&A.
**Acceptance:** keyboard + aria-expanded.
**Tracking:** `faq_item_open`.

---

### 12. Contact / Request Quote
**Tujuan:** Titik konversi utama.

**Copy:** Headline: *Diskusikan Kebutuhan Pasokan Anda.*
Form singkat: Nama, Perusahaan, Email, WhatsApp, Produk interest, Kebutuhan volume, Pesan.
Plus: WhatsApp, Email, Maps (lokasi pabrik).

**Data/CMS:** kontak (reuse di Footer).
**Acceptance:** Validasi real-time, submit tanpa reload, status sukses jelas.
**Tracking:** `quote_submit`, `quote_whatsapp_click`.

---

### 13. CTA Closing
**Tujuan:** Dorongan terakhir sebelum footer.

**Copy:** Headline: *Siap Memenuhi Kebutuhan Produksi Anda?* CTA: Request Quote / WhatsApp.
**Functional Requirement:** Background video/foto cinematic (arang menyala, kelapa), overlay gelap, **Fade Mask** (`linear`). Lazy-load.
**Acceptance:** Lazy-loaded, tidak bebani LCP awal.
**Tracking:** `closing_cta_quote`, `closing_whatsapp`.

---

### 14. Footer
**Tujuan:** Navigasi lanjutan & penutup brand.

**Copy:** Tagline *Coconut Products, Global Standard.* + deskripsi singkat.
**Functional Requirement:** Nav semua halaman, legal (Terms/Privacy), kontak singkat, social.
**Data/CMS:** kontak (reuse).
**Acceptance:** No broken link.
**Tracking:** `footer_link_click`.

---

## 5. Non-Functional Requirements

| Kategori | Requirement |
|---|---|
| **Performance** | LCP < 2.5s `meski hero video`; poster + lazy video |
| **SEO** | Semantic heading (h1 satu), meta/OG per halaman, Organization schema |
| **Accessibility** | WCAG AA kontras; `prefers-reduced-motion`; keyboard operability |
| **Responsive** | <768 · 768–1024 · >1024 · >1440 |
| **Browser** | 2 versi terakhir Chrome/Safari/Edge/Firefox; iOS & Android |

---

## 6. Content & CMS
| Data | Dinamis? | Catatan |
|------|----------|---------|
| Numbers | Ya | Update berkala |
| Product lines | Ya | ke katalog |
| Process steps | Ya | |
| Certifications | Ya | |
| Testimonials | Ya | |
| FAQ | Ya | |
| Kontak | Ya | single source of truth |
| Copy | Semi-statis | bisa hardcode awal |

---

## 7. Analytics Tracking (ringkas)
`hero_cta_quote`, `hero_cta_explore`, `numbers_section_viewed`, `product_line_click`, `testimonial_slide_change`, `faq_item_open`, `quote_submit`, `quote_whatsapp_click`, `closing_cta_quote`, `closing_whatsapp`, `footer_link_click`.

---

## 8. Open Questions
- [ ] Angka kapasitas final (volume/kontainer per bulan).
- [ ] Sertifikasi & compliance yang dimiliki.
- [ ] Testimoni/brand logo yang bisa ditampilkan (approval).
- [ ] Alamat & kontak final, Maps.
- [ ] Produk mana yang jadi "flagship" di homepage.
