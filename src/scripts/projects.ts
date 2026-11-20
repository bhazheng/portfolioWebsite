document.querySelectorAll<HTMLButtonElement>('[data-project-open]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const id = trigger.dataset.projectOpen
    if (!id) return
    const dialog = document.getElementById(`project-dialog-${id}`) as HTMLDialogElement | null
    dialog?.showModal()
  })
})

document.querySelectorAll<HTMLDialogElement>('.project-dialog').forEach((dialog) => {
  dialog.querySelector('[data-dialog-close]')?.addEventListener('click', () => {
    dialog.close()
  })
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close()
  })
})
