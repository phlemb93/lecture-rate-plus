import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Ratings = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const token = JSON.parse(localStorage.getItem('user')).token;

    useEffect(() => {
            
        const getReviews = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/reviews', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if(res.status === 200) {
                    setReviews(res.data)
                    setIsLoading(false)
                }

            } catch (error) {
                console.log(error)
            }
        }
       getReviews();
    }, [])

  return (
    <main className='ratings'>
        <header>
            <h1>Reviews</h1>
        </header>
        <section className='ratings-container'>
            { !isLoading ? (
                reviews.map(review => (
                    <div className='rating' key={review.reviewId}>
                        {/* <div className="left">

                        </div>
                        <div className="right">

                        </div> */}
                        <h2>{review.staffName}</h2>
                        <small>{review.staffDept}</small>
                        <p className="comment">{review.comment.slice(0, 50)}</p>
                        <div className="rate">
                            <p>clarity:<span>{review.clarity}</span></p>
                            <p>engagement:<span>{review.engagement}</span></p>
                            <p>communication:<span>{review.communication}</span></p>
                        </div>
                        <p className='author'>by <span>{review.studentName}</span></p>
                    </div>
                ))
            ) : <h3>Loading...</h3> }
        </section>

    </main>
  )
}

export default Ratings