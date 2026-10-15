import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Native CSS Scroll Snap & Hero Fullscreen', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('renders the one-page Material Design 3 sections', async () => {
    const html = await $fetch('/')
    expect(html).toContain('v-application')
    expect(html).toContain('id="hero"')
    expect(html).toContain('id="experience"')
    expect(html).toContain('id="education"')
    expect(html).toContain('id="projects"')
    expect(html).toContain('id="skills"')
    expect(html).toContain('id="contact"')
  })
})
