import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';
import Loading from '../components/Loading';

const Ratings = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                }

            } catch (error) {
                console.log(error)
            }
        }
        if(token) {
            getReviews();
        } else {
            navigate('/login');
        }
    }, [])


    
  return (
    <main className='ratings'>
        <header>
            <h2>Reviews</h2>
        </header>
        <section className='ratings-container'>
            { !isLoading ? (
                reviews.map(review => (
                    <div className='rating' key={review.reviewId} 
                        onClick={() => navigate(`/ratings/${review.reviewId}`)}
                    >
                        <h3>{review.staffName}</h3>
                        <small>{review.staffDept}</small>
                        <p className="comment">{`${review.comment.slice(0, 30)}...`}</p>
                        <div className="rate">
                            <p>clarity: <span>{review.clarity}/5</span></p>
                            <p>engagement: <span>{review.engagement}/5</span></p>
                            <p>communication: <span>{review.communication}/5</span></p>
                        </div>
                        <div className="foot-note">
                            <p className='time'>{format(review.createdAt)}</p>
                            { review.anonymous !== 0 ? <p className='author'>by Anonymous</p> : <p className='author'>by {review.studentName}</p>}
                        </div>
                    </div>
                ))
            ) : <Loading /> }
        </section>

    </main>
  )
}

export default Ratings