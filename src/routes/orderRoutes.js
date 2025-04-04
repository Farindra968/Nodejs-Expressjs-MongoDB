import express from "express"
import { createOrder, getAllOrders } from "../controller/orderController.js";
import authMiddleware from "../middlewares/authMiddlewares.js"
const router = express.Router();

router.get("/", authMiddleware, getAllOrders);

router.post("/", authMiddleware, createOrder)

export default router