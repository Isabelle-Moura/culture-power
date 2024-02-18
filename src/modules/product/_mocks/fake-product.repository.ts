import { IProductRepository } from "../repository/product.repository.interface";
import { fakeProduct, fakeProducts } from "./fake-product";

export const fakeProductRepository = {
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
} as unknown as IProductRepository;

fakeProductRepository.findAllAvailableProducts();
