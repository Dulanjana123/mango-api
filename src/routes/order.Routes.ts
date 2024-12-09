import express from "express";
import { getAllOrders, getDashboardOrders, getOrderById } from "../controllers/order.controller";
import { authMiddleware } from "../middlewares/auth.middleware";


const router = express.Router();

router.get("/paginated", authMiddleware, getAllOrders);

router.get("/:id", authMiddleware, getOrderById);

router.get("/", authMiddleware, getDashboardOrders);

export default router;
