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
      }

      return this.repository.createProduct(information);
   }

   async updateProduct(productId: string, newData: IProduct): Promise<IProduct | null> {
      return this.repository.updateProduct(productId, newData);
   }

   async redeemProduct(userId: string, productId: string): Promise<IProduct | null> {
      const user = await this.userRepository.getUserById(userId);
      const product = await this.repository.findById(productId);
  
      if (!user || !product) {
        return ErrorsResponse.notFound(); // Retorna o erro, sem a necessidade de usar await
      }
  
      if (user.jewelsAmount < product.value) {
        return ErrorsResponse.insufficientFunds(); // Retorna o erro, sem a necessidade de usar await
      }
  
      // Atualiza a quantidade de gemas do usuário
      user.jewelsAmount -= product.value;
  
      // Atualiza o array de produtos do usuário
      user.products.push(product._id);
  
      // Atualiza a quantidade do produto
      product.quantity -= 1;
  
      // Salva as alterações no banco de dados
      const redeemedProduct = await this.repository.redeemProduct(user, product);
      //WIP: Parei aqui.
      
      // Retorna o produto resgatado
      return redeemedProduct;
    }
 }