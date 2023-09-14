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

    //CLARITY
    const selectOneC = () => {
        setOneC(true)
        setTwoC(false)
        setThreeC(false)
        setFourC(false)
        setFiveC(false)
        setClarity(1)
    }
    // const deSelectOneC = () => {
    //     setOneC(false)
    // }

    const selectTwoC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(false)
        setFourC(false)
        setFiveC(false)
        setClarity(2)
    }
    // const deSelectTwoC = () => {
    //     setOneC(false)
    //     setTwoC(false)
    // }

    const selectThreeC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
        setFourC(false)
        setFiveC(false)
        setClarity(3)
    }
    // const deSelectThreeC = () => {
    //     setOneC(false)
    //     setTwoC(false)
    //     setThreeC(false)
    // }

    const selectFourC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
        setFourC(true)
        setFiveC(false)
        setClarity(4)
    }
    // const deSelectFourC = () => {
    //     setOneC(false)
    //     setTwoC(false)
    //     setThreeC(false)
    //     setFourC(false)
    // }

    const selectFiveC = () => {
        setOneC(true)
        setTwoC(true)
        setThreeC(true)
        setFourC(true)
        setFiveC(true)
        setClarity(5)
    }
    // const deSelectFiveC = () => {
    //     setOneC(false)
    //     setTwoC(false)
    //     setThreeC(false)
    //     setFourC(false)
    //     setFiveC(false)
    // }



    //ENGAGEMENT
    const selectOneE = () => {
        setOneE(true)
        setTwoE(false)
        setThreeE(false)
        setFourE(false)
        setFiveE(false)
        setEngagement(1)
    }
    // const deSelectOneE = () => {
    //     setOneE(false)
    // }

    const selectTwoE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(false)
        setFourE(false)
        setFiveE(false)
        setEngagement(2)
    }
    // const deSelectTwoE = () => {
    //     setOneE(false)
    //     setTwoE(false)
    // }

    const selectThreeE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
        setFourE(false)
        setFiveE(false)
        setEngagement(3)
    }
    // const deSelectThreeE = () => {
    //     setOneE(false)
    //     setTwoE(false)
    //     setThreeE(false)
    // }

    const selectFourE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
        setFourE(true)
        setFiveE(false)
        setEngagement(4)
    }
    // const deSelectFourE = () => {
    //     setOneE(false)
    //     setTwoE(false)
    //     setThreeE(false)
    //     setFourE(false)
    // }

    const selectFiveE = () => {
        setOneE(true)
        setTwoE(true)
        setThreeE(true)
        setFourE(true)
        setFiveE(true)
        setEngagement(5)
    }
    // const deSelectFiveE = () => {
    //     setOneE(false)
    //     setTwoE(false)
    //     setThreeE(false)
    //     setFourE(false)
    //     setFiveE(false)
    // }


    //COMMUNICATION
    const selectOneCo = () => {
        setOneCo(true)
        setTwoCo(false)
        setThreeCo(false)
        setFourCo(false)
        setFiveCo(false)
        setCommunication(1)
    }
    // const deSelectOneCo = () => {
    //     setOneCo(false)
    // }

    const selectTwoCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(false)
        setFourCo(false)
        setFiveCo(false)
        setCommunication(2)
    }
    // const deSelectTwoCo = () => {
    //     setOneCo(false)
    //     setTwoCo(false)
    // }

    const selectThreeCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
        setFourCo(false)
        setFiveCo(false)
        setCommunication(3)
    }
    // const deSelectThreeCo = () => {
    //     setOneCo(false)
    //     setTwoCo(false)
    //     setThreeCo(false)
    // }
    
    const selectFourCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
        setFourCo(true)
        setFiveCo(false)
        setCommunication(4)
    }
    // const deSelectFourCo = () => {
    //     setOneCo(false)
    //     setTwoCo(false)
    //     setThreeCo(false)
    //     setFourCo(false)
    // }
    
    const selectFiveCo = () => {
        setOneCo(true)
        setTwoCo(true)
        setThreeCo(true)
        setFourCo(true)
        setFiveCo(true)
        setCommunication(5)
    }
    // const deSelectFiveCo = () => {
    //     setOneCo(false)
    //     setTwoCo(false)
    //     setThreeCo(false)
    //     setFourCo(false)
    //     setFiveCo(false)
    // }

   


const [clarity, setClarity] = useState(0);
const [engagement, setEngagement] = useState(0);
const [communication, setCommunication] = useState(0);

const handleClarityClick = (e) => {
    switch(e.target.className) {
        case 'one': 
             setClarity(1);
             setOneC(prev => !prev);
             setTwoC(false);
             setThreeC(false);
             setFourC(false);
             setFiveC(false);
             break;
        case 'two': 
             setClarity(2);
             setOneC(prev => !prev);
             setTwoC(prev => !prev);
             setThreeC(false);
             setFourC(false);
             setFiveC(false);

             break;
        case 'three': 
             setClarity(3);

             if(twoC === false) {
                setOneC(prev => !prev);
                setTwoC(prev => !prev);
                setThreeC(prev => !prev);
                setFourC(false);
                setFiveC(false);
             } else {
                setOneC(true);
                setTwoC(true);
                setThreeC(true);
                setFourC(false);
                setFiveC(false);
             }

             if(threeC === false) {
                setOneC(prev => !prev);
                setTwoC(prev => !prev);
                setThreeC(prev => !prev);
                setFourC(false);
                setFiveC(false);
             } else {
                setOneC(false);
                setTwoC(false);
                setThreeC(false);
                setFourC(false);
                setFiveC(false);
             }
             break;
        case 'four': 
             setClarity(4);
             setOneC(prev => !prev);
             setTwoC(prev => !prev);
             setThreeC(prev => !prev);
             setFourC(prev => !prev);
             setFiveC(false);
             break;
        case 'five': 
             setClarity(5);
             setOneC(prev => !prev);
             setTwoC(prev => !prev);
             setThreeC(prev => !prev);
             setFourC(prev => !prev);
             setFiveC(prev => !prev);
             break;
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

    console.log(data)

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


  return { oneC, oneCo, oneE, twoC, twoCo, twoE, threeC, threeCo, threeE, fourC, fourCo, fourE, fiveC, fiveCo, fiveE, selectFiveC, selectFiveCo, selectFiveE, selectFourC, selectFourCo, selectFourE, selectThreeC, selectThreeCo, selectThreeE, selectTwoC, selectTwoCo, selectTwoE, selectOneC, selectOneCo, selectOneE, clarity, engagement, communication, handleClarityClick, handleEngageClick, handleCommClick, handleSubmit, course, setCourse, comment, setComment, anonymous, setAnonymous,  inactive, courses }
}

export default useRating


// deSelectFiveC, deSelectFiveCo, deSelectFiveE, deSelectFourC, deSelectFourCo, deSelectFourE, deSelectThreeC, deSelectThreeCo, deSelectThreeE, deSelectTwoC, deSelectTwoCo, deSelectTwoE, deSelectOneC, deSelectOneCo, deSelectOneE,