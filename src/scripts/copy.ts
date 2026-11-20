// "Copy email" button: hidden in the prerendered HTML, revealed only when the Clipboard API exists.
// Both labels come from the initial text / data attributes, so nothing is hard-coded per language.
const btn = document.querySelector<HTMLButtonElement>('.copy-btn')
const label = btn?.querySelector<HTMLElement>('.copy-label')
const icon = btn?.querySelector<HTMLElement>('.icon')

if (btn && label && navigator.clipboard) {
  btn.hidden = false
  const idle = label.textContent ?? ''
  const done = btn.dataset.labelCopied ?? idle
  let timer: number | undefined

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '')
      label.textContent = done
      if (icon) icon.className = 'i-material-symbols:check icon'
      btn.classList.add('copied')
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        label.textContent = idle
        if (icon) icon.className = 'i-material-symbols:content-copy icon'
        btn.classList.remove('copied')
      }, 2000)
    } catch {
      // Clipboard denied: leave the button as-is; the mailto link still works.
    }
  })
}
