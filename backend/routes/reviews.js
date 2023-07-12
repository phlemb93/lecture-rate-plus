import express from 'express';
import { getAllUserReviews, getSingleReview, postReview, updateReview, deleteReview } from '../controllers/reviews.js';
import { verifyTokenAndAuthorization, verifyTokenAndAuthorizeStudent } from '../middleware/verifyToken.js';


const router = express.Router();

router.post('/', verifyTokenAndAuthorizeStudent, postReview)
router.get('/find:userId', verifyTokenAndAuthorization, getAllUserReviews)
router.get('/:id', verifyTokenAndAuthorization, getSingleReview)
router.put('/:id', verifyTokenAndAuthorizeStudent, updateReview)
router.delete('/:id', verifyTokenAndAuthorizeStudent, deleteReview)


export default router;