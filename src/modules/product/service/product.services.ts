import { throwError } from "../../../utils/error/error-response";
import { StatusCode } from "../../../utils/status-code/all-status-code";
import { IUser } from "../../user/model/user.model.interface";
import { IUserRepository } from "../../user/repository/user.repository.interface";
import { IProduct } from "../model/product.model.interface";
import { IProductRepository } from "../repository/product.repository.interface";
import { IProductService } from "./product.services.interface";

export class ProductService implements IProductService {
   constructor(private repository: IProductRepository, private userRepository: IUserRepository) {}

   async findAllAvailableProducts(): Promise<IProduct[]> {
      return this.repository.findAllAvailableProducts();
   }

   async findById(productId: string): Promise<IProduct | null> {
      return this.repository.findById(productId);
   }

   async createProduct(product: IProduct, photo: string): Promise<IProduct | null> {
      const information: IProduct = {
         ...product,
         photo,
      };

      return this.repository.createProduct(information);
   }

   async updateProduct(productId: string, newData: IProduct): Promise<IProduct | null> {
      return this.repository.updateProduct(productId, newData);
   }

   async redeemProduct(userId: IUser | string, productId: IProduct | string): Promise<IProduct | null> {
      const user = await this.userRepository.getUserById(userId as unknown as string);
      const product = await this.repository.findById(productId as unknown as string);

      if (!user || !product) {
         throwError("User or product not found.", StatusCode.NOT_FOUND);
      }

      if (user.jewelsAmount < product.value) {
         throwError("Not enough jewels.", StatusCode.BAD_REQUEST);
      }

      const redeemedProduct = await this.repository.redeemProduct(user, product);

      return redeemedProduct;
   }
}
