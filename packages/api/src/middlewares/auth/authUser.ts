import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const authUser: RequestHandler = (req, res, next) => {
  const accessToken = req.headers['authorization'];
  const token = accessToken && accessToken.split(' ')[1];
  if (!token) {
    return res.status(401).json({ status: 401, message: 'User not authorized' });
  }
  jwt.verify(token, process.env.JWT_SECRET_TOKEN as string, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ status: 403, message: 'There was a problem with token validation' });
    }
    req.user = user;
    next();
  });
};
