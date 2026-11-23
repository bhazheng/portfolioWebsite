# Design — Material Design 3 Expressive

<!-- impeccable:design-schema 1 -->

A one-page scrolling portfolio for Akbar Lucky Basuki, built on Google **Material Design 3 Expressive**
(spring physics motion tokens, organic shape vocabulary and shape-morphing controls, emphasized
Google Sans Flex typography, and filled tonal colour roles — hand-written CSS tokens, no component
library). The palette is **Egyptian Blue, Stone Blue and Scarlet Red** (commit `5588f39`); the
earlier Evangelion Unit-01 violet/lime palette has been retired. The UI/UX is inspired by
https://rei.my.id/ — floating pill navigation, editorial section headings, filled tonal cards (no
outlines), vector SVG accessories, sticker-style hero portrait, and a large colored contact container.

## World Statement

The data analyst's job is not to add noise, but to turn complex telemetry into clear, unambiguous
decisions. The interface is a calm, legible Material surface system: deep blue-black surfaces, a
blue primary that carries structure and navigation, a scarlet accent that carries focus and status,
and a coral warm accent for the "open" moments. Material's tonal surfaces and elevation do the
framing, so the story reads first — no atmosphere layer, no glow.

The three accents (blue, scarlet, coral) cycle across decorative elements — card accessories,
avatar backgrounds, project art areas, sticker accents. Scarlet and coral are both warm, so the
cycle is deliberately uneven: scarlet is the focal accent, coral is secondary.

## Platform / Delivery

**Astro 7 static output** (`output: 'static'`, two prerendered routes — `/` English and `/id/` Indonesian — and no client framework).
The Material Design 3 colour roles are plain CSS custom properties in `src/styles/tokens.css`
(`--v-theme-*` as R, G, B triplets — the prefix is a holdover from the retired Vuetify build and is
kept so `rgb(var(--v-theme-x))` keeps working in `main.css`). Motion, shape, emphasized type, the
sliding nav indicator, connected button groups, and segmented strips live in `src/styles/m3-expressive.css`
(loaded last). **UnoCSS** (icons only) supplies glyphs from **Material Symbols** (`i-material-symbols:*`,
UI) and **MDI** (`i-mdi:*`, brand marks). **Google Sans Flex** for reading & display, **Google Sans
Code** for tabular figures. No Tailwind, no component library; the theme is a `data-theme` attribute on
`<html>`, set before first paint from the `color-scheme` cookie.

## Section Order

Hero → Experience → Education → Projects → Skills → Contact

This order leads with identity, then walks through career history and academic foundations before
showing project proof-of-work, closing with capabilities and a call to action.

## Palette

Colour strategy: **M3 tonal roles** — blue primary and secondary for identity and navigation,
scarlet tertiary for focal status and data, coral (`eva-orange`) for warm accents. Light and dark
are both first-class; the theme toggles and persists via a `color-scheme` cookie. All literals live
in `src/styles/tokens.css` — dark under `:root`, light under `html[data-theme='light']`, as
comma-separated R, G, B triplets (do not convert them to hex).

**Token names are legacy.** `tertiary` and `eva-orange` keep their names from the EVA-01 build; their
values are now scarlet and coral. Renaming them is a future cleanup, not a requirement.

### Roles and values

| Role | Dark | Light |
| --- | --- | --- |
| `background` / `surface` | `#0d1321` | `#f8faff` |
| `surface-container-lowest` | `#080d18` | `#ffffff` |
| `surface-container-low` | `#131b2d` | `#f1f5fc` |
| `surface-container` | `#182236` | `#eaf0f9` |
| `surface-container-high` | `#222e46` | `#e1e9f5` |
| `surface-container-highest` | `#2c3a56` | `#d7e1f0` |
| `on-surface` | `#e4eaf6` | `#121a2b` |
| `on-surface-variant` | `#b7c4d8` | `#44536b` |
| `outline` | `#7d8fa8` | `#6c7c94` |
| `primary` / `on-primary` | `#8cb4ff` / `#00286b` | `#1034a6` / `#ffffff` |
| `primary-container` / `on-primary-container` | `#163a8c` / `#dce7ff` | `#dae4ff` / `#08216e` |
| `secondary` | `#9fb7d3` | `#4a6482` |
| `tertiary` / `on-tertiary` | `#ff6b57` / `#4f0800` | `#c82314` / `#ffffff` |
| `tertiary-soft` | `#ff8a78` | `#b81e10` |
| `tertiary-container` / `on-tertiary-container` | `#8f1b10` / `#ffdad4` | `#ffdad4` / `#690900` |
| `eva-orange` / `on-eva-orange` | `#ff7a63` / `#4c0a00` | `#c82314` / `#ffffff` |
| `eva-orange-container` / `on-eva-orange-container` | `#7a1e16` / `#ffdad4` | `#ffd8d1` / `#640a00` |
| `error` | `#ffb4ab` | `#ba1a1a` |

**Light mode:** `tertiary` and `eva-orange` are the same value (`#c82314`), so in light theme the
scarlet and coral accents are indistinguishable. See *Open decisions* below.

### Accent usage

| Accent | Used for |
| --- | --- |
| Primary (blue) | Focal status and identity: active pill item, mobile dock active item and label, brand `B`, primary CTA, orbit sticker, current-role badge, status dot, focus ring, copy-success state |
| Tertiary (scarlet) | Warm punctuation: brand `.`, identity sticker, ongoing-role avatar, heading dots |
| Coral (`eva-orange`) | Warm accents: code sticker, education avatar accent, socials hover, Projects/Experience art, skill-card accent |

### Text on accents

Dark mode: body and role text on surfaces uses `on-surface` or `tertiary-soft` (`#ff8a78`), both
at full opacity. Accent colours are not dimmed for text — an earlier build used lime at 45–70 %
opacity, which the scarlet palette does not survive (see *Contrast*).

Inside `primary-container` cards (the current Experience role, the first Education card, the contact
block), text is `on-surface` or `on-primary-container` at full opacity. Accent colours are not used
for text on these cards.

## Typography

Faces chosen for a Material data product.

- **Display & Body — Google Sans Flex**: Google's flexible variable sans. Used for the hero name,
  section headings, and running narrative copy. Exposed as the `--v-font-heading` and
  `--v-font-body` CSS variables at the top of `src/styles/main.css`.
- **Data & Numbers — Google Sans Code**: monospaced, tabular figures for every date, metric value,
  percentage, and tech tag. Applied via the `.font-mono` utility (defined in `main.css`), which also
  sets `font-variant-numeric: tabular-nums`.

Every element rendering a date, metric, percentage, or tech tag carries `class="font-mono"`.

### Readability sizing

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
| Footer | 12px | — |

## Material Language

- **Tonal surfaces over glass.** Elevation is expressed with M3 surface-container tones and tonal
  fill — not blur, glow, or transparency.
- **M3 filled cards, no outlines**: all cards use tonal surface elevation
  (`surface-container` → `surface-container-high` → `surface-container-highest`) instead of
  `border`. Static cards (experience, education, skills) have no hover state; only the project card,
  a link, steps up tonally and lifts. Interactive controls use 8 % hover / 10 % focus-press state
  layers, not border changes.
- **Shape:** M3 rounded corners — 16 px on cards, pill nav, asymmetric sticker corners
  (`28px 28px 8px` on the stamp, `20px 20px 20px 5px` on the identity sticker).
- **No outlines anywhere.** No `border` properties, no stroked SVG shapes, no ring masks. Decoration
  is filled tonal shapes. Exceptions: the keyboard focus ring (accessibility) and the
  surface-coloured gap halo around stickers and timeline avatars, which separates overlapping
  elements rather than drawing an edge. The Experience disclosure chevron is a Material Symbols icon.
- **No atmosphere layer.** No grid, orbs, particles, noise, or cursor spotlight.
- **Accessory cycle:** decorative SVG accessories cycle acc-0 (scarlet) → acc-1 (blue) → acc-2
  (coral) across cards.

## Components

### Navigation

- **Header** (`<header>`, scrolls away normally) — brand `ALB.` (blue `B`, scarlet `.`), theme
  toggle (round, tonal fill). The header has no CTA: the pill's Contact item and the hero are the contact entry points.
- **Language switch** (`EN | ID`, `.lang-switch`) — M3E connected segmented button group
  (`surface-container-high`) with two links to the two prerendered routes; inactive sides have
  asymmetric connected radii and the active item morphs to a full pill (`primary-container`).
  Mono face, 12 px. Below 1240 px it sits against the theme toggle; from 1240 px it moves beside the
  brand, so the fixed pill nav never covers it.
- **Desktop/tablet floating pill** (`position: fixed; top: 14px`) — stays at top on scroll.
  Icon + label items with a sliding spring active indicator (`.nav-indicator`, falling back to a
  static `primary-container` fill without JS) and a thin scroll-progress bar (`--scroll-progress`
  written on `.floating-nav`, scaled with `transform`). Indonesian labels are wider, so between
  960–1139 px the icons are hidden.
- **Mobile bottom dock** — icon-only pill. Shrinks to one active icon while scrolling and expands
  500 ms after scrolling stops; tapping the shrunk pill expands it. The dock height is the same in
  both states so the floating label above it does not move. The active label (`primary` pill)
  sits above the dock.
- Built with plain HTML elements and CSS classes (`navbar.css`, driven by `src/scripts/nav.ts`).
  The desktop pill and the mobile dock are both always in the DOM; the 960 px breakpoint decides
  which is visible.

### Hero Section

- **Left column**: intro line, headline ("Business Analyst & **Data Storyteller**" — accent in
  coral), copy, primary CTA (`primary` filled pill, a real `mailto:` link), tonal "View CV" button,
  a text link to the Explore section, social link buttons.
- **Right column**: portrait photo inside a `.portrait-frame` blob (`border-radius: 46% 46% 25%`,
  rotated -7°). The photo is counter-rotated for upright display. Three stickers float around it:
  - **Orbit-symbol** — `primary-container` bg, `monitoring` icon, top-right
  - **Code-sticker** — `eva-orange` bg, `code` icon, left side
  - **Identity-sticker** — `tertiary-container` bg, "ALB. Analyst" text, bottom-right
- Sticker separation uses a surface-coloured `box-shadow` ring, not a border.
- On phones (≤767 px) the portrait is shown first and scaled down, so the first screen shows a
  person rather than a wall of text.

### Project Cards

- M3 filled cards with an art area on top and content below.
- Art areas use tonal container backgrounds (`art-primary` = `primary-container`,
  `art-eva-orange` = `eva-orange-container`). Decorative circles are filled tonal discs.
- Each card leads with outcome figures (`.project-highlights`), then tech chips. Do not repeat a
  highlighted figure as a chip.
- Tags are M3 filled tonal chips (`surface-container-high` bg, no outline).

### Experience Timeline

- 2-column layout: intro + stamp on the left, vertical timeline on the right.
- **Experience stamp** — `eva-orange-container` bg sticker, "Security & software, data-driven."
  text plus workspace-premium icon. Wrapped in its own `data-reveal` div so its rotation survives
  the reveal animation.
- **Timeline**: vertical rail + company avatar circles (first letter). The ongoing role's avatar uses
  `tertiary-container`.
- **Cards**: `surface-container` bg; static cards have no hover. The current card uses
  `primary-container` with all text in `on-surface` at full opacity.
- **Role + team hierarchy**: the h4 carries only the short role title; the Current badge sits beside
  it and the row wraps so the badge never squeezes the title. The division goes in a quieter
  `.exp-team` line — never concatenated into the h4, which wraps to five lines on phones.
- **Current badge**: `tertiary` (scarlet) fill with `on-tertiary` text (5.48:1).
- **Details**: one bullet is always visible; the rest sit in a native `<details>` (the current role is
  open). The disclosure chevron is an icon that turns on open.
- **Metric tiles**: tonal tiles with values in `tertiary-soft` on non-current cards and `on-surface`
  on the current card, plus labels.
- **Tech chips**: tonal pills.
- **Accessory**: filled concentric tonal shapes (no strokes), acc-0 → acc-1 → acc-2.

### Education Timeline

- Vertical timeline matching the experience style — rail, institution avatars, M3 filled cards.
- First card (Universitas Brawijaya) uses `primary-container` with `on-surface` text. Its avatar
  accent is `eva-orange`.
- Second card uses standard `surface-container`.
- **Thesis callout and notes**: M3 tonal rows with an icon and text. Notes reuse the same row for
  organization role, certification, and languages, each with a Material Symbols icon (safelisted in
  `uno.config.ts`).

### Skills Section

- 5 skill cards in a 2-column grid, categories following the CV (Data Analytics & Statistics,
  Visualization & Reporting, Programming & Databases, Machine Learning & NLP, Business, Governance &
  Compliance). The odd last card spans the full row and flows its list in two columns at ≥768 px;
  below that, everything stacks.
- Skills render as name-only chips with a per-card accent dot (`data-accent`). Chips are
  non-interactive: no hover state.
- **Tool logos in chips:** chips that name a tool (Power BI, Tableau, Looker Studio, Python & Pandas, Excel &
  Google Sheets, TensorFlow) show its logo in place of the dot, single-colour in the card's accent — no
  brand colours, no separate tools strip. Skills without a real, legible logo keep the dot.

### Contact Section

- Large `primary-container` block (28 px radius) with a decorative shape, heading, a large mono email
  with a Copy button (shown only when the Clipboard API exists), and four labelled channel tiles
  (WhatsApp, LinkedIn, GitHub, View CV).
- Tiles are 4-up on desktop and 2-up below 960 px, with a state layer instead of a colour change.
- Social icons on hover use the coral accent.

### Footer

- Copyright line only, in `font-mono`. The year is computed at build time.

## Imagery Stance

The hero leads with a **profile photo** (`src/assets/profile.jpeg`, optimized to webp at build, loaded
eagerly with high fetch priority as the LCP element) inside an organic blob frame, surrounded by three
sticker decorations. The photo is the primary visual anchor. Other visual interest comes from M3
tonal surfaces, vector SVG accessories, and the three accents cycling across decorative elements.

## Vector Accessories

| Card type | SVG pattern | Colour cycle |
| --- | --- | --- |
| Projects | Diamond + concentric circles | acc-0 (scarlet) |
| Experience | Filled concentric circles | acc-0 → acc-1 → acc-2 |
| Education | Stepped corner bracket | acc-0 → acc-1 → acc-2 |
| Skills | Nested rounded rectangles | acc-0 → acc-1 → acc-2 |

Base styles: `position: absolute; top: -12px; right: -12px; width: 96px; height: 96px;
pointer-events: none; opacity: 0.6`. Hover: `opacity: 0.8; rotate(15deg) scale(1.1)`. On phones
(≤767 px) the accessories are hidden.

## Motion

- **Scroll-reveal**: `data-reveal` (optional `data-reveal-delay`), consumed by `src/scripts/reveal.ts`.
  Elements fade and slide in when they enter the viewport. The revealed state sets `transform: none`,
  so rotated elements must sit in a separate `data-reveal` wrapper. The `reveal-init` class is added
  at runtime only, so prerendered HTML is visible without JS.
- **Sticker float**: `float-gentle` (6 s) and `float-slow` (8 s) keyframes, preserving base rotation
  through a CSS custom property.
- **Card hover**: project card only.
- **Mobile dock**: animated shrink/expand (padding, border-radius, icon size).
- **Active label**: a short spring pulse when the active section changes.
- **Motion tokens:** `--m3e-*` spring and duration tokens in `m3-expressive.css`; `--m3-standard`
  (`cubic-bezier(0.2, 0, 0, 1)`) and `--m3-short` (200 ms) in `base.css` for state changes.
- Smooth anchor scrolling; sections carry `scroll-margin-top: 96px` for the floating pill nav.
- `prefers-reduced-motion` shortens transitions and turns off infinite animations (status dot, headline rise) explicitly.

## Contrast / Accessibility

WCAG ratios, computed from the token values above:

| Pair | Ratio | Level |
| --- | --- | --- |
| dark `on-surface` / `background` | 15.37 | AAA |
| dark `on-surface-variant` / `surface-container` | 9.01 | AAA |
| dark `primary` / `background` | 8.91 | AAA |
| dark `tertiary-soft` / `background` | 8.09 | AAA |
| dark `tertiary-soft` / `surface-container-high` | 5.92 | AA |
| dark `tertiary` / `background` | 6.62 | AA |
| dark `eva-orange` / `background` | 7.26 | AAA |
| dark `on-primary-container` / `primary-container` | 8.38 | AAA |
| dark `on-tertiary` / `tertiary` (current badge) | 5.48 | AA |
| light `on-surface` / `background` | 16.64 | AAA |
| light `on-surface-variant` / `surface-container` | 6.80 | AA |
| light `tertiary` / `background` | 5.43 | AA |
| light `tertiary` / `surface-container-high` | 4.63 | AA |
| light `primary` / `background` | 9.74 | AAA |
| light `on-primary` / `primary` | 10.18 | AAA |
| light `on-primary-container` / `primary-container` | 11.37 | AAA |

**Opacity rule.** Text accents are not dimmed. An earlier lime build relied on 45–70 % opacity to
soften the accent; applied to the scarlet tertiary, that drops below 4.5:1 (at 0.7 opacity on the
page background the scarlet measures about 3.8:1). Any new accent text must be full opacity.

**Audit-verified floors** (measured in a browser, both languages, both themes, 390 and 1280 px): no
text below 4.5:1 (3:1 for large text), no text under 12 px, headings never skip a level (`h2` →
card `h3` → role `h4`), and primary tappable text controls are 44 px tall. The pill-nav and EN | ID
links are 38–40 px — above the WCAG 2.2 AA target-size minimum (24 px), below the 44 px guideline. This
is a known, accepted gap.

Includes a skip link (`#hero`), semantic `section[id]` landmarks, `aria-label`s on icon-only buttons,
`:focus-visible` outline in the scarlet tertiary (`2px solid tertiary`), and full keyboard operation.
The theme preference persists via a 1-year `color-scheme` cookie written by `src/scripts/theme.ts`;
an inline `<head>` script restores it before first paint.

## Responsive Rules

- **960 px** — desktop pill nav and header CTA on one side of the breakpoint, mobile dock on the other.
- **1240 / 1139 / 960 px** — header collisions with the fixed pill: the language switch moves left at
  ≥ 1240; the header CTA hides at 960–1239; the pill's icons hide at 960–1139. Keep ≥ 8 px between
  the pill and every header control, in both languages.
- **767 px** — card grids (skills, timelines, contact) collapse to one column.
- **≤480 px** — the contact email shrinks to fit.
- **No horizontal scroll** at 360–1440 px in either theme. Long unbreakable strings need
  `min-width: 0` / `overflow-wrap: anywhere`; flex rows with a long title plus a badge need
  `flex-wrap`. Layout fixes belong in `base.css`.

## Language (EN / ID)

- Two prerendered routes: `/` (English) and `/id/` (Indonesian). Same structure and design; only the
  text changes. `<html lang>` and the title and description are set per route.
- **Stays English on both:** the headline "Business Analyst & Data Storyteller", project titles, tool
  names, proper nouns, the brand mark.
- **Indonesian runs longer** (≈ 10–25 %). Cards, chips, metric tiles, and the nav pill must tolerate
  it; check wrapping rather than shortening copy.
- **Indonesian number/date style**: `8.000+`, `3,77`, `88,39`, `Agu`/`Mei`/`Des`, `Sekarang`. Figures
  still render in the mono face.

## Naming / Brand

Brand mark: `ALB.` — `B` in blue (`text-primary`), the trailing `.` in scarlet
(`text-tertiary font-mono`). Role title (binding): "Business Analyst & Data Storyteller".

## Open decisions

- **Light-mode accents collapse.** `tertiary` and `eva-orange` are the same colour in light theme, so
  acc-0 and acc-2 look identical there. A distinct light-theme coral (≥ 4.5:1 on `background`) would fix
  it, but that is a palette decision.
- **Token names.** `tertiary` and `eva-orange` are named after the retired palette. A rename is a
  future cleanup.

## Rut check

Not dark-glass-with-neon (no blur, glow, particles, or grid). Not cream-serif-editorial. The identity
comes from a *system*: Material Design 3 tonal surfaces with a blue, scarlet and coral accent set,
Google Sans Flex + Google Sans Code, rei.my.id-inspired editorial layout (floating pill nav, sticker
decorations, accent dots), and a profile photo hero. The palette is specified as real M3 roles rather
than ad-hoc accents, and readability is enforced: accent text is full opacity, and text on
`primary-container` cards is always `on-surface` or `on-primary-container`.
