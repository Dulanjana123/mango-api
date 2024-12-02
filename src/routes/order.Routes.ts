import express from "express";
import { getAllOrders, getOrderById } from "../controllers/order.controller";
import { authMiddleware } from "../middlewares/auth.middleware";


const router = express.Router();

router.get("/order", authMiddleware, getAllOrders);

router.get("/order/:id", authMiddleware, getOrderById);

export default router;
