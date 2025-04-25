import { PrismaClient } from '@prisma/client';

// Create a global variable for the Prisma client
const globalForPrisma = globalThis;

// Initialize the Prisma client
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query'], // Optional: Log queries for debugging
});

// Store the Prisma client in the global object for non-production environments
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}