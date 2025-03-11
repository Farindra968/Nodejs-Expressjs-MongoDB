import express from 'express';
import { deleteProductByID, getAllProduct, getProductbyId, postProduct, updateProductbyID } from '../controller/productController.js';
const router = express.Router();

/// C R U D

// Method: Get [Read Products] 
router.get('/', getAllProduct)


// Method: Get [Get Product by ID]
router.get('/:id', getProductbyId)


// Method: Post [Create Products]
router.post('/', postProduct)


// Method: Delete [Delete Products] 
router.delete('/:id', deleteProductByID)


// Method: Put [Update Products] 
router.put('/:id', updateProductbyID)

export default router;