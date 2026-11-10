# Surface Brief — Portfolio (EVA-01 / Material Design 3)

## Scope / Mode

The whole one-page portfolio, in two languages (English at `/`, Indonesian at `/id/` — same design, translated text). Mode: **Experience** (a body of work). Visual world: Material Design 3 tonal surfaces in the Evangelion Unit-01 palette (violet / neon lime / chest orange), with a rei.my.id-inspired editorial layout — floating pill nav, accent-dot section headings, filled tonal cards, vector SVG accessories, sticker-style hero portrait. This replaces the earlier "trader's ledger" world (soga red, Spectral serif, ruled paper), which is retired.

## Audience / Job

Mixed: a recruiter deciding "interview or pass" in ~3 minutes, a peer analyst judging depth, a curious visitor. Job: understand what Akbar does, trust the craft, reach out. Primary success = a visitor can name one real project and its result. Current target roles: IT Assurance / Data Analytics (see `PRODUCT.md`).

## Outcome / Proof

Real content is the proof — no fabrication. Facts come from `CV_Akbar_Lucky_Basuki_no_photo.pdf`: OJK regulatory benchmarking for the Digital Assets regulation, the 8,000+ document Operating Document Request dashboard, the IndoBERT sentiment thesis (20,000+ reviews, 5 issue categories), the Semar classifier (91% accuracy), 270+ students mentored.

## Lead + Focal Moment

Hero leads with the profile portrait in a blob frame and three floating stickers beside the "Business Analyst & Data Storyteller" headline. Sections follow in career order: Experience → Education → Projects → Skills → Contact.

## Content Rules

- Facts (roles, dates, institutions, project names, metrics) must match the CV; do not add numbers it does not contain.
- Every visible string exists in both locales (`src/i18n/index.ts`, `src/data/*.ts`); facts and numbers are identical, only wording and number/date format differ (`8.000+`, `IPK 3,77`, `Agu`, `Sekarang`). The headline, project titles, tool names, and thesis title stay in English.
- Keep `role` titles short; the division/department goes in the `team` line.
- Every date, metric, percentage, and tech tag renders in the mono face (`.font-mono`).
- Lime is never full-opacity text and never on `primary-container` purple (use `on-surface` there).

## Directions / States

- Hero: name + positioning + CTA + socials + portrait/stickers.
- Cards: Experience / Education / Projects / Skills / Contact as filled tonal cards, no outlines; the first Experience and Education cards use `primary-container`.
- Skills: five CV-aligned categories; the last card spans the full row.
- Light and dark are both first-class; dark is the default.

## Constraints

- Astro 7 static, hand-written CSS (`src/styles/`), UnoCSS for icons only. No Vue/Vuetify/Nuxt, no Tailwind, no SSR.
- Content lives in `src/data/*.ts`; components are presentational.
- `main.css` is the load-bearing design layer; layout fixes go in `base.css`.
- Zero horizontal scroll at 360–1440 px in both themes and both languages.
- The header's language switch, theme toggle, and CTA must keep clear of the fixed pill nav (it is ~700 px wide and centered); Indonesian nav labels are wider than English.
- Breakpoints: 960 px (nav switch), 767 px (grid collapse), 480 px (email fit).

## Open at build

WhatsApp number (CV vs site mismatch), owner review of the Indonesian copy, and a favicon — undecided. (The résumé is linked from the hero and contact block via the owner's Drive copy.)
