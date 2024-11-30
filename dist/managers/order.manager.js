"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManager = void 0;
const order_service_1 = require("../services/order.service");
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
            throw new Error("Order not found");
        }
        return order;
    }
}
exports.OrderManager = OrderManager;
