# Design Spec: Upgrade Vue 3 SPA to TypeScript

## Overview
Upgrade the Vue 3 Single Page Application (SPA) from JavaScript to TypeScript (`<script setup lang="ts">`), adding static type definitions, `tsconfig.json`, `vue-tsc` type checker, and TypeScript interfaces for data models.

## Objectives
1. **TypeScript Setup**: Install `typescript`, `vue-tsc`, and configure `tsconfig.json` & `tsconfig.node.json`.
2. **Type Definitions**: Define `MetricDataset`, `NodeItem`, and `TooltipState` interfaces for the SVG dashboard.
3. **SFC Script Tag Upgrade**: Add `lang="ts"` to all `.vue` components and views.
4. **Build & Type Check Parity**: Ensure `npx vue-tsc --noEmit` passes with 0 errors and `npx vite build` succeeds cleanly.

---

## Technical Specifications

### New / Renamed Files
- `tsconfig.json`: Main TypeScript configuration for Vue 3 SFCs and Vite.
- `tsconfig.node.json`: TypeScript configuration for `vite.config.ts`.
- `vite.config.js` -> `vite.config.ts`
- `src/main.js` -> `src/main.ts`
- `src/router/index.js` -> `src/router/index.ts`
- `src/env.d.ts`: Ambient declaration for `.vue` imports.

---

## Type Interfaces (`src/types/dashboard.ts`)

```ts
export interface NodeItem {
  cx: number;
  cy: number;
  val: string;
  period: string;
}

export interface MetricDataset {
  xLabels: string[];
  nodes: NodeItem[];
  trendPath: string;
  forecastPath: string;
  areaPath: string;
  fanPath: string;
  barHeights: number[];
  badge: string;
}

export interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  period: string;
  val: string;
}
```

---

## Component Refactoring
- **`HeroDashboard.vue`**: Add `<script setup lang="ts">`, import types from `@/types/dashboard`, type reactive states with `ref<string>()` and `reactive<TooltipState>()`.
- **`Navbar.vue` & `Footer.vue`**: Add `<script setup lang="ts">`.
- **Views**: Add `<script setup lang="ts">` across all 8 views.
