import prisma from '../config/db.js';

/**
 * Create a new user profile in the backend linked to a Clerk user.
 * @param {Object} params
 * @param {string} params.clerkId - Clerk's user ID
 * @param {string} params.email - User's email
 * @param {string} params.name - User's name
 * @param {number} [params.age]
 * @param {string} [params.gender]
 * @param {number} [params.height]
 * @param {number} [params.weight]
 * @param {string} [params.activity_level]
 * @returns {Promise<Object>} - Created user profile
 */
const createUserProfile = async ({
  clerkId,
  email,
  name,
  age,
  gender,
  height,
  weight,
  activity_level,
}) => {
  // Check if user profile already exists
  const existingProfile = await prisma.user.findUnique({ where: { clerkId } });
  if (existingProfile) {
    throw new Error('User profile already exists.');
  }

  // Create the user profile
  const userProfile = await prisma.user.create({
    data: {
      clerkId,
      email,
      name,
      age,
      gender,
      height,
      weight,
      activity_level,
    },
  });

  return userProfile;
};

/**
 * Retrieve a user profile by Clerk's user ID.
 * @param {string} clerkId - Clerk's user ID
 * @returns {Promise<Object>} - User profile
 */
const getUserProfile = async (clerkId) => {
  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    throw new Error('User profile not found.');
  }
  return user;
};

/**
 * Update a user profile.
 * @param {string} clerkId - Clerk's user ID
 * @param {Object} updateData - Fields to update
 * @returns {Promise<Object>} - Updated user profile
 */
const updateUserProfile = async (clerkId, updateData) => {
  const updatedUser = await prisma.user.update({
    where: { clerkId },
    data: updateData,
  });
  return updatedUser;
};

export { createUserProfile, getUserProfile, updateUserProfile };