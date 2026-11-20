# Design — Material Design 3 Expressive in EVA-01

<!-- impeccable:design-schema 1 -->

A one-page scrolling portfolio for Akbar Lucky Basuki, built on Google **Material Design 3 Expressive**
(spring physics motion tokens, organic 35-shape vocabulary & shape-morphing controls, emphasized
Google Sans Flex typography, wavy progress indicators, and filled tonal color roles — hand-written
CSS tokens, no component library) with a palette derived from Evangelion Unit-01: violet primary,
neon-lime data accent, and deep violet-black neutrals. The UI/UX is inspired by https://rei.my.id/ —
floating toolbar navigation, editorial section headings with accent dots, filled tonal cards
(no outlines), organic SVG decorative shapes, sticker-style hero portrait, and a
large colored contact container.

## World Statement

In high-stakes environments, thousands of complex data channels converge. The data analyst's
job is not to add noise, but to synthesize critical telemetry into immediate, unambiguous
decisions. The interface is a calm, legible Material surface system wearing EVA-01's colors:
EVA-01 violet carries structure and identity, sync neon lime carries data and figures, and
EVA-01 chest orange carries warmth and "open" accents. Material's tonal surfaces and
elevation do the framing, so the data story reads first — no atmosphere layer, no neon glow.

All three EVA-01 colors (violet, lime, orange) cycle across decorative elements — card
accessories, avatar backgrounds, project art areas, sticker accents — creating a dynamic,
visually rich feel. Lime is restricted to dark surfaces at reduced opacity (45-70%) where
it reads as a muted olive-sage accent; on medium-purple `primary-container` backgrounds it
is replaced by neutral `on-surface` text for readability.

## Platform / Delivery

**Astro 7 static output** (`output: 'static'`, two prerendered routes — `/` English and `/id/` Indonesian — and no client framework).
The Material Design 3 color roles are plain CSS custom properties in `src/styles/tokens.css`
(`--v-theme-*` as R, G, B triplets — the prefix is a holdover from the retired Vuetify build and
is kept so `rgb(var(--v-theme-x))` keeps working in `main.css`), while Material Design 3
Expressive motion physics, shape scale, emphasized typography, sliding nav indicator, connected
button groups, morphing feedback, and segmented strips live in `src/styles/m3-expressive.css`
(loaded last). **UnoCSS** (icons only)
supplies glyphs from **Material Symbols** (`i-material-symbols:*`, UI) and **MDI**
(`i-mdi:*`, brand marks). **Google Sans Flex** for reading & display, **Google Sans Code** for
tabular figures. No Tailwind, no component library; theme is a `data-theme` attribute on
`<html>`, set before first paint from the `color-scheme` cookie.

## Section Order

Hero → Experience → Education → Projects → Skills → Contact

This order leads with identity, then walks through career history and academic
foundations before showing project proof-of-work, closing with capabilities and a
call to action.

## Palette

Color strategy: **M3 tonal roles seeded from EVA-01** — violet primary/secondary, neon-lime
tertiary for data, chest orange for status and warm accents. Light and dark are both
first-class; the theme toggles and persists via a `color-scheme` cookie. All literals live in
`src/styles/tokens.css` — dark under `:root`, light under `html[data-theme='light']`, as
comma-separated R, G, B triplets (do not convert them to hex).

### Dark (default)

| Role | Value | Use |
| --- | --- | --- |
| `background` / `surface` | `#180f26` | Deep violet-black ground |
| `on-surface` / `on-background` | `#ebdcfe` | Primary reading text (also used inside primary-container cards at full opacity) |
| `surface-container-lowest` | `#120921` | Deepest tonal surface |
| `surface-container-low` | `#20172f` | Hero card, elevated panels |
| `surface-container` | `#241b33` | Card backgrounds, nav pill |
| `surface-container-high` | `#2f263e` | Hover elevation, tonal tags |
| `surface-container-highest` | `#3a304a` | Highest elevation, credential badges |
| `surface-bright` | `#3e354e` | Bright surface |
| `surface-dim` | `#180f26` | Dim surface |
| `on-surface-variant` | `#cfc1e1` | Secondary text, skill applied labels |
| `outline` / `outline-variant` | `#988ba9` / `#4c425c` | Dividers |
| `primary` / `on-primary` | `#d9b9ff` / `#431278` | EVA-01 violet — identity, CTA buttons, mobile active label |
| `primary-container` / `on-primary-container` | `#5a2f90` / `#eeddff` | Filled violet areas — current experience card, first education card, contact container, floating nav active state |
| `secondary` / `on-secondary` | `#d5bbff` / `#3b2166` | Violet support role, tech chips |
| `tertiary` / `on-tertiary` | `#86dd00` / `#1e3700` | **Sync neon lime — focal sparks (status dot, wavy progress, focus ring, current badge)** |
| `tertiary-soft` | `#a7e855` | **Refined full-opacity chartreuse — data, role titles, and figures on dark surfaces** |
| `tertiary-container` / `on-tertiary-container` | `#2d5000` / `#9ffb29` | Filled lime areas — ongoing experience avatar, identity sticker |
| `eva-orange` / `on-eva-orange` | `#ffb59a` / `#5b1b00` | **Chest orange — warm accents, headline accent, code sticker, edu avatar, socials hover** |
| `eva-orange-container` / `on-eva-orange-container` | `#802a00` / `#ffdbcf` | Filled orange areas — experience stamp, header contact pill, second project art |
| `error` / `on-error` | `#ffb4ab` / `#690005` | Semantic error (M3 red) |

### Light

| Role | Value | Use |
| --- | --- | --- |
| `background` / `surface` | `#fcfaff` | Clean neutral-tinted porcelain ground |
| `on-surface` / `on-background` | `#20172f` | Primary reading text |
| `surface-container-lowest` … `-highest` | `#ffffff` → `#e6e1ee` | Tonal elevation ladder (`#f7f5fb` / `#f2eff7` / `#ece8f3` / `#e6e1ee`) |
| `on-surface-variant` | `#4c425c` | Secondary text |
| `outline` / `outline-variant` | `#7e728f` / `#cfc1e1` | Borders, dividers |
| `primary` / `on-primary` | `#7348aa` / `#ffffff` | EVA-01 violet |
| `primary-container` / `on-primary-container` | `#e7d4ff` / `#4a217e` | Highlighted cards & nav indicator |
| `secondary` / `on-secondary` | `#6b5197` / `#ffffff` | Violet support role |
| `tertiary` / `tertiary-soft` / `on-tertiary` | `#3e6a00` / `#3e6a00` / `#ffffff` | **Dark lime for text on light** |
| `tertiary-container` / `on-tertiary-container` | `#c8f57c` / `#1f3b00` | Soft chartreuse fills & AAA metric values |
| `eva-orange` / `on-eva-orange` | `#a83900` / `#ffffff` | Chest orange |
| `eva-orange-container` / `on-eva-orange-container` | `#ffdbcf` / `#380d00` | Filled orange areas |
| `error` / `on-error` | `#ba1a1a` / `#ffffff` | Semantic error |

### Lime Readability Rules

In dark mode, data/role text (hero intro, non-current role titles, program names, metric values, and thesis icons) uses full-opacity `--v-theme-tertiary-soft` (`#a7e855`) instead of opacity-dimmed `#86dd00`, keeping crisp contrast without muddy olive tones. Pure `#86dd00` (`--v-theme-tertiary`) is reserved for small focal sparks (status dot, wavy scroll progress, focus ring, current badge fill, subtle heading dot/bullet markers).

| Element | Opacity | Surface | Notes |
| --- | --- | --- | --- |
| Heading dot (`.`) | 0.55 | Dark page bg | Subtle section accent |
| Bullet dots (•) | 0.45 | Dark/surface cards | Minimal markers |
| Metric values | 0.7 | Dark surface tiles | Pops on dark cards |
| Role titles (h4) | 0.7 | Dark surface cards | Soft highlight |
| Edu program names | 0.7 | Dark surface cards | Soft highlight |
| Thesis icon | 0.6 | Dark surface cards | Small icon accent |
| Card accessory acc-0 | 0.5 base | Decorative SVG | Parent `.card-accessory` opacity |
| Hero intro text | 0.8 | Dark page bg | "Hello, I'm Akbar" |
| Text link hover | 1.0 | Dark page bg | Full lime on hover only |
| Current badge bg | 1.0 (fill) | Dark card | Lime bg + dark green text |
| Contact shape | 1.0 (fill) | Primary-container card | Lime blob decoration |
| Focus-visible outline | 1.0 | Any | Accessibility focus ring |

**Inside `primary-container` cards** (`#5a2f90` medium purple): lime is **never** used for
text — it's unreadable due to low luminance contrast. All text uses `on-surface` (`#ebdcfe`)
at **full opacity (1.0)**. This applies to:
- Current experience card: role title, metric values, bullets, period, labels, tech chips
- First education card (Universitas Brawijaya): program name, description, thesis icon, credential

**Legibility rule for lime in light mode:** never set raw `#9ffb29` as text on light surfaces.
Light mode pairs `tertiary` (`#3e6a00`) for text and `tertiary-container` + `on-tertiary-container`
for filled lime areas. Dark mode may use `#86dd00` at reduced opacity as text on dark surfaces.

**The opacity dimming is a dark-theme device only.** On light surfaces `tertiary` at 70% measures
2.9–3.1:1 (fails AA), so in light theme the dimmed elements in the table above (role titles,
program names, heading dot) render at full opacity (≈ 6.1:1), and metric values — which sit on the
darker `surface-container-highest` tile — use `on-tertiary-container` (`#2d5000`, ≥ 7:1). These
overrides live in `src/styles/base.css`.

### Orange Usage

Orange (`eva-orange` / `eva-orange-container`) is used as a warm accent throughout:

| Element | Role | Color |
| --- | --- | --- |
| Hero headline accent ("Data Storyteller") | Text | `eva-orange` |
| Code sticker (`<>`) | Fill | `eva-orange` bg + `on-eva-orange` text |
| Header contact pill ("Get in touch") | Fill | `eva-orange-container` bg |
| Experience stamp ("Security & software, data-driven.") | Fill | `eva-orange-container` bg, sticker style |
| Education avatar accent (first entry) | Fill | `eva-orange` bg |
| Contact socials hover | Fill | `eva-orange` bg |
| Second project art area (Semar) | Fill | `eva-orange-container` bg |
| Card accessory acc-2 | SVG fill | `eva-orange` |

## Typography

Faces chosen for a Material data product.

- **Display & Body — Google Sans Flex**: Google's flexible variable sans. Used for the hero
  name, section headings, and running narrative copy. Exposed as the `--v-font-heading` and
  `--v-font-body` CSS variables at the top of `src/styles/main.css`.
- **Data & Numbers — Google Sans Code**: monospaced, tabular figures for every date, metric
  value, percentage, and tech tag. Applied via the `.font-mono` utility (defined in
  `main.css`) which also sets `font-variant-numeric: tabular-nums`.

Every element rendering a date, metric, percentage, or tech tag carries `class="font-mono"`.

### Readability Sizing

All text sizes are tuned for comfortable reading — no tiny or stinging text:

| Element | Size | Line-height |
| --- | --- | --- |
| Hero headline | `clamp(44px, 4.6vw, 60px)` | 1.08 |
| Section heading h2 | `clamp(32px, 3.5vw, 44px)` | 1.1 |
| Contact heading h2 | 34px | — |
| Hero copy | 17px | 1.7 |
| Section subtitle | 15.5px | 1.7 |
| Project description | 15px | — |
| Experience org h3 | 18px | — |
| Experience role h4 | 16px | — |
| Experience team line (`.exp-team`) | 14px | 1.45 |
| Experience bullets | 14.5px | 1.7 |
| Metric values | 14.5px | 1.4 |
| Metric labels | 12px | — |
| Education description | 14px | 1.7 |
| Education program | 14px | — |
| Skill name | 15px | — |
| Tech chips / tags | 12px | — |
| Footer | 13px | — |

## Material Language

- **Tonal surfaces over glass.** Elevation is expressed with M3 surface-container tones and
  tonal fill — not blur, glow, or transparency.
- **M3 filled cards, no outlines**: All cards use tonal surface elevation
  (`surface-container` → `surface-container-high` → `surface-container-highest`) instead of
  `border` properties. Static cards (experience, education, skills) have no hover state; only the project card, a link, steps up tonally and lifts. Interactive controls use 8% hover / 10% focus-press state layers, not border changes.
- **Shape:** M3 rounded corners — `16px` on cards, pill nav, asymmetric sticker corners
  (`28px 28px 8px` on stamp, `20px 20px 20px 5px` on identity sticker).
- **No outlines anywhere (Material 3 filled style).** There are no `border` properties, no stroked SVG
  shapes and no ring masks: decoration is filled tonal shapes only. The sole exceptions are the keyboard
  focus ring (an accessibility requirement) and the surface-coloured gap halo around stickers and the
  timeline avatar, which separates overlapping elements rather than drawing an edge.
- **No atmosphere layer.** No grid, orbs, particles, noise, or cursor spotlight — the
  surface system frames content on its own.
- **State color cycling:** violet = identity/navigation; lime = data/figures; orange =
  warm accents/status. Decorative SVG accessories cycle acc-0 (lime) → acc-1 (violet) →
  acc-2 (orange) across cards.

## Components

### Navigation (rei.my.id-inspired)

- **Header** (`<header>`, scrolls away normally) — brand `ALB.` (violet `B`, lime `.`),
  theme toggle (round, `appearance: none`, tonal fill), "Get in touch" CTA pill
  (`eva-orange-container` bg).
- **Language switch** (`EN | ID`, `.lang-switch`) — M3E connected segmented button group
  (`surface-container-high`) with two links to the two prerendered routes; inactive sides have
  asymmetric connected radii (`9999px 8px 8px 9999px` / `8px 9999px 9999px 8px`) and the active
  item morphs to a full pill (`primary-container`). Same 44 px height as the theme toggle. Mono face,
  12 px. Placement is responsive because the fixed pill nav is ~700 px wide and centered: below
  1240 px it sits against the theme toggle on the right; from 1240 px it moves beside the brand on
  the left. Never place it where the pill can cover it.
- **Desktop/tablet floating pill** (`position: fixed; top: 14px`) — stays at top on scroll.
  Icon + label nav items with a sliding spring active indicator (`.nav-indicator`, falling back to
  static `primary-container` fill without JS) and a wavy scroll-progress bar. Hover: tonal step-up +
  radius morph. Indonesian labels (`Pengalaman`, `Pendidikan`) are wider than English, so between
  960–1139 px the icons are hidden (labels only) and between 960–1239 px the header "Get in touch"
  button is hidden (it duplicates the pill's Contact item).
- **Mobile bottom dock** — icon-only pill, shrinks to 1 active icon on scroll, expands to all
  icons when scrolling stops (500ms debounce). Tap shrunk pill to expand manually. Floating
  active label (pill, `primary` bg) appears above dock when expanded.
- **Custom-built** with plain HTML elements + CSS classes (`navbar.css`, driven by
  `src/scripts/nav.ts`). The desktop pill and the mobile dock are both always in the DOM; the
  960 px breakpoint decides which is visible.

### Hero Section

- **Left column**: intro line (lime, 0.8 opacity), headline ("Business Analyst & **Data
  Storyteller**" — accent in orange), copy text, CTA button (`primary` flat pill) +
  text link (hover → lime), social link buttons.
- **Right column**: portrait photo inside `.portrait-frame` blob (`border-radius: 46% 46% 25%`,
  rotated -7°). Photo counter-rotated +7° with `scale(1.15)` for full coverage. Three
  sticker decorations float around it:
  - **Orbit-symbol** — `primary-container` bg, `monitoring` icon, top-right, rotated 14°
  - **Code-sticker** — `eva-orange` bg, `code` icon, left side, rotated -12°
  - **Identity-sticker** — `tertiary-container` bg, "ALB. Analyst" text, bottom-right, rotated 5°
- All stickers use `box-shadow: 0 2px 8px rgba(0,0,0,0.18), 0 0 0 6px surface` ring (not border).

### Project Cards

- M3 filled cards with art area on top + content below.
- Art areas use tonal container backgrounds (`art-primary` = `primary-container`,
  `art-eva-orange` = `eva-orange-container`). Decorative circles are filled tonal discs
  (no mask, no border, no rotation).
- Vector SVG accessory in card corner (diamond pattern).
- Tags are M3 filled tonal chips (`surface-container-high` bg, no outline).

### Experience Timeline

- 2-column layout: intro + stamp on left, vertical timeline on right.
- **Experience stamp** — `eva-orange-container` bg sticker, "Security & software, data-driven."
  text + workspace-premium icon. Rotated -5°, `float-gentle` animation (6s), `box-shadow` ring.
  Wrapped in its own `data-reveal` div so rotation survives the reveal animation.
- **Timeline**: vertical rail (`::before` pseudo-element) + company avatar circles (first letter).
  Ongoing avatar uses `tertiary-container` bg (dark green + lime text).
- **M3 filled cards**: `surface-container` bg; static cards do not react to hover (the project card, a link, steps up to `surface-container-high` + shadow + lift).
  Current card uses `primary-container` bg with all text in `on-surface` at full opacity.
- **Role + team hierarchy**: the h4 carries only the short role title (with the Current badge
  beside it; the row wraps so the badge never squeezes the title). The division or department
  goes in a quieter `.exp-team` line (`on-surface-variant`; `on-surface` inside the current
  card) — never concatenated into the h4, which wraps to 5 lines on phones.
- **Current badge**: lime bg (`tertiary`) with dark green text (`on-tertiary`).
- **Metric tiles**: tonal overlay tiles with values (lime at 0.7 on dark cards, `on-surface` at
  1.0 on primary-container card) + labels.
- **Tech chips**: tonal overlay pills.
- **Vector SVG accessory**: filled concentric tonal shapes (no strokes), 3-color cycle (lime → violet → orange).

### Education Timeline

- Vertical timeline matching experience style — rail + institution avatars + M3 filled cards.
- First card (Universitas Brawijaya) uses `primary-container` bg with `on-surface` text at
  full opacity. Avatar accent is `eva-orange` bg.
- Second card (Bangkit Academy) uses standard `surface-container` bg with lime accents.
- **Thesis callout and notes**: M3 tonal surface (no left border), icon + text. The same
  `.edu-thesis` row is reused for extra `notes` — organization role, certification, languages —
  each with its own Material Symbols icon (safelisted in `uno.config.ts`).
- **Credential badge**: `surface-container-highest` bg, tonal overlay inside primary card.
- **Vector SVG accessory**: stepped corner bracket, 3-color cycle.

### Skills Section

- 5 skill cards in a 2-column grid (categories follow the CV: Data Analytics & Statistics,
  Visualization & Reporting, Programming & Databases, Machine Learning & NLP, Business,
  Governance & Compliance). The odd last card spans the full row and flows its list in two
  columns at ≥768 px; below that, everything stacks. Each card has a vector SVG accessory
  (nested rounded rectangles).
- Skill list items are stacked (name on top, applied underneath) — clean vertical scanning.
  Name uses `on-surface` (brighter), applied uses `on-surface-variant`.
- No dividers — tonal rows with `border-radius: 12px` + hover background.

### Contact Section

- Large `primary-container` block (`border-radius: 40px`) with lime decorative shape
  (`tertiary` bg, `forum` icon, rotated -10°), heading, copy, email link, social icons.
- Social icons: `rgba(0,0,0,0.12)` overlay bg, hover → `eva-orange` bg + `translateY(-3px)`.

### Footer

- Minimal — copyright line + tech stack line. `font-mono` styling.

## Imagery Stance

The hero leads with a **profile photo** (`src/assets/profile.jpeg`, optimized to webp at build and loaded eagerly with high fetch priority as the LCP element) inside an organic blob
frame, surrounded by three sticker decorations. The photo is the primary visual anchor —
no data visualizations or sparklines. All other visual interest comes from M3 tonal surfaces,
vector SVG accessories, and the three-color EVA-01 palette cycling across decorative elements.

## Vector Accessories

Each card type has a unique decorative SVG in its corner (`.card-accessory`):

| Card type | SVG pattern | Color cycle |
| --- | --- | --- |
| Projects | Diamond + concentric circles | acc-0 (lime) |
| Experience | Filled concentric circles | acc-0 → acc-1 → acc-2 (lime → violet → orange) |
| Education | Stepped corner bracket | acc-0 → acc-1 → acc-2 |
| Skills | Nested rounded rectangles | acc-0 → acc-1 → acc-2 |

Base styles: `position: absolute; top: -12px; right: -12px; width: 96px; height: 96px;
pointer-events: none; opacity: 0.6`. Hover: `opacity: 0.8; rotate(15deg) scale(1.1)`.
Mobile: `72px`.

## Motion

- **Scroll-reveal**: `data-reveal` attribute (optional `data-reveal-delay`), consumed by
  `src/scripts/reveal.ts` — elements fade+slide in (`translateY(28px)` → `none`) when entering
  the viewport. The revealed state sets `transform: none` — elements needing persistent
  transforms (rotated stamps/stickers) must be wrapped in a separate `data-reveal` div. The
  `reveal-init` class is added at runtime only, so the prerendered HTML is visible without JS.
- **Sticker float animations**: `float-gentle` (6s) and `float-slow` (8s) keyframes —
  `translateY(0→-8px→0)` with `rotate(var(--rot))` preserving base rotation via CSS custom property.
- **Card hover**: project card only (tonal step-up + M3 shadow + lift). Static cards and avatars do not react.
- **Accessory hover**: `opacity 0.6→0.8`, `rotate(15deg) scale(1.1)`.
- **Mobile dock**: animated shrink/expand (gap, padding, border-radius transitions).
- **Active label**: slide transition when active section changes.
- Smooth anchor scrolling (`scroll-behavior: smooth`); sections carry
  `scroll-margin-top: 96px` for the floating pill nav.
- `prefers-reduced-motion` collapses animation/transition durations to `0.01ms` and
  reveals elements immediately.

## Contrast / Accessibility

Verified WCAG ratios (computed from the shipped literals):

| Pair | Ratio | Level |
| --- | --- | --- |
| dark `on-surface` `#ebdcfe` / `#180f26` | 14.27 | AAA |
| dark `tertiary` `#86dd00` / `#180f26` | 10.89 | AAA |
| dark `primary` `#d9b9ff` / `#180f26` | 10.87 | AAA |
| dark `on-primary` `#431278` / `#d9b9ff` | 7.73 | AAA |
| dark `on-surface` `#ebdcfe` / `primary-container` `#5a2f90` | ~7.0 | AAA |
| light `on-surface` `#20172f` / `#fef7ff` | 16.30 | AAA |
| light `tertiary` `#3e6a00` / `#fef7ff` | 6.11 | AA |
| light `primary` `#7348aa` / `#fef7ff` | 6.17 | AA |
| light `on-primary` `#ffffff` / `#7348aa` | 6.49 | AA |

**Key readability decision**: Inside `primary-container` (`#5a2f90`) cards, all text uses
`on-surface` (`#ebdcfe`) at **full opacity (1.0)** — never lime (unreadable on purple) and
never `on-primary-container` (`#eeddff`, too bright/stinging). This ensures role titles,
metric values, program names, and thesis icons are all clearly readable.

**Liveliness:** the hero headline lines rise in sequentially, a slow ticker of tool chips, each a brand logo plus its name in a tile tinted with the brand colour (edge-faded; hovering the strip pauses it) runs under the hero, and skill chips carry a lime/violet/orange dot per card. Everything is CSS-only and switches off for reduced motion.

**HUD details:** mono `// 01 · SECTION` eyebrows with a short segmented orange bar, a pill status chip with a pulsing lime dot under the hero copy, and a 2 px lime scroll-progress bar inside the desktop pill nav. All are text/CSS only — no atmosphere layer, no effects beyond the dot pulse.

**Compact mobile (≤767 px):** same identity, tighter rhythm — section top padding 44 px, card padding 14 px, 30 px timeline avatars, corner accessories hidden, metric tiles wrap inline, project art 128 px, skill rows 5 px padded. Measured page height at 390 px dropped from ~10,600 px to ~8,600 px with no loss of content.

**Density rules:** Experience shows one bullet per role and folds the rest into a native `<details>` toggle (44 px summary, current role open); project cards lead with big mono outcome figures before the tag chips; on phones the hero portrait comes first and is scaled down so the first screen shows a person.

**Audit-verified floors** (measured in a browser, both languages, both themes, 390 and 1280 px): no
text below 4.5:1 (3:1 for large text), no text under 12 px, headings never skip a level
(`h2` → card `h3` → role `h4`; education cards use `h3`), and primary tappable text controls are
44 px tall (hero socials, text link, email link, header CTA). The pill-nav and EN | ID links are
38–40 px, which exceeds the WCAG 2.2 AA target-size minimum (24 px) but not the 44 px guideline —
a known, accepted gap.

Includes a skip link (`#hero`), semantic `section[id]` landmarks, `aria-label`s on icon-only
buttons, `:focus-visible` outline in lime (`2px solid tertiary`), and full keyboard operation.
Theme preference persists via a 1-year `color-scheme` cookie written by `src/scripts/theme.ts`;
an inline `<head>` script restores it before first paint to avoid a flash.

## Responsive Rules

- **960 px** — desktop pill nav + header CTA below/above; mobile dock the other way.
- **1240 px / 1139 px / 960 px** — header collisions with the fixed pill: the language switch moves
  left ≥ 1240; the header CTA hides 960–1239; the pill's icons hide 960–1139. Keep ≥ 8 px between
  the pill and every header control in both languages.
- **767 px** — card grids (skills, timelines, contact block) collapse to a single column.
- **≤480 px** — the contact email shrinks (`clamp(14px, 4.2vw, 20px)`) to fit.
- **No horizontal scroll** at 360–1440 px in either theme. Long unbreakable strings need
  `min-width: 0` / `overflow-wrap: anywhere`; flex rows with a long title plus a badge need
  `flex-wrap`. Layout fixes belong in `base.css` (loads after `main.css`).

## Language (EN / ID)

- Two prerendered routes: `/` (English) and `/id/` (Indonesian). Same structure, same design;
  only the text changes. `<html lang>` and the title/description are set per route.
- **Stays English on both:** the headline "Business Analyst & Data Storyteller", project titles,
  tool names, proper nouns, the brand mark.
- **Indonesian runs longer** (≈ 10–25 %). Cards, chips, metric tiles, and the nav pill must
  tolerate it; check wrapping rather than shortening copy.
- **Indonesian number/date style**: `8.000+`, `3,77`, `88,39`, `Agu`/`Mei`/`Des`, `Sekarang`.
  Figures still render in the mono face.

## Naming / Brand

Brand mark: `ALB.` — `B` in violet (`text-primary`), the trailing `.` in lime
(`text-tertiary font-mono`). Role title (binding): "Business Analyst & Data Storyteller".

## Rut check

Not dark-glass-with-neon (the retired world — no blur, glow, particles, or grid). Not
cream-serif-editorial. The identity comes from a *system*: Material Design 3 tonal surfaces
with EVA-01's violet/lime/orange roles cycling across decorative elements, Google Sans Flex +
Google Sans Code, rei.my.id-inspired editorial layout (floating pill nav, sticker decorations,
accent dots), and a profile photo hero. The palette is specified as real M3 roles rather than
ad-hoc accents, and readability is enforced — lime never stings, text on purple is always
full-opacity neutral.
