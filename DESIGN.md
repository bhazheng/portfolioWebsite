# Design — The Trader's Ledger

<!-- impeccable:design-schema 1 -->

A redesign of Akbar Lucky Basuki's portfolio. Treats the previous dark-glass "translucent modern tech" world as anti-reference. The visual system is grounded in an Indonesian market trader's hand-ruled ledger — the person who keeps honest books on chaos.

## World Statement

After the stall closes, the trader opens the ledger under a warm hanging bulb and writes the day's truth in ink. Every number is accounted for, a changed figure gets a red correction stroke, a proof gets a rubber stamp. That discipline — making legible order out of the day's noise — is exactly the job of a business analyst and data storyteller. The site is that ledger, and the visitor is reading the honest books.

## Platform / Delivery

Nuxt 3 static export. SFC components + Tailwind v4. Content stays verbatim except the Skills tab, which is redesigned (content + treatment).

## Palette

Color strategy: **Ristretto Dark ground, one committed accent + two data colors.**

- `--color-paper`: soft warm foreground `#D8D1C0` — the light and the text
- `--color-paper-2`: muted foreground `#C2B8A0`
- `--color-ink`: deep warm black `#100B08` — the ground
- `--color-ink-2`: elevated surface `#1D1612`
- `--color-charcoal`: warm elevated panel `#2A2119`
- `--color-brass`: Ristretto orange — THE committed accent (primary, corrections, proof) `#CE6A2F`
- `--color-brass-soft`: lighter orange hover `#E08A3C`
- `--color-teal`: faded data teal (data / figures / visualization) `#6F8F8F`
- `--color-line`: hairline rule on dark `rgba(216, 209, 192, 0.1)`
- `--color-line-dark`: stronger rule `rgba(216, 209, 192, 0.16)`
- `--color-red`: correction ink `#CF4A2A` (changed figures, alerts, "updated" marks)

Text opacity ladder on dark: primary `#D8D1C0`, secondary `rgba(216, 209, 192, 0.82)`, tertiary `rgba(216, 209, 192, 0.66)`, muted `rgba(216, 209, 192, 0.5)`, faint `rgba(216, 209, 192, 0.34)`.

Glass/translucency is gone. Surfaces are warm dark panels with soft shadows (a folded page), not frosted glass.

## Typography

Faces chosen as objects from the ledger's world.

- **Display — IBM Plex Serif** (tegas, record-keeping, not the cream-editorial rut): name, section titles, key figures.
- **Body — IBM Plex Sans** (humanist, readable at length): running copy, ledgers' printed rule lines.
- **Mono — IBM Plex Mono** (tabular figures): every number, column, date, chip, and label. The mono is earned by ledger columns being tabular accounts, not by "tech."

Display is set tight (`-0.02em`) and the name reads large. Numbers always set in mono, tabular-nums, so columns align like a ledger.

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
