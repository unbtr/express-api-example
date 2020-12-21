import { Router } from 'express';
import { index, store } from '../controllers/products';

const router = Router();

router.get('/', index);

router.get('/create', store);

export default router;
