import { RequestHandler } from 'express';

export const index: RequestHandler = (req, res, next) => {
  return res.json({ value: 'products' });
};

export const store: RequestHandler = (req, res, next) => {
  return res.json({ value: 'create' });
};
