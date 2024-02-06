import { IUser } from "../../user/model/user.model.interface";
import { IProduct } from "../model/product.model.interface";
export interface IProductRepository {
   findById(productId: string): Promise<IProduct | null>;
   findAllAvailableProducts(): Promise<IProduct[]>;
   createProduct(product: IProduct): Promise<IProduct>;
   updateProduct(productId: string, newData: IProduct): Promise<IProduct | null>;
   redeemProduct(userId: IUser, productId: IProduct): Promise<any>;
}
