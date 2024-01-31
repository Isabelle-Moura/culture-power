import { ProductController } from "../controller/product.controller";
import { ProductModel } from "../model/product.model";
import { ProductRepository } from "../repository/product.repository";
import { ProductService } from "../service/product.services";

class ProductFactory {
    static getInstance() {
        const repository = new ProductRepository(ProductModel)
        const service = new ProductService(repository)
        const controller = new ProductController(service)
        return controller
    }
}

export const productFactory = ProductFactory.getInstance()