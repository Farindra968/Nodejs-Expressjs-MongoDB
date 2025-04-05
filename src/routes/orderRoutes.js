import express from "express"
import { createOrder, getAllOrders, getOrderByOrderNumber, getOrderByUser } from "../controller/orderController.js";
import {ADMIN_ROLE} from "../constant/role.js"
import authMiddleware from "../middlewares/authMiddlewares.js"
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
const router = express.Router();

router.get("/", authMiddleware, roleBasedAuth(ADMIN_ROLE), getAllOrders);

router.get('/user', authMiddleware, getOrderByUser)

router.get("/:orderId", authMiddleware, getOrderByOrderNumber)

router.post("/", authMiddleware, createOrder)

export default router