import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useUserContext } from '../utilities/UserContext';
import { useFetchUrl } from '../utilities/useFetchUrl';
import axios from 'axios';

const StudentProfile = () => {
  const { user } = useUserContext();
  const studentId = user && user.studentId;
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


  const { id } = useParams();

  return (
    <div>StudentProfile - {id}</div>
  )
}

export default StudentProfile