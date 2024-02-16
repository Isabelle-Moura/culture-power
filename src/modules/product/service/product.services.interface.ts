import { IUser } from "../../user/model/user.model.interface";
import { IProduct } from "../model/product.model.interface";

export interface IProductService {
   findAllAvailableProducts(): Promise<IProduct[] | null>;
   findById(productId: string): Promise<IProduct | null>;
   createProduct(product: IProduct | string, photo?: string): Promise<IProduct | null>;
   updateProduct(productId: string, newData: IProduct | string): Promise<IProduct | null>;
   redeemProduct(userId: IUser | string, productId: IProduct | string): Promise<IProduct | null>;
}
