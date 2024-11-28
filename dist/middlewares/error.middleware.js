"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    res.status(500).json({ message: err.message });
};
exports.errorMiddleware = errorMiddleware;
// export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
//   const status = err.status || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(status).json({ error: message });
// };
