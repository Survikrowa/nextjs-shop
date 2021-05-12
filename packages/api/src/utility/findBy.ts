import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const findUserBy = async (conditions: Prisma.UserWhereInput) => {
  const user = await prisma.user.findFirst({
    where: conditions,
  });
  await prisma.$disconnect();
  return user;
};
