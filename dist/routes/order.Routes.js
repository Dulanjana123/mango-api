"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.get("/order", auth_middleware_1.authMiddleware, order_controller_1.getAllOrders);
router.get("/order/:id", auth_middleware_1.authMiddleware, order_controller_1.getOrderById);
exports.default = router;
