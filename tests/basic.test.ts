import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('NUXT SSG Bootstrap', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('renders index page successfully', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Akbar Lucky Basuki')
  })
})
