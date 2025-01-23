import { clerkMiddleware } from '@clerk/express';

const options = {
  // Optional configurations
  // signInUrl: '/sign-in', // Custom sign-in URL
  // signUpUrl: '/sign-up', // Custom sign-up URL
  // publishableKey: process.env.CLERK_PUBLISHABLE_KEY, // Optional
  debug: true, // Enable debug mode for troubleshooting
  // Additional options as needed
};

const setupClerkMiddleware = () => {
  return clerkMiddleware(options);
};

export default setupClerkMiddleware;