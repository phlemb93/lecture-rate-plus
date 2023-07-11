import express from 'express';
import { deleteStaff, getAllStaffs, getSingleStaff, updateStaff } from '../controllers/staffs.js';

const router = express.Router();

router.get('/', getAllStaffs)
router.get('/find/:id', getSingleStaff)
router.put('/:id', updateStaff)
router.delete('/:id', deleteStaff)


export default router;