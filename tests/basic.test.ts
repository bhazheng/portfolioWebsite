import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, it, expect } from 'vitest'
import Index from '../src/pages/index.astro'

describe('one-page EVA-01 sections', () => {
  it('renders all six section anchors', async () => {
    const container = await AstroContainer.create()
    const html = await container.renderToString(Index)

    for (const id of ['hero', 'projects', 'experience', 'education', 'skills', 'contact']) {
      expect(html).toContain(`id="${id}"`)
    }
    expect(html).toContain('Business Analyst')
    expect(html).toContain('data-theme="dark"')
    expect(html).not.toContain('v-application')
    expect(html).not.toContain('v-icon')
  })
})
