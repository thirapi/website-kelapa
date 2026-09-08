# Planning Brief — COCO KATAPIANG
## Coconut Processing & Products — Katapiang, West Sumatra (DEB Pertamina)

> **Amandemen brand (diputuskan):** brand utama **COCO KATAPIANG**
> (product & commerce brand). Pertamina = kredibilitas, DEB = framework.
> Tema warna putih hangat + coklat (lihat `02` §4.1 + `06-Anti-Slop.md`).
> **Bahasa: full English** (diputuskan — seluruh UI & konten EN).
> Detail distilasi: `07-Commerce-Blueprint.md`.

**Versi:** 1.1 (rebrand)
**Status:** Draft
**Dokumen terkait:** `01-PRD-Landing-Page.md`, `02-PRD-Design-System.md`, `03-Workflow-Development.md`, `04-PRD-Other-Pages.md`, `05-PRD-Ecommerce.md`

---

## 1. Ringkasan Bisnis

**Hancoco** adalah pemasok/eksportir produk kelapa — **arang kelapa** (coconut shell charcoal / coconut charcoal briquettes) dan **kopra** (dried coconut / copra). Fokus utama adalah **B2B export / industrial** — melayani pembeli besar, distributor internasional, dapur komersial, industri arang skala global, produsen minyak kelapa/kopra.

### 1.1 Positioning
- Bukan toko retail kecil — mitra pasokan berskala untuk pasar global.
- Menjual *ketergantungan stok* (consistency, volume, kualitas) bukan sekadar produk.
- Kredo: **"From the coconut heartlands to the world."** — asal-usul yang jelas, proses yang tertelusur.

### 1.2 Produk Utama
| Produk | Bentuk | Aplikasi / Pasar |
|--------|--------|------------------|
| **Coconut Shell Charcoal** | Briket / raw lump charcoal | BBQ, shisha, industri, ekspor Asia/UE/Middle East |
| **Coconut Charcoal Briquettes** | Hexagon/pillow shape | Retail/hoReCa, shisha lounge |
| **Copra** | Dried coconut (smoke-dried / sun-dried) | Pabrik minyak kelapa, food processing |

*(katalog produk lengkap & spesifikasi detail ada di `05-PRD-Ecommerce.md`)*

---

## 2. Target Pengguna

### 2.1 Persona (B2B)

| Persona | Kebutuhan | Halaman Kunci |
|---------|-----------|----------------|
| **Importir / Distributor eksternal** | Volume konsisten, harga kompetitif, spesifikasi terstandar, dokumentasi ekspor | Products, Specifications/Catalog, Ability To Supply |
| **Purchasing Manager (hoReCa / shisha / BBQ brand)** | Konsistensi kualitas, lead time, packaging | Products, Process, FAQ |
| **Trader / Broker** | Sangat peka harga, kapasitas stok, cepat respons | Products, Contact, Quote |
| **Produsen minyak kelapa (customer kopra)** | Moisture content, quantity besar, jadwal kirim | Products (Copra), Process |

### 2.2 Pain Points yang Diatasi
- **Takut ketidakstabilan pasokan** → tampilkan "we can scale to your volume" secara eksplisit.
- **Takut kualitas tidak konsisten** → QC/process, spesifikasi, dokumentasi.
- **Takut asal-usul tidak jelas / non-traceable** → plot, rantai pasok, sertifikasi.
- **Sulit dapat respons cepat** → CTA jelas, WhatsApp/quote form, lead time info.

---

## 3. Pesan Brand Kunci

1. **Consistency & Volume** — kami bisa skala ke kebutuhan Anda, dari kontainer hingga kontrak tahunan.
2. **Traceability** — bertanggung jawab dari pohon (lahan petani) hingga pelabuhan.
3. **Quality** — QC ketat, spesifikasi terdokumentasi, shipment yang konsisten.
4. **Integrity / Sustainability** — produk samping pertanian yang bernilai; limbah jadi energi.

### 3.1 Brand Keywords
*Origin. Consistency. Scale. Trust. Sustainability.*

### 3.2 Tone of Voice
Percaya diri, bertutur sederhana, berbasis bukti (arah Bloomberg/export house, bukan copy puitis berlebihan). Lebih *"farm-to-export partner"* daripada *"artisan farm stand"*.

---

## 4. Benchmark & Direction

- **Arah visual:** earthy, hangat, natural — kelapa, arang, tekstur tangan petani, lahan.
- **Bukan** cold/tech industrial; tapi juga **bukan** retail cute.
- Referensi arah: situs export/commodity house yang bersih + fotografi agrikultur hangat yang sinematik.
- Motion: **subtle & confident** — tidak sedramatis event production, tapi tetap premium. Detail di Design System.

---

## 5. Metrik Keberhasilan (KPI)

| Metrik | Target Awal |
|--------|-------------|
| CTR ke CTA "Minta Penawaran" / "Request Quote" | ≥ 4–6% dari sesi |
| Klik WhatsApp export | ≥ 3% dari sesi |
| Form request quote submission | ≥ 1.5% dari sesi |
| Scroll depth rata-rata | ≥ 70% halaman |
| Core Web Vitals | LCP < 2.5s · INP < 200ms · CLS < 0.1 |

---

## 6. Open Questions (untuk stakeholder)

- [ ] Volume/kapasitas nyata yang bisa ditawarkan (kontainer/bulan per produk) — untuk copy "scale".
- [ ] Sertifikasi yang dimiliki (FSC? ISCC? food-grade? export permits?) — sangat mempengaruhi kredibilitas.
- [ ] Negara tujuan utama ekspor (pengaruhi bahasa, pengiriman, compliance display).
- [ ] Apakah perlu halaman e-commerce full (checkout) atau cukup "request quote" + katalog? *(lihat `05-PRD-Ecommerce.md` — rekomendasi: quote-based dulu untuk B2B, checkout opsional fase 2)*
- [ ] Bahasa: apakah perlu versi EN global + ID lokal, atau EN penuh (karena target ekspor).
- [ ] Kontak resmi, WhatsApp business, email, alamat pengiriman/lokasi pabrik.
- [ ] Data foto/video asli (lahan, petani, proses produksi, arang, packaging) — kualitas & hak pakai.
- [ ] Logo & brand assets arah warna (sisa dari Design System).

---

## 7. Cara Dokumen Ini Dipakai

Dokumen ini adalah **source of truth bisnis**. Semua PRD teknis lain merujuk ke sini. Saat ada keputusan bisnis baru, update di sini dulu, lalu turunkan ke PRD.
