import express from 'express';
import { createUser, deleteUser, getAllUser, getUserbyID, updaeUser } from '../controller/userController.js';
import authMiddlewares from '../middlewares/authMiddlewares.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { ADMIN_ROLE } from '../constant/role.js';

const router = express.Router();

// Method Get | get user data
// [authMiddlewares, roleBasedAuth(ADMIN_ROLE)] user data can be access by only admin
router.get('/', [authMiddlewares, roleBasedAuth(ADMIN_ROLE)], getAllUser); 


/// Method Get | Get single user data
// [authMiddlewares, roleBasedAuth(ADMIN_ROLE)] user data can be access by only admin
router.get('/:id', [authMiddlewares, roleBasedAuth(ADMIN_ROLE)], getUserbyID)

/// Method Post | Add User data
// [authMiddlewares, roleBasedAuth(ADMIN_ROLE)] user data can be access by only admin
router.post('/', [authMiddlewares, roleBasedAuth(ADMIN_ROLE)], createUser)

/// Method put | Update Userdata
// [authMiddlewares, roleBasedAuth(ADMIN_ROLE)] user data can be access by only admin
router.put('/:id',  updaeUser)

/// Method delete | Delete user data
// [authMiddlewares, roleBasedAuth(ADMIN_ROLE)] user data can be access by only admin
router.delete('/:id', [authMiddlewares, roleBasedAuth(ADMIN_ROLE)], deleteUser)

export default router;