import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, it, expect } from 'vitest'
import Index from '../src/pages/index.astro'
import IndexId from '../src/pages/id/index.astro'
import { NAV_SECTIONS } from '../src/data/nav'
import { LOCALES, UI } from '../src/i18n'
import { EXPERIENCE } from '../src/data/experience'
import { EDUCATION } from '../src/data/education'
import { PROJECTS } from '../src/data/projects'
import { SKILL_CATEGORIES, SKILL_LOGOS } from '../src/data/skills'

const SECTION_ORDER = ['hero', 'experience', 'education', 'projects', 'skills', 'contact']
const PAGES = [
  { lang: 'en', page: Index },
  { lang: 'id', page: IndexId }
] as const

async function render(page: typeof Index) {
  const container = await AstroContainer.create()
  return container.renderToString(page)
}

describe.each(PAGES)('one-page sections ($lang)', ({ lang, page }) => {
  it('renders all six section anchors with the right <html lang>', async () => {
    const html = await render(page)

    for (const id of SECTION_ORDER) {
      expect(html).toContain(`id="${id}"`)
    }
    expect(html).toContain(`<html lang="${lang}"`)
    expect(html).toContain('Business Analyst')
    expect(html).toContain(UI[lang].hero.status.replace(/&/g, '&amp;'))
    expect(html).toContain('data-theme="dark"')
    expect(html).not.toContain('v-application')
    expect(html).not.toContain('v-icon')
  })

  it('renders sections in the expected order', async () => {
    const html = await render(page)

    const positions = SECTION_ORDER.map(id => html.indexOf(`id="${id}"`))
    expect(positions.every(p => p !== -1)).toBe(true)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
  })

  it('localizes the nav labels and links to the other language', async () => {
    const html = await render(page)
    for (const s of NAV_SECTIONS) {
      expect(html).toContain(`data-label="${UI[lang].nav[s.id]}"`)
    }
    expect(html).toContain('href="/"')
    expect(html).toContain('href="/id/"')
    expect(html).toContain('aria-current="true"')
  })
})

describe('i18n parity', () => {
  it('has a nav label for every nav section in every locale', () => {
    for (const l of LOCALES) {
      for (const s of NAV_SECTIONS) expect(UI[l].nav[s.id]).toBeTruthy()
    }
  })

  it('keeps ids, order, and structure identical across locales', () => {
    const shape = (rows: { id: string }[], pick: (r: any) => unknown) => rows.map(r => [r.id, pick(r)])
    const [base, ...rest] = LOCALES

    for (const l of rest) {
      expect(shape(EXPERIENCE[l], r => [r.current, r.bullets.length, r.metrics.length, r.tech.length, !!r.team]))
        .toEqual(shape(EXPERIENCE[base], r => [r.current, r.bullets.length, r.metrics.length, r.tech.length, !!r.team]))
      expect(shape(EDUCATION[l], r => [r.notes?.length ?? 0, !!r.thesis, r.tech.length]))
        .toEqual(shape(EDUCATION[base], r => [r.notes?.length ?? 0, !!r.thesis, r.tech.length]))
      expect(shape(PROJECTS[l], r => [r.glyph, r.artClass, r.link, r.tech.length, r.highlights.map((h: any) => h.value.replace(/[.,]/g, ''))]))
        .toEqual(shape(PROJECTS[base], r => [r.glyph, r.artClass, r.link, r.tech.length, r.highlights.map((h: any) => h.value.replace(/[.,]/g, ''))]))
      expect(shape(SKILL_CATEGORIES[l], r => [r.icon, r.color, r.skills.map((s: any) => s.id)]))
        .toEqual(shape(SKILL_CATEGORIES[base], r => [r.icon, r.color, r.skills.map((s: any) => s.id)]))
    }
  })

  it('only maps logos to skills that exist', () => {
    const ids = new Set(SKILL_CATEGORIES.en.flatMap(c => c.skills.map(s => s.id)))
    for (const id of Object.keys(SKILL_LOGOS)) expect(ids.has(id), `unknown skill id "${id}"`).toBe(true)
  })
})
