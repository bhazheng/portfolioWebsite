# Design Spec: Full Migration to Pure Vue 3 (Vite + Vue Router)

## Overview
Migrate Akbar Lucky Basuki's portfolio website from Astro 7 to a pure Vue 3 Single Page Application (SPA) powered by Vite, Vue Router 4, and Tailwind CSS v4. The application will be deployed as a static SPA compatible with Cloudflare Workers / Cloudflare Pages.

## Goals & Objectives
1. **Full Vue 3 Ecosystem**: Transition all Astro pages and components into idiomatic Vue 3 Single File Components (SFCs) using `<script setup>`.
2. **Seamless Client-Side Routing**: Use Vue Router 4 for instantaneous page transitions without browser reloads.
3. **Reactive Hero Dashboard Component**: Convert `HeroDashboard.astro` into `HeroDashboard.vue` utilizing Vue 3 reactivity (`ref`, `computed`, `:class`, `@click`, `@mousemove`).
4. **Build & Deployment Parity**: Preserve all Tailwind CSS v4 design tokens (Ink, Brass, Teal) and Cloudflare deployment scripts.

---

## Technical Architecture

### Target File Structure
```
portfolioWebsite/
├── index.html                     # Vite entry HTML with fonts and mount element
├── package.json                   # Dependencies: vue, vue-router, vite, @vitejs/plugin-vue, tailwindcss
├── vite.config.js                 # Vite configuration with @vitejs/plugin-vue
├── wrangler.jsonc                 # Cloudflare configuration pointing to dist
├── src/
│   ├── main.js                    # Vue 3 bootstrap entry point
│   ├── App.vue                    # Root component layout (Navbar + router-view + Footer)
│   ├── router/
│   │   └── index.js               # Vue Router configuration for 8 pages
│   ├── styles/
│   │   └── global.css             # Tailwind v4 import and custom color tokens
│   ├── components/
│   │   ├── Navbar.vue             # Navigation header with router-links
│   │   ├── Footer.vue             # Global footer component
│   │   └── HeroDashboard.vue      # Reactive SVG dashboard with tab switcher & tooltip
│   └── views/
│       ├── HomeView.vue           # Index home page view
│       ├── ProjectsView.vue       # Projects portfolio page view
│       ├── ExperienceView.vue     # Work experience page view
│       ├── EducationView.vue      # Education & Bangkit ML view
│       ├── SkillsView.vue         # Key skills grid view
│       ├── ContactView.vue        # Contact page view
│       ├── PrivacyView.vue        # Privacy policy view
│       └── TermsView.vue          # Terms of service view
```

---

## Vue 3 Component Specifications

### 1. `src/components/HeroDashboard.vue`
- Uses `<script setup>` with Vue 3 reactive state:
  - `activeMetric = ref('mnr')`
  - `tooltip = reactive({ visible: false, x: 0, y: 0, period: '', val: '', badge: '' })`
  - `currentDataset = computed(() => DATASETS[activeMetric.value])`
- SVG elements (`<path>`, `<rect>`, `<circle>`) bound dynamically via `:d`, `:cx`, `:cy`, `:height`, `:y`.
- Smooth CSS transitions applied via Tailwind classes (`transition-all duration-500 ease-in-out`).

### 2. `src/components/Navbar.vue`
- Replaces standard `<a>` tags with `<router-link to="...">`.
- Uses active link styling (`router-link-active`) to automatically highlight the current page in brass-soft color.

### 3. `src/App.vue`
```vue
<template>
  <div class="min-h-screen bg-ink text-paper flex flex-col font-body selection:bg-brass/20 selection:text-brass-soft">
    <Navbar />
    <main class="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
```

---

## Package Dependencies Migration (`package.json`)
Remove Astro dependencies and install Vue 3 core packages:
- `vue` (^3.5.0)
- `vue-router` (^4.5.0)
- `@vitejs/plugin-vue` (^5.2.0)
- `vite` (^6.0.0)
- `@tailwindcss/vite` (^4.0.0)
- `tailwindcss` (^4.0.0)

Build script:
- `"dev": "vite"`
- `"build": "vite build"`
- `"preview": "vite preview"`

---

## Verification & Deployment
- Run `vite build` to verify clean bundle generation to `dist/`.
- Ensure all 8 routes render properly and hero SVG dashboard reactivity works smoothly.
