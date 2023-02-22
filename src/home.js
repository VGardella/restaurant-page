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
    const line1 = document.createElement('div');
    const line2 = document.createElement('div');

    line1.innerHTML = 'Serving the sweetest experiences since 2010.'
    line2.innerHTML = 'Come explore a world full of flavors with us.';

    text.classList.add('subtext');

    board.appendChild(text);
    text.appendChild(line1);
    text.appendChild(line2);
}

export {insertLogo, insertText};
