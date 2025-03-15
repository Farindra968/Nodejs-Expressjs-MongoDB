import express from 'express';
import { deleteProductByID, getAllProduct, getProductbyId, postProduct, updateProductbyID } from '../controller/productController.js';
import logger from '../middlewares/logger.js';
const router = express.Router();

/// C R U D

// Method: Get [Read Products] 
router.get('/', getAllProduct)


// Method: Get [Get Product by ID]
router.get('/:id', logger, getProductbyId)


// Method: Post [Create Products]
router.post('/', logger, postProduct)


// Method: Delete [Delete Products] 
router.delete('/:id',logger, deleteProductByID)


// Method: Put [Update Products] 
router.put('/:id', logger, updateProductbyID)

export default router;