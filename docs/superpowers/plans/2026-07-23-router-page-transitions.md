# Vue Router Page Transitions & Dynamic Title Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 200ms `fade + slide-up` route transition animations and dynamic browser `document.title` updates across all 8 Vue 3 pages.

**Architecture:** Wrap `<router-view>` in `src/App.vue` with Vue 3 `<transition name="page-fade" mode="out-in">`. Define GPU-accelerated CSS keyframe transitions in `src/styles/global.css`. Add `meta.title` to route objects in `src/router/index.ts` and set up an `afterEach` navigation guard.

**Tech Stack:** Vue 3, Vue Router 4, CSS Transitions, TypeScript.

## Global Constraints
- **Transition Timing**: 200ms duration with `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Accessibility**: `@media (prefers-reduced-motion: reduce)` must suppress transition movement.
- **Strict Typing**: All router meta titles typed correctly without any TypeScript errors.

---

### Task 1: Update `src/router/index.ts` with Route Titles & Navigation Guard

**Files:**
- Modify: `src/router/index.ts`

- [ ] **Step 1: Add `meta.title` and `router.afterEach` guard to `src/router/index.ts`**

```ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Business Analyst & Data Storyteller' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { title: 'Featured Projects' }
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/ExperienceView.vue'),
    meta: { title: 'Work Experience' }
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/EducationView.vue'),
    meta: { title: 'Education & Certifications' }
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/SkillsView.vue'),
    meta: { title: 'Skills & Technology' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact Me' }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue'),
    meta: { title: 'Privacy Policy' }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsView.vue'),
    meta: { title: 'Terms of Service' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.afterEach((to) => {
  const pageTitle = to.meta.title as string | undefined;
  document.title = pageTitle ? `${pageTitle} — Akbar Lucky Basuki` : 'Akbar Lucky Basuki — Business Analyst & Data Storyteller';
});

export default router;
```

---

### Task 2: Add Page Transition CSS Rules to `src/styles/global.css`

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Append `.page-fade-*` classes to `src/styles/global.css`**

```css
/* ── ROUTE TRANSITION ANIMATIONS ─────────────────── */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 200ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
```

---

### Task 3: Wrap `<router-view>` with `<transition>` in `src/App.vue` & Verify Build

**Files:**
- Modify: `src/App.vue`

- [ ] **Step 1: Update `src/App.vue` to use `<router-view v-slot>` and `<transition>`**

```vue
<template>
  <div class="min-h-screen flex flex-col bg-ink text-paper font-body selection:bg-brass/20 selection:text-brass-soft relative">
    <!-- Ambient background grid and subtle noise overlay -->
    <div class="bg-grid"></div>
    <div class="noise-overlay"></div>

    <!-- Header Navigation -->
    <Navbar />

    <!-- Page Content Container with Transition -->
    <main class="flex-1 w-full max-w-[1100px] mx-auto px-6 py-6 max-[480px]:px-4">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Global Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
```

- [ ] **Step 2: Run Type Checking & Build**

Run: `npm run type-check`
Expected: 0 type errors.

Run: `npm run build`
Expected: Successful Vite compilation.
