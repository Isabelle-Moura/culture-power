import { Router } from "express";
import { productFactory } from "../factory/product.factory";
import { uploadPhotoMiddleware } from "../../../middlewares/upload-photo.middleware";
import { isAdminMiddleware } from "../../../middlewares/is-admin.middleware";

export const productRouter = Router()

productRouter.post("/product/new-product", isAdminMiddleware, uploadPhotoMiddleware.single("photo"), productFactory.createProduct.bind(productFactory))
productRouter.patch("/product/update-product/:id", isAdminMiddleware, productFactory.updateProduct.bind(productFactory))
productRouter.get("/product/all-products", productFactory.getAllProducts.bind(productFactory))
productRouter.get("/product/:id", productFactory.getProductById.bind(productFactory))