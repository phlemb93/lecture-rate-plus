import useRating from '../utilities/useRating'

const Review = () => {

const { oneC, oneCo, oneE, twoC, twoCo, twoE, threeC, threeCo, threeE, fourC, fourCo, fourE, fiveC, fiveCo, fiveE, selectFiveC, selectFiveCo, selectFiveE, selectFourC, selectFourCo, selectFourE, selectThreeC, selectThreeCo, selectThreeE, selectTwoC, selectTwoCo, selectTwoE, selectOneC, selectOneCo, selectOneE, deSelectFiveC, deSelectFiveCo, deSelectFiveE, deSelectFourC, deSelectFourCo, deSelectFourE, deSelectThreeC, deSelectThreeCo, deSelectThreeE, deSelectTwoC, deSelectTwoCo, deSelectTwoE, deSelectOneC, deSelectOneCo, deSelectOneE, clarity, engagement, communication, handleClarityClick, handleEngageClick, handleCommClick, handleSubmit, setCourse, course, setComment, comment, setAnon, anon, inactive } = useRating();

console.log(inactive)
  return (
    <main className='review'>

    {/* REVIEW FORM */}
        <section className="form">
            <h2>Rate: <strong>John Doe</strong></h2>

            <div className="course">
                <h3>Select Course Code</h3>
                <select 
                    onChange={(e) => setCourse(e.target.value)}
                    value={course}
                >
                    <option hidden >Select Course Code</option>
                    <option value="CSC 111">CSC 111</option>
                    <option value="CSC 211">CSC 211</option>
                    <option value="CSC 121">CSC 121</option>
                    <option value="CSC 135">CSC 135</option>
                </select>
            </div>

            <div className="ratings">
                <div className='head'>
                    <h3>Clarity</h3>
                    <div className="rate">

                        <div 
                        className="one" 
                        onClick={handleClarityClick}
                        onMouseEnter={selectOneC} 
                        onMouseLeave={clarity ? selectOneC : deSelectOneC } 
                        style={{backgroundColor: oneC ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onClick={handleClarityClick}
                        onMouseEnter={selectTwoC} 
                        onMouseLeave={clarity ? selectTwoC : deSelectTwoC} 
                        style={{backgroundColor: twoC ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onClick={handleClarityClick}
                        onMouseEnter={selectThreeC} 
                        onMouseLeave={clarity ? selectThreeC : deSelectThreeC}  
                        style={{backgroundColor: threeC ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onClick={handleClarityClick}
                        onMouseEnter={selectFourC} 
                        onMouseLeave={clarity ? selectFourC : deSelectFourC}  
                        style={{backgroundColor: fourC ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
                        onClick={handleClarityClick}
                        onMouseEnter={selectFiveC} 
                        onMouseLeave={clarity ? selectFiveC : deSelectFiveC}  
                        style={{backgroundColor: fiveC ? 'rgba(8, 153, 0, 0.7)' : 'rgb(231, 229, 229)'}}
                        ></div>
                    </div>
                    <div className="text">
                        <p>1 - Awful</p>
                        <p>5 - Awesome</p>
                    </div>
                </div>
                <div className='head'>
                    <h3>Engagement</h3>
                    <div className="rate">
                        <div 
                        className="one" 
                        onClick={handleEngageClick}
                        onMouseEnter={selectOneE} 
                        onMouseLeave={deSelectOneE} 
                        style={{backgroundColor: oneE ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onClick={handleEngageClick}
                        onMouseEnter={selectTwoE} 
                        onMouseLeave={deSelectTwoE} 
                        style={{backgroundColor: twoE ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onClick={handleEngageClick}
                        onMouseEnter={selectThreeE} 
                        onMouseLeave={deSelectThreeE}  
                        style={{backgroundColor: threeE ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onClick={handleEngageClick}
                        onMouseEnter={selectFourE} 
                        onMouseLeave={deSelectFourE}  
                        style={{backgroundColor: fourE ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
                        onClick={handleEngageClick}
                        onMouseEnter={selectFiveE} 
                        onMouseLeave={deSelectFiveE}  
                        style={{backgroundColor: fiveE ? 'rgba(8, 153, 0, 0.7)' : 'rgb(231, 229, 229)'}}
                        ></div>
                    </div>
                    <div className="text">
                        <p>1 - Awful</p>
                        <p>5 - Awesome</p>
                    </div>
                </div>
                <div className='head'>
                    <h3>Communication</h3>
                    <div className="rate">
                        
                    <div 
                        className="one" 
                        onClick={handleCommClick}
                        onMouseEnter={selectOneCo} 
                        onMouseLeave={deSelectOneCo} 
                        style={{backgroundColor: oneCo ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onClick={handleCommClick}
                        onMouseEnter={selectTwoCo} 
                        onMouseLeave={deSelectTwoCo} 
                        style={{backgroundColor: twoCo ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onClick={handleCommClick}
                        onMouseEnter={selectThreeCo} 
                        onMouseLeave={deSelectThreeCo}  
                        style={{backgroundColor: threeCo ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onClick={handleCommClick}
                        onMouseEnter={selectFourCo} 
                        onMouseLeave={deSelectFourCo}  
                        style={{backgroundColor: fourCo ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
                        onClick={handleCommClick}
                        onMouseEnter={selectFiveCo} 
                        onMouseLeave={deSelectFiveCo}  
                        style={{backgroundColor: fiveCo ? 'rgba(8, 153, 0, 0.7)' : 'rgb(231, 229, 229)'}}
                        ></div>
                    </div>
                    <div className="text">
                        <p>1 - Awful</p>
                        <p>5 - Awesome</p>
                    </div>
                </div>
            </div>

        </section>

        {/* COMMENT */}
        <section className="comment">
            <h3>Write a Review</h3>
            <p>Discuss the professor's professional abilities including teaching style and ability to convey the material clearly</p>
            <textarea 
                placeholder='What do you want other students to know about this professor' 
                cols="30" 
                rows="10" 
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            /> 
        </section>

        {/* SUBMIT REVIEW */}
        <section className="submit">
            <div className="anon">
                <input 
                    type="checkbox" 
                    checked={anon}
                    onChange={(e) => setAnon(e.target.checked)}
                />
                <div>
                    <p>Send anonymously</p>
                    <small>This keeps your identity hidden from the lecturer</small>
                </div>
            </div>
           <button 
                onClick={handleSubmit}
                disabled={inactive}
                styles={{cursor: inactive ? 'not-allowed' : 'pointer', opacity: inactive ? 0.5 : 1, backgroundColor: inactive ? 'gray' : 'brown'}}
            >Submit Rating</button>
        </section>
    </main>
  )
}

export default Review