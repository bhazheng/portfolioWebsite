import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Navbar Animations', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains scroll transition and active bounce classes', async () => {
    const html = await $fetch('/')
    // Assert presence of scroll transition classes and active classes
    expect(html).toContain('transition-all')
    expect(html).toContain('active:scale-90')
  })
})
