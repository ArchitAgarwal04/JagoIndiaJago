import { body } from 'express-validator';

const signupValidation = [
  body('email').isEmail().withMessage('Must be a valid email'),
  body('name').notEmpty().withMessage('Name is required'),
  body('age').optional().isInt({ min: 0 }).withMessage('Age must be a positive integer'),
  body('gender').optional().isString(),
  body('height').optional().isFloat({ min: 0 }).withMessage('Height must be a positive number'),
  body('weight').optional().isFloat({ min: 0 }).withMessage('Weight must be a positive number'),
  body('activity_level').optional().isString(),
  // Add more validations as needed
];

const loginValidation = [
  body('sessionId').optional().isString().withMessage('Session ID must be a string'),
  // Add more validations as needed
];

export { signupValidation, loginValidation };