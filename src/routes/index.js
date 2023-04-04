import express from 'express';
import productRoutes from './products';
import categoryRoutes from './categories';

const router = express.Router();

router
    .use('/products', productRoutes)
    .use('/categories', categoryRoutes)

export default router;