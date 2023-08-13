import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='not-found'>
        <div className="img"></div>
        <div className="go-back">
          <div className="icon" onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon />
            <p>Go Back</p>
          </div>
        </div>
    </div>
  )
}

export default NotFound