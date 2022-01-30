// should write: we're creating elements in here, but we should redo to fit with uhtml

export default function notification({message, type}={}) {
  const el = document.createElement('div')
  el.classList.add('shared-modal')
  el.innerText = message
  if (type) {
    el.classList.add(`notification-${type}`)
  }
  document.getElementById('notification-container').appendChild(el)
  
  setTimeout(() => el.remove(), 3000);
}
