# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (`output: 'static'`, two prerendered routes: `/` English and `/id/` Indonesian) + TypeScript + UnoCSS (icons only) + hand-written CSS design system (Material Design 3 color roles, Egyptian Blue / Stone Blue / Scarlet Red palette). No client framework runtime; ~3 KB of inline client script (scroll-spy nav, theme toggle, scroll reveal). Deployed to Cloudflare as static assets via `wrangler`. Tests: vitest + Astro container smoke test. Package manager: pnpm. See `AGENTS.md` for architecture and commands.

## Users

Mixed audience — recruiters, peers, and curious visitors. No single persona whose "yes" outranks the others; the site must read clearly to a non-technical visitor while signaling depth to a technical one.

## Product Purpose

A personal portfolio for Akbar Lucky Basuki. Exists to surface his work as a Business Analyst and Data Storyteller and to make that work legible and credible to anyone who lands on the site. Success = a visitor understands what he does, trusts the craft, and can reach out.

## Positioning

Data storytelling is the through-line: translating complex data points into intuitive dashboard systems, strategic market analysis, and machine-learning solutions that guide decisions. The differentiator is the translation, not the tooling.

Current job-search target (from the CV summary): Analyst roles in **IT Assurance / Data Analytics** — IT audit, governance, risk, and compliance engagements — backed by regulatory and compliance analysis at OJK (Indonesia's financial services authority). The headline stays "Business Analyst & Data Storyteller"; the compliance/governance angle shows up in the hero copy, the Skills section, and the contact line, not as a rebrand.

## Operating Context

Single-page scrolling site, available in **English (`/`) and Indonesian (`/id/`)**, with anchor navigation (no tabs, no client-side routing). An EN | ID switch in the header links the two routes; there is no auto-detection or redirect. Six sections in this order: Hero → Experience → Education → Projects → Skills → Contact. Floating pill nav on desktop, bottom dock on mobile (switch at 960 px), light and dark themes (dark default, persisted by cookie). Evangelion Unit-01 palette on Material Design 3 tonal surfaces; no atmosphere layer (no grid, orbs, particles, or cursor effects).

## Capabilities and Constraints

- Static output only; no server-side runtime, no API calls, no CMS. Content is typed arrays in `src/data/`.
- Anchor-based in-page navigation; `NAV_SECTIONS` ids must match the `<section id>` attributes.
- Must stay usable on phones: no horizontal scroll at 360–390 px, long role titles and the long email address included.
- Bilingual: every visible string exists in both English and Indonesian with identical facts and numbers (only wording and number/date format differ). New copy must be added to both locales.
- Do not reintroduce Nuxt, Vue, Vuetify, or an SSR server (the Nuxt/Vuetify build failed on Cloudflare and Vercel — see `AGENTS.md`).
- **Content source of truth: `CV_Akbar_Lucky_Basuki_no_photo.pdf`.** Preserve factual content; do not invent projects, employers, dates, or metrics.

## Brand Commitments

- Name: Akbar Lucky Basuki. Brand mark in the header: `ALB.` with a blue `B` and a scarlet dot.
- Role title (binding): "Business Analyst & Data Storyteller" — kept in English on both language routes.
- Degree: Bachelor of Information Systems, Universitas Brawijaya, GPA 3.77 / 4.00 (Aug 2020 — Jan 2025).
- Voice: confident, precise, lightly editorial — the existing copy is the reference. The Indonesian voice is the same register (professional, first person, "saya"), keeping the English terms Indonesian professionals actually use (dashboard, stakeholder, Root Cause Analysis, BRD, machine learning).

## Evidence on Hand

Everything stated on the site comes from the CV. Figures the CV supports: 8,000+ documents tracked in the Operating Document Request dashboard; 270+ students taught as a lab assistant; 20,000+ app reviews analysed across 5 issue categories (thesis); 91% accuracy on the Semar classifier; Bangkit final score 88.39 / 100 (900-hour curriculum); TensorFlow Developer Certification; TOEFL ITP 510. No testimonials, named-client case studies, or other benchmark numbers have been confirmed real; future work must not fabricate any of these. Figures that earlier versions of the site carried but the CV does not support (`5+ Dashboards`, `89.2%`) were removed.

## Product Principles

1. **Translation over tooling.** Lead with the act of making data legible; tools are evidence, not the headline.
2. **One read, two depths.** A non-technical visitor understands it; a technical visitor sees the depth. Never trade one for the other.
3. **Facts are binding.** Real projects, real degree, real title, real numbers from the CV. No invented proof.
4. **The surface serves content.** Tonal Material surfaces and the blue/scarlet/coral palette frame the work; decoration never competes with it, and text stays readable (accent text is never dimmed, and text on `primary-container` cards is always neutral).

## Accessibility & Inclusion

Skip-to-content link and landmark sections are present; icon-only controls carry `aria-label`s; decorative icons are `aria-hidden`; `prefers-reduced-motion` is honored; keyboard focus is visible (scarlet outline). Contrast ratios are tabulated in `DESIGN.md`. No formal conformance target (WCAG level) has been confirmed.

## Open Decisions

- Deploy target: Cloudflare (`wrangler.jsonc`, assets from `./dist`) is the working assumption; the user has not explicitly confirmed it as binding. Treat as current, not locked.
- **Indonesian copy**: translated from the CV, not yet reviewed by the owner. Open points: the OJK department name in Indonesian, the regulation names in the OJK bullets, and the thesis title (kept in English exactly as on the CV).
- **Language auto-detect / hreflang**: not added. `<link rel="alternate" hreflang>` needs absolute URLs and no `site` is configured; an automatic redirect from `navigator.language` was not requested.
- **WhatsApp number**: the CV lists `+62 899 9655 808`, but the site's WhatsApp links use `6285172455808`. Unresolved — confirm which number is right before changing.
- **Résumé**: resolved. The owner supplied a public Google Drive copy of the CV; the hero ("View CV") and the contact block link to it (`CV_URL` in `src/i18n/index.ts`, opens in a new tab). The repo-root PDF is still not served. If the Drive file is replaced, update `CV_URL` and keep the content-source rule above.
- No explicit decision yet on: blog/writing sections, testimonials, or a conformance target (WCAG level). A favicon now exists (`public/favicon.svg`). Do not add these without an explicit request.
