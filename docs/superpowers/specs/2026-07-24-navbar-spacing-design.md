# Design Spec: Responsive Layout Spacing for Mobile View

Spesifikasi teknis ini merinci rencana penyesuaian tata letak padding pada kontainer utama di `app.vue` untuk mengoptimalkan ruang kosong di bagian atas halaman pada tampilan seluler (karena penyembunyian navbar atas) serta mengantisipasi keterbacaan konten di bawah bottom navigation dock.

## 🎯 Target & Manfaat

1. **Optimalisasi Ruang Atas (Mobile)**: Mengurangi padding atas kontainer utama (`pt-16` -> `pt-6`) karena header melayang atas disembunyikan pada layar mobile.
2. **Keterbacaan Konten Terbawah (Mobile)**: Meningkatkan padding bawah kontainer utama (`pb-8` -> `pb-28`) untuk memastikan konten halaman terbawah (seperti footer) tidak terhalang oleh dock melayang.
3. **Paritas Tampilan Desktop**: Spacing pada tampilan desktop (`md` ke atas) dipertahankan sesuai desain aslinya.

---

## 📐 Perubahan Kode

### app.vue (Perubahan Tag main)

```html
<!-- Sebelum -->
<main id="main-content" class="max-w-[960px] w-full mx-auto px-6 pt-16 pb-8 flex-1 flex flex-col scroll-mt-[90px]">

<!-- Sesudah -->
<main id="main-content" class="max-w-[960px] w-full mx-auto px-6 pt-6 md:pt-16 pb-28 md:pb-8 flex-1 flex flex-col scroll-mt-[90px]">
```

---

## 🧪 Rencana Verifikasi

### Pengujian Responsif Lokal
1. Jalankan `npm run dev` dan buka beranda portofolio pada viewport mobile.
2. Verifikasi jarak atas konten ke tepi layar terlihat seimbang (tidak terlalu jauh ke bawah).
3. Scroll halaman hingga ke paling bawah dan verifikasi teks hak cipta (*copyright*) pada footer terlihat jelas di atas bottom dock tanpa terhalang.

### Pengujian Build Statis
1. Jalankan `npm run generate` untuk memastikan tidak ada kesalahan kompilasi HTML/Vite.
