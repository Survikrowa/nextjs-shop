import type { RequestHandler } from 'express';

export const getCurrentUserSession: RequestHandler = (req, res) => {
  return res.status(200).json({ status: 200, user: req.user });
};
