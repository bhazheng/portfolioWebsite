import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Layout Spacing', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains mobile spacing classes on main container', async () => {
    const html = await $fetch('/')
    expect(html).toContain('pt-6 md:pt-16')
    expect(html).toContain('pb-28 md:pb-8')
  })
})
