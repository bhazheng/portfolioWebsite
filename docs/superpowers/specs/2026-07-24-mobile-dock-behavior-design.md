# Design Spec: Morphing Mobile Bottom Navigation Dock

Spesifikasi teknis ini merinci rencana penerapan interaksi menyusut melingkar (*morphing circle*) pada mobile bottom dock di `portfolioWebsite` untuk mengoptimalkan ruang visual saat digulir ke bawah (*scroll down*), sekaligus menyajikan tautan halaman aktif di tengah lingkaran secara dinamis.

## 🎯 Target & Manfaat

1. **Morphing Circle Interaction**: Mengubah bentuk dock dari pill memanjang menjadi tombol lingkaran sempurna setinggi 56px (`w-14 h-14`) saat mendeteksi scroll ke bawah.
2. **Keterbacaan Halaman Aktif**: Menyembunyikan seluruh tautan menu non-aktif saat menyusut dan memusatkan ikon rute yang sedang aktif di tengah-tengah dock melingkar.
3. **Restorasi Dinamis**: Melebarkan kembali dock secara penuh jika tombol lingkaran tersebut diklik atau jika pengguna menggulir halaman ke atas (*scroll up*).
4. **Kelancaran Animasi**: Transisi lebar (`width`), padding, dan visibilitas ikon dianimasikan dengan pegas elastis Tailwind (`ease-spring`).

---

## 🏗️ Struktur Templat & CSS (`Navbar.vue`)

### 1. Tag Navigasi Utama (Morphing Container)
```html
<nav 
  class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] h-14 bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full flex items-center justify-around shadow-glass-nav transition-all duration-300 ease-spring"
  :class="isDockMinimized ? 'w-14 px-0 cursor-pointer' : 'w-[92%] max-w-[420px] px-4'"
  @click="isDockMinimized ? isDockMinimized = false : null"
>
```

### 2. Tag Item Tautan (`NuxtLink`)
Menyembunyikan menu non-aktif secara dinamis jika `isDockMinimized` bernilai `true`:
```html
<NuxtLink
  v-for="item in navItems"
  :key="item.path"
  :to="item.path"
  class="group relative flex items-center justify-center transition-all duration-200 ease-out"
  :class="[
    route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner w-10 h-10 rounded-full' : 'text-text-secondary border border-transparent w-10 h-10 rounded-full hover:text-paper hover:bg-glass-hover',
    route.path === item.path ? 'flex' : (isDockMinimized ? 'hidden' : 'flex')
  ]"
>
  <!-- Floating Tooltip -->
  <span 
    v-if="!isDockMinimized"
    class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-ink border border-line-dark text-[8px] font-mono uppercase tracking-wider rounded shadow-badge opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 group-hover:-translate-y-1 transition-all duration-200"
  >
    {{ item.name }}
  </span>

  <!-- Icon -->
  <i :class="[item.icon, 'text-lg transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1']"></i>
</NuxtLink>
```

---

## ⚙️ Logika JavaScript (Scroll Synchronization)

```typescript
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const isNavbarVisible = ref(true);
const isDockMinimized = ref(false);
let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY <= 20) {
    isNavbarVisible.value = true;
    isDockMinimized.value = false;
    return;
  }
  
  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    // Scroll Down: Sembunyikan header atas, ciutkan dock bawah
    isNavbarVisible.value = false;
    isDockMinimized.value = true;
  } else if (currentScrollY < lastScrollY) {
    // Scroll Up: Tampilkan header atas, lebarkan dock bawah
    isNavbarVisible.value = true;
    isDockMinimized.value = false;
  }
  
  lastScrollY = currentScrollY;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
```

---

## 🧪 Rencana Verifikasi

### Pengujian Responsif Lokal
1. Jalankan `npm run dev` dan buka beranda portofolio pada mode mobile responsif.
2. Gulir layar ke bawah: verifikasi dock bawah menyusut menjadi lingkaran dan hanya menampilkan ikon halaman aktif.
3. Klik tombol lingkaran tersebut: verifikasi dock melebar kembali secara instan dan menampilkan semua menu.
