import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../dbConnect.js';


//REGISTER 
export const register = (req, res) => {
    const { firstName, lastName, email, password, isStudent, isStaff, image } = req.body;

    if(validator.isEmail(email)) {
        if(email.toLowerCase().includes('@study.beds.ac.uk')) {
            const q = 'SELECT * FROM students UNION ALL SELECT * FROM staffs WHERE email = ?';

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

                            const q = 'INSERT INTO students (`firstName`,`lastName`,`email`, `password`, `image`) VALUE (?)';
                            const values = [firstName, lastName, email, hashedPassword, image];
    
                            db.query(q, [values], (err, data) => {
                                if(err) {
                                    res.status(500).json('Server error')
                                    console.log(err)
                                } else {
                                    res.status(200).json('Student user created')
                                }
                            })
                        }

                        if(isStaff) {

                            const q = 'INSERT INTO staffs (`firstName`,`lastName`,`email`, `password`, `image`) VALUE (?)';
                            const values = [firstName, lastName, email, hashedPassword, image];
    
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
        } else {
            res.status(404).json('Enter a valid student email')
        }
    } else {
        res.status(404).json('Enter a valid student email')
    }
}

//LOGIN 
export const login = (req, res) => {

}

//LOGOUT
export const logout = (req, res) => {

}