# Design Spec: Center-Aligned Direct CSS Snap Scroll

Spesifikasi teknis ini merinci rencana penerapan *Center-Aligned Direct CSS Snap Scroll* (`snap-center snap-always`) pada `components/HomeView.vue` dan posisi alami dasar pada `components/Footer.vue`. Fitur ini memastikan pergerakan scroll langsung mengunci (*locks directly*) ke setiap section beranda dan memposisikan konten tepat di tengah vertikal layar (*vertical center*), sedangkan Footer tetap berada di bagian paling bawah.

## 🎯 Target & Manfaat

1. **Direct Section Locking**: Setiap gerakan scroll dari mouse atau touchpad langsung mengunci secara presisi ke section berikutnya (`snap-always`).
2. **Perfect Vertical Centering**: Setiap section beranda (*Hero, Career Map, Recent Experience, Education, Projects, Key Skills*) berada persis di tengah-tengah layar (`snap-center snap-always min-h-[88vh] flex flex-col justify-center`).
3. **Natural Bottom Footer**: Elemen `<Footer />` tetap berada secara alami di bagian paling bawah (`snap-start`) tanpa dipaksa ke tengah layar.

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
  `class="snap-start border-t border-line-dark mt-16 pt-12 pb-16 w-full"`

---

## 🧪 Rencana Verifikasi

1. **Pengujian Center Alignment & Direct Locking**:
   - Jalankan `npm run dev`.
   - Lakukan scroll di beranda.
   - Verifikasi pergerakan scroll langsung mengunci ke setiap section dan konten berhenti tepat di tengah layar.
   - Verifikasi Footer berhenti di bagian paling bawah secara alami (`snap-start`).
2. **Build Validation**:
   - Jalankan `npm run type-check` (0 errors).
   - Jalankan `npm run generate` (PASS).
