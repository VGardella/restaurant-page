import './style.css';

console.log('It\s working!')

// Homepage

const body = document.getElementById('container');

const navMenu = document.createElement('nav');
const board = document.createElement('div');

navMenu.classList.add('nav-menu');
board.classList.add('board');

body.appendChild(navMenu);
body.appendChild(board);