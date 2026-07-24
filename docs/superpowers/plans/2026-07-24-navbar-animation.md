# Navbar Animation (Smart Scroll & Click Bounce) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement smart scroll visibility (hide on scroll down, show on scroll up) and tactile click bounce animation on navigation links.

**Architecture:** Integrate scroll events tracking and dynamic transition classes into `components/Navbar.vue`.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest, `@nuxt/test-utils`.

## Global Constraints

- Must track window scroll direction reactively.
- Scale animation on click must use native Tailwind transition properties: `active:scale-90 active:translate-y-0 transition-transform duration-200 ease-out`.
- Transitions for show/hide must use native CSS translate properties on Y axis (`-translate-y-24` and `translate-y-24`).

---

### Task 1: Implement Animations and Logic in Navbar

**Files:**
- Modify: `components/Navbar.vue`
- Modify: `tests/basic.test.ts`

**Interfaces:**
- Consumes: Navbar animation spec
- Produces: Smooth show/hide on scroll and tactile click responsive navigation bar

- [ ] **Step 1: Write the failing test**

Modify `tests/basic.test.ts` to assert that the navbar contains transition and active scale classes:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Navbar Animations', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains scroll transition and active bounce classes', async () => {
    const html = await $fetch('/')
    // Assert presence of scroll transition classes
    expect(html).toContain('transition-all')
    expect(html).toContain('active:scale-90')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/basic.test.ts`
Expected: FAIL due to missing transition/active classes in `Navbar.vue`.

- [ ] **Step 3: Implement scroll logic and Tailwind classes**

Update `components/Navbar.vue` setup script and template:
```vue
<template>
  <!-- Floating Island Wrapper (Desktop Only Header) -->
  <header 
    class="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[720px] z-[100] transition-all duration-300 ease-in-out max-md:hidden"
    :class="isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'"
  >
    <div class="bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full h-12 flex items-center justify-between px-4 md:px-5 shadow-glass-nav">
      
      <!-- Brand Logo -->
      <NuxtLink to="/" class="font-display font-bold text-xs tracking-widest text-paper hover:text-brass-soft transition-colors duration-200 uppercase flex items-center gap-1.5 active:scale-95">
        AL<span class="text-brass-soft">B</span>
        <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
      </NuxtLink>
 
      <!-- Desktop Nav Links -->
      <nav class="flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="font-mono text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ease-out active:scale-90 active:translate-y-0 relative"
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
          class="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink bg-brass px-4 py-1.5 rounded-full hover:bg-brass-soft hover:-translate-y-0.5 transition-all duration-200 active:scale-95 shadow-btn-primary"
        >
          Hire Me
        </NuxtLink>
      </div>
    </div>
  </header>

  <!-- Mobile Floating Dock (Mobile Only) -->
  <nav 
    class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] h-14 w-[92%] max-w-[420px] bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full px-4 flex items-center justify-around gap-1 shadow-glass-nav transition-all duration-300 ease-in-out"
    :class="isNavbarVisible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0 pointer-events-none'"
  >
    <NuxtLink
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ease-out active:scale-90 active:translate-y-0"
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
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const isNavbarVisible = ref(true);
let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY <= 20) {
    isNavbarVisible.value = true;
    return;
  }
  
  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    isNavbarVisible.value = false;
  } else if (currentScrollY < lastScrollY) {
    isNavbarVisible.value = true;
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

- [ ] **Step 5: Run type check and production build check**

Run: `npm run type-check && npm run generate`
Expected: PASS with 0 errors.

- [ ] **Step 6: Commit**

```bash
git add components/Navbar.vue tests/basic.test.ts
git commit -m "feat: add smart scroll hide/show and click bounce animations to navbar"
```
