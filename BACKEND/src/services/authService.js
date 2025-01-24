import prisma from '../config/db.js';
import bcrypt from 'bcrypt';

const createUserProfile = async ({
  clerkId,
  email,
  password,
  name,
}) => {
  const existingProfile = await prisma.user.findUnique({ where: { clerkId } });
  if (existingProfile) {
    throw new Error('User profile already exists.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userProfile = await prisma.user.create({
    data: {
      clerkId,
      email,
      password: hashedPassword,
      name,
    },
  });

  return userProfile;
};

const authenticateUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('User not found.');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password.');
  }

  return user;
};

export { createUserProfile, authenticateUser };