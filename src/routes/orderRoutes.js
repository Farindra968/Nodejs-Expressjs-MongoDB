import express from "express"
import { checkOutOrder, createOrder, deleteOrder, getAllOrders, getOrderByID, getOrderByUser, updateOrderStatus } from "../controller/orderController.js";
import {ADMIN_ROLE} from "../constant/role.js"
import authMiddleware from "../middlewares/authMiddlewares.js"
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();

router.get("/", authMiddleware, roleBasedAuth(ADMIN_ROLE), getAllOrders);

router.get('/user', authMiddleware, getOrderByUser)

router.get("/user/:id", authMiddleware, getOrderByID)

router.post("/", authMiddleware, createOrder)

router.put("/:id", authMiddleware, roleBasedAuth(ADMIN_ROLE), updateOrderStatus)

router.delete("/", authMiddleware, roleBasedAuth(ADMIN_ROLE), deleteOrder)

router.post("/:id/checkout", authMiddleware, checkOutOrder)

export default router