import { RequestHandler } from 'express';
import Product from '../models/product';

const currentID = 1;
const products: Product[] = [];

export const list: RequestHandler = (req, res, next) => res.json({ products });

export const store: RequestHandler = (req, res, next) => {
  const name = (req.body as { name: string }).name;
  const price = (req.body as { price: number }).price;
  const product = new Product(currentID, name, price);
  res.status(201).json({ message: 'created', product });
};

export const update: RequestHandler<{ product: string }> = (req, res, next) => {
  res.json({ message: 'updated' });
};

export const destroy: RequestHandler = (req, res, next) => {
  res.json({ message: 'deleted' });
};
