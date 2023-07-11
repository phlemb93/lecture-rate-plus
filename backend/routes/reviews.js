import express from 'express';
import { getAllUserReviews, getSingleReview, postReview, updateReview, deleteReview } from '../controllers/reviews.js';
import { verifyTokenAndAuthorization } from '../middleware/verifyToken.js';


const router = express.Router();

router.get('/find:userId', verifyTokenAndAuthorization, getAllUserReviews)
router.get('/:id', verifyTokenAndAuthorization, getSingleReview)
router.post('/:id', verifyTokenAndAuthorization, postReview)
router.put('/:id', verifyTokenAndAuthorization, updateReview)
router.delete('/:id', verifyTokenAndAuthorization, deleteReview)


export default router;