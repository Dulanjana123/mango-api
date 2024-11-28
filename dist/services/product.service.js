"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const products_1 = require("../mockData/products");
class ProductService {
    getAllProducts() {
        return products_1.products;
    }
    getProductById(id) {
        return products_1.products.find(product => product.id === id);
    }
}
exports.ProductService = ProductService;
