import { NextFunction, Request, Response } from "express";
import { AuthManager } from "../managers/auth.manager";
import { UserLoginDto } from "../types/interfaces/authentication/user-login-dto";
import { ValidationError } from "../types/models/ValidationError";

export const login = (req: Request, res: Response, next: NextFunction): void => {

  try{

    const requestPayload : UserLoginDto = req.body;

    if (!requestPayload.email || !requestPayload.password) {
      throw new ValidationError("Email and password are required.");
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
  }

  catch (error) {
    next(error);
  }
};




