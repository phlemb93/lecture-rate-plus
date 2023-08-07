import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000)

        return clearTimeout();
    }, [])

  return (
    <div className='not-found'>
        <div className="img"></div>
    </div>
  )
}

export default NotFound