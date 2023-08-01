import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useIsOpenContext } from '../utilities/IsOpenContext';


function BurgerMenu() {

    const { isBurgerOpen, closeBurgerMenu } = useIsOpenContext();


  return (
        <main className="burger-menu" style={{ transform: isBurgerOpen ? 'translateX(0%)' : 'translateX(-100%)'}}>
            <div className="close-btn" onClick={closeBurgerMenu} >
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