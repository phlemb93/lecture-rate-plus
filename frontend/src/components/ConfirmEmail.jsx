import React from 'react'
import { useIsOpenContext } from '../utilities/IsOpenContext'
import { useNavigate } from 'react-router-dom';

const ConfirmEmail = () => {
  const { openEmail, handleCloseEmail } = useIsOpenContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
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
          <p>Check <span>johndoe@study.beds.ac.uk</span> to verify your account and get started</p>
          <div className="btns">
            <button onClick={handleSubmit}>Open Email</button>
            <button onClick={handleCancel}>Go Back</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ConfirmEmail