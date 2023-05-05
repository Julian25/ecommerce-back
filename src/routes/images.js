import express from 'express';
import { deleteImage } from '../controllers/images';

const router = express.Router();

router
    .delete('/:public_id', deleteImage);

export default router;