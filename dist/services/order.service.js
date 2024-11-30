"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const orders_1 = require("../mockData/orders");
class OrderRepository {
    getAllOrders() {
        return orders_1.orders;
    }
    getOrdersByUserId(userId) {
        return orders_1.orders.filter(order => order.applicationUserId === userId);
    }
    getOrderById(id) {
        return orders_1.orders.find(order => order.orderHeaderId === id);
    }
}
exports.OrderRepository = OrderRepository;
