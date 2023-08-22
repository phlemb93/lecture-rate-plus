import express from 'express';
import { getAllCourses, sendNotification } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getAllCourses);
router.post('/notification', sendNotification);


export default router;
