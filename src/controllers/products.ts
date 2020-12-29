import { RequestHandler } from 'express';
import Product from '../models/product';

let index = 1;
const products: Product[] = [];

export const index: RequestHandler = (req, res, next) => {
  return res.json({ value: 'products', products });
};

export const store: RequestHandler = (req, res, next) => {
  return res.json({ value: 'create' });
};

export const update: RequestHandler<{ product: string }> = (req, res, next) => {
  res.json({ message: 'updated' });
};

export const destroy: RequestHandler = (req, res, next) => {
  return res.json({ message: 'delete' });
};
