import { Link } from 'react-router-dom';
import useRating from '../utilities/useRating'
import WarningIcon from '@mui/icons-material/Warning';




const Review = () => {

const { oneC, oneCo, oneE, twoC, twoCo, twoE, threeC, threeCo, threeE, fourC, fourCo, fourE, fiveC, fiveCo, fiveE, selectFiveC, selectFiveCo, selectFiveE, selectFourC, selectFourCo, selectFourE, selectThreeC, selectThreeCo, selectThreeE, selectTwoC, selectTwoCo, selectTwoE, selectOneC, selectOneCo, selectOneE, handleSubmit, setCourse, course, setComment, comment, setAnonymous, anonymous, inactive, courses } = useRating();



return (
    <main className='review'>

        <div className="header">
            <h2>Give a Rating</h2>
        </div>

    {/* REVIEW FORM */}
        <section className="form">
            {/* { name ? <h2>Rate: <strong>{ name }</strong></h2> : null } */}

            <div className="course">
                <h3>Select Course Code</h3>
                <select 
                    onChange={(e) => setCourse(e.target.value)}
                    value={course}
                >
                    <option hidden>Select Course Code</option>
                    { courses && courses.map(program => (
                        <option value={`${program.courseCode} - ${program.staffName}`} key={program.courseId}>{`${program.courseCode} - ${program.staffName}`}</option>
                    ))}
                </select>
            </div> 

            <div className="ratings">
                <div className='head'>
                    <h3>Clarity</h3>
                    <div className="rate">

                        <div 
                        className="one" 
                        onClick={selectOneC}
                        style={{backgroundColor: oneC ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onClick={selectTwoC}
                        style={{backgroundColor: twoC ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onClick={selectThreeC} 
                        style={{backgroundColor: threeC ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onClick={selectFourC} 
                        style={{backgroundColor: fourC ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
                        onClick={selectFiveC}
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
                        onClick={selectOneE}
                        style={{backgroundColor: oneE ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onClick={selectTwoE}
                        style={{backgroundColor: twoE ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onClick={selectThreeE}
                        style={{backgroundColor: threeE ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onClick={selectFourE} 
                        style={{backgroundColor: fourE ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
                        onClick={selectFiveE} 
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
                        onClick={selectOneCo}
                        style={{backgroundColor: oneCo ? 'rgba(255, 94, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="two" 
                        onClick={selectTwoCo}
                        style={{backgroundColor: twoCo ? 'rgba(255, 128, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="three" 
                        onClick={selectThreeCo}
                        style={{backgroundColor: threeCo ? 'rgba(213, 181, 0, 0.6)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="four" 
                        onClick={selectFourCo} 
                        style={{backgroundColor: fourCo ? 'rgba(100, 223, 0, 0.5)' : 'rgb(231, 229, 229)'}}
                        ></div>

                        <div 
                        className="five" 
                        onClick={selectFiveCo} 
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
            <div className="caution">
                <div className="header">
                    <WarningIcon style={{color: 'rgb(190, 0, 0)'}}/>
                    <p>Notice</p>
                </div>
                <ul>
                    <li>Students are expected to conduct themselves in accordance with the principles set out in the University's Student Code of Conduct.</li>
                    <li>Your rating could be removed if you use profanity or derogatory terms.</li>
                </ul>
                <Link to='https://www.beds.ac.uk/student-experience/academic-information/student-code-of-conduct/#:~:text=As%20independent%20adults%20with%20legal,students%2C%20staff%20and%20their%20successors.' target='_blank'>View the University's Student Code of Conduct</Link>
            </div>
            <textarea 
                placeholder='What do you have to say about the just concluded lecture' 
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
                    checked={anonymous}
                    onChange={(e) => setAnonymous(e.target.checked)}
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