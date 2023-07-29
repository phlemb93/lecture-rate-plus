import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='home'>
        <section className='first'>
            <div className="left">
                <h2>The Better Way to Motivate Your Lecturer</h2>
                <p>LectureRate+ makes it easy for students to leave reviews for their lecturers, and lecturers can in turn respond to reviews thereby encouraging motivation, networking and communication.</p>
                <div className="btns">
                    <Link to='/login'>
                        <div>Login</div>
                    </Link>
                    <Link to='/register'>
                        <div>Sign Up</div>
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="image"></div>
            </div>
        </section>

        <section className='second'>
            <div className="right">
                <h3>About Us</h3>
                <p>LectureRate+ makes it easy for students to leave reviews for their lecturers, and lecturers can in turn respond to reviews thereby encouraging motivation, networking and communication.</p>
          
                <Link to='/about'>
                    <div>Read More</div>
                </Link>
            </div>
            <div className="left">
                <div className="image"></div>
            </div>
        </section>
        <section className='third'>
            <div className="right">
                <h3>About Us</h3>
                <p>LectureRate+ makes it easy for students to leave reviews for their lecturers, and lecturers can in turn respond to reviews thereby encouraging motivation, networking and communication.</p>
          
                <Link to='/about'>
                    <div>Read More</div>
                </Link>
            </div>
            <div className="left">
                <div className="image"></div>
            </div>
        </section>
    </main>
  )
}

export default Home