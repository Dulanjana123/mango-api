"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.getAllOrders = void 0;
const order_manager_1 = require("../managers/order.manager");
const orderManager = new order_manager_1.OrderManager();
const getAllOrders = (req, res, next) => {
    try {
        const userId = req.query.userId; // Get userId from query parameter
        const searchString = req.query.searchString;
        const status = req.query.status;
        const pageNumber = parseInt(req.query.pageNumber, 10) || 1;
        const pageSize = parseInt(req.query.pageSize, 10) || 5;
        //const orders = orderManager.fetchOrdersByUserId(userId);
        let orders = orderManager.fetchAllOrders();
        if (userId) {
            orders = orders.filter(order => order.applicationUserId === userId);
        }
        if (searchString) {
            const searchLower = searchString.toLowerCase();
            orders = orders.filter(order => order.pickupName.toLowerCase().includes(searchLower) ||
                order.pickupPhoneNumber.toLowerCase().includes(searchLower) ||
                order.pickupEmail.toLowerCase().includes(searchLower));
        }
        if (status) {
            orders = orders.filter(order => order.status === status);
        }
        // Pagination
        const totalRecords = orders.length;
        const paginatedOrders = orders.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
        const pagination = {
            currentPage: pageNumber,
            pageSize: pageSize,
            totalRecords: totalRecords,
        };
        // Add pagination metadata to response headers
        res.setHeader("X-Pagination", JSON.stringify(pagination));
        res.status(200).json({
            statusCode: 200,
            isSuccess: true,
            errorMessages: [],
            result: paginatedOrders,
            pagination,
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
