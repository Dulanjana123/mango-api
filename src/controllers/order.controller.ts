import { Request, Response, NextFunction } from "express";
import { OrderManager } from "../managers/order.manager";

const orderManager = new OrderManager();

export const getAllOrders = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.query.userId as string | undefined; // Get userId from query parameter
    const orders = orderManager.fetchOrdersByUserId(userId);

    res.status(200).json({
      statusCode: 200,
      isSuccess: true,
      errorMessages: [],
      result: orders,
    });
  } catch (error) {
    next(error);
  }
};

export const getOrderById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderId = parseInt(req.params.id, 10);
    const order = orderManager.fetchOrderById(orderId);
    res.status(200).json({
      statusCode: 200,
      isSuccess: true,
      errorMessages: [],
      result: order,
    });
  } catch (error) {
    next(error);
  }
};
