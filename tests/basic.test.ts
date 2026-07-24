import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Homepage Spacing', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains mobile spacing and scroll margin classes on homepage sections', async () => {
    const html = await $fetch('/')
    // Verify responsive padding and scroll margin
    expect(html).toContain('scroll-mt-6 md:scroll-mt-[90px]')
    expect(html).toContain('pt-4 md:pt-16 pb-28 md:pb-6')
  })
})
