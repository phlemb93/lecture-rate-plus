import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import { useIsOpenContext } from '../utilities/IsOpenContext';


function BurgerMenu() {

    const { isBurgerOpen, closeBurgerMenu } = useIsOpenContext();


  return (
        <main 
            className="burger-menu" 
            style={{ transform: isBurgerOpen ? 'translateX(0%)' : 'translateX(-100%)'}}>

            <div className="close-btn" onClick={closeBurgerMenu}>
                <CloseIcon style={{ fontSize: 32, cursor:'pointer'}}/>
            </div>

            <div className="content">
                <div className="not-active">
                    <Link to='/about'>About</Link>
                    <Link to='/register' className='signup'>Sign Up</Link>
                    <Link to='/login'>Login</Link>
                </div>

                <div className="active">
                    <Link to='#'>Ratings</Link>
                    <div className="profile">

                        <div className="drop-down-icon">
                            <div className="name">
                                <p>John Doe</p>
                                <small>Student</small>
                            </div>
                            <ArrowDropDownIcon />
                        </div>
                    
                        <div className="drop-down-menu">
                            <Link to='#'>
                                <div>
                                    <p>Reset password</p>
                                    <LockResetIcon style={{fontSize:'18px'}} />
                                </div>
                            </Link>
                            <Link to='/login'>
                                <div>
                                    <p>Log out</p>
                                    <LogoutIcon style={{fontSize:'18px'}} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </main>
  )
}

export default BurgerMenu