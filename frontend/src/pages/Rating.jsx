import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Chart } from "react-google-charts";
import ScaleRating from '../components/ScaleRating';



const token = JSON.parse(localStorage.getItem('user')).token;



                    
const Rating = () => {

    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        const getReviews = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/reviews/' + id, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if(res.status === 200) {
                    setReview(res.data)
                    setIsLoading(false)
                }

            } catch (error) {
                console.log(error)
            }
        }
       getReviews();
    }, [])

  return (
    <main className='rating'>
        <section className="container">
                <h2>{review.staffName}</h2>
                <small>{review.staffDept}</small>
                <p className="comment">{review.comment}</p>
                <div className="rate">
                    <div className="clarity">
                        <p>clarity</p>
                        <ScaleRating num={review.clarity} />
                    </div>
                    <div className="engagement">
                        <p>engagement</p>
                        <ScaleRating num={review.engagement} />
                    </div>
                    <div className="communication">
                        <p>communication</p>
                        <ScaleRating num={review.communication} />
                    </div>
                </div>
                { review.anonymous === 0 ? <p className='author'>by Anonymous</p> : <p className='author'>by {review.studentName}</p>}
        </section>
    </main>
  )
}

export default Rating