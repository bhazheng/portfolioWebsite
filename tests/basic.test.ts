import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, it, expect } from 'vitest'
import Index from '../src/pages/index.astro'

const SECTION_ORDER = ['hero', 'experience', 'education', 'projects', 'skills', 'contact']

describe('one-page EVA-01 sections', () => {
  it('renders all six section anchors', async () => {
    const container = await AstroContainer.create()
    const html = await container.renderToString(Index)

    for (const id of SECTION_ORDER) {
      expect(html).toContain(`id="${id}"`)
    }
    expect(html).toContain('Business Analyst')
    expect(html).toContain('data-theme="dark"')
    expect(html).not.toContain('v-application')
    expect(html).not.toContain('v-icon')
  })

  it('renders sections in the expected order', async () => {
    const container = await AstroContainer.create()
    const html = await container.renderToString(Index)

    const positions = SECTION_ORDER.map(id => html.indexOf(`id="${id}"`))
    expect(positions.every(p => p !== -1)).toBe(true)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
  })
})
