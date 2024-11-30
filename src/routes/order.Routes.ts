import express from "express";
import { getAllOrders, getOrderById } from "../controllers/order.controller";


const router = express.Router();

router.get("/order", getAllOrders);

router.get("/order/:id", getOrderById);

export default router;
