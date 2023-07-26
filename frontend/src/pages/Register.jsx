import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <main className='register'>
        <div className='content'>
            <div className="title">
                <h3>Quality Education</h3>
                <ul>
                    <li>
                        <h5>Get Started Quickly</h5>
                        <p>LectureRate+ makes it easy for students to leave reviews for their lecturers</p>
                    </li>
                    <li>
                        <h5>Get Started Quickly</h5>
                        <p>LectureRate+ makes it easy for students to leave reviews for their lecturers</p>
                    </li>
                    <li>
                        <h5>Get Started Quickly</h5>
                        <p>LectureRate+ makes it easy for students to leave reviews for their lecturers</p>
                    </li>
                </ul>

            </div>
            <div className="form">
                <h2>Sign Up</h2>
                <form method='POST'>
                    <div className="name">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" placeholder='Enter your full name'/> 
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='name@study.beds.ac.uk'/> 
                    </div>
                    <div className="status">
                        <label>I'm A</label>
                        <select>
                            <option>Student</option> 
                            <option>Staff</option> 
                        </select>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"  placeholder='Enter Password' />
                    </div>
                    <div className="confirm-password">
                        <label htmlFor="confirm-password">Password</label>
                        <input type="password" name="confirm-password"  placeholder='Re-enter Password' />
                    </div>
                    <div className="terms">
                        <input type="checkbox" name="terms" />
                        <p>By creating an account, I acknowledge that I have read, understood, and agree to the <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
                    </div>
                
                    <button type="submit">Sign Up</button>

                    <Link to='/login'>Log In</Link>
                </form>
            </div>
            
        </div>
    </main>
  )
}

export default Register