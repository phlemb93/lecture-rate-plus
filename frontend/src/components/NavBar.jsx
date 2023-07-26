import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
            <Link to='/'>
                <h2>LectureRate<span>+</span></h2>
            </Link>
        </div>
        <div className="menu">
            <Link to='/about'><a>About</a></Link>
            <Link to='/login'><a>Login</a></Link>
            <Link to='/register' className='signup'><a>Sign Up</a></Link>
        </div>
    </nav>
  )
}

export default NavBar