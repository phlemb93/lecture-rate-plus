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
                <h3>Provide a Feedback</h3>
                <p>LectureRate+ is a convenient and efficient platform for students to evaluate the performance of their lecturers after each class, ensuring timely feedback that can facilitate immediate improvements in teaching quality.</p>
          
                <Link to='/review'>
                    <div>Review</div>
                </Link>
            </div>
            <div className="left">
                <div className="image"></div>
            </div>
        </section>

        <section className='third'>
            <div className="right">
                <h3>Our Policy</h3>
                <p>This Privacy Policy outlines how we collect, use, disclose, and protect your personal data when you use our web app. Please read this policy carefully to understand our practices regarding your data and how we handle it.</p>
          
                <Link to='/policy'>
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