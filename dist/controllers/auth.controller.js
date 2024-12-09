"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_manager_1 = require("../managers/auth.manager");
const ValidationError_1 = require("../types/models/ValidationError");
const login = (req, res, next) => {
    try {
        const requestPayload = req.body;
        if (!requestPayload.email || !requestPayload.password) {
            throw new ValidationError_1.ValidationError("Email and password are required.");
        }
        const result = auth_manager_1.AuthManager.login(requestPayload);
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
exports.login = login;
