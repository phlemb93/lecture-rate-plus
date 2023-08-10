import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts';
import { useParams } from 'react-router-dom';
import RateReviewIcon from '@mui/icons-material/RateReview';
import axios from 'axios';


const token = JSON.parse(localStorage.getItem('user')).token;

export const data = [
    ["Clarity", "Rating"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  

const StaffProfile = () => {

  const { id } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({});

    useEffect(() => {
        const getReviews = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/reviews/find/staffs/' + id, {
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

    // useEffect(() => {
    //     const getStats = async () => {
    //         try {
    //             const res = await axios.get('http://localhost:8000/api/find/staffs/stats/' + id, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //             });

    //             if(res.status === 200) {
    //                 setStats(res.data)
    //                 setIsLoading(false)
    //             }

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //    getStats();
    // }, [])

    console.log(reviews)
    // console.log(stats)

  return (
    <div className='staff-profile'>
        <div className="profile">
          <div className="image">
            <h1>PW</h1>
          </div>
          <h2>Paul Winter</h2>
          <small>Mathematics</small>
          <div className="btn">
            <RateReviewIcon style={{fontSize: 14}}/>
            <p>Add a Review</p>
          </div>
        </div>

        <p className='ratings-count'>Based on 5 ratings</p>
        <div className="rating-container">
          <div className="clarity">
            <Chart
                chartType="PieChart"
                data={data}
                options={{title: 'Clarity'}}
                width={"250px"}
                height={"300px"}
                // style={{fontSize: 20, border: '1px solid red'}}
            />
          </div>
          <div className="engagement">
            <Chart
                chartType="PieChart"
                data={data}
                options={{title: 'Engagement'}}
                width={"250px"}
                height={"300px"}
            />
          </div>
          <div className="communication">
            <Chart
                chartType="PieChart"
                data={data}
                options={{title: 'Communication'}}
                width={"250px"}
                height={"300px"}
            />
          </div>
        </div>

       
    </div>
  )
}

export default StaffProfile