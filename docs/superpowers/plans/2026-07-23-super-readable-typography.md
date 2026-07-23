# Super Readable Typography Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the font stack across the entire Vue 3 SPA application to **Inter**, **Plus Jakarta Sans**, and **JetBrains Mono** for maximum readability.

**Architecture:** Update Google Fonts `<link>` tag in `index.html`. Update `@theme` typography variables in `src/styles/global.css`.

**Tech Stack:** HTML5, CSS Variables, Tailwind CSS v4, Google Fonts.

## Global Constraints
- **Zero Broken Layouts**: Verify visual rendering across all 8 views.
- **Zero Build Errors**: Verify with `npm run type-check` and `npm run build`.

---

### Task 1: Update Google Fonts CDN Import in `index.html`

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update `index.html` font link**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Akbar Lucky Basuki — Business Analyst & Data Storyteller</title>
    <meta name="description" content="Portfolio of Akbar Lucky Basuki, a Business Analyst and Data Storyteller who translates raw data into regulatory-grade decisions." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
  </head>
  <body class="bg-ink text-paper selection:bg-brass/20 selection:text-brass-soft font-body min-h-dvh relative">
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

---

### Task 2: Update Typography Tokens in `src/styles/global.css` & Verify Build

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Update `@theme` typography variables in `src/styles/global.css`**

```css
  /* ── TYPOGRAPHY ─────────────────────────────────── */
  --font-display:         'Plus Jakarta Sans', sans-serif;
  --font-serif:           'Plus Jakarta Sans', sans-serif;
  --font-body:            'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono:            'JetBrains Mono', monospace;
```

- [ ] **Step 2: Run Type Checking & Production Build**

Run: `npm run type-check`
Expected: 0 type errors.

Run: `npm run build`
Expected: Successful Vite compilation.
