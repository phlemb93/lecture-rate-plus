import { db } from "../dbConnect.js";

export const getAllUserReviews = (req, res) => {
    const { id } = req.params;
    
    const q = "SELECT * FROM reviews JOIN staffs ON reviews.staffId = staffs.staffId WHERE reviews.staffId = ?"

    db.query(q, [id], (err, data) => {
        if(err){
            res.status(500).json('Server error')
            console.log(err)
        }
        if(data){
            res.status(200).json(data[0])
        }
    })
}


export const getSingleReview = (req, res) => {

}


export const postReview = (req, res) => {

    const { studentId } = req.user;

    const { clarity, engagement, communication, comment, staffId, courseCode } = req.body;

    const q = "INSERT INTO reviews (`clarity`, `engagement`, `communication`, `comment`, `staffId`, `studentId`, `courseCode`, `date`) VALUE (?)";

    const date = new Date();
    const values = [clarity, engagement, communication, comment, staffId, studentId, courseCode, date];

    db.query(q, [values], (err, data) => {
        if(err){
            res.status(500).json('Server error')
            console.log(err)
        }
        if(data){
            res.status(200).json('Review submitted successfully')
        }
    })
}


export const updateReview = (req, res) => {

}


export const deleteReview = (req, res) => {

}