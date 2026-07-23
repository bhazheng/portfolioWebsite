# Design Spec: Clean Skill Badges & Context Chips (No Percentages)

## Overview
Refactor the skills page (`src/views/SkillsView.vue`) to remove all arbitrary percentage progress bars. Replace them with clean, professional glassmorphism skill chip cards that clearly list competencies alongside their real-world project application tags.

## Goals & Objectives
1. **Remove Synthetic Percentages**: Eliminate all percentage progress bars (`95%`, `90%`, etc.) in favor of clean skill listing.
2. **Project Application Context Tags**: Display explicit tags showing where each skill was applied (PT. Pesta Pora Abadi, OJK, Thesis, Bangkit Capstone).
3. **Strict TypeScript Schema**: Update `src/types/skills.ts` to remove the `level` property.

---

## Technical Architecture

### 1. Updated Type Definitions (`src/types/skills.ts`)
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

### 2. Layout Structure (`src/views/SkillsView.vue`)
- Render 4 category grid cards (Business Analytics, Visualization BI, Technical & Database Tools, Machine Learning & AI).
- Display skill chips in a responsive grid (`grid grid-cols-2 gap-2.5 max-[480px]:grid-cols-1`).
- Styled using Tailwind CSS v4 variables (`bg-glass-card`, `border-line-dark`, `text-brass-soft`, `text-teal`).

---

## Verification
- Run `npm run type-check` (`npx vue-tsc --noEmit`) to verify 0 type errors.
- Run `npm run build` (`npx vite build`) to verify clean production build.
