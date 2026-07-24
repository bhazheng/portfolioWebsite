import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Rich Editorial Footer', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains rich footer elements, status badge, and tech badge', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Available for BI &amp; Analytics Roles')
    expect(html).toContain('Nuxt 3 &amp; Tailwind v4')
  })
})
