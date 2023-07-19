import express from 'express';
import { register, login, verifyEmail } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/confirmation/:emailToken', verifyEmail)

export default router;