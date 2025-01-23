import express from 'express';
import { clerkClient } from '@clerk/express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/login', async (req, res) => {
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: 'Session ID is required.' });
  }

  try {
    // Verify the session using Clerk's backend SDK
    const session = await clerkClient.sessions.verifySession(sessionId);

    if (!session || !session.userId) {
      return res.status(400).json({ error: 'Invalid session.' });
    }

    // Optionally, retrieve user profile from the backend
    // const userProfile = await getUserProfile(session.userId);

    res.status(200).json({
      message: 'Login successful.',
      userId: session.userId,
      session,
      // userProfile,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;