"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
const product_service_1 = require("../services/product.service");
class ProductManager {
    constructor() {
        this.productRepository = new product_service_1.ProductService();
    }
    fetchAllProducts() {
        return this.productRepository.getAllProducts();
    }
    fetchProductById(id) {
        const product = this.productRepository.getProductById(id);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }
}
exports.ProductManager = ProductManager;
