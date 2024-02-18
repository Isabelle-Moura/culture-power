import express from "express";
import { productFactory } from "../factory/product.factory";
import { uploadPhotoMiddleware } from "../../../middlewares/upload-photo.middleware";
import { adminVerificationMiddleware } from "../../../middlewares/admin-verification.middleware";
import { authenticateTokenMiddleware } from "../../../middlewares/authenticate-token.middleware";

export const productRouter = express.Router();

productRouter.post(
  "/product/new-product",
  adminVerificationMiddleware,
  uploadPhotoMiddleware.single("photo"),
  productFactory.createProduct.bind(productFactory)
);

productRouter.patch(
  "/product/update-product/:id",
  adminVerificationMiddleware,
  productFactory.updateProduct.bind(productFactory)
);

productRouter.get(
  "/product/all-products",
  productFactory.findAllAvailableProducts.bind(productFactory)
);

productRouter.get(
  "/products/:id",
  productFactory.findById.bind(productFactory)
);

productRouter.post(
  "/product/redeem-product/:productId",
  authenticateTokenMiddleware,
  productFactory.redeemProduct.bind(productFactory)
);
