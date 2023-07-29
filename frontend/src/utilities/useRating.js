import { useState } from 'react'

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

  return { oneC, oneCo, oneE, twoC, twoCo, twoE, threeC, threeCo, threeE, fourC, fourCo, fourE, fiveC, fiveCo, fiveE, selectFiveC, selectFiveCo, selectFiveE, selectFourC, selectFourCo, selectFourE, selectThreeC, selectThreeCo, selectThreeE, selectTwoC, selectTwoCo, selectTwoE, selectOneC, selectOneCo, selectOneE, deSelectFiveC, deSelectFiveCo, deSelectFiveE, deSelectFourC, deSelectFourCo, deSelectFourE, deSelectThreeC, deSelectThreeCo, deSelectThreeE, deSelectTwoC, deSelectTwoCo, deSelectTwoE, deSelectOneC, deSelectOneCo, deSelectOneE }
}

export default useRating