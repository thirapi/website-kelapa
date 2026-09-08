# 04 — Model Konten (kontrak CMS)

Bahasa: **English** di semua tipe. Tidak ada campuran ID/EN dalam satu halaman.

## 1. Product

`slug · name · tagline · category (copra/charcoal/oil/future) · shortDesc ·
images[] · specs{moisture, ash, fixedCarbon, size, packaging, origin} ·
packingOptions (bulk/bag/custom) · moq · price|on-request · availability ·
flagship`

## 2. Inquiry Cart → RFQ (B2B, bukan checkout)

Cart: `{product, quantity}[]` (persist lokal). Submit RFQ:
`items[] · specification · packaging · destination · deliveryDate ·
buyer{name, company, email, whatsapp} · inquiryType (buyer/supplier/partner/general)`
→ endpoint env + fallback WA prefill. Tipe non-buyer memakai field ringkas
(nama, kontak, pesan) — detail di spec form Contact.

## 3. Article (Journal)

`slug · category (Origin/Coconut/Process/People/Products/Market/Announcements) · title ·
excerpt · cover · date · author · body · references[]`

## 4. Metric (angka Impact — aturan ketat)

`label · value · unit · source · year · status (verified/pending)` —
`pending` = tampil "data menyusul"/seksi disembunyikan. Tanpa sumber = tanpa tayang.

## 5. Site

`nav · contacts (WA/email/address/maps/hours) · socials · announcement ·
team[{photo, name, role}]`
