# Responsive Layout Spacing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modify the `<main>` container in `app.vue` to adjust top and bottom padding for mobile view.

**Architecture:** Apply responsive classes: `pt-6 md:pt-16 pb-28 md:pb-8`.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest.

---

### Task 1: Update main layout container classes

**Files:**
- Modify: `app.vue`
- Modify: `tests/basic.test.ts`

- [ ] **Step 1: Write the failing test**

Modify `tests/basic.test.ts` to assert layout spacing classes:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Layout Spacing', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains mobile spacing classes on main container', async () => {
    const html = await $fetch('/')
    expect(html).toContain('pt-6 md:pt-16')
    expect(html).toContain('pb-28 md:pb-8')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/basic.test.ts`
Expected: FAIL.

- [ ] **Step 3: Modify app.vue**

Update `app.vue` main tag:
```vue
<template>
  <div class="min-h-dvh bg-ink text-paper relative overflow-x-hidden font-body selection:bg-brass/20 selection:text-brass-soft">
    <!-- Particles Background effect (z-0) -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-25">
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brass/10 blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brass/5 blur-[120px]"></div>
    </div>

    <!-- Main Content Layer (z-10) -->
    <div class="relative z-10 flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" class="max-w-[960px] w-full mx-auto px-6 pt-6 md:pt-16 pb-28 md:pb-8 flex-1 flex flex-col scroll-mt-[90px]">
        <div class="flex-1 flex flex-col w-full">
          <NuxtPage />
        </div>
        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page dynamic head configuration
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — Akbar Lucky Basuki` : 'Akbar Lucky Basuki — Business Analyst & Data Storyteller';
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Portfolio of Akbar Lucky Basuki, a Business Analyst and Data Storyteller who translates raw data into regulatory-grade decisions.' }
  ]
})
</script>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS.

- [ ] **Step 5: Run type checking and static build**

Run: `npm run type-check && npm run generate`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add app.vue tests/basic.test.ts
git commit -m "feat: adjust layout padding for mobile view to remove whitespace and prevent overlap"
```
