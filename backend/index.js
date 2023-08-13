 import express from 'express';
 import cors from 'cors';
 import dotenv from 'dotenv';

 const app = express();
 dotenv.config();

 import authRoutes from './routes/auth.js';
 import studentRoutes from './routes/students.js';
 import staffRoutes from './routes/staffs.js';
 import reviewRoutes from './routes/reviews.js';
 import courseRoutes from './routes/courses.js';

 app.use(express.json());
 app.use(cors());

 app.use('/api/auth', authRoutes)
 app.use('/api/students', studentRoutes)
 app.use('/api/staffs', staffRoutes)
 app.use('/api/reviews', reviewRoutes)
 app.use('/api/courses', courseRoutes)

 app.listen(process.env.PORT, () => {
    console.log('Server is connected')
 })