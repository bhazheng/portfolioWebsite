# Design Spec: Mobile Bottom Navigation Dock

Spesifikasi teknis ini merinci rencana penempatan navigasi bawah melayang (macOS/iOS Dock style) untuk tampilan mobile pada proyek `portfolioWebsite` guna mengoptimalkan aksesibilitas jempol (*thumb-zone usability*).

## 🎯 Target & Manfaat

1. **Aksesibilitas Jempol**: Memindahkan seluruh navigasi mobile ke area jangkauan jempol di bagian bawah layar.
2. **Estetika Premium (macOS Dock style)**: Menggunakan glassmorphic pill melayang dengan ikon-ikon representatif minimalis.
3. **Tooltip Interaktif**: Menampilkan nama rute/halaman secara dinamis saat hover atau sentuhan menggunakan CSS transitions.
4. **Magnifikasi Ikon**: Efek pembesaran ikon secara halus saat interaksi (`scale-120` dan geser ke atas) menyerupai perilaku macOS Dock.

---

## 🏗️ Desain Komponen & CSS

### Wadah Dock Utama (Pill Container)
Wadah dock diletakkan di bagian bawah layar tengah, melayang secara absolut dengan safe-area spacing:
```html
<nav class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] h-14 w-[92%] max-w-[420px] bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full px-4 flex items-center justify-around gap-1 shadow-glass-nav">
  <!-- Menu Items -->
</nav>
```

### Gaya Transisi Item Menu
Setiap ikon dibungkus dalam tag `<NuxtLink class="group relative ...">`. Struktur rute internal:

```html
<NuxtLink
  v-for="item in navItems"
  :key="item.path"
  :to="item.path"
  class="group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
  active-class="text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner"
  :class="route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
>
  <!-- Floating Tooltip -->
  <span class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-ink-2 border border-line-dark text-[8px] font-mono uppercase tracking-wider rounded shadow-badge opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200">
    {{ item.name }}
  </span>

  <!-- Icon -->
  <i :class="[item.icon, 'text-lg transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1']"></i>
</NuxtLink>
```

---

## 🗺️ Pemetaan Menu & Ikon

```typescript
const navItems = [
  { name: 'home', path: '/', icon: 'ph ph-house' },
  { name: 'experience', path: '/experience', icon: 'ph ph-briefcase' },
  { name: 'education', path: '/education', icon: 'ph ph-graduation-cap' },
  { name: 'projects', path: '/projects', icon: 'ph ph-code' },
  { name: 'skills', path: '/skills', icon: 'ph ph-wrench' },
  { name: 'contact', path: '/contact', icon: 'ph ph-paper-plane-tilt' }
];
```

---

## 🧪 Rencana Verifikasi

### Pemeriksaan Lokal
1. Jalankan server lokal `npm run dev` dan buka mode inspeksi responsive mobile (Chrome DevTools).
2. Verifikasi keterbacaan tooltip dan animasi pembesaran ikon saat disentuh/di-hover.

### Uji Build & Type Check
1. Pastikan proses build statis `npm run generate` sukses.
2. Jalankan `npm run type-check` untuk memastikan tipe TypeScript aman.
