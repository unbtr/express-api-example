import { Router } from 'express';
import { index } from '../controllers/products';

const router = Router();

router.get('/', index);

export default router;
