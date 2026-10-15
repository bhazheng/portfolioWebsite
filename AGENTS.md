# Repository Guidelines

## Project Overview

Personal portfolio website for **Akbar Lucky Basuki** (Business Analyst & Data Storyteller). A single-page, statically-generated Nuxt 3 site themed in Material Design 3 (Vuetify 4) with an Evangelion Unit-01 (EVA-01) color palette. The UI/UX is inspired by https://rei.my.id/ — floating pill navigation, editorial section headings, filled tonal cards (no outlines), vector SVG accessories, and a sticker-style hero portrait. Deployed to Cloudflare as static assets via `wrangler`.

- **Package**: `akbar-portfolio-vue-ts` v3.0.0 (private, ESM)
- **Stack**: Nuxt 3 + Vue 3.5 + TypeScript 5.7 + Vuetify 4.2.5 + UnoCSS 66 + Vite 7 + Nitro 2
- **Architecture**: One route (`/`), six `<section>` blocks with anchor-based navigation, zero API calls, zero global store
- **Section order**: Hero → Projects → Experience → Education → Skills → Contact

## Architecture & Data Flow

**Single-page, top-down composition**: `app.vue` → `pages/index.vue` → six section components rendered in order.

```
app.vue
  └─ <v-app> (Vuetify root)
       ├─ skip-link (a11y)
       ├─ <Navbar>                    ← header (scrolls away) + floating pill nav (fixed)
       ├─ <v-main>
       │    └─ <NuxtPage> → pages/index.vue
       │         ├─ <HeroSection>      ← portrait photo + stickers + intro
       │         ├─ <ProjectsSection>
       │         ├─ <ExperienceSection>
       │         ├─ <EducationSection>
       │         ├─ <SkillsSection>
       │         └─ <ContactSection>
       └─ <Footer>
```

**Key architectural decisions**:

- **No `src/` directory** — uses Nuxt's conventional auto-discovery (`components/`, `composables/`, `plugins/`, `pages/`, `types/`, `assets/`).
- **No router, no store, no API** — data is hardcoded as literal arrays inside each component's `<script setup>`. No `useFetch`, `asyncData`, or Pinia/Vuex.
- **IntersectionObserver scroll-spy** (`composables/useActiveSection.ts`) drives active nav highlighting. Root-margin `-45% 0px -50% 0px` biases to viewport center.
- **Theme persistence via cookie + anti-FOUC** — `color-scheme` cookie (1-year Max-Age) read by an inline pre-paint script in `nuxt.config.ts` and a client plugin (`plugins/theme-persist.client.ts`), avoiding flash on SSG reloads. These two are tightly coupled and must stay in sync.
- **UnoCSS reduced to icon resolver only** — configured with `presetIcons({ scale: 1.2 })`, no utility presets. All layout/typography utilities come from Vuetify + custom CSS classes in `main.css`. `// @unocss-include` comments force scanning of dynamically-referenced icon names.
- **Scroll-reveal directive** (`plugins/reveal.ts`) — `v-reveal` custom directive using IntersectionObserver. Elements fade+slide in when entering viewport. Has `getSSRProps()` returning `{}` so SSR renders elements in final state (no animation on server). `.reveal-in { transform: none }` kills transforms on revealed elements — elements that need persistent transforms (e.g. rotated stamps/stickers) must be wrapped in a separate `v-reveal` div so the inner element's own transform survives.
- **Implicit DOM↔data coupling** — `NAV_SECTIONS` ids must exactly match `<section id="...">` attributes across six component files; no compile-time enforcement.
- **Nuxt plugins as DI** — `vuetify:configuration` and `vuetify:ready` hooks are the only extension points. No manual provide/inject.

**Data flow**: Unidirectional, top-down. Each section is self-contained (no props passed between sections). The only cross-component contract is `NAV_SECTIONS` (exported from `useActiveSection.ts`, consumed by `Navbar`).

## Key Directories

| Directory | Purpose |
|---|---|
| `components/` | 9 Vue SFCs — auto-imported by Nuxt (`components: true`). No manual import needed. |
| `composables/` | `useActiveSection.ts` — auto-imported via `use*` prefix convention. Exports `NAV_SECTIONS` constant (section order: hero → projects → experience → education → skills → contact). |
| `plugins/` | `reveal.ts` (scroll-reveal directive, SSR-safe), `theme-persist.client.ts` (order -30, client-only), `vuetify-icons.ts` — registered by Nuxt convention. |
| `pages/` | `index.vue` — sole route (`/`). |
| `types/` | `career.ts` (`ImpactMetric`), `skills.ts` (`SkillItem`, `SkillCategory`) — shared TS interfaces. |
| `assets/styles/` | `main.css` — global CSS (~1333 lines): rei-style design layer (layout, nav, hero, cards, timelines, sections, animations, accessibility). NOT a small gap-filler — it's the primary design system. |
| `assets/` | `profile pic.jpeg` — hero portrait photo (referenced via `~/assets/profile pic.jpeg` in HeroSection.vue). |
| `tests/` | `basic.test.ts` — single Vitest integration smoke test. |
| `.nuxt/`, `.output/` | Nuxt-generated build artifacts (gitignored). `.output/public` is the SSG deploy target. |

**Not present**: `docs/`, `middleware/`, `layouts/`, `server/`, `stores/`, `utils/`, `__tests__/`, `fixtures/`, `.github/`.

## Development Commands

Package manager: **pnpm** (sole lockfile: `pnpm-lock.yaml`). No `engines` field; inferred Node 22 LTS target.

| Command | What it does |
|---|---|
| `pnpm dev` | Start Nuxt dev server with HMR (default `http://localhost:3010/`) |
| `pnpm generate` | Static site generation → `.output/public` (primary build for deployment) |
| `pnpm build` | Full production build (SSR bundle, not the deploy path) |
| `pnpm preview` | Locally serve the built `.output` |
| `pnpm type-check` | `vue-tsc --noEmit` — type-check `.vue` + `.ts` files |
| `pnpm test` | `vitest` — runs in watch mode by default |
| `pnpm vitest run` | Single CI-style test run (no dedicated script defined) |

**Dev server override**: Run on port 4545 with `NUXT_IGNORE_LOCK=1 npx nuxt dev --port 4545`. Kill stale processes on port 3010 before starting.

**Deployment** (manual, no script): `pnpm generate` → `wrangler deploy` (or `npx wrangler deploy`). Config in `wrangler.jsonc` (`name: akbarlucky`, assets directory `./.output/public`).

**What's absent**: No `lint`, `format`, `deploy`, or `test:ci` script. No ESLint, Prettier, Stylelint, Biome, or oxlint configured anywhere.

## Code Conventions & Common Patterns

### Formatting & Naming
- **No linter or formatter** — code style is unmanaged. Quality gates are `type-check` and `test` only.
- **Files**: PascalCase for Vue components (`HeroSection.vue`), kebab-case for config (`nuxt.config.ts`, `wrangler.jsonc`), `use*` prefix for composables (auto-imported).
- **Components**: PascalCase, suffix-by-purpose — `*Section` for page sections, `Navbar`/`Footer` for chrome. `HeroDashboard.vue` exists but is unused (replaced by profile photo).
- **Types**: PascalCase (`ExperienceEntry`, `ImpactMetric`). Shared types in `types/`, imported with `import type`.
- **Constants**: SCREAMING_SNAKE_CASE for component-local data arrays (`EXPERIENCE`, `PROJECTS`, `SKILL_CATEGORIES`, `EDUCATION`) and exported constants (`NAV_SECTIONS`).
- **Functions/refs**: camelCase (`toggleTheme`, `copyText`, `drawer`, `active`, `copiedField`).

### Vue/Nuxt Patterns
- **`<script setup lang="ts">`** everywhere — Composition API only, no Options API, no `defineComponent`.
- **Scoped `<style>` blocks only in `Navbar.vue`** (mobile dock styles). All other styling delegated to Vuetify utility classes + global `main.css`. This is unusual for Vue but keeps the design system centralized.
- **Nuxt auto-imports**: `useHead`, `defineNuxtPlugin`, `useActiveSection`, Vue APIs (`ref`, `computed`, `watch`, `onMounted`), and Vuetify composables (`useTheme`, `useDisplay`) are available without explicit imports. Some files import them explicitly — harmless redundancy.
- **Navigation is anchor-based**, not router-based: `href="#<id>"` targeting section ids. No `<NuxtLink>` usage. External links use `<a target="_blank" rel="noopener noreferrer">`.
- **CSS**: `html.scroll-smooth` globally; `section[id] { scroll-margin-top: 96px }` offsets the floating pill nav.
- **Scroll-reveal**: `v-reveal` directive on most section blocks. `v-reveal="200"` sets delay in ms. Elements needing persistent transforms must be wrapped — the inner element keeps its transform, the outer div gets the reveal animation.

### Error Handling
- **Minimal/thin** — appropriate for a static site with no runtime data.
- Cookie parsing in `theme-persist.client.ts` validates values are exactly `'dark'` or `'light'` (returns `null` otherwise).
- `useActiveSection.ts` filters falsy `getElementById` results with `.filter(Boolean) as HTMLElement[]`.
- **No `error.vue`, no error boundaries, no Sentry.**

### Async Patterns
- App is overwhelmingly synchronous — no data fetching.
- `useActiveSection.ts` uses `onMounted`/`onUnmounted` lifecycle for `IntersectionObserver` setup/teardown (effect-style without `watchEffect`).
- `theme-persist.client.ts` uses Nuxt hooks (`vuetify:configuration`, `vuetify:ready`) + Vue `watch()` — no Promises.
- **No `asyncData`, `useAsyncData`, `useFetch`, or Suspense boundaries.**

### State Management
- **No global store** (no Pinia/Vuex/`useState`). Deliberately stateless.
- Local refs per component: `expanded`/`shrunk` (Navbar mobile nav collapse), `active` (useActiveSection).
- `useActiveSection()` is a plain composable, not a singleton — each caller creates its own `active` ref and own `IntersectionObserver`. Functionally correct but duplicated work.
- Theme state managed by Vuetify `useTheme()`; persistence handled in plugin, not a store.

### Styling Approach
- **Three layers**: Vuetify 4 (MD3 components + design tokens) → UnoCSS (icons only) → `main.css` (~1333 lines, the primary design system).
- Full MD3 color system defined inline in `nuxt.config.ts` → `vuetify.vuetifyOptions.theme.themes.{light,dark}` with named roles (`primary`, `secondary`, `tertiary`, `surface-container-*`, `eva-orange`).
- **M3 filled cards, no outlines**: All cards use tonal surface elevation (`surface-container` → `surface-container-high` → `surface-container-highest`) instead of `border` properties. Hover applies tonal step-up + soft M3 shadow + `translateY(-2px)`. The only `border` in the codebase is `border: none` on the theme toggle button and `border: 1px solid outline-variant` on the mobile dock pill (Navbar.vue scoped style).
- **Color cycling**: Lime (`tertiary`), violet (`primary`), and orange (`eva-orange`) cycle across decorative elements — card accessories (acc-0=lime, acc-1=violet, acc-2=orange), project art areas, avatar backgrounds, and accent text.
- **Lime readability rules**: Lime (`#86dd00`) is used at 45-70% opacity on dark surfaces ONLY. On `primary-container` (`#5a2f90` medium purple) backgrounds, lime is unreadable — all text inside purple cards uses `on-surface` (`#ebdcfe`) at full opacity instead.
- Display thresholds: `{xs:0, sm:600, md:960, lg:1280, xl:1920, xxl:2560}` — `useDisplay().mdAndUp` drives responsive switches (desktop pill nav vs. mobile bottom dock).
- Icons: `@iconify-json/material-symbols` (UI/nav) + `@iconify-json/mdi` (brand). Vuetify `defaultSet: 'custom'`.
- Fonts: Google Sans Flex (body/heading) + Google Sans Code (mono via `.font-mono` utility). Every date/metric/percentage should carry `class="font-mono"`.
- Dark theme is default; light fully defined; toggle via `useTheme().toggle()`.
- **Accessibility prioritized**: skip-link, `aria-label`/`aria-current` on nav, `prefers-reduced-motion` global reset (neutralizes animations), `noopener noreferrer` on externals, text labels on icon buttons, `:focus-visible` outline in lime.

## Important Files

| File | Role |
|---|---|
| `app.vue` | Root component / app shell — `<v-app>` wrapper, skip-link, Navbar, `<NuxtPage>`, Footer. |
| `nuxt.config.ts` | Central config — modules, SSR, anti-FOUC inline script, Google Fonts, full MD3 theme palettes, Vuetify options. |
| `pages/index.vue` | Sole route — composes 6 sections in order (Hero → Projects → Experience → Education → Skills → Contact), sets `<title>` via `useHead()`. |
| `unocss.config.ts` | UnoCSS config — `presetIcons({ scale: 1.2 })` only. |
| `composables/useActiveSection.ts` | Scroll-spy composable + `NAV_SECTIONS` constant (single source of truth for section ids/labels/icons). Section order: hero, projects, experience, education, skills, contact. |
| `plugins/reveal.ts` | Scroll-reveal `v-reveal` directive. SSR-safe via `getSSRProps()`. Uses IntersectionObserver. `.reveal-in` class applies `transform: none` — elements needing persistent transforms must be wrapped in a separate `v-reveal` div. |
| `plugins/theme-persist.client.ts` | Client plugin (order -30) — seeds Vuetify theme from `color-scheme` cookie pre-hydration, syncs via `watch()`. |
| `plugins/vuetify-icons.ts` | Configures Vuetify to use Material Symbols (`ms`) icon set via `vuetify:configuration` hook. |
| `assets/styles/main.css` | Global CSS (~1333 lines) — the primary design system: root vars, page-width, section headings, floating pill nav, hero section (portrait + stickers), project cards (M3 filled, mask-based art rings, vector accessories, tonal tags), experience timeline (rail, avatars, M3 cards, stamp sticker), education timeline, skills (M3 cards, stacked list), contact (primary-container, socials), footer, scroll-reveal animation, ambient float animations, focus-visible, reduced-motion. |
| `assets/profile pic.jpeg` | Hero portrait photo — displayed inside a `.portrait-frame` blob shape (`border-radius: 46% 46% 25%`), counter-rotated 7° to the frame's -7° tilt. |
| `types/career.ts` | `ImpactMetric` interface (`{label, value: string}`). |
| `types/skills.ts` | `SkillItem` + `SkillCategory` interfaces. |
| `wrangler.jsonc` | Cloudflare deploy config — `name: akbarlucky`, assets from `./.output/public`, `nodejs_compat` flag. |
| `tsconfig.json` | Minimal — only `extends: ./.nuxt/tsconfig.json`. All TS config is Nuxt-generated. |
| `DESIGN.md` | Canonical design spec — MD3/EVA-01 palette, typography, component vocabulary, a11y rules, rei.my.id design patterns. |
| `PRODUCT.md` | Product brief — audience, positioning, brand commitments. (Partially stale — references Tailwind/glass-nav.) |

## Component Details

| Component | Purpose | Notes |
|---|---|---|
| `HeroSection.vue` | Hero — intro line, headline with accent, copy, CTA buttons, social links, portrait photo + 3 stickers (orbit-symbol, code-sticker, identity-sticker) | Profile photo replaces former HeroDashboard chart. Stickers use `box-shadow` ring (not border). Code-sticker is orange, identity-sticker is tertiary-container (lime). |
| `ProjectsSection.vue` | Projects — 2 project cards with art areas, vector SVG accessories, tonal tags | Project art variants: `art-primary` (violet), `art-eva-orange` (orange). Tags are M3 filled tonal chips. |
| `ExperienceSection.vue` | Experience — 2-column layout: intro+stamp on left, timeline on right | Stamp is an orange-container sticker (`float-gentle` animation, -5° rotation, `box-shadow` ring). 3 entries, first is `.current`. Current card uses `primary-container` bg with `on-surface` text at full opacity. |
| `EducationSection.vue` | Education — vertical timeline with institution avatars + M3 filled cards | 2 entries. First card (Universitas Brawijaya) uses `primary-container` bg with `on-surface` text at full opacity. Avatar accent (first entry) is orange. |
| `SkillsSection.vue` | Skills — 4 skill cards in a grid, each with vector SVG accessory + stacked skill list | Card accessories cycle acc-0→acc-2 (lime→violet→orange). Skill list items are stacked (name on top, applied underneath). |
| `ContactSection.vue` | Contact — large primary-container block with lime decorative shape, email link, socials | Socials hover → orange bg. Decorative shape is lime. |
| `Navbar.vue` | Navigation — header (brand + theme toggle + CTA, scrolls away) + floating pill nav (desktop, fixed) / mobile bottom dock | Desktop pill: `position: fixed; top: 14px`. Mobile: icon-only pill, shrinks to 1 icon on scroll, expands after 500ms. Has scoped `<style>`. |
| `Footer.vue` | Minimal footer — copyright + tech stack | |
| `HeroDashboard.vue` | (Unused) Former hero data visualization — replaced by profile photo | Still in `components/` but not imported anywhere. |

## Runtime/Tooling Preferences

- **Package manager**: pnpm (required — `pnpm-lock.yaml` is sole lockfile). `pnpm-workspace.yaml` exists but only configures `minimumReleaseAgeExclude: [vuetify@4.2.5]`; this is a single-package repo.
- **Runtime**: Node 22 LTS (inferred from `@types/node ^22.10.2`; no `.nvmrc`). No Bun required.
- **Build tool**: Vite 7.3.6 via Nuxt's `@nuxt/vite-builder` — no custom `vite.config.ts`; all Vite behavior configured through `nuxt.config.ts`.
- **SSG is the deploy path**: `nuxt generate` produces `.output/public` (Nitro preset `static`). `ssr: true` is set but production is fully prerendered.
- **TypeScript**: `strict: true`, `verbatimModuleSyntax: true`, `moduleResolution: Bundler`, `noEmit: true`. Path aliases (`~`, `@`, `~~`, `#shared`, etc.) are Nuxt-generated in `.nuxt/tsconfig.json`.
- **Vuetify 4 + `vuetify-nuxt-module` 1.0.0-rc.6** — both cutting-edge/unstable, explicitly excluded from pnpm's release-age guard.
- **No env validation**: No `.env` files, no `runtimeConfig`, no zod/envalid. The only env-adjacent pattern is reading the `color-scheme` cookie directly.
- **No CI/CD**: No `.github/workflows`, no Docker, no git hooks (no Husky/lint-staged). Deployment is manual via `wrangler`.
- **`@vueuse/core` is declared as a dependency but not imported anywhere in source** — likely a leftover from the Tailwind→UnoCSS migration.

## Testing & QA

- **Framework**: Vitest 3.2.7 + `@nuxt/test-utils` 3.23.0. DOM environment: `happy-dom` 15.11.7. `playwright-core` installed (transitive peer) but unused by tests.
- **No Vitest config file** — runs entirely on defaults.
- **One test file**: `tests/basic.test.ts` — a Nuxt integration smoke test that boots a real server (`setup({ server: true })`), fetches `/` via `$fetch`, and asserts SSR HTML contains `v-application` + all six section ids (`hero`, `experience`, `education`, `projects`, `skills`, `contact`).
- **No unit tests** for composables, plugins, types, or individual components.
- **No e2e/browser tests** — no `createPage()` usage despite playwright-core being available.
- **No mocking** — no `vi.mock()`, no `__mocks__/`, no MSW. Tests run against real Nuxt + Vuetify.
- **No coverage** — no coverage packages installed, no thresholds, no `--coverage` flag.
- **No CI test configuration** — tests run locally only.

### Adding tests

Follow the existing pattern in `tests/basic.test.ts`:

```ts
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('My feature', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true,
  })

  it('renders expected content', async () => {
    const html = await $fetch('/')
    expect(html).toContain('expected-text')
  })
})
```

When adding new sections, update the smoke test to assert the new section id. Remember: `NAV_SECTIONS` ids in `composables/useActiveSection.ts` must match `<section id="...">` in component files — the test implicitly verifies this coupling.
