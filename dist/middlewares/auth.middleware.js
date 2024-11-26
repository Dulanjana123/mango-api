"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "your_secret_key";
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Unauthorized" });
        return; // Ensure no further execution
    }
    try {
        jsonwebtoken_1.default.verify(token, SECRET_KEY);
        next(); // Call next() to pass control to the next middleware or route handler
    }
    catch (_b) {
        res.status(401).json({ message: "Invalid token" });
        return;
    }
};
exports.authMiddleware = authMiddleware;
