import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useIsOpenContext } from '../utilities/IsOpenContext';


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('Student');
    const [agreement, setAgreement] = useState(false);
    const [isStudent, setIsStudent] = useState(true);
    const [isStaff, setIsStaff] = useState(false);
    const [error, setError] = useState('');
    const [passError, setPassError] = useState(false);

    const { handleOpenEmail } = useIsOpenContext();
    const navigate = useNavigate();

  

    useEffect(() => {
        if(status === 'Student'){
            setIsStudent(true)
            setIsStaff(false)
        } else if(status === 'Staff'){
            setIsStaff(true)
            setIsStudent(false)
        }

    }, [status])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const values = { name, email, password, isStudent, isStaff }

        if(agreement) {

            if(password !== confirmPassword) {
                setPassError(true)
                setError('Confirm password must match password')
            } else {

                try {
                    const res = await axios.post('http://localhost:8000/api/auth/register', values)

                    if (res.status === 404) {
                        return setError('Invalid credentials')
                    }
                    if (res.status === 500) {
                        return setError('Internal error')
                    }

                    if(res.status === 200) {

                        //SETTING EMAIL TO LOCAL STORAGE
                        localStorage.setItem('userEmail', JSON.stringify(res.data));

                        //RETURNING ALL DATA BACK TO DEFAULT
                        setName('');
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                        setStatus('Student');
                        setAgreement(false);

                        //OPEN EMAIL CONFIRMATION PAGE
                        handleOpenEmail();
                    }
                    
                } catch (error) {
                    console.log(error)

                    if(!error.response) {

                        if(error.code === "ERR_NETWORK"){
                            setError('Network Error')
                        }
                    }

                    if (error.response && error.response.status === 404) {
                        
                        if(error && error.response.data === "Invalid email") {
                            // setVerifyError(true)
                            setError('Only the university email is accepted')
                        } else {
                            setError('Invalid credentials')
                        }
                    }
        
                    if (error.response && error.response.status === 500) {
                        setError('There is an Internal Error')
                    }
                }
            }
        } else {
            setError('Kindly tick the agreement box')
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
        setError('');
        setPassError(false);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
        setPassError(false);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
        setPassError(false);
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        setError('');
        setPassError(false);
    }
    const handleError = (e) => {
        setConfirmPassword(e.target.value);
        setPassError(false);
        setError('');
    }

  return (
    <main className='register'>
        <div className='content'>
            <div className="form">
                <h2>Sign Up</h2>
                  
                <div className="error" style={{display: error ? 'flex' : 'none'}}>
                        <p>{ error }</p>
                </div> 

                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" 
                        placeholder='Enter your full name'
                        onChange={ handleNameChange }
                        value={name}
                        /> 
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" 
                        placeholder='firstname.lastname@study.beds.ac.uk'
                        onChange={ handleEmailChange }
                        value={email}
                        /> 
                    </div>
                    <div className="status">
                        <label>I'm A</label>
                        <select 
                            onChange={ handleStatusChange }
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
                          onChange={ handlePasswordChange }
                          value={password}
                          />
                    </div>
                    <div className="confirm-password">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password"
                          placeholder='Re-enter Password' 
                          onChange={ handleError }
                          value={confirmPassword}
                          style={{border: passError ? '2px solid red' : '1px solid rgba(128, 128, 128, 0.576)'}}
                          />
                    </div>
                    <div className="terms">
                        <input type="checkbox" name="terms" 
                            onChange={(e) => setAgreement(e.target.checked)}
                            checked={agreement}
                        />
                        <p>By creating an account, I acknowledge that I have read, understood, and agree to the <span onClick={() => navigate('/policy')}>Policy.</span></p>
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
