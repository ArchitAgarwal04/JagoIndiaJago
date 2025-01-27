import express from 'express';
import { createUserProfile } from '../../services/authService.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/create-profile', async (req, res) => {
  const { clerkId, email, name } = req.body;

  try {
    await createUserProfile({
      clerkId,
      email,
      password: '', // Password is not available in this context
      name,
    });

    res.status(201).json({ message: 'User profile created successfully.' });
  } catch (error) {
    console.error('Error creating user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;