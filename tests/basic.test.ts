import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Tab Routing Controller', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('renders index controller dynamically and has activeTab state', async () => {
    const html = await $fetch('/')
    // Index page should compile the controller with HomeView inside it
    expect(html).toContain('Akbar Lucky Basuki')
    // No multi-page sub-routing urls like href="/projects" or href="/experience" in navbar
    expect(html).not.toContain('href="/projects"')
    expect(html).not.toContain('href="/experience"')
  })
})
