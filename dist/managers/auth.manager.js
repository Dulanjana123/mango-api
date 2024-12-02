"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthManager = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthManager {
    static login(request) {
        const user = auth_service_1.AuthService.validateCredentials(request);
        if (!user) {
            return null;
        }
        // Generate the token with additional fields
        const token = auth_service_1.AuthService.generateToken({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role || "user", // Default role 
        });
        return { email: user.email, token };
    }
}
exports.AuthManager = AuthManager;
