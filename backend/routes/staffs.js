import express from 'express';
import { getAllStaff, deleteStaff, getSingleStaff, updateStaff } from '../controllers/staffs.js';
import { verifyTokenAndAuthorization, verifyTokenAndAuthorizeStaff } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', verifyTokenAndAuthorization, getAllStaff)
router.get('/:id', verifyTokenAndAuthorization, getSingleStaff)
router.put('/:id', verifyTokenAndAuthorizeStaff, updateStaff)
router.delete('/:id', verifyTokenAndAuthorizeStaff, deleteStaff)


export default router;