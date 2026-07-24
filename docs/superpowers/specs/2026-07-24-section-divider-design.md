# Design Spec: Hero Fullscreen & Glowing Diamond Glass Section Dividers

Spesifikasi teknis ini merinci rencana pembaruan Hero section menjadi *100% Fullscreen* (`min-h-dvh`), serta penyisipan komponen pembatas antar section bergaya *Glowing Diamond Glass Divider* di `components/HomeView.vue`.

## 🎯 Target & Manfaat

1. **Hero Fullscreen Presence**: Memastikan section Hero di paling atas mengisi 100% tinggi viewport layar (`min-h-dvh`), memberikan impresi pertama yang kuat dan megah.
2. **Compact Sub-Sections**: Menjaga seluruh section ringkasan di bawah Hero tetap kompak (`min-h-0 py-10 md:py-14`).
3. **Editorial Glass Dividers**: Menyisipkan garis pembatas gradien kaca dengan titik cahaya berlian menyala (`❖`) di antara setiap section pada beranda.

---

## 🎨 1. Struktur Pembatas Antar Section (`components/HomeView.vue`)

Pembatas yang disisipkan di antara section:
```html
<div class="w-full flex items-center justify-center my-6 opacity-80 pointer-events-none">
  <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-line-dark to-brass/30"></div>
  <div class="px-4 flex items-center gap-2 font-mono text-[9px] text-text-faint">
    <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
    <span class="text-[9px] text-brass-soft/60 uppercase tracking-widest font-bold">❖</span>
    <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
  </div>
  <div class="h-[1px] flex-1 bg-gradient-to-l from-transparent via-line-dark to-brass/30"></div>
</div>
```

---

## 📐 2. Penyesuaian Kelas Section (`components/HomeView.vue`)

- **Hero Section**:
  `class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-2 md:pt-6 pb-28 md:pb-6"`
- **Sub-Sections** (*Career Map, Recent Experience, Education, Projects, Key Skills*):
  `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`

---

## 🧪 Rencana Verifikasi

1. **Pengujian Visual & Responsivitas**:
   - Jalankan `npm run dev`.
   - Verifikasi Hero section mengisi 100% layar (fullscreen).
   - Verifikasi garis pembatas berlian menyala ter-render sempurna di antara section.
2. **Build Validation**:
   - Jalankan `npm run type-check` (0 errors).
   - Jalankan `npm run generate` (PASS).
