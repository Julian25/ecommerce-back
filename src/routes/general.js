import express from 'express';
import { getAllProducts, getProductById } from '../controllers/product';
import { getAllCategories } from '../controllers/category';

const router = express.Router();

router
    .get('/', getAllProducts)
    .get('/:id', getProductById)
    .get('/', getAllCategories)

export default router;