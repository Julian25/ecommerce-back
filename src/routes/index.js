import express from 'express';
import adminRoutes from './admin';
import adminsRoutes from './admins';
import { adminMiddleware } from '../middlewares/admin'

const router = express.Router();

router.use('/admin', adminMiddleware, adminRoutes);
router.use('/admins', adminsRoutes);


export default router;