# Morphing Mobile Bottom Navigation Dock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a morphing circular mobile bottom dock that collapses on scroll down, shows only the active page icon in the center, and expands back on scroll up or click.

**Architecture:** Integrate scroll directional tracking and dynamic width/item visibility bindings in `components/Navbar.vue`.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest, `@nuxt/test-utils`.

## Global Constraints

- Must collapse width to `w-14` and remove padding (`px-0`) when minimized.
- Must display only the active route icon and hide non-active route icons when minimized.
- Must restore fully expanded dock when clicked or when page scroll is reversed.

---

### Task 1: Implement Morphing Dock in Navbar

**Files:**
- Modify: `components/Navbar.vue`
- Modify: `tests/basic.test.ts`

**Interfaces:**
- Consumes: Morphing mobile dock spec
- Produces: Smooth morphing bottom navigation dock

- [ ] **Step 1: Write the failing test**

Modify `tests/basic.test.ts` to assert morphing bindings exist:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Morphing Mobile Dock', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains morphing dock attributes and visibility bindings', async () => {
    const html = await $fetch('/')
    // Assert presence of morphing classes and route-based conditional visibility
    expect(html).toContain('isDockMinimized')
    expect(html).toContain('px-0')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/basic.test.ts`
Expected: FAIL due to missing `isDockMinimized` bindings in the rendered template of `Navbar.vue`.

- [ ] **Step 3: Implement morphing dock in Navbar.vue**

Update `components/Navbar.vue` to implement the morphing container and conditional link visibility:
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

  <!-- Mobile Floating Dock (Mobile Only with Morphing UI) -->
  <nav 
    class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] h-14 bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full flex items-center justify-around shadow-glass-nav transition-all duration-300 ease-spring"
    :class="isDockMinimized ? 'w-14 px-0 cursor-pointer' : 'w-[92%] max-w-[420px] px-4'"
    @click="isDockMinimized ? isDockMinimized = false : null"
  >
    <NuxtLink
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="group relative flex items-center justify-center transition-all duration-200 ease-out"
      :class="[
        route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner w-10 h-10 rounded-full' : 'text-text-secondary border border-transparent w-10 h-10 rounded-full hover:text-paper hover:bg-glass-hover',
        route.path === item.path ? 'flex' : (isDockMinimized ? 'hidden' : 'flex')
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
    </NuxtLink>
  </nav>
</template>
 
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
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

- [ ] **Step 5: Run type checking and static generation**

Run: `npm run type-check && npm run generate`
Expected: PASS with 0 errors.

- [ ] **Step 6: Commit**

```bash
git add components/Navbar.vue tests/basic.test.ts
git commit -m "feat: implement morphing circular mobile bottom dock"
```
