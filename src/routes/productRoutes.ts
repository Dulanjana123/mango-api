import express from "express";
import { getAllProducts, getProductById } from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

// Get all products
//router.get("/productItem", authMiddleware, getAllProducts);
router.get("/productItem", getAllProducts);

// Get a product by ID
//router.get("/productItem/:id", authMiddleware, getProductById);
router.get("/productItem/:id", getProductById);

export default router;
