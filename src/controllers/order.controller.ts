import { Request, Response, NextFunction } from "express";
import { OrderManager } from "../managers/order.manager";
import { Pagination } from "../types/interfaces/Pagination/pagination";
import { ValidationError } from "../types/models/ValidationError";
import { NotFoundError } from "../types/models/NotFoundError";

const orderManager = new OrderManager();

export const getAllOrders = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.query.userId as string | undefined; // take userId from query parameter
    const searchString = req.query.searchString as string | undefined;
    const status = req.query.status as string | undefined;
    const pageNumber = parseInt(req.query.pageNumber as string, 10) || 1;
    const pageSize = parseInt(req.query.pageSize as string, 10) || 5;

    //const orders = orderManager.fetchOrdersByUserId(userId);
    let orders = orderManager.fetchAllOrders();

    if (userId) {
      orders = orders.filter(order => order.applicationUserId === userId);
    }

    if (searchString) {
      const searchLower = searchString.toLowerCase();
      orders = orders.filter(order =>
        order.pickupName.toLowerCase().includes(searchLower) ||
        order.pickupPhoneNumber.toLowerCase().includes(searchLower) ||
        order.pickupEmail.toLowerCase().includes(searchLower)
      );
    }

    if (status) {
      orders = orders.filter(order => order.status === status);
    }

    // pagination
    const totalRecords = orders.length;
    const paginatedOrders = orders.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

    const pagination: Pagination = {
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
  } catch (error) {
    next(error);
  }
};

export const getOrderById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderId = parseInt(req.params.id, 10);

    if (isNaN(orderId)) {
      throw new ValidationError('Invalid order ID');
    }

    const order = orderManager.fetchOrderById(orderId);

    if (!order) {
      throw new NotFoundError(`Order with ID ${orderId} not found`);
    }

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

export const getDashboardOrders = (req: Request, res: Response, next: NextFunction) => {
  try {
    let orders = orderManager.fetchAllOrders();
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
