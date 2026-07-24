# Nuxt 3 SSG Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate `portfolioWebsite` from a Vite + Vue 3 SPA setup to a Nuxt 3 Static Site Generation (SSG) architecture deployed on Cloudflare Pages.

**Architecture:** A file-based routing architecture using Nuxt's SSR engine compiled statically via `nuxi generate`, with `@tailwindcss/vite` configuration integrated directly into Nuxt's Vite pipeline.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript, TailwindCSS v4, Vite, `@nuxt/test-utils`, Vitest.

## Global Constraints

- Target compilation directory: `.output/public`
- Package manager: npm
- Router: Nuxt file-system routing (replace `vue-router` import paths and configuration)
- Component auto-imports: Enabled (allow Nuxt to automatically discover components in `/components/`)

---

### Task 1: Initialize Nuxt Config and Install Dependencies

**Files:**
- Modify: `package.json`
- Create: `nuxt.config.ts`
- Create: `tsconfig.json`
- Modify: `tsconfig.node.json`
- Create: `tests/basic.test.ts`

**Interfaces:**
- Consumes: Existing dependencies in `package.json`
- Produces: Working Nuxt 3 foundation with `@tailwindcss/vite` and Vitest test harness

- [ ] **Step 1: Write the failing test**

Create `tests/basic.test.ts`:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('NUXT SSG Bootstrap', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('renders index page successfully', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Akbar Lucky Basuki')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/basic.test.ts`
Expected: FAIL due to missing `nuxt` dependencies and configuration.

- [ ] **Step 3: Write minimal implementation**

Update `package.json` to include Nuxt 3 dependencies:
```json
{
  "name": "akbar-portfolio-vue-ts",
  "version": "3.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "type-check": "vue-tsc --noEmit",
    "test": "vitest"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@vueuse/core": "^14.3.0",
    "tailwindcss": "^4.0.0",
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@nuxt/test-utils": "^3.15.1",
    "@types/node": "^22.10.2",
    "happy-dom": "^15.11.7",
    "nuxt": "^3.15.1",
    "playwright-core": "^1.49.1",
    "typescript": "^5.7.2",
    "vitest": "^2.1.8",
    "vue-tsc": "^2.2.0"
  }
}
```

Create `nuxt.config.ts`:
```typescript
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-24',
  ssr: true,
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  css: [
    '~/assets/styles/global.css'
  ],
  components: true
})
```

Update `tsconfig.json`:
```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

Delete `tsconfig.node.json` since Nuxt manages its own tsconfig context.

- [ ] **Step 4: Run test to verify it passes**

Install dependencies and run tests:
Run: `npm install && npx nuxt prepare && npx vitest run tests/basic.test.ts`
Expected: PASS (once initial app file is resolved in next tasks; we will mock a basic page if needed).

- [ ] **Step 5: Commit**

```bash
git add package.json nuxt.config.ts tsconfig.json tests/basic.test.ts
git rm tsconfig.node.json
git commit -m "chore: setup nuxt 3 dependencies and config"
```

---

### Task 2: Migrate CSS and Assets

**Files:**
- Create: `assets/styles/global.css`
- Delete: `src/styles/global.css`

**Interfaces:**
- Consumes: Global CSS styles from previous Vite setup
- Produces: Integrated TailwindCSS v4 design system compiled through Nuxt

- [ ] **Step 1: Write the failing test**

Verify that compilation of global assets fails before we move files.
Run: `npx nuxt prepare`
Expected: FAIL / Warn due to missing `~/assets/styles/global.css` referenced in `nuxt.config.ts`.

- [ ] **Step 2: Move CSS file**

Move the existing style file:
Run: `mkdir -p assets/styles && mv src/styles/global.css assets/styles/global.css`

- [ ] **Step 3: Remove old styles directory**

Run: `rm -rf src/styles`

- [ ] **Step 4: Run verify script**

Run: `npx nuxt prepare`
Expected: SUCCESS with compiled `.nuxt/` directory assets.

- [ ] **Step 5: Commit**

```bash
git add assets/styles/global.css
git commit -m "style: relocate design system to assets/styles/global.css"
```

---

### Task 3: Migrate Layout and App Entry

**Files:**
- Create: `app.vue`
- Delete: `src/App.vue`
- Delete: `src/main.ts`
- Delete: `src/router/index.ts`
- Delete: `index.html`

**Interfaces:**
- Consumes: Global layouts, HTML shell setup
- Produces: Re-routed Nuxt shell wrapping `pages/`

- [ ] **Step 1: Create new app.vue**

Create `app.vue`:
```vue
<template>
  <div class="min-h-dvh flex flex-col bg-ink text-paper font-body selection:bg-brass/20 selection:text-brass-soft relative overflow-hidden">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Background Effects Layer (z-0) -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="bg-grid"></div>
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
      <div class="bg-orb bg-orb-3"></div>
      <div class="bg-orb bg-orb-4"></div>
      <div class="bg-orb bg-orb-5"></div>

      <!-- Tech Particles Array -->
      <div class="particles-container">
        <div v-for="i in 40" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>

      <!-- Mouse Cursor Spotlight Tracker -->
      <div
        class="absolute inset-0 transition-opacity duration-300 max-md:hidden"
        :style="{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(254, 128, 25, 0.08), transparent 80%)`
        }"
      ></div>

      <!-- Noise Texture -->
      <div class="noise-overlay" aria-hidden="true"></div>
    </div>

    <!-- Main Content Layer (z-10) -->
    <div class="relative z-10 flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" class="max-w-[960px] w-full mx-auto px-6 pt-16 pb-8 flex-1 flex flex-col scroll-mt-[90px]">
        <div class="flex-1 flex flex-col w-full">
          <NuxtPage />
        </div>
        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const mouseX = ref(-1000);
const mouseY = ref(-1000);

function handleMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}

const particles = Array.from({ length: 40 }).map(() => {
  const size = Math.random() * 2.5 + 1;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = Math.random() * 30 + 20;
  const delay = Math.random() * -30;
  const opacity = Math.random() * 0.3 + 0.1;
  const color = Math.random() > 0.5 ? 'var(--color-brass-soft)' : 'var(--color-teal)';
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    opacity,
    backgroundColor: color,
    boxShadow: `0 0 ${size * 2}px ${color}`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  };
});

function getParticleStyle(i: number) {
  return particles[i - 1];
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>
```

- [ ] **Step 2: Clean up old entry files**

Run: `rm src/App.vue src/main.ts src/router/index.ts index.html`
Run: `rm -rf src/router`

- [ ] **Step 3: Run build check**

Run: `npx nuxt prepare`
Expected: SUCCESS

- [ ] **Step 4: Commit**

```bash
git add app.vue
git commit -m "feat: migrate root app structure to app.vue"
```

---

### Task 4: Migrate Shared Components

**Files:**
- Create: `components/Navbar.vue`
- Create: `components/Footer.vue`
- Create: `components/HeroDashboard.vue`
- Delete: `src/components/Navbar.vue`
- Delete: `src/components/Footer.vue`
- Delete: `src/components/HeroDashboard.vue`

**Interfaces:**
- Consumes: Navbar, Footer, and HeroDashboard views
- Produces: Integrated Vue components auto-imported by Nuxt

- [ ] **Step 1: Move components**

Run: `mkdir -p components && mv src/components/* components/ && rm -rf src/components`

- [ ] **Step 2: Replace Router Links in Components**

In `components/Navbar.vue` and `components/Footer.vue`, find all instances of `<router-link>` and change them to `<NuxtLink>`.
Example change in `components/Navbar.vue`:
```diff
-<router-link to="/" class="nav-brand font-display font-bold text-base tracking-tight text-text-primary hover:text-brass-soft transition-colors duration-200">
+<NuxtLink to="/" class="nav-brand font-display font-bold text-base tracking-tight text-text-primary hover:text-brass-soft transition-colors duration-200">
```

- [ ] **Step 3: Run TypeScript Type Check**

Run: `npm run type-check`
Expected: PASS (ignoring views that are not yet migrated).

- [ ] **Step 4: Commit**

```bash
git add components/Navbar.vue components/Footer.vue components/HeroDashboard.vue
git commit -m "refactor: convert navbar, footer, and dashboard components to use NuxtLink"
```

---

### Task 5: Migrate Pages and Types

**Files:**
- Create: `pages/index.vue`
- Create: `pages/projects.vue`
- Create: `pages/experience.vue`
- Create: `pages/education.vue`
- Create: `pages/skills.vue`
- Create: `pages/contact.vue`
- Create: `pages/privacy.vue`
- Create: `pages/terms.vue`
- Create: `types/career.ts`
- Create: `types/dashboard.ts`
- Create: `types/skills.ts`
- Delete: `src/views/*`
- Delete: `src/types/*`
- Delete: `src/env.d.ts`

**Interfaces:**
- Consumes: Standard layout components, custom TS types
- Produces: Full file-based routed Pages with integrated SEO tags

- [ ] **Step 1: Move Types and Pages**

Run:
```bash
mkdir -p pages types
mv src/types/* types/
rm -rf src/types
mv src/views/HomeView.vue pages/index.vue
mv src/views/ProjectsView.vue pages/projects.vue
mv src/views/ExperienceView.vue pages/experience.vue
mv src/views/EducationView.vue pages/education.vue
mv src/views/SkillsView.vue pages/skills.vue
mv src/views/ContactView.vue pages/contact.vue
mv src/views/PrivacyView.vue pages/privacy.vue
mv src/views/TermsView.vue pages/terms.vue
rm -rf src/views src/env.d.ts
```

- [ ] **Step 2: Update import paths and routing links**

For all page components inside `/pages/`, update import statements of types from `@/types/...` to `~/types/...` or correct relative paths.
Replace all instances of `<router-link>` with `<NuxtLink>`.

- [ ] **Step 3: Integrate `useHead()` for SEO titles**

In each page file, add `useHead` setup script:
Example for `pages/index.vue`:
```vue
<script setup lang="ts">
useHead({
  title: 'Business Analyst & Data Storyteller — Akbar Lucky Basuki'
})
</script>
```

Configure `useHead` dynamic tags for all pages to replace the old global title listener.

- [ ] **Step 4: Run type checks**

Run: `npm run type-check`
Expected: PASS with 0 type errors.

- [ ] **Step 5: Run tests**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS (verifying successful compilation and index rendering).

- [ ] **Step 6: Commit**

```bash
git add pages/ types/
git commit -m "feat: migrate pages and type definitions to nuxt standard"
```

---

### Task 6: Setup Cloudflare Pages Target Directory

**Files:**
- Modify: `wrangler.jsonc`

**Interfaces:**
- Consumes: Build scripts
- Produces: Production-ready static output mapping to Wrangler assets

- [ ] **Step 1: Update wrangler.jsonc**

Update the assets section:
```jsonc
  "assets": {
    "directory": "./.output/public",
    "binding": "ASSETS"
  }
```

- [ ] **Step 2: Generate static assets**

Run: `npm run generate`
Expected: Build finishes with static HTML outputs inside `.output/public/`.

- [ ] **Step 3: Run TypeScript compiler check**

Run: `npm run type-check`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add wrangler.jsonc
git commit -m "chore: redirect wrangler target to nuxt static output"
```
