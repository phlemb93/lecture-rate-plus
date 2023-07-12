import { db } from "../dbConnect.js";

export const getSingleStaff = (req, res) => {

    const { id } = req.params;

        const q = "SELECT * FROM staffs WHERE staffId = ?";

        db.query(q, [id], (err, data) => {
            if(err) {
                res.status(500).json('Server Error');
                console.log(err)
            }
            if(data.length){
                res.status(200).json(data);
            } else {
                res.status(404).json('User Not Found');
            }
        })
}

export const updateStaff = (req, res) => {
    const { staffId } = req.user;
    const { id } = req.params;

    if(id == staffId) {

        const q = "ALTER  ?";

        db.query(q, [staffId], (err, data) => {
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
                res.status(200).json("User Deleted Successfully");
            }
        })
    } else {
        res.status(404).json("You're not authorized")
    }
}