import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Desktop View Polish', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains page-fade transition wrapper and card elevation glow classes', async () => {
    const html = await $fetch('/')
    // Assert presence of transition wrapper and elevation glow classes
    expect(html).toContain('page-fade')
    expect(html).toContain('hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)]')
  })
})
