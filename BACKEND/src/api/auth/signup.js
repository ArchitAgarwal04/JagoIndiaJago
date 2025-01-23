import express from 'express';
import { createUserProfile } from '../../services/authService.js';
import { signupValidation } from '../../utils/validation.js';
import { validationResult } from 'express-validator';
import { createClerkClient } from '@clerk/backend'; // Import from @clerk/backend
import dotenv from 'dotenv';

dotenv.config();

// Instantiate clerkClient with your secret key
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

const router = express.Router();

/**
 * **POST /api/auth/signup**
 * 
 * **Description:** Create a user profile in the backend after verifying the user exists in Clerk.
 * 
 * **Authentication:** Public (does NOT require authentication)
 * 
 * **Request Body:**
 * ```json
 * {
 *   "email": "john.doe@example.com",
 *   "name": "John Doe",
 *   "age": 30,
 *   "gender": "Male",
 *   "height": 175,
 *   "weight": 70,
 *   "activity_level": "Active"
 * }
 * ```
 * 
 * **Response:**
 * - `201 Created` with user profile data on success.
 * - `400 Bad Request` if validation fails or Clerk user not found.
 * - `500 Internal Server Error` on server errors.
 */
router.post('/signup', signupValidation, async (req, res) => {
  try {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation Errors:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, age, gender, height, weight, activity_level } = req.body;

    // Retrieve the Clerk user using email
    const userListResponse = await clerkClient.users.getUserList({ emailAddress: [email] });

    console.log('User List Response:', userListResponse);

    // Ensure 'data' array exists in the response
    if (!userListResponse || !Array.isArray(userListResponse.data)) {
      console.log('Unexpected userList structure:', userListResponse);
      return res.status(500).json({ error: 'Unexpected response from Clerk.' });
    }

    const clerkUsers = userListResponse.data;

    // Find the Clerk user by email
    const clerkUser = clerkUsers.find(user =>
      user.emailAddresses.some(addr => addr.emailAddress.toLowerCase() === email.toLowerCase())
    );

    if (!clerkUser) {
      console.log('Clerk user not found for email:', email);
      return res.status(400).json({ error: 'Clerk user not found. Ensure you have signed up via Clerk frontend.' });
    }

    // Create user profile in the backend
    const userProfile = await createUserProfile({
      clerkId: clerkUser.id,
      email,
      name,
      age,
      gender,
      height,
      weight,
      activity_level,
    });

    res.status(201).json(userProfile);
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;