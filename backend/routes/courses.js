import express from 'express';
import { getAllCourses } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getAllCourses);


export default router;
