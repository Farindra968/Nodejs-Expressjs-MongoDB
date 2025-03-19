import express from 'express';
import { createUser, deleteUser, getAllUser, getUserbyID, updaeUser } from '../controller/userController.js';
import authMiddlewares from '../middlewares/authMiddlewares.js';

const router = express.Router();

// Method Get | get user data
router.get('/', getAllUser); 
router.post('/test', authMiddlewares, (req, res) => {
    res.send('Test authToken is valid');
});


/// Method Get | Get single user data
router.get('/:id', getUserbyID)

/// Method Post | Add User data
router.post('/', createUser)

/// Method put | Update Userdata
router.put('/:id', updaeUser)

/// Method delete | Delete user data
router.delete('/:id', deleteUser)

export default router;