# Design Spec: Responsive Spacing for Homepage Sections

Spesifikasi teknis ini merinci rencana penyesuaian kelas padding dan scroll-margin responsif pada seluruh section di halaman utama (`pages/index.vue`) untuk menghilangkan ruang kosong/gap di bagian atas viewport pada perangkat mobile, sekaligus memberikan ruang aman di bagian bawah agar tidak terhalang bottom dock.

## 🎯 Target & Manfaat

1. **Mengurangi Gap Atas (Mobile)**: Mengurangi padding atas (`pt-20` -> `pt-6`) dan scroll-margin top (`scroll-mt-[90px]` -> `scroll-mt-6`) pada layar mobile karena top header navbar disembunyikan.
2. **Menghindari Overlap Bottom Dock (Mobile)**: Meningkatkan padding bawah (`pb-8` -> `pb-28`) di mobile agar seluruh elemen/konten di bagian bawah section terlihat dengan jelas di atas area mobile bottom dock melayang.
3. **Paritas Desain Desktop**: Seluruh parameter spacing (padding & scroll margin) dipertahankan utuh pada desktop (`md` ke atas) untuk memastikan layout tetap presisi sesuai desain awal.

---

## 📐 Perubahan Tata Letak (Tailwind CSS)

Seluruh section di `pages/index.vue` disesuaikan menggunakan kelas responsif:

- **Hero Wrapper**:
  `pt-4 md:pt-16 pb-28 md:pb-6`
- **Career Journey, Experience, Education, Projects, Skills Sections**:
  `scroll-mt-6 md:scroll-mt-[90px] pt-6 md:pt-20 pb-28 md:pb-8`

---

## 🧪 Rencana Verifikasi

### Pengujian Responsif Lokal
1. Jalankan `npm run dev` dan buka beranda pada browser seluler / emulator.
2. Klik tombol "Interactive Map ↓": verifikasi scroll snapping berhenti tepat pada judul section tanpa gap atas berlebih.
3. Gulir ke setiap section dan pastikan konten terbawah (seperti lencana teknologi atau footer) tidak terhalang bottom dock.
