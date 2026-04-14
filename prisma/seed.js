require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });


async function main() {
  const existingUser = await prisma.user.findUnique({
    where: { email: 'ana@example.com' },
  });

  if (existingUser) {
    console.log('Data already seeded, skipping...');
    return;
  }
  const user1 = await prisma.user.create({
    data: {
      name: 'Ana García',
      email: 'ana@example.com',
      age: 28,
      country: 'Guatemala',
      posts: {
        create: [
          {
            title: 'Introducción a GraphQL',
            content: 'GraphQL es un lenguaje de consulta para APIs...',
            published: true,
          },
          {
            title: 'Ventajas de usar Prisma',
            content: 'Prisma simplifica el acceso a bases de datos...',
            published: false,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Carlos López',
      email: 'carlos@example.com',
      age: 34,
      country: 'México',
      posts: {
        create: [
          {
            title: 'Node.js para principiantes',
            content: 'Node.js permite ejecutar JavaScript en el servidor...',
            published: true,
          },
          {
            title: 'Apollo Server vs REST',
            content: 'Comparativa entre GraphQL con Apollo y REST APIs...',
            published: true,
          },
        ],
      },
    },
  });

  console.log('Seed completado:', { user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });