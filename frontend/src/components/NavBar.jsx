import React from 'react'
import { Link } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';
import { useIsOpenContext } from '../utilities/IsOpenContext';
import { useUserContext } from '../utilities/UserContext';

const NavBar = () => {

    const { user } = useUserContext();
    const { openBurgerMenu } = useIsOpenContext();

    let name = user && user.name.split(' ')[0];

  return (
    <nav>
        <div className="container"> 
            <div className="logo">
                <Link to='/'>
                    <h2>LectureRate<span>+</span></h2>
                </Link>
            </div>
            <div className="menu">
    
                <div className="burger" onClick={openBurgerMenu}>
                    <MenuIcon style={{ fontSize: 32, color: '#320900' }} />
                </div>
                <div className="not-active">
                    <Link to='/policy'>Policy</Link>
                    <Link to='/register' className='signup' style={{display: user ? 'none' : 'flex'}}>Sign Up</Link>
                    <Link to='/login' style={{display: user ? 'none' : 'flex'}}>Login</Link>
                </div>

        { user ?  
                <div className="active" >
                    <Link to='/review'>Feedback</Link>

                    <div className="profile">
                        <p>Hi, <span>{name}</span></p>
                    </div>
                    
                </div> : <div style={{display: 'none'}}></div> }
            </div>
        </div>
    </nav>
  )
}

export default NavBar