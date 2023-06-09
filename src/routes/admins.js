import express from 'express';
import {
    getAllAdmins,
    deleteAdmin,
    createAdmin,
    updateAdmin,
    findAdminById,
    getAuthAdmin
} from '../controllers/admin';
import { createAdminValidation, updateAdminValidation } from '../validations/admins';


const router = express.Router();

router
    .get('/', getAllAdmins)
    .get('/:uid', getAuthAdmin)
    .post('/', createAdminValidation, createAdmin)
    .put('/:id',updateAdminValidation, updateAdmin)
    .delete('/:id', deleteAdmin)

export default router;