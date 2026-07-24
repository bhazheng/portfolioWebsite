import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Hero Fullscreen & Section Dividers', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains min-h-dvh Hero section and glowing glass dividers', async () => {
    const html = await $fetch('/')
    expect(html).toContain('min-h-dvh')
    expect(html).toContain('via-line-dark to-brass/30')
  })
})
