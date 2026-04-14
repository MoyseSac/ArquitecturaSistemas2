require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const resolvers = {
  Query: {
    users: () => prisma.user.findMany({ include: { posts: true } }),
    user: (_, { id }) =>
      prisma.user.findUnique({
        where: { id: Number(id) },
        include: { posts: true },
      }),
    posts: () => prisma.post.findMany({ include: { author: true } }),
    post: (_, { id }) =>
      prisma.post.findUnique({
        where: { id: Number(id) },
        include: { author: true },
      }),
  },
};

module.exports = resolvers;