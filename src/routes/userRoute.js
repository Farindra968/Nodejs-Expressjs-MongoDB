import express from "express";
import authMiddlewares from "../middlewares/authMiddlewares.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ADMIN_ROLE, MERCHET_ROLE } from "../constant/role.js";
import {
  createMerchantUser,
  deteleUser,
  getAllCustomer,
  getAllMerchant,
  getAllUser,
  getUserByID,
  updateUser,
  uploadProfileimg,
} from "../controller/userController.js";

const router = express.Router();

// Get All User
router.get("/", authMiddlewares, roleBasedAuth(ADMIN_ROLE), getAllUser);

// Get All Customer
router.get(
  "/customers",
  authMiddlewares,
  roleBasedAuth(MERCHET_ROLE),
  getAllCustomer
);

// Get All Merchant
router.get(
  "/merchants",
  authMiddlewares,
  roleBasedAuth(ADMIN_ROLE),
  getAllMerchant
);

// Get User By ID
router.get("/:id", authMiddlewares, roleBasedAuth(MERCHET_ROLE), getUserByID);

// Create a new Merchant User
router.post(
  "/merchant",
  authMiddlewares,
  roleBasedAuth(ADMIN_ROLE),
  createMerchantUser
);

// Update User
router.put("/:id", authMiddlewares, updateUser);

// Delete User
router.delete("/:id", authMiddlewares, deteleUser);

router.put("/profile/upload", authMiddlewares, uploadProfileimg);

export default router;
