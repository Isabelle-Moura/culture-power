import { IProductRepository } from "../repository/product.repository.interface";
import { fakeProduct, fakeProductsArray } from "./fake.product.model";

export const fakeProductRepository = {
  findById() {
    return Promise.resolve(fakeProduct);
  },
  findAllAvailableProducts() {
    return Promise.resolve(fakeProductsArray);
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
} as unknown as IProductRepository;

fakeProductRepository.findAllAvailableProducts();
