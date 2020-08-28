import './styles.css';

import elements from './menu.json';
import template from './template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuElements: document.querySelector('.js-menu'),
  themeSwhitcher: document.querySelector('.js-switch-input'),
};

function createMenu() {
  const createdMenu = elements.map(e => template(e)).join('');
  refs.menuElements.insertAdjacentHTML('beforeend', createdMenu);
}

createMenu(elements);

refs.themeSwhitcher.addEventListener('change', changeTheme);

const themeMode = localStorage.getItem('theme');
document.body.classList.add(themeMode);

const themeModeSwitcher = localStorage.getItem('checked');

document.getElementById('theme-switch-control').checked = JSON.parse(
  themeModeSwitcher,
);

function changeTheme(e) {
  if (e.target.checked === true) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);

    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('checked', true);
  } else if (e.target.checked !== true) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('checked', false);
  }
}
