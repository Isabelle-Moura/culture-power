import { Model } from "mongoose";
import { IProduct } from "../model/product.model.interface";
import { IProductRepository } from "./product.repository.interface";
import { IUser } from "../../user/model/user.model.interface";

export class ProductRepository implements IProductRepository {
   constructor(private model: Model<IProduct>, private userModel: Model<IUser>) {}

   async findById(productId: string): Promise<IProduct | null> {
      return this.model.findById(productId);
   }

   async findAllAvailableProducts(): Promise<IProduct[]> {
      return this.model.find({ quantity: { $gt: 0 } });
   }

   async createProduct(product: IProduct): Promise<IProduct> {
      return this.model.create(product);
   }

   async updateProduct(productId: string, newData: IProduct): Promise<IProduct | null> {
      return this.model.findByIdAndUpdate(productId, {
         $set: newData,
      });
   }

   async redeemProduct(user: IUser, product: IProduct): Promise<any> {
      const updateUser = await this.userModel.updateOne(
         { _id: user._id },
         {
            $push: { products: product._id },
            $inc: { jewelsAmount: -product.value },
         }
      );

      const updateProduct = await this.model.updateOne(
         { _id: product._id },
         {
            $inc: { quantity: -1 },
         }
      );

      if (updateUser && updateProduct) {
         return product;
      }
   }
}
