import express from 'express';
import { deleteCategory,
createCategory, updateCategory, 
findCategoryById  } from '../controllers/category';
import { createCategoryValidation, updateCategoryValidation } from '../validations/categories';


const router = express.Router();

router
    .get('/:id', findCategoryById)
    .post('/', createCategoryValidation, createCategory)
    .put('/:id',updateCategoryValidation, updateCategory)
    .delete('/:id', deleteCategory)

export default router;