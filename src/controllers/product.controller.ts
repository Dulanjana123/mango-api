import { Request, Response, NextFunction } from "express";
import { ProductManager } from "../managers/product.manager";

const productManager = new ProductManager();

export const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = productManager.fetchAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = productManager.fetchProductById(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
