import { ErrorsResponse } from "../../../utils/errors/errors.response";
import { IUserRepository } from "../../user/repository/user.repository.interface";
import { IProduct } from "../model/product.model.interface";
import { IProductRepository } from "../repository/product.repository.interface";
import { IProductService } from "./product.services.interface";

export class ProductService implements IProductService {
   constructor(private repository: IProductRepository, private userRepository: IUserRepository) {}

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
      };

      return this.repository.createProduct(information);
   }

   async updateProduct(productId: string, newData: IProduct): Promise<IProduct | null> {
      return this.repository.updateProduct(productId, newData);
   }

   async redeemProduct(userId: string, productId: string): Promise<IProduct | null> {
      const user = await this.userRepository.getUserById(userId);
      const product = await this.repository.findById(productId);
      console.log("User:", user);
      console.log("Product:", product);

      if (!user || !product) {
         throw ErrorsResponse.notFound();
      }

      if (user.jewelsAmount < product.value) {
         throw ErrorsResponse.insufficientFunds();
      }

      const redeemedProduct = await this.repository.redeemProduct(user, product);

      return redeemedProduct;
   }
}
