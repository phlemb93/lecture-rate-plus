import { db } from "../dbConnect.js";

//GET A STAFF USER'S REVIEWS
export const getAllStaffUserReviews = (req, res) => {
    const { userId } = req.params;
    
    const q = "SELECT reviews.clarity, reviews.engagement, reviews.communication, reviews.comment, reviews.courseCode, reviews.createdAt, staffs.name as staffName, staffs.department as staffDept, staffs.image as staffImg, students.name  as studentName FROM reviews JOIN staffs ON reviews.staffId = staffs.staffId JOIN students ON reviews.studentId = students.studentId WHERE reviews.staffId = ?"

    db.query(q, [userId], (err, data) => {
        if(err){
            return res.status(500).json('Server error')
        }
        if(data){
            res.status(200).json(data)
        }else{
           return res.status(404).json('No review found')
        }
    })
}

//GET A STUDENT USER'S REVIEWS
export const getAllStudentUserReviews = (req, res) => {
    const { userId } = req.params;
    const { studentId } = req.user;

    if(studentId == userId){

        const q = "SELECT reviews.clarity, reviews.engagement, reviews.communication, reviews.comment, reviews.courseCode, reviews.date, staffs.name as staffName, staffs.department as staffDept, staffs.image as staffImg, students.name  as studentName FROM reviews JOIN staffs ON reviews.staffId = staffs.staffId JOIN students ON reviews.studentId = students.studentId WHERE reviews.studentId = ?"
    
        db.query(q, [userId], (err, data) => {
            if(err){
                return res.status(500).json('Server error')
            }
            if(data){
                res.status(200).json(data)
            }else{
               return res.status(404).json('No review found')
            }
        })
    }else {
       return res.status(404).json('You are not authorized')
    }
}

//GET ALL REVIEWS
export const getAllReviews = (req, res) => {

    const q = "SELECT reviews.reviewId, reviews.clarity, reviews.engagement, reviews.communication, reviews.comment, reviews.courseCode, reviews.createdAt, reviews.anonymous, staffs.name as staffName, staffs.department as staffDept, staffs.image as staffImg, students.name as studentName FROM reviews JOIN staffs ON reviews.staffId = staffs.staffId JOIN students ON reviews.studentId = students.studentId";

    db.query(q, (err, data) => {
        if(err){
           return res.status(500).json(err)
        }
        if(data){
            res.status(200).json(data)
        }else{
           return res.status(404).json('No review found')
        }
    })
}

//GET A SINGLE REVIEW
export const getSingleReview = (req, res) => {

    const { id } = req.params;

    const q = "SELECT reviews.reviewId, reviews.clarity, reviews.engagement, reviews.communication, reviews.comment, reviews.courseCode, reviews.createdAt, reviews.anonymous, staffs.staffId, staffs.name as staffName, staffs.department as staffDept, staffs.image as staffImg, students.name as studentName FROM reviews JOIN staffs ON reviews.staffId = staffs.staffId JOIN students ON reviews.studentId = students.studentId WHERE reviews.reviewId = ?";

    db.query(q, [id], (err, data) => {
        if(err){
           return res.status(500).json('Server error')
        }
        if(data){
            res.status(200).json(data[0])
        }else{
            return res.status(404).json('No review found')
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
            return res.status(500).json('Server error')
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
           return res.status(500).json('Server error')
        }
        if(data.affectedRows){
            res.status(200).json("Review updated")
        }else{
           return res.status(404).json('You are not authorized')
        }
    })
    
}

//DELETE A REVIEW
export const deleteReview = (req, res) => {
    const { id } = req.params;
    const { studentId } = req.user;

    const q = "DELETE FROM reviews WHERE reviewId = ? AND studentId = ?"

    db.query(q, [id, studentId], (err, data) => {
        if(err){
          return  res.status(500).json('Server error')
        }
        if(data.affectedRows){
            res.status(200).json("Review deleted")
        }else{
           return res.status(404).json('You are not authorized')
        }
    })
}

//STAFF USER'S REVIEWS STATS
export const getStaffUserReviewStats = (req, res) => {
    const { userId } = req.params;

    const clarityRating = [];
    const engagementRating = [];
    const communicationRating = [];

    const qC = "SELECT COUNT(clarity) as clarityCount FROM reviews WHERE staffId = ? GROUP BY clarity ORDER BY clarity DESC;"
    const qE = "SELECT COUNT(engagement) as engageCount FROM reviews WHERE staffId = ? GROUP BY engagement ORDER BY engagement DESC;"
    const qComm = "SELECT COUNT(communication) as commCount FROM reviews WHERE staffId = ? GROUP BY communication ORDER BY communication DESC;"

    db.query(qC, [userId], (err, data) => {
        if(err){
           return res.status(500).json('Server error')
        }
        if(data){

            clarityRating.push(data)

            db.query(qE, [userId], (err, data) => {
                if(err){
                    return res.status(500).json('Server error')
                }
                if(data){

                    engagementRating.push(data)

                    db.query(qComm, [userId], (err, data) => {
                        if(err){
                            return res.status(500).json('Server error')
                        }
                        if(data){
                            communicationRating.push(data)

                            res.status(200).json({ clarityRating, engagementRating, communicationRating })
                        }
                    })
                    
                }
            })
        }
    })
}
