import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts';
import { useNavigate, useParams } from 'react-router-dom';
import RateReviewIcon from '@mui/icons-material/RateReview';
import axios from 'axios';
import { useUserContext } from '../utilities/UserContext';
import { format } from 'timeago.js';



const StaffRatings = () => {

  const { user } = useUserContext();
  const { token } = user;

  const { id } = useParams();
  const navigate = useNavigate();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [staff, setStaff] = useState({staffName: 'John Doe'});


  //CLARITY RATINGS
  const [numOf1Clarity, setNumOf1Clarity] = useState(0)
  const [numOf2Clarity, setNumOf2Clarity] = useState(0)
  const [numOf3Clarity, setNumOf3Clarity] = useState(0)
  const [numOf4Clarity, setNumOf4Clarity] = useState(0)
  const [numOf5Clarity, setNumOf5Clarity] = useState(0)

  //ENGAGEMENT RATINGS
  const [numOf1Engage, setNumOf1Engage] = useState(0)
  const [numOf2Engage, setNumOf2Engage] = useState(0)
  const [numOf3Engage, setNumOf3Engage] = useState(0)
  const [numOf4Engage, setNumOf4Engage] = useState(0)
  const [numOf5Engage, setNumOf5Engage] = useState(0)

  //COMMUNICATION RATINGS
  const [numOf1Comm, setNumOf1Comm] = useState(0)
  const [numOf2Comm, setNumOf2Comm] = useState(0)
  const [numOf3Comm, setNumOf3Comm] = useState(0)
  const [numOf4Comm, setNumOf4Comm] = useState(0)
  const [numOf5Comm, setNumOf5Comm] = useState(0)


  //FETCH ALL THE REVIEWS OF THE STAFF MEMBER
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
                    setReviews(res.data);
                    setIsLoading(false);
                    setStaff(res.data[0]);
                }

            } catch (error) {
                console.log(error)
            }
        }
       getReviews();
    }, [])


//FETCH ALL THE REVIEW STATS FOR THE STAFF MEMBER
    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/reviews/find/staffs/stats/' + id, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if(res.status === 200) {
                    setIsLoading(false)

                      //CLARITY RATINGS
                    if(res.data.clarityRating[0][0]) setNumOf5Clarity(res.data.clarityRating[0][0].clarityCount);
                    if(res.data.clarityRating[0][1]) setNumOf4Clarity(res.data.clarityRating[0][1].clarityCount);
                    if(res.data.clarityRating[0][2]) setNumOf3Clarity(res.data.clarityRating[0][2].clarityCount);
                    if(res.data.clarityRating[0][3]) setNumOf2Clarity(res.data.clarityRating[0][3].clarityCount);
                    if(res.data.clarityRating[0][4]) setNumOf1Clarity(res.data.clarityRating[0][4].clarityCount);
                  
                      //ENGAGEMENT RATINGS
                    if(res.data.engagementRating[0][0]) setNumOf5Engage(res.data.engagementRating[0][0].engageCount);
                    if(res.data.engagementRating[0][1]) setNumOf4Engage(res.data.engagementRating[0][1].engageCount);
                    if(res.data.engagementRating[0][2]) setNumOf3Engage(res.data.engagementRating[0][2].engageCount);
                    if(res.data.engagementRating[0][3]) setNumOf2Engage(res.data.engagementRating[0][3].engageCount);
                    if(res.data.engagementRating[0][4]) setNumOf1Engage(res.data.engagementRating[0][4].engageCount);
                  
                      //COMMUNICATION RATINGS
                    if(res.data.communicationRating[0][0]) setNumOf5Comm(res.data.communicationRating[0][0].commCount);
                    if(res.data.communicationRating[0][1]) setNumOf4Comm(res.data.communicationRating[0][1].commCount);
                    if(res.data.communicationRating[0][2]) setNumOf3Comm(res.data.communicationRating[0][2].commCount);
                    if(res.data.communicationRating[0][3]) setNumOf2Comm(res.data.communicationRating[0][3].commCount);
                    if(res.data.communicationRating[0][4]) setNumOf1Comm(res.data.communicationRating[0][4].commCount);

                }


            } catch (error) {
                console.log(error)
            }
        }
       getStats();
    }, [])


    //CLARITY CHART DATA
    const clarityData = [
      ["Clarity", "Rating"],
      ["1 Stars", numOf1Clarity],
      ["2 Stars", numOf2Clarity],
      ["3 Stars", numOf3Clarity],
      ["4 Stars", numOf4Clarity],
      ["5 Stars", numOf5Clarity],
    ];

     //ENGAGEMENT CHART DATA
    const engagementData = [
      ["Engagement", "Rating"],
      ["1 Stars", numOf1Engage],
      ["2 Stars", numOf2Engage],
      ["3 Stars", numOf3Engage],
      ["4 Stars", numOf4Engage],
      ["5 Stars", numOf5Engage],
    ];

     //COMMUNICATION CHART DATA
    const commData = [
      ["Communication", "Rating"],
      ["1 Stars", numOf1Comm],
      ["2 Stars", numOf2Comm],
      ["3 Stars", numOf3Comm],
      ["4 Stars", numOf4Comm],
      ["5 Stars", numOf5Comm],
    ];

     //SET USER NAME INITIALS
  const nameInitials = () => {
        
    if(staff) {
      
      const prefix = staff.staffName.split(' ')[0];
      const fname = staff.staffName.split(' ')[1];
      const lname = staff.staffName.split(' ')[2];

        if(staff.staffName.split(' ').length === 3 && (staff.staffName.split(' ')[0] === 'Prof' || staff.staffName.split(' ')[0] === 'Dr' || staff.staffName.split(' ')[0] === 'Mr' || staff.staffName.split(' ')[0] === 'Mrs' || staff.staffName.split(' ')[0] === 'Miss')) {
            
            return fname.split('')[0] + lname.split('')[0];

        } else if(staff.staffName.split(' ').length === 2 && (staff.staffName.split(' ')[0] === 'Prof' || staff.staffName.split(' ')[0] === 'Dr' || staff.staffName.split(' ')[0] === 'Mr' || staff.staffName.split(' ')[0] === 'Mrs' || staff.staffName.split(' ')[0] === 'Miss')) {

            return fname.split('')[0] + fname.split('')[1];

        } else if(staff.staffName.split(' ').length === 2 && !(staff.staffName.split(' ')[0] === 'Prof' || staff.staffName.split(' ')[0] === 'Dr' || staff.staffName.split(' ')[0] === 'Mr' || staff.staffName.split(' ')[0] === 'Mrs' || staff.staffName.split(' ')[0] === 'Miss')) {

          return prefix.split('')[0] + fname.split('')[0];

      }
    }
}

  return (
    <div className='staff-ratings'>
        <div className="profile">
          <div className="image">
            <h1>{ nameInitials() }</h1>
          </div>
          <h2>{ staff && staff.staffName }</h2>
          <small>{ staff && staff.staffDept }</small>
          <div className="btn" onClick={() => navigate('/review')} style={{display: user && user.studentId ? 'flex' : 'none'}}>
            <RateReviewIcon style={{fontSize: 14}}/>
            <p>Add a Review</p>
          </div>
        </div>

        <p className='ratings-count'>Based on <span>{ reviews ? reviews.length : 0 }</span> ratings</p>
        <div className="rating-container">
          <div className="charts">
            <div className="clarity">
              <Chart
                  chartType="PieChart"
                  data={clarityData}
                  options={{ 
                    title: 'Clarity', 
                    is3D: true,
                    colors: ['#ffd2a1', '#feb26b', '#c35300', '#6c2600', '#4F1800',],
                    fontSize: 14
                     }}
                  width="100%"
                  height="100%"
              />
            </div>
            <div className="engagement">
              <Chart
                  chartType="PieChart"
                  data={engagementData}
                  options={
                    { title: 'Engagement', 
                    is3D: true ,
                    colors: ['#ffd2a1', '#feb26b', '#c35300', '#6c2600', '#4F1800',],
                    fontSize: 14
                    }}
                  width="100%"
                  height="100%"
              />
            </div>
            <div className="communication">
              <Chart
                  chartType="PieChart"
                  data={commData}
                  options={{ 
                    title: 'Communication', 
                    is3D: true ,
                    colors: ['#ffd2a1', '#feb26b', '#c35300', '#6c2600', '#4F1800'],
                    fontSize: 14
                    }}
                    width= "100%"
                    height= "100%"
               
              />
            </div>
          </div>

          <div className="all-reviews">
            <h3>Recent Reviews</h3>
            <div className="content">
              { reviews && reviews.slice(0,5).map(review => (
                <div className="review" key={review.reviewId} onClick={() => navigate(`/ratings/${review.reviewId}`)}>
                  { review.anonymous !== 0 ? <p className='author'><span>Anonymous</span> provided a review</p> : <p className='author'><span>{review.studentName}</span> provided a review</p>}
                  <p className='time'>{format(review.createdAt)}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>

       
    </div>
  )
}

export default StaffRatings;


 