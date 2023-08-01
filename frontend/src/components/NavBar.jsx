import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useIsOpenContext } from '../utilities/IsOpenContext';

const NavBar = () => {

    const { openBurgerMenu, isMenuOpen, toggleNavMenu, closeNavMenu } = useIsOpenContext();
    const iconRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {

        document.addEventListener('click', (e) => {

            const menuIcon = iconRef.current;
            const menuChildOne = menuIcon.children[0];
            const childOneOne = menuChildOne.children[0];
            const childOneTwo = menuChildOne.children[1];
            const menuChildTwo = menuIcon.children[1];
            const childTwoOne = menuChildTwo.firstChild;

            if(e.target === menuIcon || e.target === menuChildOne || e.target === childOneOne || e.target === childOneTwo || e.target === menuChildTwo || e.target === childTwoOne) {
                toggleNavMenu()
            }

            if(!(e.target === menuIcon || e.target === menuChildOne || e.target === childOneOne || e.target === childOneTwo || e.target === menuChildTwo || e.target === childTwoOne)) {
                closeNavMenu()
            } 
           
        })
    }, [])

  return (
    <nav>
        <div className="logo">
            <Link to='/'>
                <h2>LectureRate<span>+</span></h2>
            </Link>
        </div>
        <div className="menu">
            <div className="burger" onClick={openBurgerMenu}>
                <MenuIcon style={{ fontSize: 32 }} />
            </div>
            <div className="not-active">
                <Link to='/about'>About</Link>
                <Link to='/register' className='signup'>Sign Up</Link>
                <Link to='/login'>Login</Link>
            </div>
            <div className="active">
                <Link to='#'>Ratings</Link>
                <div className="profile">

                    <div className="drop-down-icon" ref={iconRef}>
                        <div className="name">
                            <p>John Doe</p>
                            <small>Student</small>
                        </div>
                        <ArrowDropDownIcon />
                    </div>
                   
                    <div className="drop-down-menu" style={{display: isMenuOpen ? 'flex' : 'none'}} ref={menuRef}>
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
    </nav>
  )
}

export default NavBar