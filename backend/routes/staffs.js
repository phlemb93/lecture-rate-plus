import express from 'express';
import { deleteStaff, getSingleStaff, updateStaff } from '../controllers/staffs.js';
import { verifyTokenAndAuthorizeStaff } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/find/:id', verifyTokenAndAuthorizeStaff, getSingleStaff)
router.put('/:id', verifyTokenAndAuthorizeStaff, updateStaff)
router.delete('/:id', verifyTokenAndAuthorizeStaff, deleteStaff)


export default router;