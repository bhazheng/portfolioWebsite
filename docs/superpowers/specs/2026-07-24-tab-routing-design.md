# Design Spec: Tab-Based Navigation for Masked Routing

Spesifikasi teknis ini merinci rencana migrasi sistem navigasi dari model rute URL multi-page (`pages/`) menjadi sistem tab tunggal (*Tab-based State Rendering*) menggunakan state reaktif global Nuxt `useState`. Rencana ini menjamin alamat URL browser selalu terkunci pada domain dasar (`akbarlucky.com`) tanpa subpaths.

## 🎯 Target & Manfaat

1. **URL Masking**: Mencegah browser melakukan pembaruan rute URL di address bar (selalu menampilkan `akbarlucky.com/` saat menjelajahi portofolio).
2. **Instant Transitions**: Perpindahan halaman instan tanpa penundaan rendering router atau pemuatan ulang halaman.
3. **Penyederhanaan Logika**: Konsolidasi perutean ke satu pengontrol utama di `pages/index.vue` dengan memanfaatkan state global reaktif `useState('activeTab')`.
4. **Keamanan Build Statis (SSG)**: Menghindari pembuatan berkas HTML multi-folder terpisah yang berisiko merusak struktur tautan statis di Cloudflare Pages.

---

## 🏗️ Struktur Berkas & Migrasi Komponen

Seluruh berkas halaman Vue akan dikonversi menjadi komponen tampilan:

1. **pages/index.vue** (Pengontrol Utama):
   Merender komponen secara kondisional berdasarkan nilai state `activeTab`.
2. **components/HomeView.vue** (Pindahan dari `pages/index.vue` lama):
   Berisi landing page hero, career timeline journey, dan ringkasan section.
3. **components/ProjectsView.vue** (Pindahan dari `pages/projects.vue` lama):
   Daftar proyek lengkap dan filter interaktif.
4. **components/ExperienceView.vue** (Pindahan dari `pages/experience.vue` lama):
   Daftar riwayat karir lengkap.
5. **components/EducationView.vue** (Pindahan dari `pages/education.vue` lama):
   Riwayat pendidikan akademis dan sertifikasi.
6. **components/SkillsView.vue** (Pindahan dari `pages/skills.vue` lama):
   Peta keahlian dan visualisasi kompetensi.
7. **components/ContactView.vue** (Pindahan dari `pages/contact.vue` lama):
   Formulir kontak dan email.
8. **components/PrivacyView.vue** & **components/TermsView.vue** (Pindahan dari `pages/privacy.vue` dan `pages/terms.vue` lama):
   Dokumen legalitas kebijakan privasi dan ketentuan layanan.

---

## 🔄 Pemetaan State Global & Interaksi Tautan

### State Reaktif Utama (`useState`)
Dideklarasikan di level global:
```typescript
const activeTab = useState('activeTab', () => 'home');
```

### Penyesuaian Komponen `Navbar.vue`
Tautan navigasi diubah menjadi tombol yang memodifikasi state `activeTab` secara langsung:
```html
<button
  v-for="item in navItems"
  :key="item.name"
  @click="activeTab = item.name"
  class="font-mono text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200"
  :class="activeTab === item.name ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
>
  {{ item.name }}
</button>
```

### Penyesuaian Komponen `Footer.vue`
Tautan legalitas footer diperbarui agar mengubah tab aktif ke `privacy` atau `terms`:
```html
<button @click="activeTab = 'privacy'" class="hover:text-brass-soft transition-colors duration-150">Privacy Policy</button>
<button @click="activeTab = 'terms'" class="hover:text-brass-soft transition-colors duration-150">Terms of Service</button>
```

---

## 🧪 Rencana Verifikasi

### Pengujian Lokal
1. Jalankan `npm run dev`.
2. Jelajahi seluruh menu (Home, Experience, Education, Projects, Skills, Contact).
3. Verifikasi bahwa konten berganti secara instan tetapi URL di address bar browser tetap konstan di `localhost:3000/`.
4. Klik tautan Privacy Policy pada footer dan verifikasi dokumen legal ter-render dengan sukses di domain root.

### Pengujian Build & TypeScript
1. Jalankan `npm run type-check` untuk memastikan pemindahan komponen tidak merusak deklarasi tipe TypeScript.
2. Jalankan `npm run generate` untuk memverifikasi kesuksesan proses pre-rendering halaman tunggal statis.
