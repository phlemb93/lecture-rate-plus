import React from 'react'

const ConfirmEmail = () => {
  return (
    <main className='confirm-email'>
      <div className="content">
        <h2>Email Verification</h2>
        <div className="confirm">
          <h3>LectureRate<span>+</span></h3>
          <h4>First, let's verify your email</h4>
          <p>Check <span>johndoe@study.beds.ac.uk</span> to verify your account and get started</p>
          <div className="btns">
            <button>Open Email</button>
            <button>Resend email</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ConfirmEmail