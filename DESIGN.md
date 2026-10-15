# Design — Material Design 3 in EVA-01

<!-- impeccable:design-schema 1 -->

A one-page scrolling portfolio for Akbar Lucky Basuki, built on Google Material Design 3
(Vuetify 4) with a palette derived from Evangelion Unit-01: violet primary, neon-lime data
accent, and deep violet-black neutrals. The UI/UX is inspired by https://rei.my.id/ —
floating pill navigation, editorial section headings with accent dots, filled tonal cards
(no outlines), vector SVG decorative accessories, sticker-style hero portrait, and a
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

Nuxt 3 static export (`nuxt generate`). Vue 3 SFCs on **Vuetify 4** (Material Design 3),
themed through `vuetify-nuxt-module` (SSR client hints for theme persistence, plus a small
fallback for static builds). **UnoCSS** (`@unocss/nuxt`) supplies icon glyphs from
**Material Symbols** (`i-material-symbols:*`, UI) and **MDI** (`i-mdi:*`, brand marks).
**Google Sans Flex** for reading & display, **Google Sans Code** for tabular figures. No
Tailwind; no SASS customization — typography is set through Vuetify's `--v-font-*` CSS vars.

## Section Order

Hero → Projects → Experience → Education → Skills → Contact

This order leads with identity and proof-of-work, then walks through career history,
academic foundations, capabilities, and closes with a call to action.

## Palette

Color strategy: **M3 tonal roles seeded from EVA-01** — violet primary/secondary, neon-lime
tertiary for data, chest orange for status and warm accents. Light and dark are both
first-class; the theme toggles and persists via a `color-scheme` cookie. All literals live in
`nuxt.config.ts` → `vuetify.vuetifyOptions.theme.themes`.

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
| `outline` / `outline-variant` | `#988ba9` / `#4c425c` | Mobile dock border, dividers |
| `primary` / `on-primary` | `#d9b9ff` / `#431278` | EVA-01 violet — identity, CTA buttons, mobile active label |
| `primary-container` / `on-primary-container` | `#5a2f90` / `#eeddff` | Filled violet areas — current experience card, first education card, contact container, floating nav active state |
| `secondary` / `on-secondary` | `#d5bbff` / `#3b2166` | Violet support role, tech chips |
| `tertiary` / `on-tertiary` | `#86dd00` / `#1e3700` | **Sync neon lime — data, figures, accents on dark surfaces** |
| `tertiary-container` / `on-tertiary-container` | `#2d5000` / `#9ffb29` | Filled lime areas — ongoing experience avatar, identity sticker |
| `eva-orange` / `on-eva-orange` | `#ffb59a` / `#5b1b00` | **Chest orange — warm accents, headline accent, code sticker, edu avatar, socials hover** |
| `eva-orange-container` / `on-eva-orange-container` | `#802a00` / `#ffdbcf` | Filled orange areas — experience stamp, header contact pill, second project art |
| `error` / `on-error` | `#ffb4ab` / `#690005` | Semantic error (M3 red) |

### Light

| Role | Value | Use |
| --- | --- | --- |
| `background` / `surface` | `#fef7ff` | Violet-white ground |
| `on-surface` / `on-background` | `#20172f` | Primary reading text |
| `surface-container-lowest` … `-highest` | `#ffffff` → `#ebdcfe` | Tonal elevation ladder |
| `on-surface-variant` | `#4c425c` | Secondary text |
| `outline` / `outline-variant` | `#7e728f` / `#cfc1e1` | Borders, dividers |
| `primary` / `on-primary` | `#7348aa` / `#ffffff` | EVA-01 violet |
| `secondary` / `on-secondary` | `#6b5197` / `#ffffff` | Violet support role |
| `tertiary` / `on-tertiary` | `#3e6a00` / `#ffffff` | **Dark lime for text on light** |
| `tertiary-container` / `on-tertiary-container` | `#9ffb29` / `#2d5000` | Bright lime for fills |
| `eva-orange` / `on-eva-orange` | `#a83900` / `#ffffff` | Chest orange |
| `eva-orange-container` / `on-eva-orange-container` | `#ffdbcf` / `#380d00` | Filled orange areas |
| `error` / `on-error` | `#ba1a1a` / `#ffffff` | Semantic error |

### Lime Readability Rules

**Lime (`#86dd00`) is NEVER used at full opacity as text.** It is always dimmed to 45-70%
opacity, which produces a muted olive-sage accent that's pleasant on dark surfaces.

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
| Card accessory acc-2 | SVG stroke | `eva-orange` |
| Mobile dock border | Stroke | `outline-variant` |

## Typography

Faces chosen for a Material data product.

- **Display & Body — Google Sans Flex**: Google's flexible variable sans. Used for the hero
  name, section headings, and running narrative copy. Mapped to Vuetify's `--v-font-heading`
  and `--v-font-body` CSS variables in `assets/styles/main.css` (no SASS needed).
- **Data & Numbers — Google Sans Code**: monospaced, tabular figures for every date, metric
  value, percentage, and tech tag. Applied via the `.font-mono` utility (defined in
  `main.css`; Vuetify ships no such class) which also sets `font-variant-numeric: tabular-nums`.

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
  `border` properties. Hover applies tonal step-up + soft M3 shadow
  (`0 2px 6px -1px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)`) + `translateY(-2px)`.
  State layers use tonal step-up, not border changes.
- **Shape:** M3 rounded corners — `16px` on cards, pill nav, asymmetric sticker corners
  (`28px 28px 8px` on stamp, `20px 20px 20px 5px` on identity sticker).
- **No outlines on cards/chips/toggles.** The only `border` properties in the codebase are:
  `border: none` on the theme toggle button, and `border: 1px solid outline-variant` on the
  mobile dock pill (Navbar.vue scoped style).
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
- **Desktop/tablet floating pill** (`position: fixed; top: 14px`) — stays at top on scroll.
  Icon + label nav items. Active state: `primary-container` bg. Hover: tonal step-up.
- **Mobile bottom dock** — icon-only pill, shrinks to 1 active icon on scroll, expands to all
  icons when scrolling stops (500ms debounce). Tap shrunk pill to expand manually. Floating
  active label (pill, `primary` bg) appears above dock when expanded.
- **No `v-app-bar`, no `v-navigation-drawer`** — navigation is custom-built with plain HTML
  elements + CSS classes. Vuetify components used: only `v-btn`, `v-icon`.

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
  `art-eva-orange` = `eva-orange-container`). Decorative rings use CSS `mask: radial-gradient`
  (tonal fill, no border).
- Vector SVG accessory in card corner (diamond pattern).
- Tags are M3 filled tonal chips (`surface-container-high` bg, no outline).

### Experience Timeline

- 2-column layout: intro + stamp on left, vertical timeline on right.
- **Experience stamp** — `eva-orange-container` bg sticker, "Security & software, data-driven."
  text + workspace-premium icon. Rotated -5°, `float-gentle` animation (6s), `box-shadow` ring.
  Wrapped in separate `v-reveal` div so rotation survives reveal animation.
- **Timeline**: vertical rail (`::before` pseudo-element) + company avatar circles (first letter).
  Ongoing avatar uses `tertiary-container` bg (dark green + lime text).
- **M3 filled cards**: `surface-container` bg, hover → `surface-container-high` + shadow + lift.
  Current card uses `primary-container` bg with all text in `on-surface` at full opacity.
- **Current badge**: lime bg (`tertiary`) with dark green text (`on-tertiary`).
- **Metric tiles**: tonal overlay tiles with values (lime at 0.7 on dark cards, `on-surface` at
  1.0 on primary-container card) + labels.
- **Tech chips**: tonal overlay pills.
- **Vector SVG accessory**: dashed concentric circles, 3-color cycle (lime → violet → orange).

### Education Timeline

- Vertical timeline matching experience style — rail + institution avatars + M3 filled cards.
- First card (Universitas Brawijaya) uses `primary-container` bg with `on-surface` text at
  full opacity. Avatar accent is `eva-orange` bg.
- Second card (Bangkit Academy) uses standard `surface-container` bg with lime accents.
- **Thesis callout**: M3 tonal surface (no left border), with thesis icon + text.
- **Credential badge**: `surface-container-highest` bg, tonal overlay inside primary card.
- **Vector SVG accessory**: stepped corner bracket, 3-color cycle.

### Skills Section

- 4 skill cards in a grid, each with vector SVG accessory (nested rounded rectangles).
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

The hero leads with a **profile photo** (`assets/profile pic.jpeg`) inside an organic blob
frame, surrounded by three sticker decorations. The photo is the primary visual anchor —
no data visualizations or sparklines. All other visual interest comes from M3 tonal surfaces,
vector SVG accessories, and the three-color EVA-01 palette cycling across decorative elements.

## Vector Accessories

Each card type has a unique decorative SVG in its corner (`.card-accessory`):

| Card type | SVG pattern | Color cycle |
| --- | --- | --- |
| Projects | Diamond + concentric circles | acc-0 (lime) |
| Experience | Dashed concentric circles | acc-0 → acc-1 → acc-2 (lime → violet → orange) |
| Education | Stepped corner bracket | acc-0 → acc-1 → acc-2 |
| Skills | Nested rounded rectangles | acc-0 → acc-1 → acc-2 |

Base styles: `position: absolute; top: -12px; right: -12px; width: 96px; height: 96px;
pointer-events: none; opacity: 0.6`. Hover: `opacity: 0.8; rotate(15deg) scale(1.1)`.
Mobile: `72px`.

## Motion

- **Scroll-reveal**: `v-reveal` directive — elements fade+slide in (`translateY(28px)` → `none`)
  when entering viewport. `.reveal-in` class sets `transform: none` — elements needing
  persistent transforms (rotated stamps/stickers) must be wrapped in a separate `v-reveal` div.
- **Sticker float animations**: `float-gentle` (6s) and `float-slow` (8s) keyframes —
  `translateY(0→-8px→0)` with `rotate(var(--rot))` preserving base rotation via CSS custom property.
- **Card hover**: tonal step-up + M3 shadow + `translateY(-2px)`. Avatar hover: `scale(1.08)`.
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

Includes a skip link (`#hero`), semantic `section[id]` landmarks, `aria-label`s on icon-only
buttons, `:focus-visible` outline in lime (`2px solid tertiary`), and full keyboard operation.
Theme preference persists via the module's `color-scheme` cookie; static builds restore it
pre-paint to avoid a flash.

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
