import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategory);
