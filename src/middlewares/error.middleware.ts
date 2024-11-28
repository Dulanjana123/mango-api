import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
};

// export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
//   const status = err.status || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(status).json({ error: message });
// };
