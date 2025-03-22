import express from 'express';
import authMiddlewares from '../middlewares/authMiddlewares.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { ADMIN_ROLE, MERCHET_ROLE } from '../constant/role.js';
import { createMerchantUser, updateMerchantUser } from '../controller/userController.js';

const router = express.Router();

router.post('/merchant', authMiddlewares, roleBasedAuth(ADMIN_ROLE), createMerchantUser)

router.put('/merchant/:id', authMiddlewares, roleBasedAuth(ADMIN_ROLE), updateMerchantUser)

export default router;