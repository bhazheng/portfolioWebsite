// Language links point at the other prerendered route. Carry the current #section across
// so switching language keeps the reader where they are.
document.querySelectorAll<HTMLAnchorElement>('a[data-lang-link]').forEach((a) => {
  a.addEventListener('click', () => {
    if (location.hash && location.hash !== '#') a.href = a.pathname + location.hash
  })
})
