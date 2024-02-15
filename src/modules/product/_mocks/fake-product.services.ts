import { IProductService } from "../service/product.services.interface";
import { fakeProducts, fakeProduct } from "./fake-product";

export const fakeProductService = {
   findAllAvailableProducts() {
      return Promise.resolve(fakeProducts);
   },
   findById() {
      return Promise.resolve(fakeProduct);
   },
   createProduct() {
      return Promise.resolve(fakeProduct);
   },
   updateProduct() {
      return Promise.resolve(fakeProduct);
   },
   redeemProduct() {
      return Promise.resolve(fakeProduct);
   },
} as unknown as IProductService;

fakeProductService.findAllAvailableProducts();
