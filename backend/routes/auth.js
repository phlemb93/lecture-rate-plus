import express from 'express';
import { register, login, confirmEmail, verifyEmail } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.post('/confirmation', confirmEmail)
router.get('/confirmation/:emailToken', verifyEmail)

export default router;