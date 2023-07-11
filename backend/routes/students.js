import express from 'express';
import { deleteStudent, getAllStudents, getSingleStudent, updateStudent } from '../controllers/students.js';

const router = express.Router();

router.get('/', getAllStudents)
router.get('/find/:id', getSingleStudent)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent)


export default router;