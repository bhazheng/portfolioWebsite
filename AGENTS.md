# Repository Guidelines

## Project Overview

Personal portfolio website for **Akbar Lucky Basuki** (Business Analyst & Data Storyteller). A single-page, fully prerendered, **bilingual (English / Indonesian)** **Astro 7** site themed in Material Design 3 color roles with an Evangelion Unit-01 (EVA-01) palette. The UI/UX is inspired by https://rei.my.id/ — floating pill navigation, editorial section headings, filled tonal cards (no outlines), vector SVG accessories, and a sticker-style hero portrait. Deployed to Cloudflare as static assets via `wrangler`.

- **Package**: `akbar-portfolio-astro` v4.0.0 (private, ESM)
- **Stack**: Astro 7.4 (`output: 'static'`) + TypeScript 5.9 + UnoCSS 66 (icons only) + Vite 8 (via Astro)
- **Architecture**: Two prerendered routes — `/` (English) and `/id/` (Indonesian) — each with the same six `<section>` blocks and anchor-based navigation, zero API calls, zero client framework runtime
- **Section order**: Hero → Experience → Education → Projects → Skills → Contact
- **Client JS**: small inline bundle (nav scroll-spy, theme toggle, scroll reveal, language-link hash carry-over). No Vue, no hydration.

> History: this was a Nuxt 3 + Vuetify 4 site. It was ported to Astro in v4.0.0 to drop the Vue runtime and the SSR server — Cloudflare's `pnpm install --frozen-lockfile` failed on the workspace file and Vercel 500'd because Vuetify's `ssrClientHints` mutated response headers in a serverless runtime. Do not reintroduce either.

## Architecture & Data Flow

**Single-page, top-down composition**: `src/pages/index.astro` (`lang="en"`) and `src/pages/id/index.astro` (`lang="id"`) are thin wrappers around `src/components/Home.astro` → `Layout.astro` → six section components.

```
src/pages/index.astro  /  src/pages/id/index.astro
  └─ Home.astro                        ← shared composition; takes `lang`
  └─ Layout.astro                      ← <html data-theme>, <head>, imports all CSS, client scripts
       ├─ skip-link (a11y)
       ├─ Navbar.astro                 ← header (scrolls away) + floating pill nav (fixed) + mobile dock
       ├─ <main class="main">
       │    ├─ HeroSection.astro        ← portrait photo + stickers + intro
       │    ├─ ExperienceSection.astro
       │    ├─ EducationSection.astro
       │    ├─ ProjectsSection.astro
       │    ├─ SkillsSection.astro
       │    └─ ContactSection.astro
       └─ Footer.astro
```

**Key architectural decisions**:

- **`output: 'static'`** — the page has no per-request content. Both hosts serve `dist/` as static assets, which removes the Vercel SSR failure mode entirely. If per-request rendering is ever needed, switch to `output: 'server'` + `@astrojs/cloudflare` and move `wrangler.jsonc`'s assets binding — not a small change.
- **`build.format: 'directory'`** — produces `dist/index.html` (English) and `dist/id/index.html` (Indonesian). Wrangler's static assets serve `/id/` from the latter with no extra config.
- **CSS is the design system, not utilities** — `src/styles/main.css` (1321 lines) is the primary design layer and is meant to stay intact. Vuetify primitives (`v-btn`, `v-icon`) were replaced by hand-written classes in `base.css`; nothing else was rewritten. `base.css` loads after `main.css`, so it is also where post-migration layout/responsive fixes go (see CSS conventions).
- **Color tokens are R, G, B triplets** — `src/styles/tokens.css` defines `--v-theme-*` as comma-separated triplets because `main.css` calls `rgb(var(--v-theme-x))` in ~112 places. Do not convert them to hex.
- **Theme is an attribute on `<html>`** — `data-theme="dark"` (default) or `"light"`. A pre-paint `is:inline` script in `Layout.astro`'s `<head>` reads the `color-scheme` cookie and sets the attribute before first paint, preventing a dark flash on a light-mode reload. It must stay inline and in `<head>`.
- **Content data lives in `src/data/`** — plain typed arrays, no CMS, no fetch. Components are pure presentational mappings over those arrays.
- **i18n is two routes + an explicit `lang` prop, not client-side swapping** — each locale is its own prerendered page, so `<html lang>`, the title, and all text are correct with JS disabled. `Layout`, `Navbar`, `Footer`, and every `*Section` take `lang: Locale` (`'en' | 'id'`, from `src/i18n/index.ts`); `Astro.currentLocale` and Astro's `i18n` config are deliberately not used (the container test cannot rely on them).
  - **UI strings** live in `src/i18n/index.ts` → `UI: Record<Locale, UiStrings>`. `UiStrings` is a typed interface, so a missing Indonesian key fails `pnpm check`.
  - **Content data** (`experience`, `education`, `projects`, `skills`) is `Record<Locale, Entry[]>`: full entry lists per locale. Ids, icons, colors, `current`, `artClass`, links, and list lengths must be identical across locales — `tests/basic.test.ts` ("i18n parity") enforces that.
  - **Nothing user-visible may be hard-coded in a component or script.** `nav.ts` reads labels from `data-label` on the nav anchors, and `theme.ts` reads its aria-labels from `data-label-to-light` / `data-label-to-dark` on the toggle. Both bundles are shared by both routes, so a hard-coded English string there would overwrite the Indonesian page at runtime.
  - **Kept in English on both routes on purpose**: the headline "Business Analyst & Data Storyteller" (binding brand title, asserted by the test), project titles, proper nouns, tool names, and the thesis title (quoted exactly as on the CV).
  - **Indonesian number/date style**: `8.000+`, `IPK 3,77 / 4,00`, `Skor 88,39 / 100`, months `Agu`/`Mei`/`Des`, `Sekarang` for Present. Use it consistently; the English page keeps `8,000+` / `3.77`.
  - **No auto-redirect and no language cookie** — the EN | ID control is two plain links (`hreflang`, `aria-current`); `src/scripts/lang.ts` only carries the current `#section` across. No `<link rel="alternate" hreflang>` yet because no `site` URL is configured.
- **The CV is the content source of truth** — `CV_Akbar_Lucky_Basuki_no_photo.pdf` (repo root, not served, not part of the build) is what roles, dates, bullets, metrics, GPA, certifications, and skills are checked against. Do not invent numbers that are not in it (the old `5+ Dashboards` and `89.2%` figures were exactly that kind of drift; the CV says 8,000+ documents and 91%). See "Updating content from the CV" below.
- **UnoCSS is an icon resolver only** — `presetIcons({ scale: 1.2 })`, no utility presets. `content.filesystem` scans `src/**/*.{astro,ts,js,html}`.
- **Icons that bypass static extraction must be safelisted** — the nav script rewrites `className` at runtime, and icon class names that live only in `src/data/*.ts` (skill-card icons, project glyphs, education note icons) are not picked up by extraction either. So `uno.config.ts`'s `safelist` holds the six nav icons, the five skill-card icons (`monitoring`, `dashboard`, `database`, `neurology`, `gavel`), `image-search`, both theme icons, and the education-note icons (`groups`, `translate`, `workspace-premium`). **Any new icon whose class string appears only in a data file or is swapped at runtime must be added there, or it renders as an empty box.** Verify with `grep` on the built `dist/_astro/*.css`.
- **Implicit DOM↔data coupling** — `NAV_SECTIONS` ids in `src/data/nav.ts` must exactly match `<section id="...">` in the six section components. No compile-time enforcement; `tests/basic.test.ts` is the guard.
- **Scripts are bundled, not deferred manually** — the five `<script>` imports at the end of `<body>` are bundled by Vite and run after parsing, so they query the DOM directly with no `DOMContentLoaded` wrapper.

**Data flow**: Unidirectional, top-down. The only prop sections take is `lang`. The cross-component contract is `NAV_SECTIONS` (ids + icons only, exported from `src/data/nav.ts`, consumed by `Navbar.astro` and `src/scripts/nav.ts`); its labels come from `UI[lang].nav`.

## Key Directories

| Directory | Purpose |
|---|---|
| `src/pages/` | `index.astro` (`/`, English) and `id/index.astro` (`/id/`, Indonesian) — thin wrappers around `Home.astro`. |
| `src/i18n/` | `index.ts` — `Locale`, `LOCALES`, `localePath()`, `UiStrings`, and the `UI` dictionary (en + id). |
| `src/layouts/` | `Layout.astro` — `<html>`/`<head>`, font links, anti-FOUC script, CSS imports, client script imports. |
| `src/components/` | 10 `.astro` files — `Home` (shared page composition), `ToolTicker` (decorative tool-logo marquee), `Navbar`, `Footer`, and the six `*Section` components. Explicit imports; no auto-registration. |
| `src/data/` | `nav.ts` (`NAV_SECTIONS`), `projects.ts`, `experience.ts`, `education.ts`, `skills.ts` — typed content, each `Record<Locale, Entry[]>`, plus their entry interfaces. |
| `src/scripts/` | `nav.ts` (scroll-spy + mobile dock), `theme.ts` (cookie + toggle), `reveal.ts` (IntersectionObserver reveal), `lang.ts` (carry `#section` across the language links), `copy.ts` (reveals the "Copy email" button when the Clipboard API exists). |
| `src/styles/` | `reset.css`, `tokens.css`, `main.css`, `base.css`, `navbar.css` — imported in that order by `Layout.astro`. |
| `src/types/` | `career.ts` (`ImpactMetric`), `skills.ts` (`SkillItem`, `SkillCategory`). |
| `src/assets/` | `profile.jpeg` — hero portrait, imported as a module so Astro fingerprints it. |
| `tests/` | `basic.test.ts` — Astro container smoke test run against both routes, plus i18n parity tests. |
| `dist/` | Astro build output (gitignored). The deploy target. |
| `.astro/` | Generated types (`types.d.ts`), needed by `astro check` and `tsconfig.json` (gitignored). |

**Not present**: `public/`, `middleware/`, `server/`, `stores/`, `utils/`, `docs/`, `.github/`.

## Development Commands

Package manager: **pnpm**, pinned via `packageManager: "pnpm@10.11.1"` so `--frozen-lockfile` behaves identically on Cloudflare, Vercel, and locally. Node `>=22.22.0` (Astro 7's floor), declared in `engines`.

| Command | What it does |
|---|---|
| `pnpm dev` | `astro dev` — HMR dev server on `http://localhost:4321/` |
| `pnpm build` | `astro build` — prerender to `dist/` (the deploy path) |
| `pnpm preview` | `astro preview` — serve the built `dist/` on port 4321 |
| `pnpm check` | `astro check` — TypeScript + Astro diagnostics. **Must report 0 errors.** |
| `pnpm test` | `vitest run` — single non-watch run |

**Verification order** (each gate catches what the previous cannot): `pnpm install` → `pnpm check` → `pnpm test` → `pnpm build`.

**Post-build assertions** worth running after any template change:

```bash
grep -c 'id="hero"' dist/index.html          # ≥ 1
grep -c 'id="contact"' dist/index.html       # ≥ 1
grep -c 'data-theme="dark"' dist/index.html  # ≥ 1
grep -c 'v-application' dist/index.html      # must be 0
grep -c 'v-icon' dist/index.html             # must be 0
grep -c '<html lang="id"' dist/id/index.html # 1
# leaked English on the Indonesian page — each must be 0:
for p in 'Get in touch' 'Skip to content' 'Email me' 'All rights reserved' 'Explore projects' 'Main navigation'; do grep -c "$p" dist/id/index.html; done
```

**Deployment** (manual, no script): `pnpm build` → `wrangler deploy`. Config in `wrangler.jsonc` (`name: akbarlucky`, assets directory `./dist`).

**What's absent**: No `lint`, `format`, `generate`, or `type-check` script. No ESLint, Prettier, Stylelint, Biome, or oxlint configured anywhere.

**Windows note**: `dist/` in older checkouts was a junction pointing at `.output/public`. If Astro writes into a stale `.output/`, delete the junction first (`powershell "(Get-Item 'dist').Delete()"`) so `dist/` becomes a real directory.

## Code Conventions & Common Patterns

### Formatting & Naming
- **No linter or formatter** — code style is unmanaged. Quality gates are `astro check` and the smoke test.
- **Files**: PascalCase for components (`HeroSection.astro`), camelCase for data/script modules (`nav.ts`, `projects.ts`), kebab-case for config (`astro.config.mjs`, `wrangler.jsonc`).
- **Components**: PascalCase, suffix-by-purpose — `*Section` for page sections, `Navbar`/`Footer` for chrome.
- **Types**: PascalCase (`ExperienceEntry`, `ImpactMetric`). Interfaces are exported from the `src/data/*` module that owns them; shared cross-module types live in `src/types/`.
- **Constants**: SCREAMING_SNAKE_CASE for data arrays (`PROJECTS`, `EXPERIENCE`, `EDUCATION`, `SKILL_CATEGORIES`, `NAV_SECTIONS`).
- **Functions/vars**: camelCase (`setActive`, `renderToggle`, `apply`, `mobileWrap`).

### Astro Patterns
- **Frontmatter imports only what is used** — components import their data module and nothing else. No auto-imports, no `~/` alias (relative paths: `../data/nav`, `../types/career`).
- **Iteration**: `{LIST.map((x, i) => (<el>…</el>))}` — no `:key` (not an Astro concept).
- **Conditionals**: `{cond && (<el />)}`.
- **Dynamic classes**: `class:list={['base', { current: x }]}` or `class:list={[expr]}` for a dynamic string. Literal `class="a b"` is unchanged.
- **Attributes**: `attr={expr}`; string literals stay quoted. `&amp;` is preserved in text.
- **Icons**: `<span class="i-material-symbols:name icon" style="font-size:Npx;width:Npx;height:Npx" aria-hidden="true"></span>`. Size is set inline per instance to match the old rendered DOM; `.icon` (in `base.css`) supplies the flex/centering. Dynamic icons use `class:list={[cat.icon, 'icon', \`text-${cat.color}\`]}`.
- **Buttons**: `.btn` + `.btn--large|--small` + `.btn--primary|--text` + `.btn--pill`. Anchors keep `target`/`rel` exactly as before.
- **Scroll reveal**: `data-reveal` and `data-reveal-delay="150"` attributes, consumed by `src/scripts/reveal.ts`. No directive.
- **Navigation is anchor-based**: `href="#<id>"`. External links use `target="_blank" rel="noopener noreferrer"`.

### CSS
- **Import order in `Layout.astro`**: `reset` → `tokens` → `main` → `base` → `navbar`. `reset.css` resolves `var(--v-font-body)` at use time, so the order is not load-bearing beyond later files overriding earlier ones.
- **`main.css` is intentionally close to the original** — only three Vuetify-specific edits were applied: the `.v-field`/`.v-input` focus override was deleted, the `.text-body-*`/`.text-title-*` typography block was deleted, and `.dark .floating-nav` became `[data-theme='dark'] .floating-nav`. Keep further edits minimal.
- **Layout/responsive fixes go in `base.css`, not `main.css`** — it loads after `main.css` and wins on equal specificity. Current additions there: the full-width last skill card, the wrapping experience role row + `.exp-team` line, and the narrow-phone contact/email fit, the experience `<details>` toggle, project highlights, tighter skills rhythm, the mobile hero order, footer clearance for the mobile dock (≤959 px), and a **compact mobile layer** (≤767 px, one block at the end of `base.css`: smaller section gaps, slimmer cards, `.card-accessory` hidden, wrapping metric tiles, shorter project art, denser skill rows, no wide bullet indent). Keep new mobile spacing in that block. Do not edit `main.css` for these.
- **Long text must not break mobile** — the page must have zero horizontal scroll at 360–390 px. Grid children holding long unbreakable strings (the monospace email) need `min-width: 0` / `overflow-wrap: anywhere`; flex rows holding a long title plus a badge need `flex-wrap`.
- **`navbar.css` is global, not scoped** — the nav script toggles classes at runtime, which a scoped attribute selector would not match.
- **Do not add heading/list margin resets** — Vuetify never zeroed them, so UA defaults are part of the intended rendering.
- **CSS**: `html.scroll-smooth`; `section[id] { scroll-margin-top: 96px }` offsets the floating pill nav.

### Error Handling
- **Minimal/thin** — appropriate for a static site with no runtime data.
- The anti-FOUC script is wrapped in `try {} catch {}`; a cookie failure must never block paint.
- `nav.ts` guards every `querySelector` with `?.` and checks `getElementById` before observing.
- **No error boundaries, no Sentry.**

### Async Patterns
- The app is overwhelmingly synchronous — no data fetching.
- `reveal.ts` falls back to showing everything when `prefers-reduced-motion` is set or `IntersectionObserver` is missing, so the page stays visible if JS fails.
- **No top-level await in components.**

### State Management
- **No store.** All state is either a CSS class toggled by a script or a DOM attribute.
- `nav.ts` owns: active section (IntersectionObserver), `shrunk` (scroll + 500 ms debounce), expanded/collapsed dock.
- `theme.ts` owns: `data-theme` on `<html>`, `color-scheme` cookie, toggle icon/`aria-label`.
- **The toggle UI is rendered on load, not only on click** — `renderToggle()` runs at module scope because the prerendered markup always ships the dark-mode icon, and the pre-paint script may already have flipped the page to light.

### Styling Approach
- **Three layers**: CSS custom-property tokens (`tokens.css`) → the `main.css` design system → `base.css` primitives + `navbar.css`.
- Full MD3 color system in `tokens.css`, ~38 keys per theme, key names unchanged from the retired Vuetify config (`background`, `surface-container-*`, `primary`, `eva-orange`, …). Copy keys wholesale rather than pruning to "only what's used" — that is what causes missing-color bugs.
- **M3 filled cards, no outlines**: tonal surface elevation (`surface-container` → `surface-container-high`) instead of `border`. The Experience, Education and Skills cards are static, so they have **no hover state** (M3 reserves state layers for interactive elements); only the project card, which is a link, still lifts and steps up tonally. There are **no borders, stroked SVG shapes or ring masks** anywhere (Material 3 filled style): the card corner accessories are filled tonal shapes, the project art circles are filled discs, and the mobile dock pill is a tonal `surface-container-high` fill with a shadow. Only the focus ring (accessibility) and the surface-coloured sticker/avatar gap halos remain.
- **Color cycling**: lime (`tertiary`), violet (`primary`), orange (`eva-orange`) cycle via `acc-0`/`acc-1`/`acc-2`.
- **Lime readability rules**: lime (`#86dd00`) at 45–70% opacity on dark surfaces only. On `primary-container` (`#5a2f90`) backgrounds lime is unreadable — use `on-surface` (`#ebdcfe`) at full opacity instead.
- **Responsive breakpoint is 960 px** (Vuetify's `md`). Desktop pill nav and header CTA hide below it; the mobile dock hides at and above it. Both navs are always in the DOM — CSS picks one. Do not reintroduce `v-if`-style conditional rendering for this.
- **Icons**: `@iconify-json/material-symbols` (UI/nav) + `@iconify-json/mdi` (brand) + `@iconify-json/simple-icons` (tool logos), resolved by `presetIcons`. `i-material-symbols:arrow-up-right` does not exist in the icon set — use `arrow-outward`.
- **Fonts**: Google Sans Flex (body/heading) + Google Sans Code (mono via `.font-mono`), loaded from the Google Fonts CDN. Every date/metric/percentage should carry `class="font-mono"`.
- Dark is default; light is fully defined; the pre-paint script + `theme.ts` keep them in sync.
- **Accessibility floor (audited, keep it)**: text contrast ≥ 4.5:1 in **both** themes and both languages — lime text is dimmed to 45–70% on dark surfaces only; in light theme `base.css` sets it to full opacity (role titles, program names, heading dot) and uses `on-tertiary-container` for metric values on their tonal tile. No text under 12 px. Primary tappable text controls (hero socials, `.text-link`, `.email-link`, header CTA) are 44 px tall; the pill nav and EN | ID links are 38–40 px (above the WCAG 2.2 AA 24 px minimum). Heading levels never skip (section `h2` → card `h3` → role `h4`). When measuring contrast in a browser, freeze `transition` first — theme colors animate and a mid-transition read gives false failures.
- **HUD details**: each content section opens with an `.eyebrow` (`// 01 · EXPERIENCE`, `aria-hidden`, text only) and the hero carries a `.status-chip` ("Open to IT Assurance & Data Analytics roles", from `UI[lang].hero.status`, pulsing lime dot that `prefers-reduced-motion` freezes). `nav.ts` also writes `--scroll-progress` (0–1) on `<html>`; `.floating-nav::after` in `base.css` draws it as a thin lime bar inside the desktop pill.
- **Material 3 rules for new UI** (the design follows the M3 guide; apply these to anything added): (1) **state layers, not recolouring** — interactive elements get an 8% hover and 10% focus/press overlay of `currentColor` (`box-shadow: inset 0 0 0 999px color-mix(...)` or a `::after`), never a colour swap, lift, or glow; (2) **non-interactive elements have no hover or pressed state** (skill chips, ticker tiles); (3) **shape scale** — 8 (chips) · 12 (icon tiles) · 16 (tiles/cards) · 28 (large containers) · full (buttons, pills); (4) **sizes** — buttons 40, chips 32, icon tiles 40/48, icons 24, 48 px hit area (`::after` inset on `.btn`, `.text-link`, `.email-link`, `.copy-btn`); (5) **type** — label-large 14/500, title-medium 16/500, label-medium 12; (6) **motion** — `--m3-standard` (`cubic-bezier(0.2, 0, 0, 1)`) and `--m3-short` (200 ms) for state changes; (7) tonal buttons use `secondary-container` / `on-secondary-container`. (8) **focus ring** is 3 px (`:focus-visible`, tertiary, 2 px offset); (9) **48 dp targets** also cover the brand mark, theme toggle, header CTA, pill-nav items and mobile dock via `::after` (EN | ID is 43×48 because the two links are adjacent); the Experience toggle is a 48 px row. `--ease` is aliased to `--m3-standard`. Known deviations kept on purpose: pill-nav labels are 13 px (M3 label-large is 14; widening the pill would break header clearance at 960–1239 px), `main.css` still has some off-scale radii (14, 20, 22, 24, 30, 40 px) and the project-card hover morphs its radius, and the two brand-icon colours are custom colours, not tokens.
- **Brand-coloured icons**: LinkedIn and WhatsApp icons (hero socials, contact tiles) use `.brand-linkedin` / `.brand-whatsapp` in `base.css`, with a darker light-theme variant for contrast; GitHub stays `currentColor`. On a hovered (orange) contact tile the icon switches to the tile's text colour. Skill-card icon tiles are tinted from `--tile`, set inline from `cat.color`.
- **Motion rules**: the global reduced-motion block only shortens durations, so any **infinite** animation (`.tool-ticker-track`, `.status-dot`) must be turned off explicitly with `animation: none` in `base.css`'s reduced-motion block — otherwise it flickers. The hero headline lines (`.hl`) rise in with a CSS-only animation that ends visible, so the headline never depends on JS. Skill chips take their dot colour from `data-accent` (0 lime, 1 violet, 2 orange); they are static, so no hover.
- **Accessibility prioritized**: skip-link, `aria-label`/`aria-current` on nav, `aria-hidden` on decorative icons, `prefers-reduced-motion` handling, `noopener noreferrer` on externals, `:focus-visible` outline in lime.

## Important Files

| File | Role |
|---|---|
| `astro.config.mjs` | `output: 'static'`, `build.format: 'directory'`, UnoCSS integration. |
| `uno.config.ts` | `presetIcons({ scale: 1.2 })`, `content.filesystem` scope, runtime-icon `safelist`. |
| `tsconfig.json` | `extends: astro/tsconfigs/strict`, includes `.astro/types.d.ts`, excludes `dist`. |
| `vitest.config.ts` | `getViteConfig({ test: { include: ['tests/**/*.test.ts'] } })`. |
| `src/pages/index.astro` / `src/pages/id/index.astro` | The two routes (`/` English, `/id/` Indonesian) — each renders `<Home lang=…>`, which composes the six sections in order inside `<Layout>`. |
| `src/i18n/index.ts` | `Locale`, `localePath()`, the typed `UiStrings` interface, and the `UI` dictionary for every non-data string. |
| `src/layouts/Layout.astro` | App shell — `<html lang>`, `data-theme`, title/description, font preconnects, anti-FOUC inline script, CSS imports, five client script imports. Takes `lang`. |
| `src/styles/tokens.css` | ~38 `--v-theme-*` triplets per theme under `:root` (dark) and `html[data-theme='light']`. |
| `src/styles/main.css` | 1321-line design system — the visual identity. Treat as load-bearing. |
| `src/styles/base.css` | `.app`, `.main`, `.icon`, `.btn*`, `.text-*` color utilities, `.hero-socials`, plus the post-migration layout fixes (full-width last skill card, `.exp-role-row` wrap, `.exp-team`, contact/email fit). Replaces the four Vuetify primitives. |
| `CV_Akbar_Lucky_Basuki_no_photo.pdf` | Source of truth for all factual content. Repo root, not served, not imported by the build. |
| `src/styles/navbar.css` | Header/pill nav/mobile dock styles, moved verbatim from the old scoped block plus the static-render adaptations (`.dock-single`, `.dock-full`, breakpoint rules). |
| `src/data/nav.ts` | `NAV_SECTIONS` — single source of truth for section ids/labels/icons. |
| `src/scripts/nav.ts` | Scroll-spy (rootMargin `-45% 0px -50% 0px`), dock shrink/expand, active-label + shrunk-icon updates. Labels are read from the DOM (`data-label`), never hard-coded. |
| `src/scripts/theme.ts` | Applies theme, writes the 1-year `color-scheme` cookie, keeps the toggle icon/`aria-label` in sync (on load and on click). |
| `src/scripts/reveal.ts` | IntersectionObserver reveal; adds `reveal-init` at runtime only, so prerendered HTML stays visible without JS. |
| `src/assets/profile.jpeg` | Hero portrait (optimized at build by `<Image>`) — displayed in `.portrait-frame` (`border-radius: 46% 46% 25%`), counter-rotated 7° against the frame's -7°. |
| `wrangler.jsonc` | Cloudflare deploy config — `name: akbarlucky`, assets from `./dist`, `nodejs_compat`. |
| `pnpm-workspace.yaml` | Single-package workspace (`packages: ['.']`) + `onlyBuiltDependencies: [esbuild]` (Vite still needs esbuild's postinstall). The `vuetify@4.2.5` release-age exclude is inert but harmless. |
| `DESIGN.md` | Design spec — MD3/EVA-01 palette, typography, component vocabulary, a11y rules. Updated for the Astro build. |
| `PRODUCT.md` | Product brief — audience, positioning, brand commitments, content source. Updated for the Astro build. |
| `.impeccable/surfaces/portfolio.md` | Surface brief for the design tooling (mode, content rules, constraints). `.impeccable/critique/*.md` are dated review snapshots from the retired Nuxt design — history, not current spec. |

## Component Details

| Component | Purpose | Notes |
|---|---|---|
| `HeroSection.astro` | Hero — intro line, headline with accent, copy, CTA, social links, portrait + 3 stickers | Renders `profile.jpeg` through `astro:assets`' `<Image>` (390 px, `densities` 1x/2x, webp q80, `loading="eager"` + `fetchpriority="high"` — it is the LCP element; the 568 kB source becomes ~21 kB / ~52 kB). The primary CTA is a real `mailto:` link, not an anchor to `#contact`; next to it a tonal `.btn--tonal` "View CV" button opens `CV_URL` (the owner's public Google Drive copy, defined once in `src/i18n/index.ts`; `ContactSection.astro` links it too). The link's `aria-label` appends the localized "opens in a new tab". Stickers: `orbit-symbol`, `code-sticker`, `identity-sticker`. On phones (≤767 px) the portrait is ordered first and scaled down (`order: -1` in `base.css`) so the first screen shows a person, not a wall of text; on desktop the hero has no min-height so Experience starts above the fold. |
| `ProjectsSection.astro` | 2 project cards with art areas, SVG accessories, tonal tags | `art-primary` (violet) and `art-eva-orange`. Glyph icons come from data, so they rely on the safelist. Each card leads with `highlights` (`{ value, label }[]`, figures straight from the CV — currently 20,000+ reviews / 5 categories and 91% accuracy) rendered as `.project-highlights`; do not repeat a highlighted figure as a tech chip. Both cards still link to the generic GitHub profile until real repo URLs are supplied. |
| `ExperienceSection.astro` | 2-column: intro + stamp left, timeline right | 3 entries; first is `.current` (`primary-container` bg, full-opacity `on-surface` text). Each entry renders `role` (h4, plus the Current badge) and an optional `team` line (`.exp-team`) below it — keep `role` short and put the division/department in `team`. Only the first bullet is always visible; the rest sit in a native `<details class="exp-more">` (no JS) whose summary text comes from `UI[lang].experience.more` (`{n}` is replaced with the hidden count) / `.less`. The current role renders `open`. |
| `EducationSection.astro` | Vertical timeline with institution avatars | 2 entries. First card is `primary-container`; avatar accent is orange. The thesis row is conditional; `notes` (`{ icon, text }[]`) render as extra `.edu-thesis` rows (organization, certification, languages). |
| `SkillsSection.astro` | 5 skill cards, each with SVG accessory + a wrapping chip list (names only) | Icon color comes from `cat.color` via `text-${cat.color}` — those four utilities live in `base.css`, not UnoCSS. 5 cards in a 2-column grid: the odd last card spans the full row. Skills are name-only (`appliedIn` is optional and unused); the chip styling lives in `base.css`. |
| `ContactSection.astro` | Large `primary-container` block: lime shape, eyebrow, heading, big mono email + "Copy" button, then four labelled channel tiles (WhatsApp, LinkedIn, GitHub, View CV) | The copy button ships `hidden` and `copy.ts` reveals it only when `navigator.clipboard` exists, so no-JS visitors just see the `mailto:` link; its "Copied" label comes from `data-label-copied`. Tiles are 4-up on desktop, 2-up below 960 px, with an M3 state layer (8% hover, 10% focus/press) instead of a colour change. Tile hints are localized except account handles. Email shrinks on ≤480 px so it fits. Styles live in `base.css` ("Contact revamp"). |
| `Navbar.astro` | Header (brand, EN \| ID switch, theme toggle, CTA) + desktop pill nav + mobile dock | Both navs and both dock states always render; CSS at 960 px decides. Shrunk anchor carries `data-shrunk-item` so `nav.ts` can rewrite its icon. The language switch is a sibling of the brand (not inside `.header-actions`) so CSS can place it: against the theme toggle below 1240 px, beside the brand from 1240 px up, so the fixed pill never covers it. Between 960–1239 px the "Get in touch" button is hidden, and between 960–1139 px the pill's icons are hidden, for the same reason. |
| `ToolTicker.astro` | Slow marquee strip of tool **logo + name chips** under the hero (Google Sheets, Power BI, Looker Studio, Tableau, SQL, Python) | Decorative and `aria-hidden` (it repeats Skills); `src/data/tools.ts` holds `{ name, icon, color }` per tool. Icons come from `@iconify-json/simple-icons` (dev dependency) plus `mdi:database` for SQL; there is no SQL logo or Looker Studio mark in the sets, so SQL is a generic database glyph and Looker Studio uses the Looker logo. Each logo sits in a `.tool-chip` tile tinted with its brand colour (`--logo-color`, set on the chip); the tiles are non-interactive, so they have no hover state (hovering the strip only pauses it), and the light theme darkens the logo with a CSS filter. The track scrolls `-50%`, so each half is wider than the viewport (one copy of the list is ~1,000 px with names; the list renders 8 times, seamless up to ~3,500 px). Pauses on hover; static and scrollable under `prefers-reduced-motion`. Icon classes live in a data file, so they are safelisted in `uno.config.ts`. |
| `Home.astro` | Shared composition of `Layout` + the six sections for one `lang` | Both route files are one-liners around it, so the two languages cannot drift in structure. |
| `Footer.astro` | Copyright + stack line | Year computed in frontmatter: `new Date().getFullYear()`. Reads `Astro 7 · UnoCSS · EVA-01`. |

## Runtime/Tooling Preferences

- **Package manager**: pnpm only (`pnpm-lock.yaml` is the sole lockfile). `packageManager` is pinned to `pnpm@10.11.1`; if local corepack is disabled that field is ignored and the installed pnpm is used.
- **Runtime**: Node `>=22.22.0` (Astro 7's engine floor), declared in `engines`. No `.nvmrc`. No Bun required.
- **Build tool**: Vite 8 via Astro — no custom `vite.config.ts`; Vite behavior goes through `astro.config.mjs`.
- **TypeScript**: `astro/tsconfigs/strict`. Path aliases are not used in `src/` — imports are relative.
- **Vitest must stay on 5.x** — `^3.2.7` resolves against Vite 7 types while Astro 7 ships Vite 8, which makes `astro check` fail with `'test' does not exist in type 'UserConfig'`.
- **No env validation**: no `.env` files, no runtime config. The only env-adjacent read is the `color-scheme` cookie.
- **No CI/CD**: no `.github/workflows`, no Docker, no git hooks. Deployment is manual via `wrangler`.

## Testing & QA

- **Framework**: Vitest 5.0.5 + `experimental_AstroContainer` from `astro/container`. No DOM environment needed — components render to HTML strings.
- **Config**: `vitest.config.ts` wraps `getViteConfig()` so Astro components compile under test.
- **One test file**: `tests/basic.test.ts` renders both `src/pages/index.astro` (en) and `src/pages/id/index.astro` (id) and asserts, for each:
  - all six section ids (`hero`, `experience`, `education`, `projects`, `skills`, `contact`) are present, and appear in that order,
  - the right `<html lang>`, every nav label is localized (`data-label`), and the EN | ID links are present with `aria-current`,
  - `Business Analyst` and `data-theme="dark"` appear,
  - `v-application` and `v-icon` do **not** appear — the regression guard for "Vuetify is actually gone".
- **i18n parity tests**: every locale has every nav label; `experience`/`education`/`projects`/`skills` have the same ids, order, icons, colors, flags, and list lengths in `en` and `id` (project `highlights` must also match once thousands separators are stripped).
- **No unit tests** for scripts or types.
- **No e2e/browser tests**, no mocking, no coverage, no CI test configuration.

### Adding tests

```ts
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, it, expect } from 'vitest'
import Index from '../src/pages/index.astro'

describe('my feature', () => {
  it('renders', async () => {
    const container = await AstroContainer.create()
    const html = await container.renderToString(Index)
    expect(html).toContain('expected-text')
  })
})
```

When adding a section, update `NAV_SECTIONS`, the `SECTION_ORDER` array in the smoke test, and the component order in `src/pages/index.astro`. The test asserts both presence and document order, which is what keeps `NAV_SECTIONS` and the `<section id>` attributes in sync.

### Updating content from the CV

1. Read the CV text (`CV_Akbar_Lucky_Basuki_no_photo.pdf`); diff it against `src/data/*.ts` and the copy in `src/i18n/index.ts`.
2. Edit the data arrays, not the components, and **update both locales together** (English first, then Indonesian with the same facts and numbers; only the wording and number/date format change). Keep `role` short and use `team` for the division; keep dates in the `Mon YYYY — Mon YYYY` em-dash form; put every date, metric, and percentage in `class="font-mono"` slots (the components already do).
3. Grep for stale facts after editing — project `tech` chips and `highlights` repeat figures from the entries (e.g. an old accuracy). Skills are name-only: `SkillItem.appliedIn` is optional and currently unused, so skills render as chips.
4. Run the verification order, then the mobile no-overflow check from the QA checklist.

**Open question — Indonesian copy review**: the Indonesian text is a translation of the CV and has not been reviewed by the site owner. Worth a read-through, especially the OJK department name (`Departemen Pengaturan dan Pengembangan Pasar Modal (DPPM)`, translated from the CV's "Dept. of Regulation and Capital Market Development"), the regulation names in the OJK bullets, and the "Keamanan & perangkat lunak, berbasis data." stamp.

**Résumé link**: `CV_URL` points at a Drive file the owner shared ("view or download"). Its sharing setting is not verifiable from the build; re-check it if the link ever 404s or asks for access.

**Open question — WhatsApp number**: the CV lists `+62 899 9655 808`, but both WhatsApp links (`HeroSection.astro`, `ContactSection.astro`) use `https://wa.me/6285172455808`. They may be different numbers; this has not been resolved. Do not change either without confirmation.

### Manual QA checklist

Load `pnpm preview` at `http://localhost:4321/` and confirm:

- Six sections in order; portrait renders in the blob frame; stickers float.
- Nav click scrolls and the pill highlight follows; below 960 px the dock collapses to one icon while scrolling and re-expands 500 ms after it stops.
- Theme toggle goes light, reload stays light (cookie `color-scheme=light`), clearing the cookie returns to dark with no flash.
- Icons render as glyphs, not empty squares — an empty square means a missing icon name or a missing safelist entry.
- No horizontal scroll at 360, 390, 820, and 1440 px (`document.documentElement.scrollWidth - clientWidth` is 0), in both themes. Role titles stay at 1–2 lines on mobile; the Skills last card spans the full row on desktop and stacks on mobile.
- Repeat on `/id/`: text is Indonesian everywhere (scroll the mobile dock — the label must stay Indonesian), the theme toggle's `aria-label` is Indonesian before and after a click, and the EN | ID links switch routes while keeping the `#section`.
- Header clearance: at 960, 1024, 1100, 1240, 1440 px the EN | ID switch, theme toggle, and CTA must keep a gap of at least 8 px from the floating pill (both languages).
- No console errors. The one known exception is a `favicon.ico` 404 — the project has no `public/` directory and no favicon.
