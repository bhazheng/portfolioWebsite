# Design Spec: Interactive Career Journey Map & Milestone Inspector

## Overview
Add an interactive SVG Career Journey Map and Milestone Inspector card to the homepage (`src/views/HomeView.vue`). Visitors can click on career milestone nodes along a visual timeline pipeline to dynamically inspect roles, quantitative impact metrics, tech stacks, and detail page links.

## Goals & Objectives
1. **Visual Data Storytelling**: Represent Akbar's career trajectory (Universitas Brawijaya ➔ Bangkit Academy ➔ OJK ➔ PT. Pesta Pora Abadi) as an interactive SVG node pipeline.
2. **Dynamic Milestone Inspection**: Display an active **Milestone Inspector Card** updating instantly on node click/hover with quantitative impact badges (`3.77 GPA`, `88.39 Grade`, `RPOJK Regulations`, `5+ Live Dashboards`).
3. **Strict TypeScript Interface**: Define `CareerMilestone` and `ImpactMetric` in `src/types/career.ts`.
4. **Responsive Layout**: Horizontal node pipeline for desktop and adaptive layout for mobile devices.

---

## Technical Architecture

### 1. Data Schema (`src/types/career.ts`)
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

### 2. Component Integration (`src/views/HomeView.vue`)
- Insert `<section id="career-journey" class="snap-start min-h-dvh flex flex-col justify-center pt-20">` between Hero Section and `#summary-sections`.
- Maintain reactive state: `activeMilestoneId = ref<string>('pesta-pora')`.
- Computed `activeMilestone = computed(() => CAREER_MILESTONES.find(m => m.id === activeMilestoneId.value) || CAREER_MILESTONES[0])`.

---

## Verification
- Run `npm run type-check` (`npx vue-tsc --noEmit`) to verify 0 type errors.
- Run `npm run build` (`npx vite build`) to verify clean production build.
