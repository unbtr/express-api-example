import { Router } from 'express';
import { list, store, update, destroy } from '../controllers/products';

const router = Router();

router.get('/', list);

router.post('/', store);

router.patch('/:product', update);

router.delete('/:product', destroy);

export default router;
