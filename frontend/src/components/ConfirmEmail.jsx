import React from 'react'
import { useIsOpenContext } from '../utilities/IsOpenContext'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmEmail = () => {
  const { openEmail, handleCloseEmail } = useIsOpenContext();
  const navigate = useNavigate();

  const email = JSON.parse(localStorage.getItem('userEmail'))

  const handleSubmit = async () => {

    try {
      const postData = async () => {
        const res =  await axios.post('https://lecture-rate-plus-api.vercel.app/api/auth/confirmation', { email })
  
        if(res.status === 200) {
          localStorage.removeItem('userEmail');
        }
      }
      email && postData();

    } catch (error) {
      console.log(error)
    }

    handleCloseEmail();
    navigate('/login')
  }

  const handleCancel = () => {
    handleCloseEmail();
    navigate('/register');
  }


  return (
    <main className='confirm-email' style={{display: openEmail ? 'flex' : 'none'}}>
      <div className="content">
        <h2>Email Verification</h2>
        <div className="confirm">
          <h3>LectureRate<span>+</span></h3>
          <h4>First, let's verify your email</h4>
          <p>Check <span>{email}</span><br />to verify your account and get started</p>
          <div className="btns">
            <div>
              <Link to='https://outlook.office.com/mail/inbox/' onClick={handleSubmit}>Open Email</Link>
            </div>
            <div>
              <Link onClick={handleCancel}>Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ConfirmEmail