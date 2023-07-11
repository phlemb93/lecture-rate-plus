import express from 'express';
import { deleteStudent, getSingleStudent, updateStudent } from '../controllers/students.js';
import { verifyTokenAndAuthorizeStudent } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/find/:id', verifyTokenAndAuthorizeStudent, getSingleStudent)
router.put('/:id', verifyTokenAndAuthorizeStudent, updateStudent)
router.delete('/:id', verifyTokenAndAuthorizeStudent, deleteStudent)


export default router;