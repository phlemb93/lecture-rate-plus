import React from 'react'

const Login = () => {
  return (
    <main className='login'>
        <div className='content'>
            <h2>Log In</h2>
            <form>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='name@study.beds.ac.uk'/> 
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  placeholder='Enter Password' />
                    <a href="#">Forgotten Password?</a>
                </div>
            
                <button type="submit">Sign In</button>
            </form>
        </div>
    </main>
  )
}

export default Login