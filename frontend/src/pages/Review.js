import React, { useState } from 'react'
import useRating from '../utilities/useRating'

const Review = () => {
const { oneC, oneCo, oneE, twoC, twoCo, twoE, threeC, threeCo, threeE, fourC, fourCo, fourE, fiveC, fiveCo, fiveE, selectFiveC, selectFiveCo, selectFiveE, selectFourC, selectFourCo, selectFourE, selectThreeC, selectThreeCo, selectThreeE, selectTwoC, selectTwoCo, selectTwoE, selectOneC, selectOneCo, selectOneE, deSelectFiveC, deSelectFiveCo, deSelectFiveE, deSelectFourC, deSelectFourCo, deSelectFourE, deSelectThreeC, deSelectThreeCo, deSelectThreeE, deSelectTwoC, deSelectTwoCo, deSelectTwoE, deSelectOneC, deSelectOneCo, deSelectOneE } = useRating();
  return (
    <main className='review'>

    {/* REVIEW FORM */}
        <section className="form">
            <div className="course">
                <h3>Select Course Code</h3>
                <select name="" id="" >
                    <option value="" hidden disabled selected >Select Course Code</option>
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

                        <div className="one" 
                        onMouseEnter={selectOneC} 
                        onMouseLeave={deSelectOneC} 
                        style={{backgroundColor: oneC ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onMouseEnter={selectTwoC} 
                        onMouseLeave={deSelectTwoC} 
                        style={{backgroundColor: twoC ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onMouseEnter={selectThreeC} 
                        onMouseLeave={deSelectThreeC}  
                        style={{backgroundColor: threeC ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onMouseEnter={selectFourC} 
                        onMouseLeave={deSelectFourC}  
                        style={{backgroundColor: fourC ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
                        onMouseEnter={selectFiveC} 
                        onMouseLeave={deSelectFiveC}  
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
                        <div className="one" 
                        onMouseEnter={selectOneE} 
                        onMouseLeave={deSelectOneE} 
                        style={{backgroundColor: oneE ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onMouseEnter={selectTwoE} 
                        onMouseLeave={deSelectTwoE} 
                        style={{backgroundColor: twoE ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onMouseEnter={selectThreeE} 
                        onMouseLeave={deSelectThreeE}  
                        style={{backgroundColor: threeE ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onMouseEnter={selectFourE} 
                        onMouseLeave={deSelectFourE}  
                        style={{backgroundColor: fourE ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
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
                        
                    <div className="one" 
                        onMouseEnter={selectOneCo} 
                        onMouseLeave={deSelectOneCo} 
                        style={{backgroundColor: oneCo ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onMouseEnter={selectTwoCo} 
                        onMouseLeave={deSelectTwoCo} 
                        style={{backgroundColor: twoCo ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onMouseEnter={selectThreeCo} 
                        onMouseLeave={deSelectThreeCo}  
                        style={{backgroundColor: threeCo ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onMouseEnter={selectFourCo} 
                        onMouseLeave={deSelectFourCo}  
                        style={{backgroundColor: fourCo ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
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
            <textarea placeholder='What do you want other students to know about this professor' cols="30" rows="10"></textarea>
            
        </section>

        {/* SUBMIT REVIEW */}
        <section className="submit">
            <div className="anon">
                <input type="checkbox" />
                <div>
                    <p>Send anonymously</p>
                    <small>This keeps your identity hidden from the lecturer</small>
                </div>
            </div>
            <button>Submit Rating</button>
        </section>
    </main>
  )
}

export default Review