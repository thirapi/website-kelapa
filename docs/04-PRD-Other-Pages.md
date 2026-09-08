# PRD — Halaman Lainnya
## About · Products · Process · Contact

**Versi:** 1.0
**Dokumen terkait:** `00-Planning-Brief.md`, `02-PRD-Design-System.md`, `03-Workflow-Development.md`, `05-PRD-Ecommerce.md`

> Semua aturan Design System (Ember/Hearth theme, larangan kartu sejajar, Fade Mask, motion principles) **berlaku di seluruh halaman ini**. Bagian ini hanya menandai pola spesifik per halaman. Detail produk & e-commerce di `05-PRD-Ecommerce.md`.

---

# 1. Page — About (Our Story)

**Tujuan:** Membangun kepercayaan via origin story, filosofi, nilai, cara berpikir — pengunjung paham Hancoco adalah **mitra pasokan yang tertelusur**, bukan trader acak.

## 1.2 Spesifikasi Section

| # | Section | Tujuan | Copy Kunci | Layout / Requirement | Data/CMS |
|---|---------|--------|-----------|----------------------|----------|
| 1 | Hero | Perkenalkan identitas | Badge *About Us* · Headline: *Berakar dari Kelapa, Bertumbuh untuk Dunia.* | Video/foto cinematic lahan kelapa & proses, **Fade Mask** (`linear`) | Media hero |
| 2 | Who We Are | Jelaskan Hancoco | Headline: *Lebih dari Pemasok. Mitra Pasokan yang Tertelusur.* | Split layout teks + visual | Copy statis |
| 3 | Our Journey | Cerita perusahaan | Headline: *Perjalanan yang Dibangun dari Kepercayaan.* | **Timeline** progress scroll (reuse `RundownProcess`) | Array milestone (tahun, judul, deskripsi) — CMS |
| 4 | Our Philosophy | Filosofi inti | Headline: *Dari Lahan ke Pelabuhan, Bertanggung Jawab di Setiap Langkah.* | Statement besar, tipografi dominan, "bernapas" | Copy statis |
| 5 | Vision & Mission | Visi & misi | Headline *Visi* /*Misi* + poin misi | Layout 2 kolom asimetris (bukan 2 kartu simetris) | Copy statis |
| 6 | Our Values | Nilai fondasi | Headline: *Nilai yang Menjadi Fondasi Setiap Pengiriman.* 5-6 value (Consistency, Integrity, Sustainability, Quality, Partnership, Transparency) | **Bento asimetris** + glass morphism | Array value |
| 7 | Sourcing Network | Jaringan lahan/petani | Headline: *Jaringan Lahan yang Terkelola.* | Editorial/masonry foto lahan & petani + peta/angka | Array lokasi |
| 8 | Behind the Harvest | Proses tak terlihat | Headline: *Di Balik Setiap Tons, Ada Proses yang Tertelusur.* | **Masonry + parallax**, Fade Mask (`radial`) | Array media |
| 9 | Closing Statement | Ajakan | Headline: *Mari Bangun Pasokan yang Konsisten Bersama.* CTA: Request Quote / Explore Products | Reuse CTA Closing | — |

**Open Questions:** tahun-tahun kunci journey; daftar lokasi lahan/kemitraan petani.

---

# 2. Page — Products

> Halaman ini adalah **front-end katalog** (overview semua produk). Detail spesifikasi, filter, dan letak e-commerce mungkin hidup di `05-PRD-Ecommerce.md`. Jika e-commerce fase 2, halaman Products ini jadi *overview + request quote* per produk.

## 2.1 Tujuan
Menunjukkan cakupan & kualitas produk — buyer percaya ada produk yang cocok untuk kebutuhan mereka.

## 2.2 Spesifikasi Section

| # | Section | Tujuan | Layout / Requirement |
|---|---------|--------|----------------------|
| 1 | Hero | Perkenalkan katalog | Video/foto cinematic produk kelapa, **Fade Mask** (`linear`) |
| 2 | Category Overview | Semua kategori | 3 kategori (Charcoal, Briquettes, Copra) — gunakan **split-scroll / bento**, bukan 3 kartu identik |
| 3 | Product Showcase | Produk dengan spesifikasi | Grid boleh dipakai (**produk secara alami butuh scan cepat**), tapi variasikan ukuran (flagship lebih besar) + foto **radial fad** |
| 4 | Specifications | Standar mutu | Table/spec blocks per produk (moisture, ash, size, purity, dll) — bukan kartu ikon |
| 5 | Packaging & Logistics | Pengemasan/kirim | List/visual packaging (jute bag, karton, container) + lead time |
| 6 | Why Our Products | Diferensiasi | List bernomor/ikon (bukan grid kartu) |
| 7 | Featured Products | Produk unggulan | Editorial hybrid (1 besar + list) |
| 8 | CTA | Ajakan | Reuse CTA Closing (Request Quote) |

## 2.3 Open Questions
- Berapa produk yang tampil saat launch, siapa yang update.
- Jika e-commerce diaktifkan, apakah halaman Products ini redirect/merge dengan katalog e-commerce.

---

# 3. Page — Process (Our Process / Quality)

**Tujuan:** Menjelaskan rantai pasok & jaminan kualitas — key trust untuk B2B.

## 3.2 Spesifikasi Section

| # | Section | Tujuan | Layout / Requirement |
|---|---------|--------|----------------------|
| 1 | Hero | Perkenalkan proses | Video/foto proses produksi, **Fade Mask** (`linear`) |
| 2 | Process Overview | Alur inti | **Rundown component** — signature (Lahan Petani → Panen/Sortir → Pengolahan → QC → Pengemasan → Logistik) |
| 3 | Quality Control | Standar kualitas | Split-scroll: poin QC (moisture, ash, size, purity, traceability) |
| 4 | Traceability | Asal jelas | Visual peta/rantai pasok + penjelasan |
| 5 | Sustainability | Kelola limbah | Statement + visual (limbah jadi energi) |
| 6 | Certifications | Compliance | Marquee/kinetic list badge |
| 7 | CTA | Ajakan | Reuse CTA Closing |

## 3.3 Open Questions
- Detail teknis QC & standar (moisture %, ash %, ukuran) per produk — perlu data stakeholder.
- Foto/video tiap tahap produksi.

---

# 4. Page — Contact

**Tujuan:** Pintu masuk business inquiry — importer/trader butuh respons cepat & info jelas.

## 4.2 Spesifikasi Section

| # | Section | Tujuan | Layout / Requirement |
|---|---------|--------|----------------------|
| 1 | Hero | Ajakan memulai | Foto diskusi/lahan, **Fade Mask** (`radial`) |
| 2 | Let's Talk | Ajak ceritakan kebutuhan | Statement sebelum form |
| 3 | Contact Info | Info lengkap | Kartu kontak ikon minimalis + CTA Chat WA / Email / Telp |
| 4 | Request Quote Form | Form utama | Field: Info Dasar (Nama, Perusahaan, Email, WA) · Info Produk (produk interest, kebutuhan volume/kontainer, negara tujuan, lead time) · Deskripsi · Submit |
| 5 | Services/Product Quick Links | Navigasi cepat | List dengan ikon + anchor, bukan grid seragam |
| 6 | FAQ | Jawab keraguan | Accordion minimal (reuse) |
| 7 | Office/Location | Lokasi | Google Maps embed + Petunjuk Arah |
| 8 | Social | Kanal | DITUNDA sampai akun resmi ada — section disembunyikan, bukan placeholder |
| 9 | Closing CTA | Ajakan akhir | Reuse CTA Closing |

## 4.3 Open Questions
- Kontak final, WhatsApp business, alamat pabrik/kantor + Maps.
- Endpoint submit form (email/webhook/CRM) — satu keputusan berlaku semua form.

---

# 5. Ringkasan Lintas Halaman

| Halaman | Prioritas | Alasan |
|---|---|---|
| Homepage | 1 | Titik masuk utama |
| Products | 1 | Konversi utama — buyer lihat produk dulu |
| Contact | 1 | Titik konversi |
| About | 2 | Kepercayaan — penting, jarang entry pertama |
| Process | 2 | Trust (QC & traceability) |

**Rekomendasi rilis:** Homepage + Products + Contact (fase 1) → About + Process (fase 1.5) → E-commerce (fase 2, lihat `05`).
