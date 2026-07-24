import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Mobile Bottom Nav Dock', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains bottom mobile dock elements', async () => {
    const html = await $fetch('/')
    // Assert presence of bottom dock navigation markup
    expect(html).toContain('fixed bottom-6')
    expect(html).toContain('ph-house')
    expect(html).toContain('ph-briefcase')
  })
})
