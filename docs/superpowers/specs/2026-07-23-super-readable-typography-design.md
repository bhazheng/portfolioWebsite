# Design Spec: Super Readable Typography Upgrade

## Overview
Upgrade the typography stack across the entire Vue 3 SPA codebase to use modern, high-readability fonts: **Inter** (for body text), **Plus Jakarta Sans** (for headings & display titles), and **JetBrains Mono** (for technical badges, data metrics, and monospaced text).

## Goals & Objectives
1. **Maximize Readability**: Replace stylized display fonts with Inter & Plus Jakarta Sans for crisp, effortless legibility across light & dark viewports.
2. **Typography System Mapping**: Update `@theme` font variables in `src/styles/global.css`.
3. **CDN Optimization**: Import optimized Google Fonts subset in `index.html`.

---

## Technical Architecture

### 1. Font Imports in `index.html`
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
```

### 2. Design System Variables in `src/styles/global.css`
```css
@theme {
  --font-display:         'Plus Jakarta Sans', sans-serif;
  --font-serif:           'Plus Jakarta Sans', sans-serif;
  --font-body:            'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono:            'JetBrains Mono', monospace;
}
```

---

## Verification
- Run `npm run type-check` (`npx vue-tsc --noEmit`) to verify 0 type errors.
- Run `npm run build` (`npx vite build`) to verify clean production build.
