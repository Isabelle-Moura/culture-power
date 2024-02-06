import { IUser } from "../../user/model/user.model.interface";
import { IProduct } from "../model/product.model.interface";

export interface IProductService {
   findAllAvailableProducts(): Promise<IProduct[]>;
   findById(productId: string): Promise<IProduct | null>;
   createProduct(product: IProduct, photo?: string): Promise<IProduct>;
   updateProduct(productId: string, newData: IProduct): Promise<IProduct | null>;
   redeemProduct(userId: IUser | string, productId: IProduct | string): Promise<IProduct | null>;
}
