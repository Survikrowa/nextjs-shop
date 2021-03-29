// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';

// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     console.log(username, password, done);
//   }),
// );
import { PrismaClient } from '@prisma/client';

type UserRegisterData = {
  username: string;
  email: string;
  password: string;
};

const prisma = new PrismaClient();

export const saveUserToDatabase = async ({ username, email, password }: UserRegisterData) => {
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  await prisma.$disconnect();
  return user;
};
