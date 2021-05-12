import type { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { userRegisterSchema } from './user.schema';
import { BCRYPT_SALT_ROUNDS } from '../../constants/constants';
import { findUserBy } from '../../utility/findBy';
import { saveUserToDatabase } from './user.service';
import { config } from 'dotenv';
if (process.env.NODE_ENV === 'TEST') {
  config({
    path: '../.env.test',
  });
} else {
  config();
}

export const createUser = async (req: Request, res: Response) => {
  try {
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
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await hash(password, BCRYPT_SALT_ROUNDS);
    const savedUser = await saveUserToDatabase({ username, password: hashedPassword, email });
    if (savedUser) {
      return res
        .status(201)
        .json({ status: 201, message: 'User successfully created! You can log in now.' });
    }
  } catch (e) {
    return res.status(422).json({ status: 422, message: e.errors });
  }
};
