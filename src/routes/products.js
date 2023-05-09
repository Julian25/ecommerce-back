import express from 'express';
import { getAllProducts, 
    deleteProductById, createProduct,
    updateProduct, getProductById } 
from '../controllers/product';
import { createProductValidation, updateProductValidation } from '../validations/products';


const router = express.Router();

router
    .post('/',createProductValidation, createProduct)
    .put('/:id', updateProductValidation, updateProduct)
    .delete('/:id', deleteProductById)

export default router;