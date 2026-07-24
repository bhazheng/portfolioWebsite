# Tab-Based Routing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the multi-page URL routes into a single-page tab-rendering system, keeping the browser address bar locked at the root URL `/`.

**Architecture:** Utilize Nuxt 3 `useState('activeTab')` global state across components. Relocate `pages/*.vue` view files to `components/*View.vue`.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest, `@nuxt/test-utils`.

---

### Task 1: Relocate Page Files to Components

- [ ] **Step 1: Create HomeView component from index.vue**

Move the template and script contents of `pages/index.vue` to a new component: `components/HomeView.vue`.
Ensure all relative imports within `components/HomeView.vue` (like `~/types/...` and sub-components like `HeroDashboard`) are preserved.

- [ ] **Step 2: Move and rename page view files**

Move the following files:
- Move: `pages/projects.vue` -> `components/ProjectsView.vue`
- Move: `pages/experience.vue` -> `components/ExperienceView.vue`
- Move: `pages/education.vue` -> `components/EducationView.vue`
- Move: `pages/skills.vue` -> `components/SkillsView.vue`
- Move: `pages/contact.vue` -> `components/ContactView.vue`
- Move: `pages/privacy.vue` -> `components/PrivacyView.vue`
- Move: `pages/terms.vue` -> `components/TermsView.vue`

Ensure that we remove the `useHead` calls inside these sub-views to keep the main controller page `pages/index.vue` in charge of SEO header tags.

- [ ] **Step 3: Replace controller page pages/index.vue**

Create a clean pengontrol utama in `pages/index.vue`:
```vue
<template>
  <div class="flex-1 flex flex-col w-full">
    <HomeView v-if="activeTab === 'home'" />
    <ExperienceView v-else-if="activeTab === 'experience'" />
    <EducationView v-else-if="activeTab === 'education'" />
    <ProjectsView v-else-if="activeTab === 'projects'" />
    <SkillsView v-else-if="activeTab === 'skills'" />
    <ContactView v-else-if="activeTab === 'contact'" />
    <PrivacyView v-else-if="activeTab === 'privacy'" />
    <TermsView v-else-if="activeTab === 'terms'" />
  </div>
</template>

<script setup lang="ts">
const activeTab = useState('activeTab', () => 'home');
</script>
```

---

### Task 2: Refactor Navbar and Footer Components

- [ ] **Step 1: Refactor Navbar.vue**

Update `components/Navbar.vue` to replace `NuxtLink` items with button tags changing `activeTab`:
```vue
<template>
  <!-- Floating Island Wrapper (Desktop Only Header) -->
  <header 
    class="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[720px] z-[100] transition-all duration-300 ease-in-out max-md:hidden"
    :class="isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'"
  >
    <div class="bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full h-12 flex items-center justify-between px-4 md:px-5 shadow-glass-nav">
      
      <!-- Brand Logo -->
      <button @click="activeTab = 'home'" class="font-display font-bold text-xs tracking-widest text-paper hover:text-brass-soft transition-colors duration-200 uppercase flex items-center gap-1.5 active:scale-95 cursor-pointer">
        AL<span class="text-brass-soft">B</span>
        <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
      </button>
 
      <!-- Desktop Nav Links -->
      <nav class="flex items-center gap-1">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="activeTab = item.name"
          class="font-mono text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ease-out active:scale-90 active:translate-y-0 relative cursor-pointer"
          :class="activeTab === item.name ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
        >
          {{ item.name }}
        </button>
      </nav>
 
      <!-- Right Side CTA -->
      <div class="flex items-center gap-2">
        <button
          @click="activeTab = 'contact'"
          class="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink bg-brass px-4 py-1.5 rounded-full hover:bg-brass-soft hover:-translate-y-0.5 transition-all duration-200 active:scale-95 shadow-btn-primary cursor-pointer"
        >
          Hire Me
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Floating Dock (Mobile Only with Morphing UI) -->
  <nav 
    class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] h-14 bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full flex items-center justify-around shadow-glass-nav transition-all duration-300 ease-spring"
    :class="isDockMinimized ? 'w-14 px-0 cursor-pointer' : 'w-[92%] max-w-[420px] px-4'"
    @click="isDockMinimized ? isDockMinimized = false : null"
  >
    <button
      v-for="item in navItems"
      :key="item.name"
      @click.stop="activeTab = item.name"
      class="group relative flex items-center justify-center transition-all duration-200 ease-out cursor-pointer"
      :class="[
        activeTab === item.name ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner w-10 h-10 rounded-full' : 'text-text-secondary border border-transparent w-10 h-10 rounded-full hover:text-paper hover:bg-glass-hover',
        activeTab === item.name ? 'flex' : (isDockMinimized ? 'hidden' : 'flex')
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
    </button>
  </nav>
</template>
 
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const activeTab = useState('activeTab', () => 'home');
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
    isNavbarVisible.value = false;
    isDockMinimized.value = true;
  } else if (currentScrollY < lastScrollY) {
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
 
const navItems = [
  { name: 'home', icon: 'ph ph-house' },
  { name: 'experience', icon: 'ph ph-briefcase' },
  { name: 'education', icon: 'ph ph-graduation-cap' },
  { name: 'projects', icon: 'ph ph-code' },
  { name: 'skills', icon: 'ph ph-wrench' },
  { name: 'contact', icon: 'ph ph-paper-plane-tilt' }
];
</script>
```

- [ ] **Step 2: Refactor Footer.vue**

Update `components/Footer.vue` to use `useState('activeTab')` and update paths:
```vue
<template>
  <footer class="border-t border-line-dark mt-16 pt-8 pb-12 w-full">
    <div class="flex justify-between items-center flex-wrap gap-4 max-[640px]:flex-col max-[640px]:text-center">
      <div>
        <div class="font-mono text-[9px] uppercase tracking-widest text-text-faint">
          © {{ currentYear }} Akbar Lucky Basuki.
        </div>
        <div class="font-mono text-[8px] text-text-muted mt-1 uppercase tracking-wider">
          ALL RIGHTS RESERVED. REGULATORY-GRADE DECISIONS.
        </div>
      </div>
      <div class="flex gap-4 font-mono text-[9px] uppercase tracking-wider text-text-secondary">
        <button @click="activeTab = 'privacy'" class="hover:text-brass-soft transition-colors duration-150 cursor-pointer">
          Privacy Policy
        </button>
        <button @click="activeTab = 'terms'" class="hover:text-brass-soft transition-colors duration-150 cursor-pointer">
          Terms of Service
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const activeTab = useState('activeTab', () => 'home');
const currentYear = computed(() => new Date().getFullYear());
</script>
```

---

### Task 3: Verification and Build Validation

- [ ] **Step 1: Write the failing test**

Open `tests/basic.test.ts` and add tests asserting index.vue dynamic components and button elements:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Tab Routing Controller', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('renders index controller dynamically and has activeTab state', async () => {
    const html = await $fetch('/')
    // Index page should compile the controller with HomeView inside it
    expect(html).toContain('Akbar Lucky Basuki')
    // No multi-page sub-routing urls like href="/projects" or href="/experience" in navbar
    expect(html).not.toContain('href="/projects"')
    expect(html).not.toContain('href="/experience"')
  })
})
```

- [ ] **Step 2: Run test to verify it passes**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS.

- [ ] **Step 3: Run static builds and type check**

Run: `npm run type-check && npm run generate`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: implement tab-based routing for locked base url domain"
```
