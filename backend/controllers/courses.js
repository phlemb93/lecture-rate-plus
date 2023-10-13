import nodemailer from 'nodemailer';
import { db } from "../dbConnect.js";

export const getAllCourses = (req, res) => {

    const q = "SELECT courses.courseId, courses.courseCode, courses.startTime, courses.endTime, courses.notifyTime, courses.days, staffs.staffId, staffs.name as staffName FROM courses JOIN staffs ON courses.staffNum = staffs.staffId";

    db.query(q, (err, data) => {
        if(err){
            return res.status(500).json('Server Error')
        }
        if(data.length){
            res.status(200).json(data)
        }else {
            return res.status(404).json('User Error')
        }
    })
}


//SEND EMAIL NOTIFICATION AFTER EACH CLASS
export const sendNotification = (req, res) => {
    const { course, studentId } = req.body;
    
    const url = 'https://lecturerateplus.netlify.app/review'

    const q = "SELECT students.email as studentEmail FROM students WHERE studentId = ?";

    db.query(q, [studentId], (err, data) => {
        if(err){
            return res.status(500).json('Server Error')
        }
        if(data.length){

            console.log(data[0].studentEmail)

            const transporter = nodemailer.createTransport({
                service: 'hotmail',
                auth: {
                    user: process.env.DB_USER,
                    pass: process.env.DB_PASS
                }
            })
            
            const mailOptions = {
                from: `LectureRate+ <${process.env.DB_USER}>`,
                to: data[0].studentEmail,
                subject: `Feedback on ${course.courseCode} Lecture`,
                html: `<div>
                <p>Kindly provide a quick feedback on the just concluded ${course.courseCode} lecture. Click on the link below to proceed. </p>
                
                <a href=${url}>Provide a Feedback</a>
                `
            }
            
            transporter.sendMail(mailOptions, (err, info) => {
                if(err){
                  console.log(err)
                  console.log('There is an error here')
                } else{
                    console.log("Email sent")
                    res.status(200).json('Verification email sent');
                }
            })
        
        }else {
            return res.status(404).json('User Error')
        }
    })
}