import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetchUrl } from './useFetchUrl';

const useRating = () => {

    const [oneC, setOneC] = useState(false);
    const [twoC, setTwoC] = useState(false);
    const [threeC, setThreeC] = useState(false);
    const [fourC, setFourC] = useState(false);
    const [fiveC, setFiveC] = useState(false);

    const [oneE, setOneE] = useState(false);
    const [twoE, setTwoE] = useState(false);
    const [threeE, setThreeE] = useState(false);
    const [fourE, setFourE] = useState(false);
    const [fiveE, setFiveE] = useState(false);

    const [oneCo, setOneCo] = useState(false);
    const [twoCo, setTwoCo] = useState(false);
    const [threeCo, setThreeCo] = useState(false);
    const [fourCo, setFourCo] = useState(false);
    const [fiveCo, setFiveCo] = useState(false);

    const [clarity, setClarity] = useState(0);
    const [engagement, setEngagement] = useState(0);
    const [communication, setCommunication] = useState(0);

    //CLARITY
    const selectOneC = () => {
        setOneC(true)
        setTwoC(false)
        setThreeC(false)
        setFourC(false)
        setFiveC(false)
        setClarity(1)
    }
    const selectTwoC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(false)
        setFourC(false)
        setFiveC(false)
        setClarity(2)
    }
    const selectThreeC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
        setFourC(false)
        setFiveC(false)
        setClarity(3)
    }
    const selectFourC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
        setFourC(true)
        setFiveC(false)
        setClarity(4)
    }
    const selectFiveC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
        setFourC(true)
        setFiveC(true)
        setClarity(5)
    }

    //ENGAGEMENT
    const selectOneE = () => {
        setOneE(true)
        setTwoE(false)
        setThreeE(false)
        setFourE(false)
        setFiveE(false)
        setEngagement(1)
    }
    const selectTwoE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(false)
        setFourE(false)
        setFiveE(false)
        setEngagement(2)
    }
    const selectThreeE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
        setFourE(false)
        setFiveE(false)
        setEngagement(3)
    }
    const selectFourE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
        setFourE(true)
        setFiveE(false)
        setEngagement(4)
    }
    const selectFiveE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
        setFourE(true)
        setFiveE(true)
        setEngagement(5)
    }

    //COMMUNICATION
    const selectOneCo = () => {
        setOneCo(true)
        setTwoCo(false)
        setThreeCo(false)
        setFourCo(false)
        setFiveCo(false)
        setCommunication(1)
    }
    const selectTwoCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(false)
        setFourCo(false)
        setFiveCo(false)
        setCommunication(2)
    }
    const selectThreeCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
        setFourCo(false)
        setFiveCo(false)
        setCommunication(3)
    }
    const selectFourCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
        setFourCo(true)
        setFiveCo(false)
        setCommunication(4)
    }
    const selectFiveCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
        setFourCo(true)
        setFiveCo(true)
        setCommunication(5)
    }

   
const [course, setCourse] = useState('');
const [comment, setComment] = useState('');
const [anonymous, setAnonymous] = useState(false);
const [inactive, setInactive] = useState(true);

const navigate = useNavigate();

const token = JSON.parse(localStorage.getItem('user')).token;

const { data: courses } = useFetchUrl('courses');


useEffect(() => {

    if(course) {
        setInactive(false)
    }
}, [course, clarity, engagement, communication, comment, anonymous])


//REVIEW SUBMISSION
const handleSubmit = async () => {

    const { courseId } = courses && courses.filter(program => program.courseCode === course.split(' - ')[0] && program.staffName === course.split(' - ')[1])[0];

    const data = { clarity, engagement, communication, comment, courseId, anonymous }

    try {
        const res = await axios.post('https://lecture-rate-plus-api.vercel.app/api/reviews/', { ...data }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        if(res.status === 200) {
            navigate('/');
            setCourse('');
            setClarity(0);
            setEngagement(0);
            setCommunication(0);
            setComment('');
            setAnonymous(false);
        }
        
    } catch (error) {
        console.log(error)
    }


}


  return { oneC, oneCo, oneE, twoC, twoCo, twoE, threeC, threeCo, threeE, fourC, fourCo, fourE, fiveC, fiveCo, fiveE, selectFiveC, selectFiveCo, selectFiveE, selectFourC, selectFourCo, selectFourE, selectThreeC, selectThreeCo, selectThreeE, selectTwoC, selectTwoCo, selectTwoE, selectOneC, selectOneCo, selectOneE, clarity, engagement, communication, handleSubmit, course, setCourse, comment, setComment, anonymous, setAnonymous,  inactive, courses }
}

export default useRating