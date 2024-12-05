import { orders } from "../mockData/orders";
import { OrderDto } from "../types/interfaces/order/order-dto";

export class OrderRepository {

  getAllOrders(): OrderDto[] {
    return orders;
  }

  getOrdersByUserId(userId: string): OrderDto[] {
    return orders.filter(order => order.applicationUserId === userId);
  }

  getOrderById(id: number): OrderDto | undefined {
    return orders.find(order => order.orderHeaderId === id);
  }
}
