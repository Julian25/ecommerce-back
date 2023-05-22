import express from 'express';
import { getAllProducts, getProductById } from '../controllers/product';

const router = express.Router();

router
    .get('/', getAllProducts)
    .get('/:id', getProductById)

export default router;