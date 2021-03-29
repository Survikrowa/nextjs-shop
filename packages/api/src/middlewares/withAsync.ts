import type { NextFunction, Request, RequestHandler, Response } from 'express';

export const withAsync = (routeCallback: RequestHandler) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await routeCallback(req, res, next);
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ status: error.status, message: error.message });
    }
    if (error.name === 'ValidationError') {
      return res.status(422).json({ status: 422, message: error.errors });
    }
    return res.status(500).json({ status: 500, message: error });
  }
};
