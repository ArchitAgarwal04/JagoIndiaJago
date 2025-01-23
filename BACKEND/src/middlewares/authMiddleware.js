import { requireAuth } from '@clerk/express';

const authMiddleware = requireAuth({
  // Optional configurations
  signInUrl: '/sign-in', // Redirect unauthenticated users to this URL
});

export default authMiddleware;