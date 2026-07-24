# Design Spec: Migrasi ke Nuxt 3 Static Site Generation (SSG)

Spesifikasi teknis ini merinci rencana migrasi untuk `portfolioWebsite` (Akbar Lucky Basuki Portfolio) dari arsitektur SPA berbasis Vite + Vue 3 ke **Nuxt 3 dengan Static Site Generation (SSG)** untuk optimasi performa dan deployment statis di Cloudflare.

## 🎯 Target & Manfaat Migrasi

1. **Static Site Generation (SSG)**: Mengompilasi dan mengekspor seluruh rute statis ke folder `.output/public` menggunakan `nuxi generate`.
2. **Optimasi Struktur Berkas**: Menyelaraskan komponen dan halaman dengan struktur bawaan Nuxt (`/pages`, `/components`, `/assets`).
3. **Penyederhanaan Routing**: Menggunakan file-based routing otomatis bawaan Nuxt untuk menggantikan konfigurasi manual `vue-router`.
4. **Optimasi SEO Terintegrasi**: Menggunakan fungsi composable `useHead` bawaan Nuxt di setiap halaman secara deklaratif.

---

## 🏗️ Struktur Berkas & Pemetaan Rute

### Perubahan Struktur Folder

* `/src/views/` dipindahkan ke `/pages/` (Konvensi routing Nuxt).
* `/src/components/` dipindahkan ke `/components/` (Auto-import komponen global Nuxt).
* `/src/styles/` dipindahkan ke `/assets/styles/` (Penyimpanan aset stylesheet global).
* `/src/App.vue` dikonversi menjadi `/app.vue` di root directory.

### Pemetaan Rute Baru

* `src/views/HomeView.vue` -> `pages/index.vue` (Rute `/`)
* `src/views/ProjectsView.vue` -> `pages/projects.vue` (Rute `/projects`)
* `src/views/ExperienceView.vue` -> `pages/experience.vue` (Rute `/experience`)
* `src/views/EducationView.vue` -> `pages/education.vue` (Rute `/education`)
* `src/views/SkillsView.vue` -> `pages/skills.vue` (Rute `/skills`)
* `src/views/ContactView.vue` -> `pages/contact.vue` (Rute `/contact`)
* `src/views/PrivacyView.vue` -> `pages/privacy.vue` (Rute `/privacy`)
* `src/views/TermsView.vue` -> `pages/terms.vue` (Rute `/terms`)

*Catatan: Semua tag `<router-link>` diubah menjadi `<NuxtLink>`.*

---

## ⚙️ Konfigurasi Nuxt & Setup TailwindCSS v4

Konfigurasi di dalam berkas `nuxt.config.ts` untuk mengintegrasikan TailwindCSS v4 via plugin Vite:

```typescript
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-24',
  
  // Mengaktifkan Server-Side Rendering untuk kebutuhan SSG
  ssr: true,

  // Integrasi Tailwind CSS v4 via plugin Vite
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // Berkas CSS global (Tailwind v4 theme & custom styles)
  css: [
    '~/assets/styles/global.css'
  ],

  // Aktifkan auto-import komponen global
  components: true,
})
```

---

## ☁️ Skrip Build & Konfigurasi Deployment

### package.json (Pembaruan Skrip)

```json
"scripts": {
  "dev": "nuxt dev",
  "build": "nuxt build",
  "generate": "nuxt generate",
  "preview": "nuxt preview",
  "type-check": "vue-tsc --noEmit"
}
```

### wrangler.jsonc (Pembaruan Folder Aset)

Mengubah direktori target aset statis Cloudflare Pages/Workers dari folder bawaan Vite (`dist/client`) ke folder bawaan generasi statis Nuxt (`.output/public`):

```json
  "assets": {
    "directory": "./.output/public",
    "binding": "ASSETS"
  }
```

---

## 🧪 Rencana Verifikasi

### Pemeriksaan Lokal
1. Jalankan `npm run dev` untuk memastikan server lokal berjalan normal tanpa error.
2. Jalankan `npm run generate` untuk memverifikasi proses Static Site Generation (SSG).

### Pemeriksaan Jenis Data (Type Check)
1. Jalankan `npm run type-check` (`vue-tsc --noEmit`) untuk memastikan semua tipe data TypeScript & Vue aman dan bebas error.
