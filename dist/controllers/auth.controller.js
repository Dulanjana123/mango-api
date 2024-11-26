"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_service_1 = require("../services/auth.service");
const login = (req, res) => {
    const { email, password } = req.body;
    try {
        const token = (0, auth_service_1.authenticateUser)(email, password);
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
};
exports.login = login;
