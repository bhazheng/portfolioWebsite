# Design Spec: Interactive Skill Matrix & Animated Progress Bars

## Overview
Transform the skills page (`src/views/SkillsView.vue`) into an interactive, animated Skill Matrix. Each technical competency will feature a percentage proficiency bar, smooth entrance animation, and project application context tags.

## Goals & Objectives
1. **Interactive Competency Display**: Showcase 16 technical skills organized across 4 domain categories (Business & Analytics, Visualization & BI, Technical & Database Tools, Machine Learning & AI).
2. **Animated Progress Bars**: Animate bar widths from `0%` to their target level (e.g. `95%`) on component mount using CSS cubic-bezier timing.
3. **Project Context Badges**: Display inline tags for each skill showing where it was applied in Akbar's career (PT. Pesta Pora Abadi, OJK, Thesis, Bangkit Capstone).
4. **Strict TypeScript Typing**: Define `SkillItem` and `SkillCategory` interfaces in `src/types/skills.ts`.

---

## Technical Architecture

### 1. Type Interface (`src/types/skills.ts`)
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

### 2. Component Implementation (`src/views/SkillsView.vue`)
- Define `SKILL_CATEGORIES: SkillCategory[]`.
- Track `isMounted = ref(false)` in `onMounted(() => { setTimeout(() => isMounted.value = true, 100); })`.
- Bind progress bar style: `:style="{ width: isMounted ? skill.level + '%' : '0%' }"`.
- Styled using Tailwind CSS v4 variables (`bg-brass-soft`, `bg-teal`, `border-line-dark`).

---

## Verification
- Run `npm run type-check` (`npx vue-tsc --noEmit`) to verify 0 type errors.
- Run `npm run build` (`npx vite build`) to verify clean production build.
