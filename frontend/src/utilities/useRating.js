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

    const selectOneC = () => {
        setOneC(true)
    }
    const deSelectOneC = () => {
        setOneC(false)
    }
    const selectOneE = () => {
        setOneE(true)
    }
    const deSelectOneE = () => {
        setOneE(false)
    }
    const selectOneCo = () => {
        setOneCo(true)
    }
    const deSelectOneCo = () => {
        setOneCo(false)
    }


    const selectTwoC = () => {
        setOneC(true)
        setTwoC(true)
    }
    const deSelectTwoC = () => {
        setOneC(false)
        setTwoC(false)
    }
    const selectTwoE = () => {
        setOneE(true)
        setTwoE(true)
    }
    const deSelectTwoE = () => {
        setOneE(false)
        setTwoE(false)
    }
    const selectTwoCo = () => {
        setOneCo(true)
        setTwoCo(true)
    }
    const deSelectTwoCo = () => {
        setOneCo(false)
        setTwoCo(false)
    }


    const selectThreeC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
    }
    const deSelectThreeC = () => {
        setOneC(false)
        setTwoC(false)
        setThreeC(false)
    }
    const selectThreeE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
    }
    const deSelectThreeE = () => {
        setOneE(false)
        setTwoE(false)
        setThreeE(false)
    }
    const selectThreeCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
    }
    const deSelectThreeCo = () => {
        setOneCo(false)
        setTwoCo(false)
        setThreeCo(false)
    }


    const selectFourC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
        setFourC(true)
    }
    const deSelectFourC = () => {
        setOneC(false)
        setTwoC(false)
        setThreeC(false)
        setFourC(false)
    }
    const selectFourE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
        setFourE(true)
    }
    const deSelectFourE = () => {
        setOneE(false)
        setTwoE(false)
        setThreeE(false)
        setFourE(false)
    }
    const selectFourCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
        setFourCo(true)
    }
    const deSelectFourCo = () => {
        setOneCo(false)
        setTwoCo(false)
        setThreeCo(false)
        setFourCo(false)
    }


    const selectFiveC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
        setFourC(true)
        setFiveC(true)
    }
    const deSelectFiveC = () => {
        setOneC(false)
        setTwoC(false)
        setThreeC(false)
        setFourC(false)
        setFiveC(false)
    }
    const selectFiveE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
        setFourE(true)
        setFiveE(true)
    }
    const deSelectFiveE = () => {
        setOneE(false)
        setTwoE(false)
        setThreeE(false)
        setFourE(false)
        setFiveE(false)
    }
    const selectFiveCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
        setFourCo(true)
        setFiveCo(true)
    }
    const deSelectFiveCo = () => {
        setOneCo(false)
        setTwoCo(false)
        setThreeCo(false)
        setFourCo(false)
        setFiveCo(false)
    }


const [clarity, setClarity] = useState(0);
const [engagement, setEngagement] = useState(0);
const [communication, setCommunication] = useState(0);

const handleClarityClick = (e) => {
    switch(e.target.className) {
        case 'one': 
            return setClarity(1);
        case 'two': 
            return setClarity(2);
        case 'three': 
            return setClarity(3);
        case 'four': 
            return setClarity(4);
        case 'five': 
            return setClarity(5);
        default:
            return setClarity(0);
    }
}
const handleEngageClick = (e) => {
    switch(e.target.className) {
        case 'one': 
            return setEngagement(1);
        case 'two': 
            return setEngagement(2);
        case 'three': 
            return setEngagement(3);
        case 'four': 
            return setEngagement(4);
        case 'five': 
            return setEngagement(5);
        default:
            return setEngagement(0);
    }
}
const handleCommClick = (e) => {
    switch(e.target.className) {
        case 'one': 
            return setCommunication(1);
        case 'two': 
            return setCommunication(2)
        case 'three': 
            return setCommunication(3);
        case 'four': 
            return setCommunication(4);
        case 'five': 
            return setCommunication(5);
        default:
            return setCommunication(0);
    }
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
        const res = await axios.post('http://localhost:8000/api/reviews/', { ...data }, {
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




  return { oneC, oneCo, oneE, twoC, twoCo, twoE, threeC, threeCo, threeE, fourC, fourCo, fourE, fiveC, fiveCo, fiveE, selectFiveC, selectFiveCo, selectFiveE, selectFourC, selectFourCo, selectFourE, selectThreeC, selectThreeCo, selectThreeE, selectTwoC, selectTwoCo, selectTwoE, selectOneC, selectOneCo, selectOneE, deSelectFiveC, deSelectFiveCo, deSelectFiveE, deSelectFourC, deSelectFourCo, deSelectFourE, deSelectThreeC, deSelectThreeCo, deSelectThreeE, deSelectTwoC, deSelectTwoCo, deSelectTwoE, deSelectOneC, deSelectOneCo, deSelectOneE, clarity, engagement, communication, handleClarityClick, handleEngageClick, handleCommClick, handleSubmit, course, setCourse, comment, setComment, anonymous, setAnonymous,  inactive, courses }
}

export default useRating