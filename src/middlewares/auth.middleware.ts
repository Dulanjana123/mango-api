import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return; 
  }

  try {
    jwt.verify(token, SECRET_KEY);
    next(); 
  } catch {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};
