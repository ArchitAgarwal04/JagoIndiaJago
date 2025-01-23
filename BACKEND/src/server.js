import 'dotenv/config';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import clerkMiddleware from './config/clerk.js';
import signupRoute from './api/auth/signup.js';
import loginRoute from './api/auth/login.js';
import { Pool } from '@neondatabase/serverless';
import retry from 'retry';

const app = express();
let prisma;

// Retry strategy
const operation = retry.operation({
  retries: 5,
  factor: 2,
  minTimeout: 1000, // 1 second
  maxTimeout: 8000, // 8 seconds
});

operation.attempt(async (currentAttempt) => {
  try {
    prisma = new PrismaClient();
    await prisma.$connect();
    console.log('Prisma connected successfully!');
  } catch (error) {
    if (operation.retry(error)) {
      console.warn(`Prisma connection attempt ${currentAttempt} failed. Retrying...`);
      return;
    }
    console.error('Failed to connect to Prisma after multiple attempts:', error);
    process.exit(1);
  }
});

const pool = new Pool({
  connectionString: process.env.DATABASE_AUTHENTICATED_URL,
});

app.use(morgan('dev')); // Add morgan for logging HTTP requests
app.use(bodyParser.json());
app.use(cors());

// Add logging to Clerk middleware
app.use((req, res, next) => {
  console.log('Clerk middleware executed');
  clerkMiddleware(req, res, next);
});

// Import and use API routes
signupRoute(app, prisma);
loginRoute(app, prisma);
// Add other routes similarly

// Test Route
app.get("/", async (req, res) => {
  try {
    console.log("Test route accessed");
    res.send("Database connected successfully!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    res.status(500).send("Failed to connect to the database.");
  }
});

app.get("/test-db", async (req, res) => {
  try {
    console.log("Test DB route accessed");
    const users = await prisma.user.findMany();
    console.log("Users fetched:", users);
    res.json(users);
  } catch (error) {
    console.error("Failed to fetch users from the database:", error);
    res.status(500).send("Failed to fetch users from the database.");
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});