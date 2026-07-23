# Interactive Skill Matrix & Animated Progress Bars Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform `src/views/SkillsView.vue` into an interactive Skill Matrix featuring animated percentage progress bars and project application context tags.

**Architecture:** Create TypeScript interface definitions in `src/types/skills.ts`. Refactor `src/views/SkillsView.vue` with strongly typed data arrays, reactive `isMounted` animation state, and progress bars.

**Tech Stack:** Vue 3, TypeScript, Tailwind CSS v4.

## Global Constraints
- **Animation Timing**: 800ms cubic-bezier transition on progress bar widths.
- **Accessibility**: Support `@media (prefers-reduced-motion: reduce)`.
- **Strict TypeScript**: Zero `any` types in `src/types/skills.ts` and `SkillsView.vue`.

---

### Task 1: Create `src/types/skills.ts` Data Interfaces

**Files:**
- Create: `src/types/skills.ts`

- [ ] **Step 1: Create `src/types/skills.ts`**

```ts
export interface SkillItem {
  id: string;
  name: string;
  level: number;
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

### Task 2: Refactor `src/views/SkillsView.vue` with Animated Progress Bars & Context Badges

**Files:**
- Modify: `src/views/SkillsView.vue`

- [ ] **Step 1: Update `src/views/SkillsView.vue` to use typed datasets and progress bars**

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

        <div class="space-y-4">
          <div v-for="skill in cat.skills" :key="skill.id" class="flex flex-col gap-1.5">
            <!-- Skill Name & Level Percentage -->
            <div class="flex justify-between items-center font-mono text-xs">
              <span class="text-paper font-medium flex items-center gap-1.5">
                <span class="text-brass font-bold">→</span> {{ skill.name }}
              </span>
              <span class="text-brass-soft font-semibold tabular-nums text-[11px]">{{ skill.level }}%</span>
            </div>

            <!-- Progress Bar Track -->
            <div class="w-full h-1.5 bg-ink/60 rounded-full overflow-hidden border border-line-dark">
              <div
                class="h-full bg-gradient-to-r from-brass to-brass-soft rounded-full transition-all duration-700 ease-spring"
                :style="{ width: isMounted ? skill.level + '%' : '0%' }"
              ></div>
            </div>

            <!-- Project Application Context Tag -->
            <div class="font-mono text-[9px] text-text-muted flex items-center gap-1 opacity-80">
              <i class="ph ph-briefcase text-[10px] text-teal"></i> {{ skill.appliedIn }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { SkillCategory } from '@/types/skills';

const isMounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true;
  }, 100);
});

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'business',
    title: 'Business & Data Analytics',
    icon: 'ph ph-chart-line',
    skills: [
      { id: 'rca', name: 'Root Cause Analysis (RCA)', level: 94, appliedIn: 'Ajaib Kripto Thesis & Store Ops' },
      { id: 'market', name: 'Market Research & Analysis', level: 90, appliedIn: 'OJK Digital Financial Assets RPOJK' },
      { id: 'strategy', name: 'Data Analysis & Strategy', level: 92, appliedIn: 'PT. Pesta Pora Abadi MnR' },
      { id: 'doc', name: 'Process Documentation', level: 88, appliedIn: 'System Analysis & Compliance' }
    ]
  },
  {
    id: 'visualization',
    title: 'Data Visualization & BI',
    icon: 'ph ph-projector-screen',
    skills: [
      { id: 'looker', name: 'Looker Studio', level: 95, appliedIn: 'Store Operation Interactive Dashboards' },
      { id: 'powerbi', name: 'Power BI', level: 90, appliedIn: 'Operating Document Request System' },
      { id: 'exec', name: 'Executive Dashboard Design', level: 92, appliedIn: 'Stakeholder Reporting Systems' },
      { id: 'seaborn', name: 'Matplotlib / Seaborn', level: 86, appliedIn: 'Python Data Storytelling' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical & Database Tools',
    icon: 'ph ph-database',
    skills: [
      { id: 'excel', name: 'Excel & Google Sheets', level: 96, appliedIn: 'Daily Operational Data Processing' },
      { id: 'sql', name: 'Advanced SQL (Complex Queries)', level: 92, appliedIn: 'UB Database Lab & Analytics' },
      { id: 'python', name: 'Python Core', level: 88, appliedIn: 'Data Pipelines & Machine Learning' },
      { id: 'rdbms', name: 'RDBMS & Data Modeling', level: 85, appliedIn: 'ERD & System Architecture' }
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    icon: 'ph ph-brain',
    skills: [
      { id: 'indobert', name: 'IndoBERT & NLP', level: 91, appliedIn: 'Sentiment Analysis Thesis' },
      { id: 'tf', name: 'TensorFlow & CNN', level: 89, appliedIn: 'Semar Wayang Classifier (91% Acc)' },
      { id: 'pandas', name: 'Pandas & NumPy', level: 90, appliedIn: 'Feature Engineering & Cleansing' },
      { id: 'predictive', name: 'Predictive Modeling', level: 85, appliedIn: 'Bangkit ML Curriculum' }
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
