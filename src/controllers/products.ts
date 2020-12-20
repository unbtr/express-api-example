import { RequestHandler } from 'express';

export const index: RequestHandler = (req, res, next) => {
  return res.json({ value: 'products' });
};
