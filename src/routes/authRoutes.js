import express from 'express'
import { login, register } from '../controller/authController.js';
const router = express.Router();


router.post('/login', login)
router.post('/signup', register)

export default router;