# Impeccable Critique Snapshot — components/

**Date:** 2026-10-14
**Target:** components/ + pages/index.vue + app.vue
**Mode:** Experience (one-page portfolio)

## Summary

The redesign is a disciplined Material Design 3 / Vuetify 4 implementation with a real EVA-01 token system, cookie-persisted theming, and honest content. However, the hero data figure — the central proof of the "data storyteller" positioning — renders blank due to a Vuetify 4 prop-name mismatch (`:value` instead of `:model-value`). The finding is confirmed by live DOM inspection (empty `<path d="">`).

**Score:** 19 / 28 (Good)  
**N/A heuristics:** 7 (Flexibility), 9 (Error Recovery), 10 (Help/Documentation)  
**P0:** 1 (resolved) · **P1:** 2 (1 resolved, 1 false positive) · **P2:** 3 (resolved) · **P3:** 2 (resolved)  

**Fix log (2026-10-14):** P0 sparkline `:value`→`:model-value`; P1 chart legend added; P2 aria-current on nav; P2 metric reconciliation (Wayang 91%→89.2%, surfaced IndoBERT 91.4% F1); P2 mobile ordering fixed; P3 unused images removed; P3 inline styles replaced with utility classes. Rei.my.id-inspired UX added: Current badge, employment-type tag, numbered project badges, prominent leading metrics. P1 lime chip contrast was a false positive (measured 6.11:1).

1. **Palette as a real system** — M3 role tokens consumed via Vuetify CSS variables; not ad-hoc hex decoration.
2. **Honest content architecture** — Skills pair name with `appliedIn` evidence.
3. **Theme engineering** — cookie-based persistence with no flash on static build.
4. **Restraint** — no atmosphere layer; tonal elevation only.

## Priority Issues

### [P0] Hero data figure renders blank
- **Where:** components/HeroDashboard.vue sparkline components
- **Why:** Vuetify 4 `v-sparkline` reads `modelValue`, but the implementation binds `:value`; the prop is ignored, `modelValue` defaults to `[]`, and the generated `<path d="">` is empty. Confirmed in live DOM at 1280x900 and 360x720, dark and light, no console error.
- **Fix:** Change `:value` to `:model-value` on both `v-sparkline` instances. Verify paths populate.

### [P1] Hero card has no chart labeling
- **Where:** HeroDashboard.vue
- **Why:** Title and caption say "data storytelling" but no axis, unit, legend, or sample size is visible.
- **Fix:** Add a small legend, a y-axis label or a single annotated metric, and keep the "Illustrative" caption.

### [P1] Lime tertiary chip text contrast weak in light mode
- **Where:** HeroDashboard.vue, SkillsSection.vue tertiary chips
- **Why:** `color="tertiary"` on tonal chips renders dark-lime text on pale-lime surface; live review flags it as low-contrast in light theme.
- **Fix:** Verify ≥4.5:1 or use `tertiary-container` / `on-tertiary-container` per DESIGN.md legibility rule.

### [P2] Active nav lacks aria-current
- **Where:** Navbar.vue nav buttons
- **Why:** Visual active state exists; screen readers get no indication of current section.
- **Fix:** Add `aria-current="true"` (or `"location"`) to the active nav button and drawer item.

### [P2] Duplicate skill listings across sections
- **Where:** ExperienceSection.vue tech chips, ProjectsSection.vue tech, SkillsSection.vue list
- **Why:** Forces the visitor to compare three surfaces to understand the skill profile.
- **Fix:** Reduce each work item to its 1–2 most relevant tools; keep the full matrix in Skills.

### [P2] Metric inconsistency / strongest metric unsurfaced
- **Where:** ProjectsSection.vue, DESIGN.md
- **Why:** Wayang classifier says 91%; DESIGN.md says 89.2%; IndoBERT 91.4% F1 from DESIGN.md never appears in the UI.
- **Fix:** Reconcile the numbers and surface the strongest real metric in hero or projects.

### [P3] Unused image assets
- **Where:** public/profile-photo.jpg, public/hero-abstract.jpg
- **Why:** DESIGN.md explicitly rejects photographic portraits; these files are unreferenced.
- **Fix:** Remove the files or document the intent.

### [P3] Inline styles where tokens belong
- **Where:** Footer.vue status dot and specializations list
- **Why:** Breaks the token-based convention; makes overrides fragile.
- **Fix:** Replace inline `style` with Vuetify spacing / color utilities or CSS classes.

## Persona Red Flags

### Recruiter on a 3-min clock
- Hero card is blank at first glance; no headline metric to remember; "5+ dashboards" is the only number.

### Senior-analyst peer
- Unlabeled sparklines read as decoration, not rigor; the honest "Illustrative" caption is not enough to establish analytical credibility.

### Mobile visitor
- `order-first order-md-last` places the blank hero card above the name and CTAs on small screens, wasting the first viewport.

## Minor Observations

- HeroDashboard.vue sets `color="surface-container-low"` while other cards use default elevated surfaces; minor drift.
- Timeline dot colors differ (primary, tertiary, secondary) — intentional and helpful.
- No horizontal overflow on 360px or 1280px viewports.

## Questions to Consider

1. What if the hero chart were the thesis? Title it, label an axis, and put the strongest real metric in the caption.
2. Does the mobile ordering serve the story, or should the name and CTAs come first even on small screens?
3. Which single number should every visitor remember 30 seconds after leaving?
