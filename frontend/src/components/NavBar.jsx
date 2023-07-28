import React from 'react'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
            <Link to='/'>
                <h2>LectureRate<span>+</span></h2>
            </Link>
        </div>
        <div className="menu">
            <div className="not-active">
                <Link to='/about'><a>About</a></Link>
                <Link to='/register' className='signup'><a>Sign Up</a></Link>
                <Link to='/login'><a>Login</a></Link>
            </div>
            <div className="active">
                <Link to='#'>Ratings</Link>
                <div className="profile">
                    <div className="name">
                        <p>John Doe</p>
                        <small>Student</small>
                    </div>
                    <ArrowDropDownIcon />
                    <div className="drop-down">
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