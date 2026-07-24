# Compact Home Spacing & Footer Scroll Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore full scroll reachability to the footer by removing JS wheel scroll hijacking (`handleWheel`) and tighten vertical section spacing across the home page while preserving CSS scroll snap.

**Architecture:** Remove `handleWheel` script from `components/HomeView.vue`, update section classes from `min-h-dvh` to `py-10 md:py-14`, and add `snap-start` to `components/Footer.vue`.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest, `@nuxt/test-utils`.

---

### Task 1: Update Components and Remove Wheel Hijacking

**Files:**
- Modify: `components/HomeView.vue`
- Modify: `components/Footer.vue`
- Modify: `tests/basic.test.ts`

- [ ] **Step 1: Write test for compact spacing in tests/basic.test.ts**

Update `tests/basic.test.ts`:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Home Spacing & Footer Reachability', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains compact section spacing and footer snap anchor', async () => {
    const html = await $fetch('/')
    expect(html).toContain('snap-start border-t border-line-dark')
  })
})
```

- [ ] **Step 2: Run test to verify status**

Run: `npx vitest run tests/basic.test.ts`

- [ ] **Step 3: Refactor HomeView.vue spacing and script**

In `components/HomeView.vue`:
1. Remove `handleWheel`, `isScrolling`, `scrollTimeout`, `onMounted`, and `onUnmounted` wheel event listeners.
2. Update Hero wrapper:
   `class="snap-start snap-always min-h-[85vh] flex flex-col justify-center pt-2 md:pt-6 pb-12"`
3. Update Career Journey section:
   `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`
4. Update Recent Experience Summary section:
   `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`
5. Update Education Summary section:
   `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`
6. Update Projects Summary section:
   `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`
7. Update Skills Summary section:
   `class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]"`

- [ ] **Step 4: Update Footer.vue snap anchor**

In `components/Footer.vue`:
Update outer footer tag:
`<footer class="snap-start border-t border-line-dark mt-16 pt-12 pb-16 w-full">`

- [ ] **Step 5: Run tests to verify pass**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS.

- [ ] **Step 6: Run type checking and static build check**

Run: `npm run type-check && npm run generate`
Expected: PASS with 0 errors.

- [ ] **Step 7: Commit changes**

```bash
git add .
git commit -m "fix(home): compact section spacing and restore footer scroll reachability"
```
