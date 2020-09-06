const menu = document.querySelector('.dropdown-menu');
const btn = document.querySelector('.dropdown-btn');
const body = document.body;

// Theme switcher
document.querySelector('#theme').addEventListener('click', () => {
  body.classList.toggle("theme-light");
  body.classList.toggle("theme-dark");
})

// Dropdown
btn.addEventListener('click', e => {
  menu.classList.toggle('visible');
  btn.classList.toggle('dropdown-visible');
})
body.addEventListener('click', e => {
  if (!e.target.classList.contains('dropdown-btn') && !e.target.classList.contains('dropdown-menu')) {
    menu.classList.remove('visible');
    btn.classList.remove('dropdown-visible');
  }
})

// Enlarge preview
document.querySelector('.preview').addEventListener('click', () => {
  body.classList.toggle('preview-visible');
})