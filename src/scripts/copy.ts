// "Copy email" button: hidden in the prerendered HTML, revealed only when the Clipboard API exists.
// Both labels come from the initial text / data attributes, so nothing is hard-coded per language.
const btn = document.querySelector<HTMLButtonElement>('.copy-btn')

if (btn && navigator.clipboard) {
  btn.hidden = false
  const idle = btn.textContent ?? ''
  const done = btn.dataset.labelCopied ?? idle
  let timer: number | undefined

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '')
      btn.textContent = done
      btn.classList.add('copied')
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        btn.textContent = idle
        btn.classList.remove('copied')
      }, 2000)
    } catch {
      // Clipboard denied: leave the button as-is; the mailto link still works.
    }
  })
}
