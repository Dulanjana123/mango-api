import { Request, Response } from "express";
import { AuthManager } from "../managers/auth.manager";

export const login = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required." });
    return;
  }

  const result = AuthManager.login(email, password);

  if (!result) {
    res.status(401).json({ message: "Invalid credentials." });
    return;
  }

  res.status(200).json(result);
};

