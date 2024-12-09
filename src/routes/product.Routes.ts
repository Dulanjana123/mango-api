import express from "express";
import { getAllProducts, getProductById } from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

// Get all products
//router.get("/productItem", authMiddleware, getAllProducts);
router.get("/", getAllProducts);

// Get a product by ID
//router.get("/productItem/:id", authMiddleware, getProductById);
router.get("/:id", getProductById);

export default router;
