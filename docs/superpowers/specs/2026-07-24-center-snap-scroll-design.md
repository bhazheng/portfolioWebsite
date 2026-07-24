# Design Spec: Center-Aligned Direct CSS Snap Scroll

Spesifikasi teknis ini merinci rencana penerapan *Center-Aligned Direct CSS Snap Scroll* (`snap-center snap-always`) pada `components/HomeView.vue` dan `components/Footer.vue`. Fitur ini memastikan pergerakan scroll langsung mengunci (*locks directly*) ke setiap section dan memposisikan konten tepat di tengah vertikal layar (*vertical center*).

## 🎯 Target & Manfaat

1. **Direct Section Locking**: Setiap gerakan scroll dari mouse atau touchpad langsung mengunci secara presisi ke section berikutnya (`snap-always`).
2. **Perfect Vertical Centering**: Setiap section (*Hero, Career Map, Recent Experience, Education, Projects, Key Skills*) berada persis di tengah-tengah layar (`snap-center min-h-[88vh] flex flex-col justify-center`).
3. **Seamless Footer Alignment**: Elemen `<Footer />` juga memiliki atribut `snap-center snap-always` sehingga mengunci sempurna di tengah saat mencapai dasar beranda.

---

## 📐 1. Penyesuaian Kelas Section (`components/HomeView.vue`)

- **Hero Section**:
  `class="snap-center snap-always min-h-dvh flex flex-col justify-center pt-2 md:pt-6 pb-28 md:pb-6"`
- **Career Map Section**:
  `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`
- **Recent Experience Summary Section**:
  `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`
- **Education Summary Section**:
  `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`
- **Projects Summary Section**:
  `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`
- **Skills Summary Section**:
  `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`

---

## 🏛️ 2. Penyesuaian Kelas Footer (`components/Footer.vue`)

- **Footer Outer Tag**:
  `class="snap-center snap-always border-t border-line-dark mt-16 pt-12 pb-16 w-full"`

---

## 🧪 Rencana Verifikasi

1. **Pengujian Center Alignment & Direct Locking**:
   - Jalankan `npm run dev`.
   - Lakukan scroll di beranda.
   - Verifikasi pergerakan scroll langsung mengunci ke setiap section dan konten berhenti tepat di tengah layar.
   - Verifikasi Footer ter-snap ke tengah layar di bagian paling dasar.
2. **Build Validation**:
   - Jalankan `npm run type-check` (0 errors).
   - Jalankan `npm run generate` (PASS).
