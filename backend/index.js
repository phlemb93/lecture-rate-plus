 import express from 'express';
 import cors from 'cors';
 import dotenv from 'dotenv';

 dotenv.config();

 import authRoutes from './routes/auth.js';
 import studentRoutes from './routes/students.js';
 import staffRoutes from './routes/staffs.js';
 import reviewRoutes from './routes/reviews.js';
 import courseRoutes from './routes/courses.js';

 const app = express();
 app.use(cors());
 app.use(express.json());

 app.use('/api/auth', authRoutes)
 app.use('/api/students', studentRoutes)
 app.use('/api/staffs', staffRoutes)
 app.use('/api/reviews', reviewRoutes)
 app.use('/api/courses', courseRoutes)

 app.listen(process.env.PORT, () => {
    console.log('Server is connected')
 })