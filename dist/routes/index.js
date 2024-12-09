"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const product_Routes_1 = __importDefault(require("./product.Routes"));
const order_Routes_1 = __importDefault(require("./order.Routes"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json({ message: "Welcome to the API!" });
});
router.post("/login", auth_controller_1.login);
router.use("/product", product_Routes_1.default);
router.use("/order", order_Routes_1.default);
exports.default = router;
