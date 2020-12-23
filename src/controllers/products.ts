import { RequestHandler } from 'express';

export const index: RequestHandler = (req, res, next) => {
  return res.json({ value: 'products' });
};

export const store: RequestHandler = (req, res, next) => {
  return res.json({ value: 'create' });
};

export const update: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  res.json({ message: '更新しました' });
};
