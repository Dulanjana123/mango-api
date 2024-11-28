import express from "express";
import { getAllProducts, getProductById } from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

// Get all products
router.get("/products", authMiddleware, getAllProducts);

// Get a product by ID
router.get("/products/:id", authMiddleware, getProductById);

export default router;
