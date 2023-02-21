// Homepage

function insertLogo() {
    const board = document.querySelector('.board');
    const logoContainer = document.createElement('div');
    const principalLogo = document.createElement('img');

    principalLogo.src = '/src/images/logo.png';

    logoContainer.classList.add('logo-container');
    principalLogo.classList.add('princ-logo');

    logoContainer.appendChild(principalLogo);
    board.appendChild(logoContainer);
}

export {insertLogo};