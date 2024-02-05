import { UserModel } from "../../user/model/user.model";
import { UserRepository } from "../../user/repository/user.repository";
import { UserService } from "../../user/service/user.services";
import { ProductController } from "../controller/product.controller";
import { ProductModel } from "../model/product.model";
import { ProductRepository } from "../repository/product.repository";
import { ProductService } from "../service/product.services";

class ProductFactory {
   static getInstance() {
      const productRepository = new ProductRepository(ProductModel, UserModel);
      const userRepository = new UserRepository(UserModel);
      const productService = new ProductService(productRepository, userRepository);
      const userService = new UserService(userRepository);
      const controller = new ProductController(productService, userService);
      return controller;
   }
}

export const productFactory = ProductFactory.getInstance();
