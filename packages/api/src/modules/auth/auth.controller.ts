import type { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { hash, compare } from 'bcrypt';
import { userRegisterSchema, userLogInSchema } from './auth.schema';
import { BCRYPT_SALT_ROUNDS } from '../../constants/constants';
import { findUserBy } from '../../utility/findBy';
import { saveUserToDatabase } from './auth.service';

export const createUser: RequestHandler = async (req, res) => {
  const { error, value } = userRegisterSchema.validate(req.body);
  if (error) {
    return res.status(422).json({ status: 422, message: error.message, body: req.body });
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
    return res.status(409).json({ status: 409, message: 'User already exists' });
  }

  const hashedPassword = await hash(password, BCRYPT_SALT_ROUNDS);
  const savedUser = await saveUserToDatabase({ username, password: hashedPassword, email });
  if (savedUser) {
    return res
      .status(201)
      .json({ status: 201, message: 'User successfully created! You can log in now.' });
  }
};

export const logInUser: RequestHandler = async (req, res) => {
  const { error, value } = userLogInSchema.validate(req.body);
  if (error) {
    return res.status(422).json({ status: 422, message: error.message });
  }
  const { username, password } = value;
  const user = await findUserBy({
    username,
  });
  if (!user) {
    return res.status(404).json({ status: 404, message: 'Invalid username or password' });
  }
  const passwordValid = await compare(password, user.password);
  if (!passwordValid) {
    return res.status(401).json({ status: 401, message: 'Invalid username or password' });
  }
  //TBH im doing it with JWT access token without refresh only because i want to host it on free hostings without custom domain
  const accessToken = jwt.sign({ username }, process.env.JWT_TOKEN_SECRET as string);
  return res.status(200).json({ status: 200, message: 'Sucessfully logged in!', jwt: accessToken });
};
