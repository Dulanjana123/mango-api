"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedData = void 0;
const products_1 = require("../mockData/products");
const getPaginatedData = (page, limit, filter) => {
    const filteredProducts = products_1.products.filter(product => product.name.includes(filter));
    const start = (page - 1) * limit;
    const paginatedProducts = filteredProducts.slice(start, start + limit);
    return {
        data: paginatedProducts,
        total: filteredProducts.length,
        page,
        limit
    };
};
exports.getPaginatedData = getPaginatedData;
