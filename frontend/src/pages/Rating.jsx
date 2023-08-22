import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useUserContext } from '../utilities/UserContext';
import Chart from 'react-google-charts';



const Rating = () => {

    const { user } = useUserContext();
    const { token } = user;

    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // DATE AND TIME OF REVIEW
    const date =  new Date(review.createdAt);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString().slice(0, 5);

    const { id } = useParams();

    const chartData = [
        [
    "Element",
    "Metrics",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
        ["Clarity", 5, 'color: #4F1800', null],
        ["Engagement", 3, 'color: #c35300', null],
        ["Communication", 4, 'color: #ffd2a1', null]
      ];

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

    const name = () => {
        if(review.staffName) {
            const first = review.staffName.split(' ')[0];
            const second = review.staffName.split(' ')[1];

            return first + ' ' + second;

        } else {
            console.log('undefined')
        }
    }

  return (
    <> { !isLoading ? 
        <main className='rating'>
            <section className="container">

                <h2 className='header'>Rating for <Link to={`/staffs/${review.staffId}`}>{ name()}</Link></h2> 
                
                <textarea 
                    className="comment"
                    disabled={true}
                    value={review.comment}
                />

                <div className="rate">
                    <Chart 
                        chartType='BarChart'
                        data={chartData}
                        options={{
                            title: 'Metrics',
                        }}
                        width='500px'
                        height='300px'
                    />
                </div>


                <div className="foot-note">
                    <p>{`${time} . ${day}/${month}/${year}`}</p>
                    { review.anonymous !== 0 ? <p className='author'>Anonymous</p> : <p className='author'>{review.studentName}</p>}

                </div>

            </section>
        </main> : <h3>Loading...</h3>}
    </>
  )
}

export default Rating