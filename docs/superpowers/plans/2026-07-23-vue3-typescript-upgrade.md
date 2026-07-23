# Upgrade Vue 3 SPA to TypeScript Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Vue 3 codebase to full TypeScript support (`lang="ts"`), adding `tsconfig.json`, type declarations, and `vue-tsc` verification.

**Architecture:** Install `typescript` and `vue-tsc`. Create `tsconfig.json`, `tsconfig.node.json`, `src/env.d.ts`, and `src/types/dashboard.ts`. Rename entry files to `.ts`, convert all `<script setup>` tags to `lang="ts"`, and verify via `npx vue-tsc --noEmit` and `npx vite build`.

**Tech Stack:** Vue 3, TypeScript 5+, Vite 6, `vue-tsc`.

---

### Task 1: Install TypeScript Dependencies & Configure `tsconfig.json`

**Files:**
- Modify: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `src/env.d.ts`
- Create: `vite.config.ts` (rename from `vite.config.js`)

- [ ] **Step 1: Update `package.json` with TypeScript dependencies**

Add `typescript`, `vue-tsc`, `@types/node` to `devDependencies`.

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 3: Create `tsconfig.node.json` & `src/env.d.ts`**

`tsconfig.node.json`:
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

`src/env.d.ts`:
```ts
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

- [ ] **Step 4: Create `vite.config.ts`**

```ts
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

---

### Task 2: Create Dashboard Interfaces & Rename Entry Files

**Files:**
- Create: `src/types/dashboard.ts`
- Create: `src/main.ts` (delete `src/main.js`)
- Create: `src/router/index.ts` (delete `src/router/index.js`)
- Modify: `index.html`

- [ ] **Step 1: Create `src/types/dashboard.ts`**

```ts
export interface NodeItem {
  cx: number;
  cy: number;
  val: string;
  period: string;
}

export interface MetricDataset {
  xLabels: string[];
  nodes: NodeItem[];
  trendPath: string;
  forecastPath: string;
  areaPath: string;
  fanPath: string;
  barHeights: number[];
  badge: string;
}

export interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  period: string;
  val: string;
}
```

- [ ] **Step 2: Create `src/router/index.ts`**

```ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
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

- [ ] **Step 3: Create `src/main.ts` & update `index.html`**

`src/main.ts`:
```ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
```

`index.html`: Update script tag src to `/src/main.ts`.

---

### Task 3: Add `lang="ts"` to Components & Views and Type Check

**Files:**
- Modify: `src/App.vue`
- Modify: `src/components/Navbar.vue`
- Modify: `src/components/Footer.vue`
- Modify: `src/components/HeroDashboard.vue`
- Modify: `src/views/*.vue`

- [ ] **Step 1: Upgrade `HeroDashboard.vue` to TypeScript**

Add `lang="ts"` and import types from `@/types/dashboard`.

- [ ] **Step 2: Add `lang="ts"` to App.vue, Navbar.vue, Footer.vue, and all Views**

- [ ] **Step 3: Verify TypeScript Type Checking & Vite Build**

Run: `npx vue-tsc --noEmit`
Expected: 0 type errors.

Run: `npx vite build`
Expected: Successful Vite compilation.
