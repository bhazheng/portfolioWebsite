import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Home Spacing & Footer Reachability', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains compact section spacing and footer snap anchor', async () => {
    const html = await $fetch('/')
    expect(html).toContain('snap-start border-t border-line-dark')
  })
})
