import './sass/main.scss';
import items from './menu.json';
// import menuItemTpl from './templates/menu-item.hbs';
import menuItemsTpl from './templates/menu-items.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//const menuItem = items.map(item => menuItemsTpl(item)).join(''); 
// const menuItem = items.map(menuItemTpl).join('');
const menuItem = menuItemsTpl( items );

const refs = {
    menuList: document.querySelector('.js-menu'),
    themeSwitcher: document.querySelector('.theme-switch__toggle'),
};

refs.menuList.innerHTML = menuItem;

LoadInit();

refs.themeSwitcher.addEventListener("change", onThemeSwitcherClick);

function onThemeSwitcherClick(event) {
    if (event.target.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', 'light');
    }
};

function LoadInit() {
    if (!localStorage) {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        refs.themeSwitcher.checked = false;
        return;
    };

    const localStorageValue = localStorage.getItem('theme');
    if (localStorageValue === 'dark') {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        refs.themeSwitcher.checked = true;
        return;
    }
    else {
        document.body.classList.add(Theme.LIGHT);
    }

};
