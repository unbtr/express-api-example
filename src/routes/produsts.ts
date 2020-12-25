import { Router } from 'express';
import { index, store, update, destroy } from '../controllers/products';

const router = Router();

router.get('/', index);

router.post('/', store);

router.patch('/:product', update);

router.delete('/:product', destroy);

export default router;
