# Hero Fullscreen & Glowing Section Dividers Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore Hero section to 100% fullscreen height (`min-h-dvh`) while inserting glowing glass diamond section dividers between home page sections.

**Architecture:** Update `components/HomeView.vue` with `min-h-dvh` on Hero, insert glass divider markups between sections, and update `tests/basic.test.ts` assertions.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest, `@nuxt/test-utils`.

---

### Task 1: Update Components and Add Dividers

**Files:**
- Modify: `components/HomeView.vue`
- Modify: `tests/basic.test.ts`

- [ ] **Step 1: Write test for Hero fullscreen and section dividers**

Update `tests/basic.test.ts`:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Hero Fullscreen & Section Dividers', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains min-h-dvh Hero section and glowing glass dividers', async () => {
    const html = await $fetch('/')
    expect(html).toContain('min-h-dvh')
    expect(html).toContain('via-line-dark to-brass/30')
  })
})
```

- [ ] **Step 2: Run test to verify status**

Run: `npx vitest run tests/basic.test.ts`

- [ ] **Step 3: Update Hero section to min-h-dvh in HomeView.vue**

Update Hero wrapper class on Line 4 of `components/HomeView.vue`:
```html
<div class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-2 md:pt-6 pb-28 md:pb-6">
```

- [ ] **Step 4: Insert Glowing Glass Dividers between sections**

Insert the divider template between all 5 home page sections:
```html
<!-- Glowing Glass Line Section Divider -->
<div class="w-full flex items-center justify-center my-6 opacity-80 pointer-events-none">
  <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-line-dark to-brass/30"></div>
  <div class="px-4 flex items-center gap-2 font-mono text-[9px] text-text-faint">
    <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
    <span class="text-[9px] text-brass-soft/60 uppercase tracking-widest font-bold">❖</span>
    <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
  </div>
  <div class="h-[1px] flex-1 bg-gradient-to-l from-transparent via-line-dark to-brass/30"></div>
</div>
```

- [ ] **Step 5: Run tests to verify pass**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS.

- [ ] **Step 6: Run type checking and static build check**

Run: `npm run type-check && npm run generate`
Expected: PASS with 0 errors.

- [ ] **Step 7: Commit changes**

```bash
git add .
git commit -m "feat(home): restore hero fullscreen height and add glowing diamond glass section dividers"
```
