import {products} from "../mockData/products";
import { ProductDto } from "../types/interfaces/product/product-dto";

export class ProductService {
    getAllProducts(): ProductDto[] {
        return products;
    }

    getProductById(id: number): ProductDto | undefined {
        return products.find(product => product.id === id);
    }
}