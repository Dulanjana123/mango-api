import { Request, Response } from "express";
import { AuthManager } from "../managers/auth.manager";
import { UserLoginDto } from "../types/interfaces/authentication/user-login-dto";

export const login = (req: Request, res: Response): void => {
  const requestPayload : UserLoginDto = req.body;

  if (!requestPayload.email || !requestPayload.password) {
    res.status(400).json({ message: "Email and password are required." });
    return;
  }

  const result = AuthManager.login(requestPayload);

  if (!result) {
    res.status(401).json({ message: "Invalid credentials." });
    return;
  }

  res.status(200).json(result);
};

