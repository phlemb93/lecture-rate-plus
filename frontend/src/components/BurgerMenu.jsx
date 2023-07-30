import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function BurgerMenu() {


  return (
        <main className="burger-menu" style={{ transform:'translateX(0%)'}}>
            <div className="close-btn">
                <CloseIcon style={{ fontSize: 32, cursor:'pointer'}}/>
            </div>
            <div className="content">
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
            
        </main>
  )
}

export default BurgerMenu