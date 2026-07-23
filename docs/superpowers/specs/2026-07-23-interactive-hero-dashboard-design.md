# Design Spec: Interactive Hero Data Dashboard

## Overview
Transform the hero section SVG visualization in Akbar Lucky Basuki's portfolio from a static CSS-animated graphic into a fully interactive multi-metric data dashboard. Visitors can switch between Business Analytics & ML model metrics via interactive tab buttons, explore data nodes with a real-time glassmorphism hover tooltip, and observe smooth SVG curve/bar data transitions.

## Goals & Objectives
1. **Interactive Data Storytelling**: Showcase real business & machine learning metrics (Store MnR Operations, IndoBERT Sentiment NLP, Wayang CV Model) in an interactive UI.
2. **Zero Heavy Dependencies**: Implement using pure Vanilla JS inside Astro `<script>` for optimal load speed and zero extra library overhead.
3. **High-End Dark Editorial Aesthetic**: Retain the existing dark ink/brass/teal design tokens, glassmorphism badges, and vector mesh visual identity.
4. **Accessibility & Progressive Enhancement**: Ensure fallback to static SVG if JS is disabled, full keyboard tab navigation (`aria-selected`, `role="tab"`), and `prefers-reduced-motion` compliance.

---

## Technical Architecture

### Component File Structure
- **Component File**: `src/components/HeroDashboard.astro`
- **Page Import**: Imported and rendered inside `src/pages/index.astro` in place of the current inline hero SVG wrapper.

### Interactive Datasets Schema
```ts
interface MetricDataset {
  id: 'mnr' | 'indobert' | 'wayang';
  title: string;
  subtitle: string;
  unit: string;
  badge: string;
  yLabels: string[];
  xLabels: string[];
  points: { x: number; y: number; val: string; period: string }[];
  forecastPoint: { x: number; y: number; val: string; period: string };
  bars: { x: number; y: number; height: number }[];
  pathD: string;
  forecastPathD: string;
  areaD: string;
}
```

#### Datasets Configuration
1. **MnR Ops Analytics (PT. Pesta Pora Abadi)**
   - Accent: Teal & Brass
   - Points: Q1 (45%), Q2 (65%), Q3 (85%), NOW (94%)
   - Forecast: Q4 FCST (112% Optimization Target)
   - Badge: "Live BI Dashboard"

2. **IndoBERT NLP Sentiment (Thesis Project)**
   - Accent: Soft Brass
   - Points: Epoch 1 (55%), Epoch 3 (72%), Epoch 5 (84%), NOW (91% F1)
   - Forecast: FCST (95% Target Accuracy)
   - Badge: "NLP Sentiment Model"

3. **Wayang CV Classifier (Bangkit Capstone)**
   - Accent: Emerald / Teal
   - Points: Batch 10 (40%), Batch 30 (68%), Batch 50 (82%), NOW (89% Val Acc)
   - Forecast: FCST (93% Precision)
   - Badge: "TensorFlow Vision Model"

---

## Key Features & UI Components

### 1. Metric Tab Bar
- Positioned directly above the hero graphic container.
- Includes 3 pill buttons styled with `bg-glass border-line-dark rounded-full`.
- Active tab features glowing brass/teal outline, active background fill, and `aria-selected="true"`.

### 2. Interactive SVG Graph Node & Morphing
- Data points (`<g class="node-group">`) rendered with interactive hover targets (`<circle>` with expanded hit area).
- Smooth CSS/JS transition for path `d` attributes (`.wave-path`, `.wave-area`, `.forecast-path`) and bar height attributes (`rect.anim-bar`).

### 3. Glassmorphism Floating Tooltip
- Absolute-positioned HTML element overlaying the SVG container:
  - `bg-glass-card border border-brass/30 backdrop-blur-md rounded-xl p-3 shadow-glass`
- Displays:
  - Selected metric title & timestamp/epoch
  - Primary value in bold brass text
  - Status indicator dot & delta percentage vs previous point.
- Tracks mouse coordinates with smooth offset positioning.

---

## Accessibility (A11y) & Performance
- **Keyboard Navigation**: Native `<button>` elements with `role="tablist"` and `role="tab"` keyboard listeners.
- **Screen Readers**: `aria-label` provided for each metric tab and interactive data node.
- **Reduced Motion**: Under `@media (prefers-reduced-motion: reduce)`, transition durations drop to `0ms` (instant state change).
- **Graceful Degradation**: Without JavaScript, the default SVG graphic (`MnR Ops Analytics`) remains fully visible with existing pure CSS animations.

---

## Implementation Plan Outline
1. Extract & refactor hero graphic into modular `src/components/HeroDashboard.astro`.
2. Add dataset configuration & tab switcher UI buttons.
3. Add client-side JavaScript logic for tab switching, path updating, and tooltip tracking.
4. Verify responsiveness across desktop, tablet (768px), and mobile (375px) viewports.
5. Verify `astro build` and `npm run dev`.
