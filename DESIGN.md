# Design — EVA-01 Tactical Telemetry

<!-- impeccable:design-schema 1 -->

A redesign of Akbar Lucky Basuki's portfolio grounded in Evangelion's NERV tactical telemetry and the MAGI supercomputer command displays.

## World Statement

In high-stakes environments, thousands of complex data channels converge. The data analyst's job is not to add noise, but to synthesize critical telemetry into immediate, unambiguous decisions. Grounded in the iconic EVA-01 aesthetic, the interface acts as a tactical command center: deep obsidian violet canvas, high-contrast lunar titanium reading type, sync acid lime data paths, and NERV emergency orange action anchors.

## Platform / Delivery

Nuxt 3 static export. SFC components + Tailwind v4. Plus Jakarta Sans for reading & display, IBM Plex Mono for tabular figures.

## Palette

Color strategy: **Obsidian Violet ground, Lunar Titanium text, Sync Acid Lime data, and NERV Orange actions.**

- `--color-ink`: deep obsidian violet ground `#0C0914`
- `--color-ink-2`: elevated armor plate surface `#171224`
- `--color-charcoal`: elevated command cell `#221B34`
- `--color-paper`: lunar titanium primary text `#E6E1EE` (15.4:1 AAA contrast)
- `--color-paper-2`: muted silver secondary text `#A8A1B6` (7.9:1 AAA contrast)
- `--color-brass`: NERV emergency orange — primary action & CTA `#FF6622` (6.7:1 AA contrast)
- `--color-brass-soft`: lighter emergency orange hover `#FF8544`
- `--color-teal`: EVA sync acid lime — data visualization, trends, metrics `#8CE600` (12.6:1 AAA contrast)
- `--color-red`: MAGI core alert red `#FF3344`
- `--color-line`: tactical hairline rule `rgba(230, 225, 238, 0.08)`
- `--color-line-dark`: tactical boundary rule `rgba(230, 225, 238, 0.15)`

Text opacity ladder on dark: primary `#E6E1EE`, secondary `rgba(230, 225, 238, 0.82)`, tertiary `rgba(230, 225, 238, 0.66)`, muted `rgba(230, 225, 238, 0.5)`, faint `rgba(230, 225, 238, 0.34)`.
## Typography

Faces chosen as objects from the ledger's world.

- **Display & Body — Plus Jakarta Sans**: Indonesian-designed modern geometric sans with warm, open circular counters (like Poppins) and engineered micro-legibility. Used for the hero name, section headings, and running narrative copy.
- **Data & Numbers — IBM Plex Mono**: Tabular figures for every number, metric percentage, date, and technical key, ensuring strict column alignment.

Headings are set with crisp tracking (`-0.02em`) for punchy visual authority. Numbers always set in mono, tabular-nums.

## Material Language

- **Ruled paper:** hairline horizontal rules behind content (like ledger rows); faint column separators.
- **Paper texture:** subtle grain on the ground, not noise-overlay neon.
- **Stamps:** a rubber-stamp treatment (solid ink, slightly distressed ring) marks "verified" / "current" / "open" states. Replaces glass badges.
- **Correction stroke:** a red diagonal stroke or red ink underline marks a changed/updated figure — the "error/correction" language.
- **Ink figures:** mono tabular values; a raised ink dot or small seal beside key numbers.
- **Shadows:** soft, offset, page-fold shadows. No glow, no neon, no frosted blur.

## Components

- **Card** — ruled paper panel, hairline border, soft page shadow, small corner "index" mark (a mono tag like `01 / WORK`).
- **Nav** — a spine/register: the active item is "stamped" (solid soga with paper text + stamp ring). Inactive items are ink on paper.
- **Buttons** — primary is soga ink block with paper text (like a stamped block); ghost is a hairline-outline ledger cell.
- **Badge/Pill** — replaced by mono ledger tags with a small stamp ring.
- **Chips** (skills/tech) — mono figure cells with hairline rules, like cells in a ledger column.
- **Figure cards** (project/experience) — each opens like a ledger page: ruled header row (label left, date/figures right), body rows, a proof stamp at the foot.

## Imagery Stance

The data visualizations ARE the images — the three datasets (MnR BI, IndoBERT NLP, Wayang CV) render as ledger figures: ruled axes, ink trend lines, soga corrections, teal/indigo data marks. The hero leads with a data story. No photographic portrait (the user does not use a photo).

## Motion

- One authored moment: the name "stamps in" on load, or the hero figure draws its ink line once. Thereafter restrained.
- Transitions are ink-bleed ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), short.
- Hover: a hairline rule fills to soga ink (like a stamp being applied). No bounce.

## Contrast / Accessibility

Paper ground with ink text gives strong default contrast. Soga accent `#8C4A2F` on paper `#F3EAD3` passes WCAG AA for large/UI text; body stays ink on paper. Focus outline is soga ink. Respects `prefers-reduced-motion`.

## Naming / Brand

Brand mark: `ALB` in Spectral, with an ink dot and a stamp ring, in soga. Tagline position unchanged.

## Rut check

Not dark-glass-with-neon (previous world). Not cream-serif-editorial with terracotta accent (the predictable opposite — avoided by making the accent soga/red *correction* ink and the mono figures central, plus the stamp/ledger material that no generic editorial uses). Faces: Spectral (display) is not the default rut list; the mono is earned by tabular ledger figures.
