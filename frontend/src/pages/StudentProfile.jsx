import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../utilities/UserContext';
import { useFetchUrl } from '../utilities/useFetchUrl';
import axios from 'axios';
import { format } from 'timeago.js';
import Loading from '../components/Loading';


const StudentProfile = () => {
  const { user } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const token = user && user.token
  const studentId = user && user.studentId;

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [student, setStudent] = useState({});

  const { data: courses } = useFetchUrl('courses');
  const [day, setDay] = useState('');
  let d; 

  const setNotification = () => {

    const today = new Date();
    d = today.getDay();
    const time = today.toLocaleTimeString();

    courses && courses.map(course => {

      if(course.days.includes(day) && course.notifyTime === time) {
        console.log(course)
        axios.post('http://localhost:8000/api/courses/notification', { course, studentId })
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }
    
    })
  }

  setInterval(setNotification, 1000)

useEffect(() => {

  switch(d){
    case 0: return setDay('Sunday');
    case 1: return setDay('Monday');
    case 2: return setDay('Tuesday');
    case 3: return setDay('Wednesday');
    case 4: return setDay('Thursday');
    case 5: return setDay('Friday');
    case 6: return setDay('Saturday');
    default: setDay('');
  }

}, [])




  //FETCH ALL THE REVIEWS OF THE STUDENT USER
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
    { isLoading ? <Loading /> : 
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
                    { review.anonymous !== 0 ? 
                    <p className='author'>You provided a feedback on <span className='lecturer'>{review.staffName}</span> as<span className='anon'> anonymous,</span> {format(review.createdAt)}.</p> 
                    : 
                    <p className='author'>You provided a feedback on <span className='lecturer'>{review.staffName}, </span>{format(review.createdAt)}.</p> }
                  </div>
          ))}
        </div>
      </section>
    </main> }
    </>
  )
}

export default StudentProfile