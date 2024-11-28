import { ProductService } from "../services/product.service";
import { ProductDto } from "../types/interfaces/product/product-dto";

export class ProductManager {
  private productRepository: ProductService;

  constructor() {
    this.productRepository = new ProductService();
  }

  fetchAllProducts(): ProductDto[] {
    return this.productRepository.getAllProducts();
  }

  fetchProductById(id: number): ProductDto {
    const product = this.productRepository.getProductById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
}
