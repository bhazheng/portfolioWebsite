# Responsive Homepage Spacing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modify section container classes in `pages/index.vue` to apply responsive spacing (`pt-6 md:pt-20 pb-28 md:pb-8`) and responsive scroll margin (`scroll-mt-6 md:scroll-mt-[90px]`).

**Architecture:** Update class attributes on section containers in `pages/index.vue`.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest.

---

### Task 1: Update Spacing Classes on Homepage Sections

**Files:**
- Modify: `pages/index.vue`
- Modify: `tests/basic.test.ts`

- [ ] **Step 1: Write the failing test**

Modify `tests/basic.test.ts` to assert layout spacing classes in the home page:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Homepage Spacing', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains mobile spacing and scroll margin classes on homepage sections', async () => {
    const html = await $fetch('/')
    // Verify responsive padding and scroll margin
    expect(html).toContain('scroll-mt-6 md:scroll-mt-[90px]')
    expect(html).toContain('pt-4 md:pt-16 pb-28 md:pb-6')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/basic.test.ts`
Expected: FAIL.

- [ ] **Step 3: Modify section classes in pages/index.vue**

Open `pages/index.vue` and update the following lines:

* **Line 4 (Hero Wrapper)**:
  ```html
  <div class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-4 md:pt-16 pb-28 md:pb-6">
  ```
* **Line 58 (Career Journey Section)**:
  ```html
  <section id="career-journey" class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-6 md:pt-20 pb-28 md:pb-8 scroll-mt-6 md:scroll-mt-[90px]">
  ```
* **Line 141 (Experience Summary Section)**:
  ```html
  <section id="experience-summary" class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-6 md:pt-20 pb-28 md:pb-8 scroll-mt-6 md:scroll-mt-[90px]">
  ```
* **Line 223 (Education Summary Section)**:
  ```html
  <section id="education-summary" class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-6 md:pt-20 pb-28 md:pb-8 scroll-mt-6 md:scroll-mt-[90px]">
  ```
* **Line 302 (Projects Summary Section)**:
  ```html
  <section id="projects-summary" class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-6 md:pt-20 pb-28 md:pb-8 scroll-mt-6 md:scroll-mt-[90px]">
  ```
* **Line 373 (Skills Summary Section)**:
  ```html
  <section id="skills-summary" class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-6 md:pt-20 pb-28 md:pb-8 scroll-mt-6 md:scroll-mt-[90px]">
  ```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS.

- [ ] **Step 5: Run type checking and static build check**

Run: `npm run type-check && npm run generate`
Expected: PASS with 0 errors.

- [ ] **Step 6: Commit**

```bash
git add pages/index.vue tests/basic.test.ts
git commit -m "feat: adjust homepage sections padding and scroll-margin for mobile view"
```
