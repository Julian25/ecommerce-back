import express from 'express';
import productRoutes from './products';
import categoryRoutes from './categories';
import imageRoutes from './images'

const router = express.Router();

router.use('/products', productRoutes)
router.use('/categories', categoryRoutes)
router.use('/images', imageRoutes)

export default router;