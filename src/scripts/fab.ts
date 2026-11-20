const root = document.querySelector<HTMLElement>('.fab-menu')
const trigger = root?.querySelector<HTMLButtonElement>('.fab-trigger')
const items = document.getElementById('fab-menu-items')

if (root && trigger && items) {
  const openLabel = trigger.dataset.labelOpen ?? ''
  const closeLabel = trigger.dataset.labelClose ?? ''

  const setOpen = (open: boolean) => {
    trigger.setAttribute('aria-expanded', String(open))
    const nextLabel = open ? closeLabel : openLabel
    if (nextLabel) trigger.setAttribute('aria-label', nextLabel)
    items.hidden = !open
  }

  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true'
    setOpen(!isOpen)
  })

  items.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('.fab-action')) {
      setOpen(false)
    }
  })

  document.addEventListener('click', (e) => {
    if (trigger.getAttribute('aria-expanded') === 'true' && !root.contains(e.target as Node)) {
      setOpen(false)
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
      setOpen(false)
      trigger.focus()
    }
  })
}
