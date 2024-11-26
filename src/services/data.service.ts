import { products } from "../mockData/products";


export const getPaginatedData = (page: number, limit: number, filter: string) => {
  const filteredProducts = products.filter(product => product.name.includes(filter));
  const start = (page - 1) * limit;
  const paginatedProducts = filteredProducts.slice(start, start + limit);

  return {
    data: paginatedProducts,
    total: filteredProducts.length,
    page,
    limit
  };
};
