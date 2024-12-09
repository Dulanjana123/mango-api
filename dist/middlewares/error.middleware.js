"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({
        statusCode: status,
        isSuccess: false,
        errorMessages: [message],
        result: null,
    });
};
exports.errorMiddleware = errorMiddleware;
