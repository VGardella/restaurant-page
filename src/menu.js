import Truffles from './images/rvc-truffles.jpg';
import Macarons from './images/Lemon-Raspberry-Macaron.jpg';
import ChocoBall from './images/choco-ball.jpg';
import LemonShooters from './images/lemon-shooters.jpg';
import SpongeCake from './images/Easy+Chocolate+Sponge+Cake.jpg'

// Menu

function menuPage() {
    const board = document.querySelector('.board');
    const menu = [
        {title: 'Red Velvet Cake Truffles', desc: 'Made with rich Red Velvet Cake and covered in chocolate, these truffles are the ultimate Valentine\'s Day treat.', img: Truffles},
        {title: 'Lemon Raspberry Macarons', desc: 'Sweet lemon raspberry macarons filled with a tart lemon filling and dried raspberry powder.', img: Macarons},
        {title: 'Chocolate Ball', desc: 'A decadent dessert, hot caramel sause melts the chocolate ball to reveal a brownie and fresh raspberries.', img: ChocoBall},
        {title: 'Lemon Meringue Pie Shooters', desc: 'A combination of homemade lemon curd, toasted italian meringue topping and crushed vanilla wafer cookies.' , img: LemonShooters},
        {title: 'Chocolate Sponge Cake with Hibiscus Cream Filling', desc: 'A dense, extra soft sponge cake filled with hibiscus tea infused cream cheese filling.', img: SpongeCake}
    ]

    for (let item in menu) {

        const dessert = document.createElement('div');
        const dessertImage = new Image();
        const dessertInfo = document.createElement('div');
        const dessertName = document.createElement('div');
        const dessertDesc = document.createElement('div');

        dessertImage.classList.add('dessert-img');
        dessertInfo.classList.add('dessert-info');
        dessert.classList.add('dessert');
        dessertName.classList.add('dessert-name');
        dessertDesc.classList.add('dessert-desc');

        dessertImage.src = menu[item]['img'];
        dessertName.innerHTML = menu[item]['title'];
        dessertDesc.innerHTML = menu[item]['desc'];

        board.appendChild(dessert);
        dessert.appendChild(dessertImage);
        dessert.appendChild(dessertInfo);
        dessertInfo.appendChild(dessertName);
        dessertInfo.appendChild(dessertDesc);
    }
}

export {menuPage};