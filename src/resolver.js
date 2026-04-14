const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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