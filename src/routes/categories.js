import express from 'express';
import { getAllCategories, deleteCategory,
createCategory, updateCategory, 
findCategoryById  } from '../controllers/category';
import { createCategoryValidation, updateCategoryValidation } from '../validations/categories';


const router = express.Router();

router
    .get('/', getAllCategories)
    .get('/:id', findCategoryById)
    .post('/', createCategoryValidation, createCategory)
    .put('/:id',updateCategoryValidation, updateCategory)
    .delete('/:id', deleteCategory)

export default router;