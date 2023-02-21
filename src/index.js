import './style.css';

console.log('It\s working!')

// Homepage

const body = document.getElementById('container');

const navMenu = document.createElement('nav');
const board = document.createElement('div');
const pages = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');
const logo = document.createElement('img');

navMenu.classList.add('nav-menu');
board.classList.add('board');
pages.classList.add('page-links');
logo.classList.add('logo')

home.innerHTML = 'Home';
menu.innerHTML = 'Menu';
contact.innerHTML = 'Contact';
logo.src = '/src/images/logo2.png'

body.appendChild(navMenu);
body.appendChild(board);
navMenu.appendChild(logo);
navMenu.appendChild(pages);
pages.appendChild(home);
pages.appendChild(menu);
pages.appendChild(contact);

const links = document.querySelectorAll('li');
links.forEach((link) => link.classList.add('page-link'));
