"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_manager_1 = require("../managers/auth.manager");
const login = (req, res) => {
    const requestPayload = req.body;
    if (!requestPayload.email || !requestPayload.password) {
        res.status(400).json({
            statusCode: 400,
            isSuccess: false,
            errorMessages: ["Email and password are required."],
            result: null,
        });
        return;
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
};
exports.login = login;
