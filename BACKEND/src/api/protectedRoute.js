import express from 'express';

const router = express.Router();

/**
 * **GET /api/protected**
 * 
 * **Description:** Example of a protected route. Returns a message and user auth details.
 * 
 * **Authentication:** Protected (requires valid authentication)
 * 
 * **Response:**
 * - `200 OK` with protected data and user auth details.
 * - `401 Unauthorized` if the user is not authenticated.
 */
router.get('/', (req, res) => {
  res.json({
    message: 'This is a protected route.',
    user: req.auth, // Contains Clerk auth details
  });
});

export default router;