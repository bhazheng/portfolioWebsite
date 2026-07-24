# Center-Aligned Direct CSS Snap Scroll Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply `snap-center snap-always min-h-[88vh]` to home sections for direct vertical centering, while keeping the footer naturally anchored at the bottom (`snap-start`).

**Architecture:** Update `components/HomeView.vue` section wrapper classes, maintain `snap-start` on `components/Footer.vue`, and update `tests/basic.test.ts` assertions.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest, `@nuxt/test-utils`.

---

### Task 1: Apply Center Snap Classes and Verify

**Files:**
- Modify: `components/HomeView.vue`
- Modify: `components/Footer.vue`
- Modify: `tests/basic.test.ts`

- [ ] **Step 1: Write test for center snap classes**

Update `tests/basic.test.ts`:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Center-Aligned Direct Snap Scroll', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains snap-center snap-always section classes and footer snap-start anchor', async () => {
    const html = await $fetch('/')
    expect(html).toContain('snap-center snap-always min-h-[88vh]')
    expect(html).toContain('snap-start border-t border-line-dark')
  })
})
```

- [ ] **Step 2: Run test to verify status**

Run: `npx vitest run tests/basic.test.ts`

- [ ] **Step 3: Update section classes in HomeView.vue to snap-center snap-always min-h-[88vh]**

Update sections in `components/HomeView.vue`:
- `career-journey`: `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`
- `experience-summary`: `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`
- `education-summary`: `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`
- `projects-summary`: `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`
- `skills-summary`: `class="snap-center snap-always min-h-[88vh] flex flex-col justify-center py-8 md:py-12 scroll-mt-0"`

- [ ] **Step 4: Verify Footer.vue uses snap-start**

Ensure `components/Footer.vue` has `<footer class="snap-start border-t border-line-dark mt-16 pt-12 pb-16 w-full">`.

- [ ] **Step 5: Run tests to verify pass**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS.

- [ ] **Step 6: Run type checking and static build check**

Run: `npm run type-check && npm run generate`
Expected: PASS with 0 errors.

- [ ] **Step 7: Commit changes**

```bash
git add .
git commit -m "feat(home): apply center aligned direct CSS snap scroll to home sections"
```
