"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
// Get all products
router.get("/products", auth_middleware_1.authMiddleware, product_controller_1.getAllProducts);
// Get a product by ID
router.get("/products/:id", auth_middleware_1.authMiddleware, product_controller_1.getProductById);
exports.default = router;
