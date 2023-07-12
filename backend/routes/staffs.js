import express from 'express';
import { deleteStaff, getSingleStaff, updateStaff } from '../controllers/staffs.js';
import { verifyTokenAndAuthorization, verifyTokenAndAuthorizeStaff } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/find/:id', verifyTokenAndAuthorization, getSingleStaff)
router.put('/:id', verifyTokenAndAuthorizeStaff, updateStaff)
router.delete('/:id', verifyTokenAndAuthorizeStaff, deleteStaff)


export default router;