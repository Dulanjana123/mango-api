"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = void 0;
const product_manager_1 = require("../managers/product.manager");
const productManager = new product_manager_1.ProductManager();
const getAllProducts = (req, res, next) => {
    try {
        const products = productManager.fetchAllProducts();
        res.status(200).json(products);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = (req, res, next) => {
    try {
        const productId = parseInt(req.params.id, 10);
        const product = productManager.fetchProductById(productId);
        res.status(200).json(product);
    }
    catch (error) {
        next(error);
    }
};
exports.getProductById = getProductById;
