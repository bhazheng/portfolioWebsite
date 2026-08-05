# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Nuxt 3 (static generate) + Vue 3 SFCs + Tailwind CSS v4; deployed via Cloudflare (wrangler.jsonc present). Tests: vitest + @nuxt/test-utils. TypeScript.

## Users

Mixed audience — recruiters, peers, and curious visitors. No single persona whose "yes" outranks the others; the site must read clearly to a non-technical visitor while signaling depth to a technical one.

## Product Purpose

A personal portfolio for Akbar Lucky Basuki. Exists to surface his work as a Business Analyst and Data Storyteller and to make that work legible and credible to anyone who lands on the site. Success = a visitor understands what he does, trusts the craft, and can reach out.

## Positioning

Data storytelling is the through-line: translating complex data points into intuitive dashboard systems, strategic market analysis, and machine-learning solutions that guide decisions. The differentiator is the translation, not the tooling.

## Operating Context

Single-page tabbed experience (Home, Experience, Education, Projects, Skills, Contact, plus Privacy/Terms). Content sections render in-place via `activeTab` state in `pages/index.vue` rather than route changes. Floating-island desktop nav; mobile nav pattern in Navbar.vue. Dark, atmospheric background layer (grid, orbs, particles, cursor spotlight, noise) sits behind content.

## Capabilities and Constraints

- Static site generation via `nuxt generate`; no server-side runtime assumed.
- Tab-based in-page navigation (no router-driven pages beyond index).
- Tailwind v4 design tokens in use: `brass` / `brass-soft` accent, `ink` / `paper` ground, glass-nav surfaces.
- Real content lives in the existing view components (HomeView, ExperienceView, EducationView, ProjectsView, SkillsView, ContactView, PrivacyView, TermsView, HeroDashboard, Footer, Navbar). Preserve factual content; do not invent projects, employers, dates, or metrics.

## Brand Commitments

- Name: Akbar Lucky Basuki. Brand mark in Navbar: `ALB` with brass `B` and brass-soft dot.
- Role title (binding): "Business Analyst & Data Storyteller".
- Degree: Information Systems, Universitas Brawijaya (recorded as existing site content; keep factual).
- Voice: confident, precise, lightly editorial — the existing copy is the reference.

## Evidence on Hand

Existing site copy and section content in `components/*.vue`. No testimonials, case studies with named clients, or benchmark numbers have been confirmed real; future work must not fabricate any of these.

## Product Principles

1. **Translation over tooling.** Lead with the act of making data legible; tools are evidence, not the headline.
2. **One read, two depths.** A non-technical visitor understands it; a technical visitor sees the depth. Never trade one for the other.
3. **Facts are binding.** Real projects, real degree, real title. No invented proof.
4. **Atmosphere serves content.** Background effects exist to frame the work, never to compete with it.

## Accessibility & Inclusion

Skip-to-content link and `#main-content` landmark are present. No additional product-specific accessibility standard has been confirmed yet.

## Open Decisions

- Deploy target: Cloudflare configuration exists (`wrangler.jsonc`) but the user has not explicitly confirmed it as binding. Treat as current, not locked.
- No explicit decision yet on: blog/writing sections, resume download, testimonials, or conformance target (WCAG level). Do not add these without an explicit request.
