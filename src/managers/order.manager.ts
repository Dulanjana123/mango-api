import { OrderRepository } from "../services/order.service";
import { OrderDto } from "../types/interfaces/order/order-dto";


export class OrderManager {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  fetchAllOrders(): OrderDto[] {
    return this.orderRepository.getAllOrders();
  }

  fetchOrdersByUserId(userId?: string): OrderDto[] {
    if (userId) {
      return this.orderRepository.getOrdersByUserId(userId);
    }
    return this.orderRepository.getAllOrders();
  }

  fetchOrderById(id: number): OrderDto {
    const order = this.orderRepository.getOrderById(id);
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  }
}
