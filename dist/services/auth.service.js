"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../mockData/users");
const SECRET_KEY = "your_secret_key";
class AuthService {
    static generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    }
    static validateCredentials(request) {
        const user = users_1.users.find(u => u.email === request.email && u.password === request.password);
        return user != undefined;
    }
    static getUserByEmail(email) {
        return users_1.users.find(user => user.email === email);
    }
}
exports.AuthService = AuthService;
