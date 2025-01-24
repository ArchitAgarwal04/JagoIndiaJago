// filepath: /d:/Projects/JagoIndiaJago/BACKEND/src/app.js

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import setupClerkMiddleware from './config/clerk.js';
import signupRoute from './api/auth/signup.js';
import loginRoute from './api/auth/login.js';
import authMiddleware from './middlewares/authMiddleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Clerk Middleware
app.use(setupClerkMiddleware());

// Public Routes
app.use('/api/auth', signupRoute);
app.use('/api/auth', loginRoute);

// Protected Routes Middleware
app.use(authMiddleware);

// Example Protected Route
app.get('/api/protected', (req, res) => {
  res.json({ message: 'This is a protected route.', user: req.auth });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;