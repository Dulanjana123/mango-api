"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const users_1 = require("../mockData/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "your_secret_key";
const authenticateUser = (email, password) => {
    const user = users_1.users.find(u => u.email === email && u.password === password);
    if (!user) {
        throw new Error("Invalid credentials");
    }
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
};
exports.authenticateUser = authenticateUser;
