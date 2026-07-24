# Mobile Bottom Navigation Dock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a floating bottom dock navigation for mobile screens, replacing the top hamburger dropdown with direct icons and custom CSS tooltips/magnification.

**Architecture:** Integrate the mobile bottom dock directly inside `components/Navbar.vue` using responsive Tailwind CSS breakpoints (`md:hidden` vs `hidden md:flex`).

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest, `@nuxt/test-utils`.

## Global Constraints

- Menu elements must use custom transitions for magnification (`scale-125` and translation on hover/focus).
- Icons must use Phosphor Icons classes (`ph ph-house`, etc.).
- Active states must render with glassmorphic active styles: `text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner`.

---

### Task 1: Update Navbar Component Data and Template

**Files:**
- Modify: `components/Navbar.vue`
- Modify: `tests/basic.test.ts`

**Interfaces:**
- Consumes: Navigation spec
- Produces: Integrated desktop top bar and mobile bottom dock navigation

- [ ] **Step 1: Write the failing test**

Open `tests/basic.test.ts` and add tests asserting presence of bottom dock elements.
Replace `tests/basic.test.ts` with:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Mobile Bottom Nav Dock', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains bottom mobile dock elements', async () => {
    const html = await $fetch('/')
    // Assert presence of bottom dock navigation markup
    expect(html).toContain('fixed bottom-6')
    expect(html).toContain('ph-house')
    expect(html).toContain('ph-briefcase')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/basic.test.ts`
Expected: FAIL due to missing bottom dock markup and icons in `Navbar.vue`.

- [ ] **Step 3: Implement bottom dock in Navbar.vue**

Update `components/Navbar.vue` to include bottom dock and icon data structure:
```vue
<template>
  <!-- Floating Island Wrapper (Desktop Only Header) -->
  <header class="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[720px] z-[100] transition-all duration-300 max-md:hidden">
    <div class="bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full h-12 flex items-center justify-between px-4 md:px-5 shadow-glass-nav">
      
      <!-- Brand Logo -->
      <NuxtLink to="/" class="font-display font-bold text-xs tracking-widest text-paper hover:text-brass-soft transition-colors duration-200 uppercase flex items-center gap-1.5">
        AL<span class="text-brass-soft">B</span>
        <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
      </NuxtLink>
 
      <!-- Desktop Nav Links -->
      <nav class="flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="font-mono text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 relative"
          active-class="text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner"
          :class="route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
 
      <!-- Right Side CTA -->
      <div class="flex items-center gap-2">
        <NuxtLink
          to="/contact"
          class="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink bg-brass px-4 py-1.5 rounded-full hover:bg-brass-soft hover:-translate-y-0.5 transition-all duration-200 shadow-btn-primary"
        >
          Hire Me
        </NuxtLink>
      </div>
    </div>
  </header>

  <!-- Mobile Floating Dock (Mobile Only) -->
  <nav class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] h-14 w-[92%] max-w-[420px] bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full px-4 flex items-center justify-around gap-1 shadow-glass-nav">
    <NuxtLink
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
      active-class="text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner"
      :class="route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
    >
      <!-- Floating Tooltip -->
      <span class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-ink border border-line-dark text-[8px] font-mono uppercase tracking-wider rounded shadow-badge opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 group-hover:-translate-y-1 transition-all duration-200">
        {{ item.name }}
      </span>

      <!-- Icon -->
      <i :class="[item.icon, 'text-lg transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1']"></i>
    </NuxtLink>
  </nav>
</template>
 
<script setup lang="ts">
import { ref } from 'vue';
 
const route = useRoute();
 
const navItems = [
  { name: 'home', path: '/', icon: 'ph ph-house' },
  { name: 'experience', path: '/experience', icon: 'ph ph-briefcase' },
  { name: 'education', path: '/education', icon: 'ph ph-graduation-cap' },
  { name: 'projects', path: '/projects', icon: 'ph ph-code' },
  { name: 'skills', path: '/skills', icon: 'ph ph-wrench' },
  { name: 'contact', path: '/contact', icon: 'ph ph-paper-plane-tilt' }
];
</script>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS

- [ ] **Step 5: Run type checking and static build to verify**

Run: `npm run type-check && npm run generate`
Expected: PASS with compiled output in `.output/public`

- [ ] **Step 6: Commit**

```bash
git add components/Navbar.vue tests/basic.test.ts
git commit -m "feat: implement floating bottom dock for mobile navigation"
```
