import bcrypt from 'bcrypt';

import { db } from "../dbConnect.js";

export const getSingleStaff = (req, res) => {

    const { id } = req.params;

        const q = "SELECT * FROM staffs WHERE staffId = ?";

        db.query(q, [id], (err, data) => {
            if(err) {
                res.status(500).json('Server error');
                console.log(err)
            }
            if(data.length){
                const { password, ...others } = data[0];
                res.status(200).json(others);
            } else {
                res.status(404).json('User not found');
            }
        })
}

export const updateStaff = (req, res) => {

    const { name, password, department, image } = req.body;
    const { staffId } = req.user;
    const { id } = req.params;

    if(id == staffId) {

        const q = "UPDATE staffs SET name = ?, password = ?, department = ?, image = ?";

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const values = [name, hashedPassword, department, image]

        db.query(q, [values], (err, data) => {
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


export const deleteStaff = (req, res) => {

    const { staffId } = req.user;
    const { id } = req.params;

    if(id == staffId) {

        const q = "DELETE FROM staffs WHERE staffId = ?";

        db.query(q, [staffId], (err, data) => {
            if(err) {
                res.status(500).json('Server Error');
                console.log(err)
            }
            if(data){
                res.status(200).json("User deleted successfully");
            }
        })
    } else {
        res.status(404).json("You're not authorized")
    }
}