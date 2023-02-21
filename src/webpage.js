import Logo from './images/logo2.png'

// Homepage

function createNav() {
    const body = document.getElementById('container');
    const navMenu = document.createElement('nav');
    const pages = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const logo = new Image();

    navMenu.classList.add('nav-menu');
    pages.classList.add('page-links');
    logo.classList.add('nav-logo');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';
    logo.src = Logo;

    body.appendChild(navMenu);
    navMenu.appendChild(logo);
    navMenu.appendChild(pages);
    pages.appendChild(home);
    pages.appendChild(menu);
    pages.appendChild(contact);

    const links = document.querySelectorAll('li');
    links.forEach((link) => link.classList.add('page-link'));
}

function createBoard() {
    const body = document.getElementById('container');
    const board = document.createElement('div');

    board.classList.add('board');

    body.appendChild(board);
}

export {createNav, createBoard};