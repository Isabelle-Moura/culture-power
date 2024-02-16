import { describe, expect, it, vi, beforeAll } from "vitest";
import { fakeProduct, fakeProducts } from "../../_mocks/fake-product";
import { fakeUser } from "../../../user/_mocks/fake-user";
import { ProductService } from "../product.services";
import { UserRepository } from "../../../user/repository/user.repository";
import { fakeUserModel } from "../../../user/_mocks/fake-user.model";
import { fakeProductRepository } from "../../_mocks/fake-product.repository";
import { IProductService } from "../product.services.interface";

const userRepository = new UserRepository(fakeUserModel);
let productService: IProductService;

describe("ProductService", () => {
   beforeAll(() => {
      productService = new ProductService(fakeProductRepository, userRepository);
   });

   describe("findAllAvailableProducts", async () => {
      it("Should return an array of products.", async () => {
            const products = await productService.findAllAvailableProducts();
            expect(products).toEqual(fakeProducts)
      });

      it("Should return an error if no product is found.", async () => {
            vi.spyOn(fakeProductRepository, "findAllAvailableProducts").mockImplementationOnce(() => Promise.resolve());
            await expect(productService.findAllAvailableProducts()).rejects.toThrow();
      });
   });

   describe("findById", async () => {
      it("Should return an product by id.", async () => {
            const product = await productService.findById(fakeProduct._id);
            expect(product).toEqual(fakeProduct);
      });

      it("Should return an error if no product is found.", async () => {
            vi.spyOn(fakeProductRepository, "findById").mockImplementationOnce(() => Promise.resolve(null))
            await expect(productService.findById(fakeProduct._id)).rejects.toThrow();
      });
   });

   describe("createProduct", async () => {
      it("Should return an new product.", async () => {
            const newProduct = await productService.createProduct(fakeProduct, fakeProduct.photo);
            expect(newProduct).toEqual(fakeProduct);
      });

      it("Should return an error if not able to create product.", async () => {
            vi.spyOn(fakeProductRepository, "createProduct").mockImplementationOnce(() => Promise.resolve(null));
            await expect(productService.createProduct(fakeProduct, fakeProduct.photo)).rejects.toThrow();
      });
   });

   describe("updateProduct", async () => {
      it("Should return an product updated.", async () => {
            const updatedProduct = await productService.updateProduct(fakeProduct._id, fakeProduct);
            expect(updatedProduct).toEqual(fakeProduct)
      });

      it("Should return an error if not able to update product.", async () => {
            vi.spyOn(fakeProductRepository, "updateProduct").mockImplementationOnce(() => Promise.resolve(null));
            await expect(productService.updateProduct(fakeProduct._id, fakeProduct)).rejects.toThrow();
      });
   });

   describe("redeemProduct", async () => {
      it("Should return an product redeemed.", async () => {
            const redeemedProduct = await productService.redeemProduct(fakeUser._id, fakeProduct._id);
            expect(redeemedProduct).toEqual(fakeProduct);
      });

      it("Should return an error if not able to redeem product.", async () => {
            vi.spyOn(fakeProductRepository, "redeemProduct").mockImplementationOnce(() => Promise.resolve(null));
            await expect(productService.redeemProduct(fakeUser._id, fakeProduct._id)).rejects.toThrow();
      });
   });
});
