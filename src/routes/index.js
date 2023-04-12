import express from 'express';
import productRoutes from './products';
import categoryRoutes from './categories';
import adminRoutes from './admins';
import { adminMiddleware } from '../middlewares/admin'

const router = express.Router();

router.use('/products', productRoutes)
router.use('/categories', categoryRoutes)
router.use('/admins', adminMiddleware, adminRoutes )

export default router;