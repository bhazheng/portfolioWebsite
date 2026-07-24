# Desktop View UI/UX Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate desktop user experience by adding smooth GPU-accelerated page transitions, aligning vertical spacing across all views, and adding elevation glow effects to desktop cards.

**Architecture:** Add Vue `<transition>` wrapper in `pages/index.vue`, add page-fade CSS keyframes in `assets/styles/global.css`, and enhance sub-view card classes in `components/*View.vue`.

**Tech Stack:** Nuxt 3, TailwindCSS v4, Vitest, `@nuxt/test-utils`.

---

### Task 1: Add Vue Page Transition and CSS Rules

**Files:**
- Modify: `pages/index.vue`
- Modify: `assets/styles/global.css`
- Modify: `tests/basic.test.ts`

- [ ] **Step 1: Write failing test for transition wrapper**

Modify `tests/basic.test.ts` to assert presence of page-fade transition:
```typescript
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Desktop View Polish', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains page-fade transition wrapper and card elevation glow classes', async () => {
    const html = await $fetch('/')
    // Assert presence of transition wrapper
    expect(html).toContain('page-fade')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/basic.test.ts`
Expected: FAIL.

- [ ] **Step 3: Add CSS transition rules to global.css**

Append to `assets/styles/global.css`:
```css
/* Page Transition Effect */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.22s ease-out, transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
```

- [ ] **Step 4: Add transition wrapper in pages/index.vue**

Update `pages/index.vue`:
```vue
<template>
  <div class="flex-1 flex flex-col w-full">
    <transition name="page-fade" mode="out-in">
      <HomeView v-if="activeTab === 'home'" key="home" />
      <ExperienceView v-else-if="activeTab === 'experience'" key="experience" />
      <EducationView v-else-if="activeTab === 'education'" key="education" />
      <ProjectsView v-else-if="activeTab === 'projects'" key="projects" />
      <SkillsView v-else-if="activeTab === 'skills'" key="skills" />
      <ContactView v-else-if="activeTab === 'contact'" key="contact" />
      <PrivacyView v-else-if="activeTab === 'privacy'" key="privacy" />
      <TermsView v-else-if="activeTab === 'terms'" key="terms" />
    </transition>
  </div>
</template>

<script setup lang="ts">
const activeTab = useState('activeTab', () => 'home');

useHead({
  title: 'Akbar Lucky Basuki — Business Analyst & Data Storyteller'
})
</script>
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run tests/basic.test.ts`
Expected: PASS.

---

### Task 2: Align Spacing and Enhance Cards Across Views

**Files:**
- Modify: `components/HomeView.vue`
- Modify: `components/ProjectsView.vue`
- Modify: `components/ExperienceView.vue`
- Modify: `components/EducationView.vue`
- Modify: `components/SkillsView.vue`
- Modify: `components/ContactView.vue`

- [ ] **Step 1: Align Hero top padding in HomeView.vue**

Update Hero wrapper div class on Line 4 of `components/HomeView.vue`:
```html
<div class="snap-start snap-always min-h-dvh flex flex-col justify-center pt-2 md:pt-6 pb-28 md:pb-6">
```

- [ ] **Step 2: Update elevation classes in ProjectsView.vue**

Update outer wrapper padding to `py-4 md:py-6` and card hover classes to:
`hover:-translate-y-1.5 hover:border-brass-soft hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)] active:scale-[0.99] transition-all duration-300 ease-spring`

- [ ] **Step 3: Update elevation classes in ExperienceView.vue**

Update outer wrapper padding to `py-4 md:py-6` and experience card hover classes to:
`hover:-translate-y-1.5 hover:border-brass-soft hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)] active:scale-[0.99] transition-all duration-300 ease-spring`

- [ ] **Step 4: Update elevation classes in EducationView.vue & SkillsView.vue & ContactView.vue**

Apply `py-4 md:py-6` and elevation hover classes across card items.

- [ ] **Step 5: Run type checking and static build check**

Run: `npm run type-check && npm run generate`
Expected: PASS with 0 errors.

- [ ] **Step 6: Commit changes**

```bash
git add .
git commit -m "feat: enhance desktop view with smooth page transitions, equalized spacing, and card elevation glow"
```
