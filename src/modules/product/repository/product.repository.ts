import { Model } from "mongoose";
import { IProduct } from "../model/product.model.interface";
import { IProductRepository } from "./product.repository.interface";

export class ProductRepository implements IProductRepository {
   constructor(private model: Model<IProduct>) {}
   async findById(productId: string): Promise<IProduct | null> {
      return this.model.findById(productId);
   }

   async findAllAvailableProducts(): Promise<IProduct[]> {
      return this.model.find({ amount: { $gt: 0 } });
   }

   async createProduct(product: IProduct): Promise<IProduct> {
      return this.model.create(product);
   }

   async updateProduct(productId: string, newData: IProduct): Promise<IProduct | null> {
      return this.model.findByIdAndUpdate(productId, {
         $set: newData,
      });
   }
}
