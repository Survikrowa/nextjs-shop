import type { RequestHandler } from 'express';
import { hash } from 'bcrypt';
import { userRegisterSchema } from './user.schema';
import { BCRYPT_SALT_ROUNDS } from '../../constants/constants';
import { findUserBy } from '../../utility/findBy';
import { saveUserToDatabase } from './user.service';

export const createUser: RequestHandler = async (req, res) => {
  const { username, password, email } = await userRegisterSchema.validate(req.body);
  const user = await findUserBy({
    OR: [
      {
        username,
      },
      {
        email,
      },
    ],
  });
  if (user) {
    throw { status: 409, message: 'User already exists' };
  }

  const hashedPassword = await hash(password, BCRYPT_SALT_ROUNDS);
  const savedUser = await saveUserToDatabase({ username, password: hashedPassword, email });
  if (savedUser) {
    return res
      .status(201)
      .json({ status: 201, message: 'User successfully created! You can log in now.' });
  }
};
