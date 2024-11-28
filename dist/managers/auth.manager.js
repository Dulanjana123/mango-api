"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthManager = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthManager {
    static login(request) {
        const isValid = auth_service_1.AuthService.validateCredentials(request);
        if (!isValid) {
            return null;
        }
        const token = auth_service_1.AuthService.generateToken({ request });
        return { token };
    }
}
exports.AuthManager = AuthManager;
