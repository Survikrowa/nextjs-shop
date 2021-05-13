import type { Request, Response } from 'express';
import { hash } from 'bcrypt';
import { userRegisterSchema } from './user.schema';
import { BCRYPT_SALT_ROUNDS } from '../../constants/constants';
import { findUserBy } from '../../utility/findBy';
import { saveUserToDatabase } from './user.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { error, value } = userRegisterSchema.validate(req.body);
    if (error) {
      return res.status(422).json({ status: 422, message: error });
    }
    const { username, password, email } = value;
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
  } catch (e) {}
};
