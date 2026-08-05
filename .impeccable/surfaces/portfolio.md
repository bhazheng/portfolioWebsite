# Surface Brief — Portfolio (redesigned)

## Scope / Mode

Whole portfolio surface redesign inside the trader's ledger world. Mode: **Experience** (body of work). Preserves the tabbed structure, all content verbatim, and the data-viz-as-identity — except the Skills tab, which is redesigned.

## Audience / Job

Mixed: a recruiter deciding "interview or pass" in ~3 minutes, a peer analyst judging depth, a curious visitor. Job: understand what Akbar does, trust the craft, reach out. Primary success = a visitor can name one real project and its result.

## Outcome / Proof

The data-story leads. The hero's first viewport is a ledger figure — the three datasets rendered as ruled ink charts — proving "data storytelling" in the first seconds. Real content (MnR BI ops, IndoBERT sentiment 91.4% F1, Wayang classifier 89.2%) is the proof; no fabrication.

## Lead + Focal Moment

Hero leads with the data figure (the chart, now in ledger ink). The focal moment is the name stamping in and the figure's ink line drawing once on load. Navigation is a ledger register/spine.

## Content Rules

- Keep all copy verbatim except the Skills tab.
- No photographic portrait; the chart is the identity.
- Facts (roles, dates, institutions, project names, metrics) stay true.

## Directions / States

- Hero: name + positioning + data figure + two actions (Email me, View career map).
- Register nav (desktop island + mobile dock): active item is "stamped" soga.
- Cards: Experience/Education/Projects/Contact as ruled ledger pages with proof stamps.
- Skills: redesigned — reframed from a 16-chip grid to a ledger of capabilities grouped by how they're applied (content rework allowed).

## Constraints

- Nuxt 3 static, Tailwind v4, existing SFC structure and tab state.
- The three datasets in `HeroDashboard` are real and stay; restyle them in ledger ink.
- Stamps, ruled paper, soga accent, Spectral/Inter/JetBrains Mono.

## Open at build

Exact hero figure copy and Skills group labels are decided during build within the world's voice.
