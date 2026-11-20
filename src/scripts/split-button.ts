const splitBtn = document.querySelector<HTMLElement>('.split-btn')
const trail = splitBtn?.querySelector<HTMLButtonElement>('.split-btn-trail')
const menu = document.getElementById('hero-contact-menu')
const copyBtn = menu?.querySelector<HTMLButtonElement>('[data-split-copy]')

if (splitBtn && trail && menu) {
  const setOpen = (open: boolean) => {
    trail.setAttribute('aria-expanded', String(open))
    menu.hidden = !open
  }

  trail.addEventListener('click', () => {
    const isOpen = trail.getAttribute('aria-expanded') === 'true'
    setOpen(!isOpen)
  })

  document.addEventListener('click', (e) => {
    if (trail.getAttribute('aria-expanded') === 'true' && !splitBtn.contains(e.target as Node)) {
      setOpen(false)
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && trail.getAttribute('aria-expanded') === 'true') {
      setOpen(false)
      trail.focus()
    }
  })

  if (copyBtn && navigator.clipboard) {
    const labelEl = copyBtn.querySelector<HTMLElement>('.split-menu-label')
    const iconEl = copyBtn.querySelector<HTMLElement>('.icon')
    const idle = labelEl?.textContent ?? ''
    const done = copyBtn.dataset.labelCopied ?? idle
    let timer: number | undefined

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.splitCopy ?? '')
        if (labelEl) labelEl.textContent = done
        if (iconEl) iconEl.className = 'i-material-symbols:check icon'
        copyBtn.classList.add('copied')
        window.clearTimeout(timer)
        timer = window.setTimeout(() => {
          setOpen(false)
          if (labelEl) labelEl.textContent = idle
          if (iconEl) iconEl.className = 'i-material-symbols:content-copy icon'
          copyBtn.classList.remove('copied')
        }, 1800)
      } catch {
        // Clipboard denied: keep menu usable for WhatsApp/LinkedIn.
      }
    })
  }
}
