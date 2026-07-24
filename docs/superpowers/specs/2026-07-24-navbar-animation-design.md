# Design Spec: Smart Scroll & Tactile Click Animation for Navbar

Spesifikasi teknis ini merinci rencana penambahan animasi transisi pada navbar desktop dan mobile bottom dock, mencakup perilaku deteksi scroll (*Smart Scroll*) dan umpan balik taktil saat tombol menu diklik (*Tactile Click Bounce*).

## 🎯 Target & Manfaat

1. **Efisiensi Ruang Layar (Smart Scroll)**: Menyembunyikan navigasi secara otomatis saat pengguna menggulir ke bawah (*scroll down*) dan menampilkannya kembali secara instan saat menggulir ke atas (*scroll up*).
2. **Umpan Balik Taktil (Click Bounce)**: Efek pegas interaktif ketika elemen menu diklik/di-tap, memberikan respon visual instan kepada pengguna.
3. **Optimasi Kinerja**: Menggunakan transisi CSS berbasis akselerasi GPU (transform `translate-y` dan `scale`) untuk memastikan pergerakan berjalan lancar di 60 FPS pada perangkat seluler.

---

## ⚙️ Logika JavaScript (Smart Scroll)

Logika deteksi arah guliran halaman ditempatkan di dalam komponen `components/Navbar.vue`:

```typescript
import { ref, onMounted, onUnmounted } from 'vue';

const isNavbarVisible = ref(true);
let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;
  
  // Selalu tampilkan navbar di bagian paling atas halaman
  if (currentScrollY <= 20) {
    isNavbarVisible.value = true;
    return;
  }
  
  // Deteksi arah scroll
  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    // Scroll down: Sembunyikan
    isNavbarVisible.value = false;
  } else if (currentScrollY < lastScrollY) {
    // Scroll up: Tampilkan
    isNavbarVisible.value = true;
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

## 🎨 CSS & Micro-interactions (Tailwind CSS)

### 1. Animasi Klik / Tap (`NuxtLink` Elements)
Ketika pengguna mengklik item navigasi, ikon akan mengecil sejenak ke `90%` skala aslinya:
- Tambahkan kelas: `transition-transform duration-200 ease-out active:scale-90 active:translate-y-0`

### 2. Transisi Sembunyi/Tampil
- **Desktop Header (`header` di `Navbar.vue`)**:
  - CSS Classes: `transition-all duration-300 ease-in-out`
  - Aktif (Tampil): `translate-y-0 opacity-100`
  - Sembunyi: `-translate-y-24 opacity-0 pointer-events-none`
- **Mobile Bottom Dock (`nav` di `Navbar.vue`)**:
  - CSS Classes: `transition-all duration-300 ease-in-out`
  - Aktif (Tampil): `translate-y-0 opacity-100`
  - Sembunyi: `translate-y-24 opacity-0 pointer-events-none`

---

## 🧪 Rencana Verifikasi

### Pengujian Responsif Lokal
1. Jalankan `npm run dev` dan scroll ke bawah pada halaman beranda portofolio.
2. Pastikan navbar desktop menghilang ke atas, dan dock mobile menghilang ke bawah.
3. Klik salah satu tautan dan pastikan efek mengecil sejenak (*scale pop*) terasa responsif.

### Pengujian Build Statis
1. Jalankan `npm run generate` untuk memastikan kode transisi dikompilasi dengan sukses.
