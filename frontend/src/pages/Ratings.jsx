import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Ratings = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();
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
                    // console.log(res.data)
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
                    <div className='rating' key={review.reviewId} 
                        onClick={() => navigate(`/ratings/${review.reviewId}`)}
                    >
                        <h2>{review.staffName}</h2>
                        <small>{review.staffDept}</small>
                        <p className="comment">{review.comment.slice(0, 50)}</p>
                        <div className="rate">
                            <p>clarity: <span>{review.clarity}</span></p>
                            <p>engagement: <span>{review.engagement}</span></p>
                            <p>communication: <span>{review.communication}</span></p>
                        </div>
                        { review.anonymous === 0 ? <p className='author'>by Anonymous</p> : <p className='author'>by {review.studentName}</p>}
                    </div>
                ))
            ) : <h3>Loading...</h3> }
        </section>

    </main>
  )
}

export default Ratings