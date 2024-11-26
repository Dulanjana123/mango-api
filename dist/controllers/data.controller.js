"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const data_service_1 = require("../services/data.service");
const getData = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const filter = req.query.filter || "";
    const data = (0, data_service_1.getPaginatedData)(page, limit, filter);
    res.status(200).json(data);
};
exports.getData = getData;
