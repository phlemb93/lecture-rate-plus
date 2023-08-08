import React from 'react'

const ScaleRating = ({ num }) => {
const widthCal = `${num/5 * 100}%`;


return (
    <div className="range" style={{ border: '1px solid gray', borderRadius: '30px', width: '400px'}}>
        <div 
        style={{
            width: widthCal, 
            height:'30px', 
            backgroundColor: num > 2.5 ? 'green' : 'red', 
            borderRadius: num < 5 ? '30px 0 0 30px' : '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>

            <small style={{
                margin:'0 auto', 
                color: '#FFF'
                }}>{num} stars</small>
        </div>
    </div>
  )
}

export default ScaleRating