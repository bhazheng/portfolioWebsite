# Repository Guidelines

## Project Overview

Personal portfolio website for **Akbar Lucky Basuki** (Business Analyst & Data Storyteller). A single-page, fully prerendered **Astro 7** site themed in Material Design 3 color roles with an Evangelion Unit-01 (EVA-01) palette. The UI/UX is inspired by https://rei.my.id/ — floating pill navigation, editorial section headings, filled tonal cards (no outlines), vector SVG accessories, and a sticker-style hero portrait. Deployed to Cloudflare as static assets via `wrangler`.

- **Package**: `akbar-portfolio-astro` v4.0.0 (private, ESM)
- **Stack**: Astro 7.4 (`output: 'static'`) + TypeScript 5.9 + UnoCSS 66 (icons only) + Vite 8 (via Astro)
- **Architecture**: One prerendered route (`/`), six `<section>` blocks with anchor-based navigation, zero API calls, zero client framework runtime
- **Section order**: Hero → Projects → Experience → Education → Skills → Contact
- **Client JS**: ~2.8 KB inline bundle (nav scroll-spy, theme toggle, scroll reveal). No Vue, no hydration.

> History: this was a Nuxt 3 + Vuetify 4 site. It was ported to Astro in v4.0.0 to drop the Vue runtime and the SSR server — Cloudflare's `pnpm install --frozen-lockfile` failed on the workspace file and Vercel 500'd because Vuetify's `ssrClientHints` mutated response headers in a serverless runtime. Do not reintroduce either.

## Architecture & Data Flow

**Single-page, top-down composition**: `src/pages/index.astro` → `Layout.astro` → six section components.

```
src/pages/index.astro
  └─ Layout.astro                      ← <html data-theme>, <head>, imports all CSS, client scripts
       ├─ skip-link (a11y)
       ├─ Navbar.astro                 ← header (scrolls away) + floating pill nav (fixed) + mobile dock
       ├─ <main class="main">
       │    ├─ HeroSection.astro        ← portrait photo + stickers + intro
       │    ├─ ProjectsSection.astro
       │    ├─ ExperienceSection.astro
       │    ├─ EducationSection.astro
       │    ├─ SkillsSection.astro
       │    └─ ContactSection.astro
       └─ Footer.astro
```

**Key architectural decisions**:

- **`output: 'static'`** — the page has no per-request content. Both hosts serve `dist/` as static assets, which removes the Vercel SSR failure mode entirely. If per-request rendering is ever needed, switch to `output: 'server'` + `@astrojs/cloudflare` and move `wrangler.jsonc`'s assets binding — not a small change.
- **`build.format: 'directory'`** — produces `dist/index.html`.
- **CSS is the design system, not utilities** — `src/styles/main.css` (1321 lines) is the primary design layer and is meant to stay intact. Vuetify primitives (`v-btn`, `v-icon`) were replaced by ~29 lines of hand-written classes in `base.css`; nothing else was rewritten.
- **Color tokens are R, G, B triplets** — `src/styles/tokens.css` defines `--v-theme-*` as comma-separated triplets because `main.css` calls `rgb(var(--v-theme-x))` in ~112 places. Do not convert them to hex.
- **Theme is an attribute on `<html>`** — `data-theme="dark"` (default) or `"light"`. A pre-paint `is:inline` script in `Layout.astro`'s `<head>` reads the `color-scheme` cookie and sets the attribute before first paint, preventing a dark flash on a light-mode reload. It must stay inline and in `<head>`.
- **Content data lives in `src/data/`** — plain typed arrays, no CMS, no fetch. Components are pure presentational mappings over those arrays.
- **UnoCSS is an icon resolver only** — `presetIcons({ scale: 1.2 })`, no utility presets. `content.filesystem` scans `src/**/*.{astro,ts,js,html}`.
- **Icons that bypass static extraction must be safelisted** — the nav script rewrites `className` at runtime (`i-material-symbols:*`), so the six nav icons, four skill-card icons, `image-search`, and both theme icons are in `uno.config.ts`'s `safelist`. Adding a runtime-swapped icon without safelisting it renders an empty box.
- **Implicit DOM↔data coupling** — `NAV_SECTIONS` ids in `src/data/nav.ts` must exactly match `<section id="...">` in the six section components. No compile-time enforcement; `tests/basic.test.ts` is the guard.
- **Scripts are bundled, not deferred manually** — the three `<script>` imports at the end of `<body>` are bundled by Vite and run after parsing, so they query the DOM directly with no `DOMContentLoaded` wrapper.

**Data flow**: Unidirectional, top-down. Sections take no props. The only cross-component contract is `NAV_SECTIONS` (exported from `src/data/nav.ts`, consumed by `Navbar.astro` and `src/scripts/nav.ts`).

## Key Directories

| Directory | Purpose |
|---|---|
| `src/pages/` | `index.astro` — sole route (`/`). |
| `src/layouts/` | `Layout.astro` — `<html>`/`<head>`, font links, anti-FOUC script, CSS imports, client script imports. |
| `src/components/` | 8 `.astro` files — `Navbar`, `Footer`, and the six `*Section` components. Explicit imports; no auto-registration. |
| `src/data/` | `nav.ts` (`NAV_SECTIONS`), `projects.ts`, `experience.ts`, `education.ts`, `skills.ts` — typed content arrays + their entry interfaces. |
| `src/scripts/` | `nav.ts` (scroll-spy + mobile dock), `theme.ts` (cookie + toggle), `reveal.ts` (IntersectionObserver reveal). |
| `src/styles/` | `reset.css`, `tokens.css`, `main.css`, `base.css`, `navbar.css` — imported in that order by `Layout.astro`. |
| `src/types/` | `career.ts` (`ImpactMetric`), `skills.ts` (`SkillItem`, `SkillCategory`). |
| `src/assets/` | `profile.jpeg` — hero portrait, imported as a module so Astro fingerprints it. |
| `tests/` | `basic.test.ts` — single Astro container smoke test. |
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
- **M3 filled cards, no outlines**: tonal surface elevation (`surface-container` → `surface-container-high`) instead of `border`. Hover applies tonal step-up + soft M3 shadow + `translateY(-2px)`. The only borders are `border: 0` on `.btn` and `1px solid outline-variant` on the mobile dock pill.
- **Color cycling**: lime (`tertiary`), violet (`primary`), orange (`eva-orange`) cycle via `acc-0`/`acc-1`/`acc-2`.
- **Lime readability rules**: lime (`#86dd00`) at 45–70% opacity on dark surfaces only. On `primary-container` (`#5a2f90`) backgrounds lime is unreadable — use `on-surface` (`#ebdcfe`) at full opacity instead.
- **Responsive breakpoint is 960 px** (Vuetify's `md`). Desktop pill nav and header CTA hide below it; the mobile dock hides at and above it. Both navs are always in the DOM — CSS picks one. Do not reintroduce `v-if`-style conditional rendering for this.
- **Icons**: `@iconify-json/material-symbols` (UI/nav) + `@iconify-json/mdi` (brand), resolved by `presetIcons`. `i-material-symbols:arrow-up-right` does not exist in the icon set — use `arrow-outward`.
- **Fonts**: Google Sans Flex (body/heading) + Google Sans Code (mono via `.font-mono`), loaded from the Google Fonts CDN. Every date/metric/percentage should carry `class="font-mono"`.
- Dark is default; light is fully defined; the pre-paint script + `theme.ts` keep them in sync.
- **Accessibility prioritized**: skip-link, `aria-label`/`aria-current` on nav, `aria-hidden` on decorative icons, `prefers-reduced-motion` handling, `noopener noreferrer` on externals, `:focus-visible` outline in lime.

## Important Files

| File | Role |
|---|---|
| `astro.config.mjs` | `output: 'static'`, `build.format: 'directory'`, UnoCSS integration. |
| `uno.config.ts` | `presetIcons({ scale: 1.2 })`, `content.filesystem` scope, runtime-icon `safelist`. |
| `tsconfig.json` | `extends: astro/tsconfigs/strict`, includes `.astro/types.d.ts`, excludes `dist`. |
| `vitest.config.ts` | `getViteConfig({ test: { include: ['tests/**/*.test.ts'] } })`. |
| `src/pages/index.astro` | Sole route — composes the six sections in order inside `<Layout>`. |
| `src/layouts/Layout.astro` | App shell — `data-theme`, font preconnects, anti-FOUC inline script, CSS imports, three client script imports. |
| `src/styles/tokens.css` | ~38 `--v-theme-*` triplets per theme under `:root` (dark) and `html[data-theme='light']`. |
| `src/styles/main.css` | 1321-line design system — the visual identity. Treat as load-bearing. |
| `src/styles/base.css` | `.app`, `.main`, `.icon`, `.btn*`, `.text-*` color utilities, `.hero-socials`. Replaces the four Vuetify primitives. |
| `src/styles/navbar.css` | Header/pill nav/mobile dock styles, moved verbatim from the old scoped block plus the static-render adaptations (`.dock-single`, `.dock-full`, breakpoint rules). |
| `src/data/nav.ts` | `NAV_SECTIONS` — single source of truth for section ids/labels/icons. |
| `src/scripts/nav.ts` | Scroll-spy (rootMargin `-45% 0px -50% 0px`), dock shrink/expand, active-label + shrunk-icon updates. |
| `src/scripts/theme.ts` | Applies theme, writes the 1-year `color-scheme` cookie, keeps the toggle icon/`aria-label` in sync (on load and on click). |
| `src/scripts/reveal.ts` | IntersectionObserver reveal; adds `reveal-init` at runtime only, so prerendered HTML stays visible without JS. |
| `src/assets/profile.jpeg` | Hero portrait — displayed in `.portrait-frame` (`border-radius: 46% 46% 25%`), counter-rotated 7° against the frame's -7°. |
| `wrangler.jsonc` | Cloudflare deploy config — `name: akbarlucky`, assets from `./dist`, `nodejs_compat`. |
| `pnpm-workspace.yaml` | Single-package workspace (`packages: ['.']`) + `onlyBuiltDependencies: [esbuild]` (Vite still needs esbuild's postinstall). The `vuetify@4.2.5` release-age exclude is inert but harmless. |
| `DESIGN.md` | Design spec — MD3/EVA-01 palette, typography, component vocabulary, a11y rules. **Still describes the Vuetify build; the palette and layout rules remain accurate, the stack references do not.** |
| `PRODUCT.md` | Product brief — audience, positioning, brand commitments. **Stale — still says Nuxt 3 + Tailwind.** |

## Component Details

| Component | Purpose | Notes |
|---|---|---|
| `HeroSection.astro` | Hero — intro line, headline with accent, copy, CTA, social links, portrait + 3 stickers | Imports `profile.jpeg` for `src`/`width`/`height`. Stickers: `orbit-symbol`, `code-sticker`, `identity-sticker`. |
| `ProjectsSection.astro` | 2 project cards with art areas, SVG accessories, tonal tags | `art-primary` (violet) and `art-eva-orange`. Glyph icons come from data, so they rely on the safelist. |
| `ExperienceSection.astro` | 2-column: intro + stamp left, timeline right | 3 entries; first is `.current` (`primary-container` bg, full-opacity `on-surface` text). |
| `EducationSection.astro` | Vertical timeline with institution avatars | 2 entries. First card is `primary-container`; avatar accent is orange. Thesis row is conditional. |
| `SkillsSection.astro` | 4 skill cards, each with SVG accessory + stacked list | Icon color comes from `cat.color` via `text-${cat.color}` — those four utilities live in `base.css`, not UnoCSS. |
| `ContactSection.astro` | Large `primary-container` block with lime shape, email link, socials | Socials hover → orange. |
| `Navbar.astro` | Header (brand, theme toggle, CTA) + desktop pill nav + mobile dock | Both navs and both dock states always render; CSS at 960 px decides. Shrunk anchor carries `data-shrunk-item` so `nav.ts` can rewrite its icon. |
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
- **One test file**: `tests/basic.test.ts` renders `src/pages/index.astro` and asserts:
  - all six section ids (`hero`, `projects`, `experience`, `education`, `skills`, `contact`) are present,
  - `Business Analyst` and `data-theme="dark"` appear,
  - `v-application` and `v-icon` do **not** appear — the regression guard for "Vuetify is actually gone".
- **No unit tests** for scripts, data modules, or types.
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

When adding a section, update `NAV_SECTIONS` **and** the six-id assertion in the smoke test. The test is what keeps `NAV_SECTIONS` and the `<section id>` attributes in sync.

### Manual QA checklist

Load `pnpm preview` at `http://localhost:4321/` and confirm:

- Six sections in order; portrait renders in the blob frame; stickers float.
- Nav click scrolls and the pill highlight follows; below 960 px the dock collapses to one icon while scrolling and re-expands 500 ms after it stops.
- Theme toggle goes light, reload stays light (cookie `color-scheme=light`), clearing the cookie returns to dark with no flash.
- Icons render as glyphs, not empty squares — an empty square means a missing icon name or a missing safelist entry.
- No console errors, no 404s.
