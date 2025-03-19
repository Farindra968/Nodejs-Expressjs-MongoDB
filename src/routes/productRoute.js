import express from 'express';
import { deleteProductByID, getAllProduct, getProductbyId, postProduct, updateProductbyID } from '../controller/productController.js';
import authMiddlewares from '../middlewares/authMiddlewares.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { ADMIN_ROLE } from '../constant/role.js';
const router = express.Router();

/// C R U D

// Method: Get [Read Products] 
router.get('/', getAllProduct)


// Method: Get [Get Product by ID]
router.get('/:id',  getProductbyId)


// Method: Post [Create Products]
router.post('/',  postProduct)


// Method: Delete [Delete Products] 
// [authMiddlewares, roleBasedAuth(ADMIN_ROLE)] product can be deleted by only admin
router.delete('/:id',[authMiddlewares, roleBasedAuth(ADMIN_ROLE)], deleteProductByID)


// Method: Put [Update Products] 
router.put('/:id',  updateProductbyID)

export default router;