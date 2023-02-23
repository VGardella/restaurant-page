import { menuPage } from './menu';
import './style.css';

import { createNav, titleBar } from './webpage';
import { createBoard } from './webpage';
import { Hours, insertLogo, Location} from './home';

createNav();
createBoard();
insertLogo();
Hours();
Location();
