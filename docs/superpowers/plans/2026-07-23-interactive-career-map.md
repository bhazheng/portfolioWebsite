# Interactive Career Journey Map Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement an interactive SVG Career Journey Map and Milestone Inspector card on the homepage (`src/views/HomeView.vue`).

**Architecture:** Create TypeScript interface definitions in `src/types/career.ts`. Add the `#career-journey` section with interactive node timeline and dynamic inspector card in `src/views/HomeView.vue`.

**Tech Stack:** Vue 3, Vue Router 4, TypeScript, Tailwind CSS v4.

## Global Constraints
- **Responsive Design**: SVG pipeline renders properly on mobile and desktop viewports.
- **Strict Typing**: Zero `any` types in `src/types/career.ts` and `HomeView.vue`.
- **Zero Build Errors**: Verify with `npm run type-check` and `npm run build`.

---

### Task 1: Create `src/types/career.ts` Interfaces

**Files:**
- Create: `src/types/career.ts`

- [ ] **Step 1: Create `src/types/career.ts`**

```ts
export interface ImpactMetric {
  label: string;
  value: string;
}

export interface CareerMilestone {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  badge: string;
  summary: string;
  impactMetrics: ImpactMetric[];
  techStack: string[];
  detailRoute: string;
}
```

---

### Task 2: Implement Interactive Career Map in `src/views/HomeView.vue` & Verify Build

**Files:**
- Modify: `src/views/HomeView.vue`

- [ ] **Step 1: Add `#career-journey` section and reactive milestone data to `src/views/HomeView.vue`**

- [ ] **Step 2: Run Type Checking & Production Build**

Run: `npm run type-check`
Expected: 0 type errors.

Run: `npm run build`
Expected: Successful Vite compilation.
