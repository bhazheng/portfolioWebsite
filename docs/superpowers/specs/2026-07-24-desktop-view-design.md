# Design Spec: Desktop View UI/UX Pro Max Polish

Spesifikasi teknis ini merinci rencana peningkatan kualitas visual dan pengalaman pengguna pada tampilan desktop portofolio (`portfolioWebsite`), mencakup transisi antar tab berbasis Vue `<transition>`, konsistensi jarak atas (*spacing alignment*), serta efek elevasi kartu informasi (*card elevation glow*).

## 🎯 Target & Manfaat

1. **Animasi Transisi Mulus**: Transisi `page-fade` GPU-accelerated halus (0.25s) saat berganti tab navigasi di layar desktop/web.
2. **Konsistensi Spacing Atas**: Penyelarasan jarak dari navbar melayang ke awal konten/judul halaman (konsisten 24px / 88px dari tepi layar) di seluruh 8 menu tab.
3. **Efek Elevasi Kartu Desktop**: Efek terangkat elastis (`hover:-translate-y-1.5`) dengan garis batas keemasan yang menyala (`hover:border-brass-soft`) dan pencahayaan latar (*glow shadow*) pada kartu informasi.

---

## 🎬 1. Vue Transition & CSS (`pages/index.vue` & `assets/styles/global.css`)

### Container Wrapper di `pages/index.vue`
```vue
<template>
  <div class="flex-1 flex flex-col w-full">
    <transition name="page-fade" mode="out-in">
      <HomeView v-if="activeTab === 'home'" key="home" />
      <ExperienceView v-else-if="activeTab === 'experience'" key="experience" />
      <EducationView v-else-if="activeTab === 'education'" key="education" />
      <ProjectsView v-else-if="activeTab === 'projects'" key="projects" />
      <SkillsView v-else-if="activeTab === 'skills'" key="skills" />
      <ContactView v-else-if="activeTab === 'contact'" key="contact" />
      <PrivacyView v-else-if="activeTab === 'privacy'" key="privacy" />
      <TermsView v-else-if="activeTab === 'terms'" key="terms" />
    </transition>
  </div>
</template>
```

### CSS Animation Rules di `assets/styles/global.css`
```css
/* Page Transition Effect */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.22s ease-out, transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
```

---

## 📐 2. Penyelarasan Spacing (`components/HomeView.vue` & Sub-Views)

- **`components/HomeView.vue` Hero Section Wrapper**:
  Ubah padding atas Hero dari `md:pt-16` menjadi `md:pt-6`:
  `pt-2 md:pt-6 pb-28 md:pb-6`
- **Sub-Views (`ProjectsView`, `ExperienceView`, `EducationView`, `SkillsView`, `ContactView`, `PrivacyView`, `TermsView`)**:
  Gunakan utilitas responsif:
  `py-4 md:py-6`

---

## ✨ 3. Elevasi Kartu & Micro-interactions

Struktur kelas kartu desktop di seluruh sub-komponen:
```html
class="bg-glass-card border border-line-dark rounded-xl p-5 shadow-glass-inner hover:-translate-y-1.5 hover:border-brass-soft hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)] active:scale-[0.99] transition-all duration-300 ease-spring"
```

---

## 🧪 Rencana Verifikasi

### Pengujian Responsif Desktop
1. Jalankan `npm run dev` pada browser desktop.
2. Klik bergantian menu tab (Home, Experience, Education, Projects, Skills, Contact).
3. Verifikasi transisi halaman bergerak halus tanpa hentakan posisi vertikal.
4. Arahkan kursor ke kartu proyek/pengalaman: verifikasi efek elevasi `-1.5px` dan cermin cahaya keemasan.

### Pengujian Build Statis & TypeScript
1. Jalankan `npm run type-check` untuk memastikan tipe TypeScript aman.
2. Jalankan `npm run generate` untuk mengonfirmasi kompilasi statis Nitro 100% sukses.
