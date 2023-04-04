import express from 'express';
import { getAllCategories, deleteCategory,
createCategory, updateCategory, 
findCategoryById  } from '../controllers/category';


const router = express.Router();

router
    .get('/', getAllCategories)
    .get('/:id', findCategoryById)
    .post('/', createCategory)
    .put('/:id', updateCategory)
    .delete('/:id', deleteCategory)

export default router;