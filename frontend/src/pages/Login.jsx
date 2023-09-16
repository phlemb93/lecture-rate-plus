import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../utilities/UserContext';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [verifyError, setVerifyError] = useState(false);

    const { user, dispatch } = useUserContext();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
        setVerifyError(false);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
        setVerifyError(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const values = { email, password };

        if(!email || !password) {
            return setError('All fields must be filled')
        }
    
        try {
            const res = await axios.post('https://lecture-rate-plus-api.vercel.app/api/auth/login', values);


            if(res && res.status === 200) {

                //SETTING EMAIL TO LOCAL STORAGE
                dispatch({ type: 'login', payload: res.data})
                localStorage.setItem('user', JSON.stringify(res.data));


                //RETURNING ALL DATA BACK TO DEFAULT
                setEmail('');
                setPassword('');
                setError('');

                //NAVIGATE TO THE REVIEW PAGE
                navigate('/review');

            }
            
        } catch (error) {
            
            console.log(error)

            if (error && error.response.status === 404) {
                
                if(error && error.response.data === "Kindly verify your email") {
                    setVerifyError(true)
                    setError('Kindly verify your email')
                } else {
                    setError('Invalid credentials')
                }
            }

            if (error && error.response.status === 500) {
                setError('There is an error')
            }
        }
    }


  return (
    <main className='login'>
        <div className='content'>
            <h2>Log In</h2>
            <div className="error" style={{display: error ? 'flex' : 'none'}}>
                <p>{ error }</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" 
                    placeholder='name@study.beds.ac.uk'
                    onChange={handleEmailChange}
                    value={email}
                    /> 
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  
                    placeholder='Enter Password' 
                    onChange={handlePasswordChange}
                    value={password}
                    />
                    <a href="#">Forgotten Password?</a>
                </div>
            
                { verifyError ? 
                <button className='verify-error'><Link to='https://outlook.office.com/mail/inbox/'>Open Email</Link></button>
                : 
                <button type="submit">Sign In</button> }
            </form>
        </div>
    </main>
  )
}

export default Login