import { db } from "../dbConnect.js";

//GET ALL STAFF USER'S REVIEWS
export const getAllStaffUserReviews = (req, res) => {
    const { userId } = req.params;
    
    const q = "SELECT reviews.clarity, reviews.engagement, reviews.communication, reviews.comment, reviews.courseCode, reviews.date, staffs.name as staffName, staffs.department as staffDept, staffs.image as staffImg, students.name  as studentName FROM reviews JOIN staffs ON reviews.staffId = staffs.staffId JOIN students ON reviews.studentId = students.studentId WHERE reviews.staffId = ?"

    db.query(q, [userId], (err, data) => {
        if(err){
            res.status(500).json('Server error')
            console.log(err)
        }
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json('No review found')
        }
    })
}

//GET ALL STUDENT USER'S REVIEWS
export const getAllStudentUserReviews = (req, res) => {
    const { userId } = req.params;
    const { studentId } = req.user;

    if(studentId == userId){

        const q = "SELECT reviews.clarity, reviews.engagement, reviews.communication, reviews.comment, reviews.courseCode, reviews.date, staffs.name as staffName, staffs.department as staffDept, staffs.image as staffImg, students.name  as studentName FROM reviews JOIN staffs ON reviews.staffId = staffs.staffId JOIN students ON reviews.studentId = students.studentId WHERE reviews.studentId = ?"
    
        db.query(q, [userId], (err, data) => {
            if(err){
                res.status(500).json('Server error')
                console.log(err)
            }
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json('No review found')
            }
        })
    }else {
        res.status(404).json('You are not authorized')
    }
}

//GET A SINGLE REVIEW
export const getSingleReview = (req, res) => {

    const { id } = req.params;

    const q = "SELECT reviews.clarity, reviews.engagement, reviews.communication, reviews.comment, reviews.courseCode, reviews.date, staffs.name as staffName, staffs.department as staffDept, staffs.image as staffImg, students.name  as studentName FROM reviews JOIN staffs ON reviews.staffId = staffs.staffId JOIN students ON reviews.studentId = students.studentId WHERE reviews.reviewId = ?";

    db.query(q, [id], (err, data) => {
        if(err){
            res.status(500).json('Server error')
            console.log(err)
        }
        if(data){
            res.status(200).json(data[0])
        }else{
            res.status(404).json('No review found')
        }
    })
}

//POST A REVIEW
export const postReview = (req, res) => {
    const { studentId } = req.user;
    const { clarity, engagement, communication, comment, staffId, courseCode } = req.body;
    const date = new Date();

    const q = "INSERT INTO reviews (`clarity`, `engagement`, `communication`, `comment`, `staffId`, `studentId`, `courseCode`, `createdAt`) VALUE (?)";

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

//UPDATE A REVIEW
export const updateReview = (req, res) => {
    const { clarity, engagement, communication, comment } = req.body;
    const { id } = req.params;
    const { studentId } = req.user;
    const date = new Date();

    const q = "UPDATE reviews SET clarity = ?, engagement = ?, communication = ?, comment = ?, updatedAt = ? WHERE reviewId = ? AND studentId = ?"

    db.query(q, [clarity, engagement, communication, comment, date, id, studentId], (err, data) => {
        if(err){
            res.status(500).json('Server error')
            console.log(err)
        }
        if(data.affectedRows){
            res.status(200).json("Review updated")
        }else{
            res.status(404).json('You are not authorized')
        }
    })
    
}

//DELETE A REVIEW
export const deleteReview = (req, res) => {
 
}
