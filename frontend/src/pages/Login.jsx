import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email, password})
       
    }
  return (
    <main className='login'>
        <div className='content'>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" 
                    placeholder='name@study.beds.ac.uk'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    /> 
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  
                    placeholder='Enter Password' 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                    <a href="#">Forgotten Password?</a>
                </div>
            
                <button type="submit">Sign In</button>
            </form>
        </div>
    </main>
  )
}

export default Login