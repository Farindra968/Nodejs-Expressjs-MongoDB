import express from 'express';
import { deleteProductByID, getAllProduct, getProductBrandList, getProductBrandItems, getProductbyId, getProductCategoryItems, getProductCategoryList, postProduct, updateProductbyID } from '../controller/productController.js';
import authMiddlewares from '../middlewares/authMiddlewares.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { ADMIN_ROLE, MERCHET_ROLE } from '../constant/role.js';
const router = express.Router();

/// C R U D

// Method: Get [Read Products] 
router.get('/', getAllProduct)

// Method: Get [ Get Product Categories list]
router.get('/category', getProductCategoryList)

// Method: Get [Get Product by Category]
router.get('/category/:categoryItems', getProductCategoryItems)

// Method: Get [Get Product Brand List]
router.get('/brand', getProductBrandList)

// Method: Get [Get Product by Brand]
router.get('/brand/:brandItems', getProductBrandItems)

// Method: Get [Get Product by ID]
router.get('/:id',  getProductbyId)


// Method: Post [Create Products]
// [authMiddlewares,  product can be add by only admin and merchent
router.post('/',  authMiddlewares, roleBasedAuth(MERCHET_ROLE), postProduct)


// Method: Delete [Delete Products] 
// [authMiddlewares, product can be deleted by only admin
router.delete('/:id',authMiddlewares, roleBasedAuth(ADMIN_ROLE), deleteProductByID)


// Method: Put [Update Products] 
// [authMiddlewares,  product can be deleted by only admin and merchent
router.put('/:id', authMiddlewares, roleBasedAuth(MERCHET_ROLE), updateProductbyID)

export default router;