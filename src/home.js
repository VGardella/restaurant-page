import Logo from './images/logo.png'

// Homepage

function insertLogo() {
    const board = document.querySelector('.board');
    const logoContainer = document.createElement('div');
    const principalLogo = new Image();

    principalLogo.src = Logo;

    logoContainer.classList.add('logo-container');
    principalLogo.classList.add('princ-logo');

    logoContainer.appendChild(principalLogo);
    board.appendChild(logoContainer);
}

function insertText() {
    const board = document.querySelector('.board');
    const text = document.createElement('div');

    text.innerHTML = 'Every flavor has a story';

    text.classList.add('subtext');

    board.appendChild(text);
}

export {insertLogo, insertText};
