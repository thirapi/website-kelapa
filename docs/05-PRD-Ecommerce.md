# PRD — E-Commerce
## Hancoco — Product Catalog & (Opsional) Checkout

**Versi:** 1.0 (Draft — keputusan fase menunggu stakeholder)
**Dokumen terkait:** `00-Planning-Brief.md`, `02-PRD-Design-System.md`, `03-Workflow-Development.md`, `04-PRD-Other-Pages.md`

---

## 1. Tujuan & Keputusan Dasar

Hancoco target **B2B Export/Industrial**. Kunci masalah:
- Buyer tidak "checkout" impulsif — mereka butuh **negosiasi harga, volume, pengiriman, spesifikasi, dokumentasi**.
- Maka **rekomendasi utama: katalog + request-for-quote (RFQ) terlebih dahulu**, checkout penuh opsional fase 2.

> **Keputusan rekomendasi:** Fase 1 = **catalogs + RFQ/quote**. Fase 2 (opsional) = checkout/deposit jika ada kebutuhan retail/sample order kecil.

### 1.1 Model Bisnis yang Didukung
- **Fase 1:** Browse katalog → Request Quote per produk/volume → dihubungi sales → invoice/payment off-platform.
- **Fase 2 (opsional):** Checkout untuk sample/order kecil (mis. MOQ kecil retail), atau deposit booking kontainer.

---

## 2. Requirement Katalog (Fase 1)

### 2.1 Product Data Model
| Field | Tipe | Catatan |
|-------|------|---------|
| id / slug | string | untuk routing & deep-link |
| name | string | nama produk |
| category | enum | charcoal / briquettes / copra |
| shortDesc | string | intro 1-2 kalimat |
| image | string[] | galeri (radial fade) |
| specs | key-value[] | moisture, ash, size, purity, caloric (per tipe) |
| unit / packing | string | mis. 15kg bag, jute bag, 20ft container |
| MOQ | string | min order quantity |
| price | string/number | "on request" (default) atau harga sample |
| status | enum | available / pre-order / on-request |
| leadTime | string | estimasi produksi/pengiriman |
| capability | string | kapasitas per bulan |
| flagship | boolean | tampil lebih besar di catalog |

### 2.2 Halaman / Routing
- `/products` — overview kategori (dari `04` halaman Products).
- `/products/[slug]` — **halaman detail produk**: galeri (radial fade), spesifikasi lengkap, packaging/logistics, RFQ button, related products.
- Filter kategori + search (tanpa reload).

### 2.3 UI/UX
- Grid produk **diizinkan** (katalog = scan cepat), tapi variasikan ukuran (flagship besar) + foto **radial fade** agar melebur (bukan foto e-commerce kotak).
- Setiap kartu: foto, nama, kategori, MOQ, status, tombol *Lihat Detail* + *Request Quote*.
- Tombol RFQ membuka modal/form yang sudah terisi produk yang dituju.

### 2.4 Accept Criteria
- Detail produk accessible & keyboard-friendly.
- Filter/search tak reload halaman.
- Foto produk tidak terlihat seperti "produk kotak di atas background" — melebur ke theme.

---

## 3. Request-For-Quote (RFQ) Flow

1. Buyer klik **Request Quote** di kartu/halaman produk.
2. Modal/drawer pre-filled: produk, kuantitas (volume/kontainer), plus field buyer (nama, perusahan, email, WA, negara tujuan, lead time, pesan).
3. Submit → notifikasi sales (email/webhook/CRM) + success state.
4. Sales follow-up off-platform (WhatsApp/email).

**Acceptance:** pre-fill benar, validasi real-time, sukses tanpa reload, tidak kehilangan konteks produk.

---

## 4. Checkout (Fase 2 — Opsional)

Jika stakeholder memilih retail/sample checkout:

### 4.1 Scope
- **Cart** (per-item qty, update), **Checkout** (informasi pembeli + alamat kirim), **confirmation**.
- Pembayaran: manual/invoice (transfer) rekomendasi awal — hindari payment gateway kompleks sampai volume teruji.
- Optional: **deposit booking** untuk mengunci kapasitas kontainer.

### 4.2 Requirement
- Cart persist (localStorage/Cookies) + server caches.
- Order data ke admin/sales notification, bukan auto-fulfillment.
- Tax/shipping calculator sederhana (B2B — sering "nego"), tampilkan estimasi atau "on request".

### 4.3 Non-goals fase 2
- No digital inventory/stock tracking real-time.
- No multi-currency payment gateway (kecuali investor minta).
- No subscriptions.

---

## 5. Data & CMS Requirement

| Data | Dinamis? | Catatan |
|------|----------|---------|
| Katalog produk | Ya | sering update stok/harga — **wajib CMS/JSON-driven** |
| Harga | Ya | default "on request" |
| Spesifikasi | Ya | per produk |
| MOQ/lead time | Ya | |
| Paket/promo | Ya | |

Operator (non-dev) harus bisa update katalog tanpa deploy — pertimbangkan headless CMS (Sanity/Contentful/Payload) atau file JSON+admin ringan.

---

## 6. Prioritas & Fase Rilis

| Fase | Scope |
|------|-------|
| **Fase 1** | `/products`, `/products/[slug]`, RFQ flow, filter/search |
| **Fase 2** | Cart, checkout, order notification, deposit booking (opsional) |

---

## 7. Open Questions
- [ ] Fase mana yang di-toggle? (rekomendasi: Fase 1 dulu).
- [ ] Harga ditampilkan publik atau "on request" semua?
- [ ] Apakah perlu sample-order kecil retail (fase 2) atau murni B2B volume?
- [ ] Lokasi penyimpanan gambar produk (CDN / /public-aset).
- [ ] Siapa operator yang update katalog (memutuskan CMS vs JSON).
