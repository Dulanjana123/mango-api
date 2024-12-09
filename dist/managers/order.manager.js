"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManager = void 0;
const order_service_1 = require("../services/order.service");
const NotFoundError_1 = require("../types/models/NotFoundError");
class OrderManager {
    constructor() {
        this.orderRepository = new order_service_1.OrderRepository();
    }
    fetchAllOrders() {
        return this.orderRepository.getAllOrders();
    }
    fetchOrdersByUserId(userId) {
        if (userId) {
            return this.orderRepository.getOrdersByUserId(userId);
        }
        return this.orderRepository.getAllOrders();
    }
    fetchOrderById(id) {
        const order = this.orderRepository.getOrderById(id);
        if (!order) {
            throw new NotFoundError_1.NotFoundError(`Order with ID ${id} not found`);
        }
        return order;
    }
}
exports.OrderManager = OrderManager;
