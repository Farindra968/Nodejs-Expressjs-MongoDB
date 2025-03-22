import express from 'express';
import authMiddlewares from '../middlewares/authMiddlewares.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { ADMIN_ROLE, MERCHET_ROLE } from '../constant/role.js';
import { createMerchantUser, deteleUser, getAllUser, getUserByID, updateUser } from '../controller/userController.js';

const router = express.Router();

router.get("/", authMiddlewares, roleBasedAuth(MERCHET_ROLE), getAllUser)

router.get('/:id', authMiddlewares, roleBasedAuth(MERCHET_ROLE), getUserByID)

router.post('/merchant', authMiddlewares, roleBasedAuth(ADMIN_ROLE), createMerchantUser)

router.put('/:id', authMiddlewares, roleBasedAuth(ADMIN_ROLE), updateUser)

router.delete('/:id', authMiddlewares, roleBasedAuth(ADMIN_ROLE), deteleUser)

export default router;