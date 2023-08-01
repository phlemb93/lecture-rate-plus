import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('Student');
    const [agreement, setAgreement] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(agreement) {

            if(password !== confirmPassword) {
                console.log("Must be the same as the password")
            } else {
                console.log({name, email, password, confirmPassword, status})

                setName('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                setStatus('Student')
                setAgreement(false)
            }
        } 
    }

  return (
    <main className='register'>
        <div className='content'>
            
            <div className="form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" 
                        placeholder='Enter your full name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        /> 
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" 
                        placeholder='name@study.beds.ac.uk'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        /> 
                    </div>
                    <div className="status">
                        <label>I'm A</label>
                        <select 
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                        >
                            <option>Student</option> 
                            <option>Staff</option> 
                        </select>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"
                          placeholder='Enter Password' 
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          />
                    </div>
                    <div className="confirm-password">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password"
                          placeholder='Re-enter Password' 
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword}
                          />
                    </div>
                    <div className="terms">
                        <input type="checkbox" name="terms" 
                            onChange={(e) => setAgreement(e.target.checked)}
                            checked={agreement}
                        />
                        <p>By creating an account, I acknowledge that I have read, understood, and agree to the <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
                    </div>
                
                    <button type="submit" 
                    style={{cursor: agreement ? 'pointer' : 'not-allowed', opacity: agreement ? 1 : 0.4}}
                    >Sign Up</button>

                    <Link to='/login'>Log In</Link>
                </form>
            </div>
            
        </div>
    </main>
  )
}

export default Register
