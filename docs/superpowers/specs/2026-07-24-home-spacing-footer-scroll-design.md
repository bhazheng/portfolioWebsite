# Design Spec: Compact Home Spacing & CSS Scroll Snap Proximity

Spesifikasi teknis ini merinci rencana perbaikan tata letak beranda (`HomeView.vue`) dan `Footer.vue` untuk menghilangkan ruang kosong vertikal yang berlebihan, menghapus pembajakan JS wheel scroll (`e.preventDefault()`), serta menerapkan *Native CSS Scroll Snap Proximity* yang mulus hingga ke dasar Footer.

## 🎯 Target & Manfaat

1. **Restorasi Access Footer**: Footer 100% dapat di-scroll sampai dasar tanpa terhenti di section ke-5.
2. **Preservasi Efek Scroll Snap**: Menggunakan *Native CSS Scroll Snap* (`snap-y snap-proximity`) yang responsif, mulus, dan tidak merusak navigasi alami mouse/touchpad.
3. **Penyempitan Jarak Antar Section**: Menghapus `min-h-dvh` pada section ringkasan beranda dan menggantinya dengan padding proporsional (`py-10 md:py-14`).

---

## 📐 1. Perubahan komponen `components/HomeView.vue`

### Template Classes Adjustment
- **Hero Section**:
  `class="snap-start snap-always min-h-[85vh] flex flex-col justify-center pt-2 md:pt-6 pb-12"`
- **Career Journey Section**:
  `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`
- **Recent Experience Summary Section**:
  `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`
- **Education Summary Section**:
  `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`
- **Projects Summary Section**:
  `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`
- **Skills Summary Section**:
  `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`

### Script Cleanup (`components/HomeView.vue`)
Hapus event listener `handleWheel` dan `e.preventDefault()` agar scroll berjalan secara alami di bawah kendali browser.

---

## 🏛️ 2. Perubahan komponen `components/Footer.vue`

Tambahkan kelas `snap-start` pada tag pembungkus footer:
```html
<footer class="snap-start border-t border-line-dark mt-16 pt-12 pb-16 w-full">
```

---

## 🧪 Rencana Verifikasi

1. **Pengujian Scroll & Reachability Footer**:
   - Jalankan `npm run dev`.
   - Scroll dari Hero hingga dasar halaman.
   - Verifikasi Footer ter-render penuh di layar tanpa ada hambatan scroll.
2. **Pengujian Spacing & Snap Proximity**:
   - Verifikasi tidak ada celah kosong raksasa antar section.
   - Uji pergerakan snap magnetik lembut saat kursor melintas di dekat judul section.
3. **Build Validation**:
   - Jalankan `npm run type-check` (0 errors).
   - Jalankan `npm run generate` (PASS).
