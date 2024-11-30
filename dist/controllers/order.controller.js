"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.getAllOrders = void 0;
const order_manager_1 = require("../managers/order.manager");
const orderManager = new order_manager_1.OrderManager();
const getAllOrders = (req, res, next) => {
    try {
        const userId = req.query.userId; // Get userId from query parameter
        const orders = orderManager.fetchOrdersByUserId(userId);
        res.status(200).json({
            statusCode: 200,
            isSuccess: true,
            errorMessages: [],
            result: orders,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res, next) => {
    try {
        const orderId = parseInt(req.params.id, 10);
        const order = orderManager.fetchOrderById(orderId);
        res.status(200).json({
            statusCode: 200,
            isSuccess: true,
            errorMessages: [],
            result: order,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getOrderById = getOrderById;
