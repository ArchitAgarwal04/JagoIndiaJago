import express from 'express';
import { authenticateUser } from '../../services/authService.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const user = await authenticateUser(email, password);

    res.status(200).json({
      message: 'Login successful.',
      userId: user.clerkId,
      user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;