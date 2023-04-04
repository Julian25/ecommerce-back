import express from 'express';
import { getAllProducts, 
    deleteProductById, createProduct,
    updateProduct, getProductById } from '../controllers/product';


const router = express.Router();

router
    .get('/', getAllProducts)
    .get('/:id', getProductById)
    .post('/', createProduct)
    .put('/:id', updateProduct)
    .delete('/:id', deleteProductById)

export default router;