import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../dbConnect.js';


export const register = (req, res) => {
    const { firstName, lastName, email, password, image } = req.body;

    if(validator.isEmail(email)) {
        if(email.toLowerCase().includes('@study.beds.ac.uk')) {
            const q = 'SELECT * FROM students WHERE email = ?';

            db.query(q, [email], (err, data) => {
                if(err) {
                    res.status(500).json('Server error')
                    console.log(err)
                }

                if(data.length) {
                    res.status(404).json('User is already registered')    
                } else {

                    if(!validator.isStrongPassword(password)) {
                        res.status(404).json('Enter a strong password')
                    } else {
                        const salt = bcrypt.genSaltSync(10);
                        const hashedPassword = bcrypt.hashSync(password, salt);

                        const q = 'INSERT INTO students (`firstName`,`lastName`,`email`, `password`, `image`) VALUE (?)';
                        const values = [firstName, lastName, email, hashedPassword, image];

                        db.query(q, [values], (err, data) => {
                            if(err) {
                                res.status(500).json('Server error')
                                console.log(err)
                            } else {
                                res.status(200).json('User created successfully')
                            }
                        })
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

export const login = (req, res) => {

}

export const logout = (req, res) => {

}