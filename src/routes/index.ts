import express from "express";
import { login } from "../controllers/auth.controller";
import productRoutes from "./product.Routes";
import orderRoutes from "./order.Routes";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to the API!" });
  });

router.post("/login", login);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);

export default router;
