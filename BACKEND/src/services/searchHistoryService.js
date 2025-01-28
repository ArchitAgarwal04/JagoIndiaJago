import prisma from '../config/db.js';

export const saveSearchHistory = async (userId, productData) => {
  return prisma.searchHistory.create({
    data: {
      userId,
      barcode: productData.id,
      name: productData.name,
      image: productData.image
    }
  });
};

export const getUserSearchHistory = async (userId) => {
  return prisma.searchHistory.findMany({
    where: { userId },
    orderBy: { timestamp: 'desc' },
    take: 10
  });
};