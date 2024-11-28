import express from "express";
import { login } from "../controllers/auth.controller";
import { getData } from "../controllers/data.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to the API!" });
  });

router.post("/login", login);
router.get("/data", authMiddleware, getData);

export default router;
