# Full Migration to Pure Vue 3 (Vite + Vue Router) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio from Astro 7 to a pure Vue 3 Single Page Application (SPA) powered by Vite, Vue Router 4, and Tailwind CSS v4.

**Architecture:** Replace Astro config with Vite + `@vitejs/plugin-vue`. Bootstrap Vue 3 via `index.html`, `src/main.js`, `src/App.vue`, and `src/router/index.js`. Refactor all components and 8 pages into idiomatic Vue 3 SFCs (`<script setup>`).

**Tech Stack:** Vue 3, Vue Router 4, Vite, Tailwind CSS v4.

## Global Constraints
- **Framework Floor**: Vue 3.5+, Vue Router 4.5+, Vite 6.0+.
- **Pure Vue SFCs**: Use `<template>`, `<script setup>`, and `<style>` in all components and views.
- **Styling Tokens**: Preserve all CSS variables (`--color-ink`, `--color-brass-soft`, `--color-teal`) in `src/styles/global.css`.

---

### Task 1: Update `package.json`, `vite.config.js`, and `index.html`

**Files:**
- Modify: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Delete: `astro.config.mjs`

- [ ] **Step 1: Update `package.json` for Vue 3 & Vite**

```json
{
  "name": "akbar-portfolio-vue",
  "version": "3.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.13",
    "vue-router": "^4.5.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.1",
    "vite": "^6.0.7"
  }
}
```

- [ ] **Step 2: Create `vite.config.js`**

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

- [ ] **Step 3: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Akbar Lucky Basuki — Business Analyst & Data Storyteller</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
  </head>
  <body class="bg-ink text-paper selection:bg-brass/20 selection:text-brass-soft font-body min-h-screen">
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

### Task 2: Create Vue 3 Bootstrap Files (`src/main.js`, `src/App.vue`, `src/router/index.js`)

**Files:**
- Create: `src/main.js`
- Create: `src/App.vue`
- Create: `src/router/index.js`

- [ ] **Step 1: Create `src/router/index.js`**

```js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue') },
  { path: '/experience', name: 'experience', component: () => import('../views/ExperienceView.vue') },
  { path: '/education', name: 'education', component: () => import('../views/EducationView.vue') },
  { path: '/skills', name: 'skills', component: () => import('../views/SkillsView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  { path: '/privacy', name: 'privacy', component: () => import('../views/PrivacyView.vue') },
  { path: '/terms', name: 'terms', component: () => import('../views/TermsView.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
```

- [ ] **Step 2: Create `src/App.vue`**

```vue
<template>
  <div class="min-h-screen flex flex-col bg-ink text-paper font-body selection:bg-brass/20 selection:text-brass-soft">
    <Navbar />
    <main class="flex-1 w-full max-w-[1100px] mx-auto px-6 py-6 max-[480px]:px-4">
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

- [ ] **Step 3: Create `src/main.js`**

```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
```

---

### Task 3: Convert Core Components (`Navbar.vue`, `Footer.vue`, `HeroDashboard.vue`)

**Files:**
- Create: `src/components/Navbar.vue`
- Create: `src/components/Footer.vue`
- Create: `src/components/HeroDashboard.vue`

- [ ] **Step 1: Create `src/components/Navbar.vue`**

```vue
<template>
  <header class="sticky top-0 z-50 bg-ink/80 backdrop-blur-md border-b border-line-dark">
    <div class="max-w-[1100px] mx-auto px-6 py-3.5 flex items-center justify-between">
      <router-link to="/" class="font-display font-bold text-base text-paper tracking-tight hover:text-brass-soft transition-colors">
        Akbar Lucky Basuki
      </router-link>
      <nav class="flex gap-4 font-mono text-xs text-text-muted">
        <router-link to="/" class="hover:text-brass-soft transition-colors" active-class="text-brass-soft font-semibold">Home</router-link>
        <router-link to="/experience" class="hover:text-brass-soft transition-colors" active-class="text-brass-soft font-semibold">Experience</router-link>
        <router-link to="/projects" class="hover:text-brass-soft transition-colors" active-class="text-brass-soft font-semibold">Projects</router-link>
        <router-link to="/skills" class="hover:text-brass-soft transition-colors" active-class="text-brass-soft font-semibold">Skills</router-link>
        <router-link to="/contact" class="hover:text-brass-soft transition-colors" active-class="text-brass-soft font-semibold">Contact</router-link>
      </nav>
    </div>
  </header>
</template>
```

- [ ] **Step 2: Create `src/components/Footer.vue`**

```vue
<template>
  <footer class="border-t border-line-dark bg-ink py-8 mt-16 text-center font-mono text-xs text-text-muted">
    <div class="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p>© 2026 Akbar Lucky Basuki. All rights reserved.</p>
      <div class="flex gap-4">
        <router-link to="/privacy" class="hover:text-brass-soft">Privacy</router-link>
        <router-link to="/terms" class="hover:text-brass-soft">Terms</router-link>
      </div>
    </div>
  </footer>
</template>
```

- [ ] **Step 3: Create `src/components/HeroDashboard.vue`**

```vue
<template>
  <div class="flex flex-col items-center w-full max-w-[480px]">
    <!-- Metric Tab Switcher Bar -->
    <div class="flex gap-2 mb-3 bg-glass border border-line-dark p-1.5 rounded-full shadow-glass-inner" role="tablist">
      <button
        v-for="key in ['mnr', 'indobert', 'wayang']"
        :key="key"
        type="button"
        role="tab"
        :aria-selected="activeMetric === key"
        @click="activeMetric = key"
        :class="[
          'px-3 py-1.5 rounded-full font-mono text-[10px] font-semibold tracking-wider transition-all duration-200',
          activeMetric === key ? 'bg-brass-soft text-ink shadow-sm' : 'text-text-muted hover:text-paper hover:bg-glass-ghost'
        ]"
      >
        {{ key === 'mnr' ? 'MnR Ops' : key === 'indobert' ? 'IndoBERT NLP' : 'Wayang CV' }}
      </button>
    </div>

    <!-- Main Graphic Card Container -->
    <div class="relative w-full bg-glass border border-brass/30 rounded-2xl p-2.5 shadow-avatar overflow-hidden hover:border-brass-soft transition-all duration-300 ease-spring" id="panel-hero-dashboard">
      <!-- Floating Glassmorphism Tooltip -->
      <div
        v-show="tooltip.visible"
        :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
        class="absolute z-20 pointer-events-none transition-opacity duration-150 ease-out bg-glass-card border border-brass/30 backdrop-blur-md rounded-xl p-2.5 shadow-glass text-xs min-w-[140px]"
      >
        <div class="font-mono text-[9px] uppercase tracking-wider text-text-faint">{{ tooltip.period }}</div>
        <div class="font-display font-extrabold text-sm text-brass-soft mt-0.5">{{ tooltip.val }}</div>
        <div class="font-mono text-[8px] text-teal mt-1 inline-flex items-center gap-1">
          <span class="w-1 h-1 rounded-full bg-teal"></span> {{ currentDataset.badge }}
        </div>
      </div>

      <!-- Aspect Square SVG -->
      <div class="w-full aspect-square bg-gradient-to-br from-ink-2 to-ink rounded-xl flex items-center justify-center border border-line-dark shadow-inner overflow-hidden relative">
        <svg class="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.2" />
              <stop offset="50%" stop-color="var(--color-brass-soft)" stop-opacity="0.8" />
              <stop offset="100%" stop-color="var(--color-teal)" stop-opacity="0.2" />
            </linearGradient>
            <linearGradient id="forecastFanGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.15" />
              <stop offset="100%" stop-color="var(--color-teal)" stop-opacity="0.01" />
            </linearGradient>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-brass-soft)" stop-opacity="0.75" />
              <stop offset="100%" stop-color="var(--color-brass)" stop-opacity="0.15" />
            </linearGradient>
            <linearGradient id="barForecastGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-brass-soft)" stop-opacity="0.3" />
              <stop offset="100%" stop-color="var(--color-brass)" stop-opacity="0.05" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.15" />
              <stop offset="100%" stop-color="var(--color-ink)" stop-opacity="0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Grid Lines -->
          <g class="opacity-20" stroke="var(--color-line-dark)" stroke-width="1">
            <line x1="45" y1="80" x2="370" y2="80" stroke-dasharray="2 2" />
            <line x1="45" y1="150" x2="370" y2="150" stroke-dasharray="2 2" />
            <line x1="45" y1="220" x2="370" y2="220" stroke-dasharray="2 2" />
            <line x1="45" y1="290" x2="370" y2="290" stroke-dasharray="2 2" />
            <line x1="45" y1="360" x2="370" y2="360" stroke-width="1.5" />
            <line x1="45" y1="50" x2="45" y2="360" stroke-width="1.5" />
            <line x1="120" y1="50" x2="120" y2="360" stroke-dasharray="2 2" />
            <line x1="200" y1="50" x2="200" y2="360" stroke-dasharray="2 2" />
            <line x1="260" y1="50" x2="260" y2="360" stroke-dasharray="4 4" stroke="var(--color-teal)" stroke-opacity="0.4" stroke-width="1.5" />
            <line x1="320" y1="50" x2="320" y2="360" stroke-dasharray="2 2" />
          </g>

          <!-- X-Axis Labels -->
          <g fill="var(--color-text-muted)" class="font-mono text-[9px] select-none opacity-50" text-anchor="middle">
            <text v-for="(lbl, i) in currentDataset.xLabels" :key="i" :x="i === 0 ? 120 : i === 1 ? 200 : i === 2 ? 260 : 320" y="378" :fill="i === 2 ? 'var(--color-teal)' : undefined" :font-weight="i === 2 ? 'bold' : undefined">{{ lbl }}</text>
          </g>

          <path :d="currentDataset.fanPath" fill="url(#forecastFanGradient)" class="opacity-80 transition-all duration-500 ease-in-out" />
          <path :d="currentDataset.areaPath" fill="url(#areaGradient)" class="transition-all duration-500 ease-in-out" />
          <path :d="currentDataset.trendPath" fill="none" stroke="url(#waveGradient)" stroke-width="3" filter="url(#glow)" class="transition-all duration-500 ease-in-out" />
          <path :d="currentDataset.forecastPath" fill="none" stroke="var(--color-brass-soft)" stroke-width="3" stroke-dasharray="6 4" filter="url(#glow)" class="transition-all duration-500 ease-in-out" />

          <!-- Nodes -->
          <g v-for="(n, i) in currentDataset.nodes" :key="i" class="cursor-pointer" @mouseenter="showTooltip($event, n)" @mousemove="updateTooltip($event)" @mouseleave="hideTooltip">
            <circle :cx="n.cx" :cy="n.cy" r="14" fill="transparent" />
            <circle :cx="n.cx" :cy="n.cy" r="10" fill="var(--color-brass-soft)" opacity="0.2" class="pulse-ring" />
            <circle :cx="n.cx" :cy="n.cy" r="4" fill="var(--color-brass-soft)" class="glow-dot" />
          </g>

          <!-- Bars -->
          <g class="bar-chart">
            <rect v-for="(h, i) in currentDataset.barHeights" :key="i" :x="60 + i * 40" :y="360 - h" width="12" :height="h" rx="2" fill="url(#barGradient)" class="anim-bar opacity-30 transition-all duration-500 ease-in-out" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const DATASETS = {
  mnr: {
    xLabels: ['Q1', 'Q2', 'NOW', 'FCST'],
    nodes: [
      { cx: 45, cy: 290, val: '45% Optim', period: 'Q1 2025' },
      { cx: 120, cy: 190, val: '65% Optim', period: 'Q2 2025' },
      { cx: 260, cy: 210, val: '94% Optim', period: 'NOW (Q3)' },
      { cx: 320, cy: 140, val: '112% Target', period: 'Q4 FCST' }
    ],
    trendPath: 'M 45 290 Q 120 180, 200 250 T 260 210',
    forecastPath: 'M 260 210 Q 310 150, 360 100',
    areaPath: 'M 45 360 L 45 290 Q 120 180, 200 250 T 260 210 L 260 360 Z',
    fanPath: 'M 260 210 L 370 60 L 370 260 Z',
    barHeights: [80, 110, 95, 130, 115, 140, 170, 210],
    badge: 'Live BI Operations'
  },
  indobert: {
    xLabels: ['Ep 1', 'Ep 3', 'Ep 5', 'Target'],
    nodes: [
      { cx: 45, cy: 270, val: '55.2% F1', period: 'Epoch 1' },
      { cx: 120, cy: 210, val: '72.8% F1', period: 'Epoch 3' },
      { cx: 260, cy: 150, val: '91.4% F1', period: 'Epoch 5 (NOW)' },
      { cx: 320, cy: 110, val: '95.0% F1', period: 'Deploy Target' }
    ],
    trendPath: 'M 45 270 Q 120 230, 200 180 T 260 150',
    forecastPath: 'M 260 150 Q 310 120, 360 80',
    areaPath: 'M 45 360 L 45 270 Q 120 230, 200 180 T 260 150 L 260 360 Z',
    fanPath: 'M 260 150 L 370 50 L 370 220 Z',
    barHeights: [60, 90, 120, 140, 160, 190, 220, 250],
    badge: 'IndoBERT NLP Sentiment'
  },
  wayang: {
    xLabels: ['B 10', 'B 30', 'B 50', 'Val Acc'],
    nodes: [
      { cx: 45, cy: 300, val: '40.5% Acc', period: 'Batch 10' },
      { cx: 120, cy: 220, val: '68.0% Acc', period: 'Batch 30' },
      { cx: 260, cy: 170, val: '89.2% Acc', period: 'Batch 50 (NOW)' },
      { cx: 320, cy: 130, val: '93.5% Prec', period: 'Test Target' }
    ],
    trendPath: 'M 45 300 Q 120 240, 200 190 T 260 170',
    forecastPath: 'M 260 170 Q 310 140, 360 90',
    areaPath: 'M 45 360 L 45 300 Q 120 240, 200 190 T 260 170 L 260 360 Z',
    fanPath: 'M 260 170 L 370 70 L 370 240 Z',
    barHeights: [50, 80, 110, 130, 150, 180, 200, 230],
    badge: 'Wayang CV Classifier'
  }
};

const activeMetric = ref('mnr');
const currentDataset = computed(() => DATASETS[activeMetric.value]);

const tooltip = reactive({ visible: false, x: 0, y: 0, period: '', val: '' });

function showTooltip(e, n) {
  tooltip.period = n.period;
  tooltip.val = n.val;
  tooltip.visible = true;
  updateTooltip(e);
}

function updateTooltip(e) {
  const card = document.getElementById('panel-hero-dashboard');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  tooltip.x = Math.max(10, Math.min(e.clientX - rect.left + 15, rect.width - 150));
  tooltip.y = Math.max(10, e.clientY - rect.top - 40);
}

function hideTooltip() {
  tooltip.visible = false;
}
</script>
```

---

### Task 4: Create Vue 3 Views (`src/views/*.vue`)

**Files:**
- Create: `src/views/HomeView.vue`
- Create: `src/views/ProjectsView.vue`
- Create: `src/views/ExperienceView.vue`
- Create: `src/views/EducationView.vue`
- Create: `src/views/SkillsView.vue`
- Create: `src/views/ContactView.vue`
- Create: `src/views/PrivacyView.vue`
- Create: `src/views/TermsView.vue`

- [ ] **Step 1: Create `src/views/HomeView.vue`**

```vue
<template>
  <div class="flex flex-col gap-16 py-8">
    <div class="grid grid-cols-[1.1fr_0.9fr] gap-8 items-center max-[960px]:grid-cols-1 max-[960px]:gap-6" id="hero">
      <div class="flex flex-col gap-4">
        <div class="font-mono text-[11px] font-semibold tracking-[0.16em] text-brass-soft uppercase inline-flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-brass-soft shadow-[0_0_10px_var(--color-brass-soft)]"></span>
          Business Analyst & Data Storyteller
        </div>
        <h1 class="font-serif italic font-normal text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.15] tracking-tight text-paper">
          Hi, I'm<br />
          <span class="font-display not-italic font-extrabold text-brass-soft tracking-tighter text-[clamp(1.5rem,3vw,2.2rem)] whitespace-nowrap">Akbar <span class="underline decoration-1 underline-offset-4">Lucky</span> Basuki</span>.
        </h1>
        <p class="font-body text-sm font-normal leading-relaxed text-text-secondary max-w-[52ch]">
          An Information Systems graduate from Universitas Brawijaya working as a Business & Data Analyst. I focus on translating complex data points into intuitive dashboard systems, conducting strategic market analysis, and developing machine learning solutions to guide decision-making.
        </p>
        <div class="flex gap-3 flex-wrap">
          <a class="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider bg-brass text-ink rounded-full min-h-10 px-5 py-2.5 shadow-btn-primary hover:bg-brass-soft transition-all" href="mailto:akbarlucky@protonmail.com">Email me</a>
          <router-link class="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider bg-glass-ghost text-paper rounded-full border border-line-dark backdrop-blur-sm min-h-10 px-5 py-2.5 hover:border-brass-soft hover:text-brass-soft transition-all" to="/projects">View Projects →</router-link>
        </div>
      </div>
      <div class="flex justify-center items-center relative max-[960px]:order-first">
        <HeroDashboard />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroDashboard from '../components/HeroDashboard.vue';
</script>
```

- [ ] **Step 2: Create remaining view files (`ProjectsView.vue`, `ExperienceView.vue`, `EducationView.vue`, `SkillsView.vue`, `ContactView.vue`, `PrivacyView.vue`, `TermsView.vue`)**

---

### Task 5: Clean Up Astro Files & Verify Build

**Files:**
- Delete: `src/pages/`
- Delete: `src/layouts/`
- Delete: `src/components/*.astro`

- [ ] **Step 1: Install dependencies**

Run: `npm install`

- [ ] **Step 2: Build project**

Run: `npx vite build`
Expected: Successful Vite compilation producing `dist/`.

- [ ] **Step 3: Update Graphify Knowledge Graph**

Run: `graphify update .`
