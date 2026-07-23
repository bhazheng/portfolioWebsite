# Clean Skill Badges Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove all percentage progress bars from `src/views/SkillsView.vue` and present skills as clean glassmorphism chip cards with project context tags.

**Architecture:** Update `src/types/skills.ts` to remove the `level` property. Refactor `src/views/SkillsView.vue` to render responsive skill chip grids.

**Tech Stack:** Vue 3, TypeScript, Tailwind CSS v4.

## Global Constraints
- **No Percentages**: Zero percentage bars or progress animations.
- **Strict Typing**: Zero `any` types in `src/types/skills.ts` and `SkillsView.vue`.
- **Zero Build Errors**: Verify with `npm run type-check` and `npm run build`.

---

### Task 1: Update `src/types/skills.ts`

**Files:**
- Modify: `src/types/skills.ts`

- [ ] **Step 1: Remove `level` property from `src/types/skills.ts`**

```ts
export interface SkillItem {
  id: string;
  name: string;
  appliedIn: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}
```

---

### Task 2: Refactor `src/views/SkillsView.vue` & Verify Build

**Files:**
- Modify: `src/views/SkillsView.vue`

- [ ] **Step 1: Update `src/views/SkillsView.vue` with clean skill chips**

```vue
<template>
  <div class="py-6">
    <!-- Header -->
    <div class="flex items-baseline justify-between border-b border-line pb-2 mb-5">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight flex items-center gap-2 before:content-['//'] before:font-mono before:text-[0.55em] before:font-medium before:text-brass-soft before:tracking-tighter before:opacity-75">
        Skills & Technology
      </h2>
      <div class="font-mono text-[10px] font-semibold tracking-wider text-teal bg-teal/15 px-2.5 py-0.5 rounded-full">16 items</div>
    </div>

    <!-- Skill Category Grid -->
    <div class="grid grid-cols-2 gap-4 max-[768px]:grid-cols-1">
      <div
        v-for="cat in SKILL_CATEGORIES"
        :key="cat.id"
        class="bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft transition-all duration-300 ease-spring"
      >
        <h4 class="font-display font-bold text-xs tracking-wider text-brass-soft uppercase border-b border-line pb-2.5 mb-4 flex items-center gap-2">
          <i :class="[cat.icon, 'text-sm text-teal']"></i> {{ cat.title }}
        </h4>

        <!-- Skill Chips Grid -->
        <div class="grid grid-cols-2 gap-2.5 max-[480px]:grid-cols-1">
          <div
            v-for="skill in cat.skills"
            :key="skill.id"
            class="bg-glass-card border border-line-dark rounded-xl p-3 shadow-glass-inner flex flex-col justify-between hover:border-brass/40 transition-all duration-200"
          >
            <div class="font-display font-semibold text-xs text-paper flex items-center gap-1.5">
              <span class="text-brass font-bold">→</span> {{ skill.name }}
            </div>
            <div class="font-mono text-[9px] text-text-muted flex items-center gap-1 opacity-80 mt-2">
              <i class="ph ph-briefcase text-[10px] text-teal"></i> {{ skill.appliedIn }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillCategory } from '@/types/skills';

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'business',
    title: 'Business & Data Analytics',
    icon: 'ph ph-chart-line',
    skills: [
      { id: 'rca', name: 'Root Cause Analysis (RCA)', appliedIn: 'Ajaib Kripto Thesis & Store Ops' },
      { id: 'market', name: 'Market Research & Analysis', appliedIn: 'OJK Digital Financial Assets RPOJK' },
      { id: 'strategy', name: 'Data Analysis & Strategy', appliedIn: 'PT. Pesta Pora Abadi MnR' },
      { id: 'doc', name: 'Process Documentation', appliedIn: 'System Analysis & Compliance' }
    ]
  },
  {
    id: 'visualization',
    title: 'Data Visualization & BI',
    icon: 'ph ph-projector-screen',
    skills: [
      { id: 'looker', name: 'Looker Studio', appliedIn: 'Store Operation Interactive Dashboards' },
      { id: 'powerbi', name: 'Power BI', appliedIn: 'Operating Document Request System' },
      { id: 'exec', name: 'Executive Dashboard Design', appliedIn: 'Stakeholder Reporting Systems' },
      { id: 'seaborn', name: 'Matplotlib / Seaborn', appliedIn: 'Python Data Storytelling' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical & Database Tools',
    icon: 'ph ph-database',
    skills: [
      { id: 'excel', name: 'Excel & Google Sheets', appliedIn: 'Daily Operational Data Processing' },
      { id: 'sql', name: 'Advanced SQL', appliedIn: 'UB Database Lab & Analytics' },
      { id: 'python', name: 'Python Core', appliedIn: 'Data Pipelines & Machine Learning' },
      { id: 'rdbms', name: 'RDBMS & Data Modeling', appliedIn: 'ERD & System Architecture' }
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    icon: 'ph ph-brain',
    skills: [
      { id: 'indobert', name: 'IndoBERT & NLP', appliedIn: 'Sentiment Analysis Thesis' },
      { id: 'tf', name: 'TensorFlow & CNN', appliedIn: 'Semar Wayang Classifier (91% Acc)' },
      { id: 'pandas', name: 'Pandas & NumPy', appliedIn: 'Feature Engineering & Cleansing' },
      { id: 'predictive', name: 'Predictive Modeling', appliedIn: 'Bangkit ML Curriculum' }
    ]
  }
];
</script>
```

- [ ] **Step 2: Run Type Checking & Production Build**

Run: `npm run type-check`
Expected: 0 type errors.

Run: `npm run build`
Expected: Successful Vite compilation.
