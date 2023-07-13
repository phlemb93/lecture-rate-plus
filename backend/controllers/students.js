import bcrypt from 'bcrypt'
import { db } from '../dbConnect.js';

//GET STUDENT USER'S DETAILS
export const getSingleStudent = (req, res) => {
    const { studentId } = req.user;
    const { id } = req.params;

    if(id == studentId) {

        const q = "SELECT * FROM students WHERE studentId = ?";
        db.query(q, [studentId], (err, data) => {
            if(err) {
                res.status(500).json('Server Error');
                console.log(err)
            }
            if(data.length){
                res.status(200).json(data);
            }
        })
    } else {
        res.status(404).json("You're not authorized")
    }
}

//UPDATE STUDENT USER'S DETAILS
export const updateStudent = (req, res) => {
    const { name, password, image } = req.body;
    const { studentId } = req.user;
    const { id } = req.params;

    if(id == studentId) {

        const q = "UPDATE students SET name = ?, password = ?, image = ? WHERE studentId = ?";

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        db.query(q, [name, hashedPassword, image, studentId], (err, data) => {
            if(err) {
                res.status(500).json('Server Error');
                console.log(err)
            }
            if(data){
                res.status(200).json("User details updated");
            }
        })
    } else {
        res.status(404).json("You're not authorized")
    }
}

//DELETE A STUDENT USER
export const deleteStudent = (req, res) => {
    const { studentId } = req.user;
    const { id } = req.params;

    if(id == studentId) {

        const q = "DELETE FROM students WHERE studentId = ?";

        db.query(q, [studentId], (err, data) => {
            if(err) {
                res.status(500).json('Server Error');
                console.log(err)
            }
            if(data){
                res.status(200).json("User deleted");
            }
        })
    } else {
        res.status(404).json("You're not authorized")
    }
}