import express from 'express';
import { createUserProfile } from '../../services/authService.js';
import { signupValidation } from '../../utils/validation.js';
import { validationResult } from 'express-validator';
import { createClerkClient } from '@clerk/backend';
import dotenv from 'dotenv';

dotenv.config();

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

const router = express.Router();

router.post('/signup', signupValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation Errors:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name } = req.body;

    // Check if the user already exists in Clerk
    let userListResponse = await clerkClient.users.getUserList({ emailAddress: [email] });

    console.log('User List Response:', userListResponse);

    if (!userListResponse || !Array.isArray(userListResponse.data)) {
      console.log('Unexpected userList structure:', userListResponse);
      return res.status(500).json({ error: 'Unexpected response from Clerk.' });
    }

    let clerkUsers = userListResponse.data;

    let clerkUser = clerkUsers.find(user =>
      user.emailAddresses.some(addr => addr.emailAddress.toLowerCase() === email.toLowerCase())
    );

    // If the user is not found, create a new user in Clerk
    if (!clerkUser) {
      console.log('Clerk user not found for email:', email);
      const newUser = await clerkClient.users.createUser({
        emailAddress: [email],
        password,
        firstName: name.split(' ')[0],
        lastName: name.split(' ').slice(1).join(' '),
      });

      clerkUser = newUser;
    }

    // Create user profile in your backend
    const userProfile = await createUserProfile({
      clerkId: clerkUser.id,
      email,
      password,
      name,
    });

    res.status(201).json(userProfile);
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;