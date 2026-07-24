import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Morphing Mobile Dock', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains morphing dock attributes and visibility bindings', async () => {
    const html = await $fetch('/')
    // Assert presence of morphing container and styles
    expect(html).toContain('fixed bottom-6')
    expect(html).toContain('ease-spring')
    expect(html).toContain('max-w-[420px]')
  })
})
