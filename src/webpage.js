// Homepage

function createNav() {
    const body = document.getElementById('container');
    const navMenu = document.createElement('nav');
    const pages = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const logo = document.createElement('img');

    navMenu.classList.add('nav-menu');
    pages.classList.add('page-links');
    logo.classList.add('nav-logo');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';
    logo.src = '/src/images/logo2.png'

    const links = document.querySelectorAll('li');
    links.forEach((link) => link.classList.add('page-link'));

    body.appendChild(navMenu);
    navMenu.appendChild(logo);
    navMenu.appendChild(pages);
    pages.appendChild(home);
    pages.appendChild(menu);
    pages.appendChild(contact);
}

function createBoard() {
    const body = document.getElementById('container');
    const board = document.createElement('div');

    board.classList.add('board');

    body.appendChild(board);
}

export {createNav, createBoard};