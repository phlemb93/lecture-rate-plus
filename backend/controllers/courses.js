import { db } from "../dbConnect.js";

export const getAllCourses = (req, res) => {

    const q = "SELECT courses.courseId, courses.courseCode, courses.startTime, courses.endTime, staffs.staffId, staffs.name as staffName FROM courses JOIN staffs ON courses.staffNum = staffs.staffId";

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