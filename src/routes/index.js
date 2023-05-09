import express from 'express';
import adminRoutes from './admin';
import adminsRoutes from './admins';
import generalRoutes from './general';
import { adminMiddleware } from '../middlewares/admin'

const router = express.Router();

router.use('/admin', adminMiddleware, adminRoutes);
router.use('/admins', adminsRoutes);
router.use('/general', generalRoutes);


export default router;