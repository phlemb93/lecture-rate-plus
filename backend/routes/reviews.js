import express from 'express';
import { getAllReviews, getSingleReview, postReview, updateReview, deleteReview } from '../controllers/reviews.js';


const router = express.Router();

router.get('/', getAllReviews)
router.get('/:id', getSingleReview)
router.post('/:id', postReview)
router.put('/:id', updateReview)
router.delete('/:id', deleteReview)


export default router;