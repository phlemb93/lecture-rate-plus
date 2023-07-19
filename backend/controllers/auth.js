import validator from 'validator';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../dbConnect.js';


//CREATE A TRANSPORTER FOR EMAIL VERIFICATION

// const verifyUser = (email) => {
//     const transporter = nodemailer.createTransport({
//         service: 'hotmail',
//         auth: {
//             user: 'flemb6362@outlook.com',
//             pass: 'Badrudeen'
//         }
//     })
    
//     const mailOptions = {
//         from: '"LectureRate+" <flemb6362@outlook.com>',
//         to: email,
//         subject: 'Verify Your Email Address!',
//         html: '<p>Hello, kindly verify your <a>email address</a></p>'
//     }
    
//     transporter.sendMail(mailOptions, (err, info) => {
//         if(err){
//            return console.log(err)
//         } else{
//             return console.log("Email sent!")
//         }
//     })

// }





//REGISTER 
export const register = (req, res) => {
    const { name, email, password, isStudent, isStaff, department, image } = req.body;

    if(validator.isEmail(email)) {

        if(email.toLowerCase().includes('@study.beds.ac.uk')) {

            const q = 'SELECT * FROM students WHERE email = ?';

            db.query(q, [email], (err, data) => {

                if(err) {
                    res.status(500).json('Server error')
                    console.log(err)
                }

                if(data.length) {
                    res.status(404).json('User already exist')    
                } else {
                    const q = 'SELECT * FROM staffs WHERE email = ?';

                    db.query(q, [email], (err, data) => {
                        
                        if(err) {
                            res.status(500).json('Server error')
                            console.log(err)
                        }
    
                        if(data.length) {
                            res.status(404).json('User already exist')    
                        } else {

                            if(!validator.isStrongPassword(password)) {
                                res.status(404).json('Enter a strong password')
                            } else {
                                const salt = bcrypt.genSaltSync(10);
                                const hashedPassword = bcrypt.hashSync(password, salt);

                                if(isStudent) {

                                    const q = 'INSERT INTO students (`name`,`email`, `password`, `image`, `verified`, `createdAt`) VALUE (?)';

                                    const createdAt = new Date();
                                    const values = [name, email, hashedPassword, image, 0, createdAt];

                                    db.query(q, [values], (err, data) => {
                                        if(err) {
                                            res.status(500).json('Server error')
                                            console.log(err)
                                        } else {                                        
                                            
                                            //VERIFY USER EMAIL
                                            const transporter = nodemailer.createTransport({
                                                service: 'hotmail',
                                                auth: {
                                                    user: 'flemb6362@outlook.com',
                                                    pass: 'Badrudeen'
                                                }
                                            })

                                            const emailToken = jwt.sign({email}, process.env.JWT_SECRET);

                                            const url = `http://localhost:8000/auth/confirmation/${emailToken}`
                                            
                                            const mailOptions = {
                                                from: '"LectureRate+" <flemb6362@outlook.com>',
                                                to: email,
                                                subject: 'Verify Your Email Address!',
                                                html: `<div>
                                                <p>Kindly click on the button below to verify your email address.</p>
                                                
                                                <a href=${url}>Confirm Email</a>
                                                `
                                            }
                                            
                                            transporter.sendMail(mailOptions, (err, info) => {
                                                if(err){
                                                   return console.log(err)
                                                } else{
                                                    console.log("Email sent")
                                                    res.status(200).json('Verification email sent');
                                                }
                                            })
                                        }
                                    })
                                }

                                if(isStaff) {

                                    const q = 'INSERT INTO staffs (`name`,`email`, `password`, `department`, `image`) VALUE (?)';
                                    const values = [name, email, hashedPassword, department, image];

                                    db.query(q, [values], (err, data) => {
                                        if(err) {
                                            res.status(500).json('Server error')
                                            console.log(err)
                                        } else {
                                            res.status(200).json('Staff user created')
                                        }
                                    })
                                }
                            }
                        }
                    })
                }
            })           
        } else {
            res.status(404).json('Invalid email')
        }
    } else {
        res.status(404).json('Invalid email')
    }
}


//VERIFY EMAIL ADDRESS
export const verifyEmail = (req, res) => {

    const { emailToken } = req.params;

    if(emailToken){
        const emailId = jwt.verify(emailToken, process.env.JWT_SECRET).email;

        const q = "SELECT * FROM students WHERE email = ?";

        db.query(q, [emailId], (err, data) => {
            if(err){
                res.status(500).json('Server Error')
                console.log(err)
            } 
            if(data.length) {

                const q = "UPDATE students SET verified = ? WHERE email = ?"

                db.query(q, [1, emailId], (err, data) => {
                    if(err){
                        res.status(500).json('Server Error')
                        console.log(err)
                    } else {
                        res.status(200).json('Student user verified')
                    }
                })
            }
        })
    }

}


//LOGIN 
export const login = (req, res) => {

const { email, password } = req.body;

if(!validator.isEmail(email)) {
    res.status(404).json('Invalid email')
} else {

    const q1 = 'SELECT * FROM students WHERE email = ?'
    const q2 = 'SELECT * FROM staffs WHERE email = ?'

    db.query(q1, [email], (err, data) => {
        if(err){
            res.status(500).json('Server Error')
        }
        if(data.length) {

            const match = bcrypt.compareSync(password, data[0].password)

            if(match) {
                const { password, studentId, ...others } = data[0];

                jwt.sign({ studentId }, process.env.JWT_SECRET, { expiresIn: '3d' }, (err, token) => {

                    if(err){
                        res.status(500).json('JWT Server Error')
                    }
                    if(token){
                        res.status(200).json({ studentId, ...others, token })
                    }
                })
            } else {
                res.status(404).json('Incorrect password')
            }

        } else {

            db.query(q2, [email], (err, data) => {
                if(err){
                    res.status(500).json('Server Error')
                }
                if(data.length) {
                    const match = bcrypt.compareSync(password, data[0].password)

                    if(match) {
                        const { password, staffId, ...others } = data[0];
                        
                        jwt.sign({ staffId }, process.env.JWT_SECRET, { expiresIn: '3d' }, (err, token) => {

                            if(err){
                                res.status(500).json('JWT Server Error')
                            }
                            if(token){
                                res.status(200).json({ staffId, ...others, token })
                            }
                        })
                    } else {
                        res.status(404).json('Incorrect password')
                    }

                } else {
                    res.status(404).json('Invalid email')
                }
            })
           
        }
    })
}}

