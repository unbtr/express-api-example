import { Router, Request, Response, NextFunction } from 'express';
import { index } from '../controllers/products';

const router = Router();

router.get('/', index);

export default router;
