import { Request, Response } from "express";
import { AuthManager } from "../managers/auth.manager";
import { UserLoginDto } from "../types/interfaces/authentication/user-login-dto";

export const login = (req: Request, res: Response): void => {
  const requestPayload : UserLoginDto = req.body;

  if (!requestPayload.email || !requestPayload.password) {
    res.status(400).json({
      statusCode: 400,
      isSuccess: false,
      errorMessages: ["Email and password are required."],
      result: null,
    });
    return;
  }

  const result = AuthManager.login(requestPayload);

  if (!result) {
    res.status(401).json({
      statusCode: 401,
      isSuccess: false,
      errorMessages: ["Invalid credentials."],
      result: null,
    });
    return;
  }

  res.status(200).json({
    statusCode: 200,
    isSuccess: true,
    errorMessages: [],
    result,
  });
};




