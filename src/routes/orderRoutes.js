import express from "express"
import { getAllOrders } from "../controller/orderController";

const router = express.Router();

router.get("/", getAllOrders)

export default router