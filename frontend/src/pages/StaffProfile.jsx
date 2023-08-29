import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useUserContext } from '../utilities/UserContext';
import { useFetchUrl } from '../utilities/useFetchUrl';
import { format } from 'timeago.js';
import Loading from '../components/Loading';

const StaffProfile = () => {

    const { user } = useUserContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const token = user && user.token
  
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [staffs, setStaff] = useState({});

    const { data:reviewList, loading } = useFetchUrl(`reviews/find/staffs/${id}`)
    const staff = reviewList && reviewList[0];

    const nameInitials = () => {
        
        if(staff !== null) {

            const fname = staff.staffName.split(' ')[1];
            const lname = staff.staffName.split(' ')[2];

            if(staff.staffName.split(' ').length === 3 && (staff.staffName.split(' ')[0] === 'Prof' || staff.staffName.split(' ')[0] === 'Dr' || staff.staffName.split(' ')[0] === 'Mr' || staff.staffName.split(' ')[0] === 'Mrs' || staff.staffName.split(' ')[0] === 'Miss')) {
                
                return fname.split('')[0] + lname.split('')[0];

            } else if(staff.staffName.split(' ').length === 2 && (staff.staffName.split(' ')[0] === 'Prof' || staff.staffName.split(' ')[0] === 'Dr' || staff.staffName.split(' ')[0] === 'Mr' || staff.staffName.split(' ')[0] === 'Mrs' || staff.staffName.split(' ')[0] === 'Miss')) {

                return fname.split('')[0] + fname.split('')[1];

            }
        }
    }

  return (
    <>
        { loading ? <Loading /> : 
            <main className="staff-profile">

                <h3>Good day, { staff && staff.staffName.split(' ')[1] }!</h3>

                <section className="profile">
                    <div className="image">
                     { nameInitials() }
                    </div>
                    <p>{ staff && staff.staffName }</p>
                    <div className="hr"></div>
                    <p className="email">{  staff && staff.staffEmail }</p>
                    <div className="status">Staff</div>
                </section>

                <section className="ratings">
                    <p className="header">Latest Ratings</p>
                    <div className="data">
                    { reviewList && reviewList.slice(0,5).map(review => (
                            <div className="review" key={review.reviewId} onClick={() => navigate(`/ratings/${review.reviewId}`)}>
                                { review.anonymous !== 0 ? <p className='author'><span>Anonymous</span> provided a feedback, {format(review.createdAt)}.</p> : <p className='author'><span>{review.studentName}</span> provided a feedback, {format(review.createdAt)}.</p>}
                            </div>
                    ))}
                    </div>
                </section>

            </main>
        }
    </>
  )
}

export default StaffProfile