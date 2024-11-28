"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_manager_1 = require("../managers/auth.manager");
const login = (req, res) => {
    const requestPayload = req.body;
    if (!requestPayload.email || !requestPayload.password) {
        res.status(400).json({ message: "Email and password are required." });
        return;
    }
    const result = auth_manager_1.AuthManager.login(requestPayload);
    if (!result) {
        res.status(401).json({ message: "Invalid credentials." });
        return;
    }
    res.status(200).json(result);
};
exports.login = login;
