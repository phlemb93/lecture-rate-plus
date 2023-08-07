import express from 'express';
import { getSingleReview, postReview, updateReview, deleteReview, getAllStudentUserReviews, getAllStaffUserReviews, getStaffUserReviewStats, getAllReviews } from '../controllers/reviews.js';
import { verifyTokenAndAuthorization, verifyTokenAndAuthorizeStudent } from '../middleware/verifyToken.js';


const router = express.Router();

router.get('/', verifyTokenAndAuthorization, getAllReviews)
router.post('/', verifyTokenAndAuthorizeStudent, postReview)
router.get('/find/staffs/:userId', verifyTokenAndAuthorization, getAllStaffUserReviews)
router.get('/find/staffs/stats/:userId', verifyTokenAndAuthorization, getStaffUserReviewStats)
router.get('/find/students/:userId', verifyTokenAndAuthorizeStudent, getAllStudentUserReviews)
router.get('/:id', verifyTokenAndAuthorization, getSingleReview)
router.put('/:id', verifyTokenAndAuthorizeStudent, updateReview)
router.delete('/:id', verifyTokenAndAuthorizeStudent, deleteReview)


export default router;