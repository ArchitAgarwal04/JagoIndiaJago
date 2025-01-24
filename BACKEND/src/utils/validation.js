import { body } from 'express-validator';

const signupValidation = [
  body('email').isEmail().withMessage('Email is required and must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password is required and must be at least 6 characters long'),
  body('name').notEmpty().withMessage('Name is required'),
];

export { signupValidation };