import { Router } from "express";
import { productFactory } from "../factory/product.factory";
import { uploadPhotoMiddleware } from "../../../middlewares/upload-photo.middleware";

export const productRouter = Router()

productRouter.post("/product/new-product", uploadPhotoMiddleware.single("photo"), productFactory.createProduct.bind(productFactory))
productRouter.get("/product/all-products", productFactory.getAllProducts.bind(productFactory))
productRouter.get("/product/:id", productFactory.getProductById.bind(productFactory))
productRouter.patch("/product/update-product/:id", productFactory.updateProduct.bind(productFactory))