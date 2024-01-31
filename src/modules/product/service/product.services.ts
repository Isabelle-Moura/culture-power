import { IProduct } from "../model/product.model.interface";
import { IProductRepository } from "../repository/product.repository.interface";
import { IProductService } from "./product.services.interface";

export class ProductService implements IProductService {
   constructor(private repository: IProductRepository) {}

   async getAllProducts(): Promise<IProduct[]> {
      return this.repository.findAllAvailableProducts();
   }

   async getProductById(productId: string): Promise<IProduct | null> {
      return this.repository.findById(productId);
   }

   async createProduct(product: IProduct, photo: string): Promise<IProduct> {
      const information: IProduct = {
         ...product,
         photo,
      }

      return this.repository.createProduct(information);
   }

   async updateProduct(productId: string, newData: IProduct): Promise<IProduct | null> {
      return this.repository.updateProduct(productId, newData);
   }
}
