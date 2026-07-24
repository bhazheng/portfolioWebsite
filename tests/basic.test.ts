import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Center-Aligned Direct Snap Scroll', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('contains snap-center snap-always section classes and footer snap-start anchor', async () => {
    const html = await $fetch('/')
    expect(html).toContain('snap-center snap-always min-h-[88vh]')
    expect(html).toContain('snap-start border-t border-line-dark')
  })
})
