import express from "express"
import { getAllOrders } from "../controller/orderController.js";

const router = express.Router();

router.get("/", getAllOrders)

export default router