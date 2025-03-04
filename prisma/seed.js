import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.item.createMany({
    data: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Cherry' },
    ],
  });
}

main().finally(() => prisma.$disconnect());
