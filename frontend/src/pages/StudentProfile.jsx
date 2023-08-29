import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../utilities/UserContext';
import { useFetchUrl } from '../utilities/useFetchUrl';
import axios from 'axios';
import { format } from 'timeago.js';


const StudentProfile = () => {
  const { user } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const token = user && user.token

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [student, setStudent] = useState({});

  //FETCH ALL THE REVIEWS OF THE STAFF MEMBER
  useEffect(() => {

    setIsLoading(true)

    const getReviews = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/reviews/find/students/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if(res.status === 200) {
                setReviews(res.data);
                setIsLoading(false);
                setStudent(res.data[0]);
            }

        } catch (error) {
            console.log(error)
            setIsLoading(false);
        }
    }
   getReviews();
}, [])

let firstName = student.studentName && student.studentName.split(' ')[0];
let firstInitials = student.studentName && student.studentName.split(' ')[0].slice(0, 1);
let lastInitials = student.studentName && student.studentName.split(' ')[1].slice(0, 1);


  return (
    <>
    { isLoading ? <h3>Loading...</h3> : 
    <main className='student-profile'>
      <h3>Good day, { firstName }!</h3>
      
      <section className="details">
        <div className="pic">{`${firstInitials}${lastInitials}`}</div>
        <p>{ student.studentName }</p>
        <div className="hr"></div>
        <p className="email">{ student.studentEmail }</p>
        <div className="status">Student</div>
      </section>

      <section className="feedback">
        <h4>Rate your Lecturer</h4>
        <p>LectureRate+ makes it easy for students to leave reviews for theirs lecturers and lectures.</p>
        <button onClick={() => navigate('/review')}>Give a Rating</button>
      </section>

      <section className="ratings">
        <p className="header">Latest Ratings</p>
        <div className="data">
          { reviews && reviews.slice(0,5).map(review => (
                  <div className="review" key={review.reviewId} onClick={() => navigate(`/ratings/${review.reviewId}`)}>
                    { review.anonymous !== 0 ? <p className='author'><span>Anonymous</span> provided a review</p> : <p className='author'><span>{review.studentName}</span> provided a review</p>}
                    <p className='time'>{format(review.createdAt)}</p>
                  </div>
          ))}
        </div>
      </section>
    </main> }
    </>
  )
}

export default StudentProfile