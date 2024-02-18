import { expect, describe, it, beforeAll } from "vitest";
import { ProductRepository } from "../product.repository";
import { fakeProductsModel } from "../../_mocks/fake-product.model";
import { fakeUser } from "../../../user/_mocks/fake-user";
import { fakeUserModel } from "../../../user/_mocks/fake-user.model";
import { fakeProduct, fakeProducts } from "../../_mocks/fake-product";
import { IProductRepository } from "../product.repository.interface";
import { fakeObjectIdForProduct } from "../../../_mocks/fake-objectId";

describe("ProductRepository", () => {
   let productRepository: IProductRepository;

   beforeAll(() => {
      productRepository = new ProductRepository(fakeProductsModel, fakeUserModel);
   });

   describe("findAllAvailableProducts", () => {
      it("Should return an array of products.", async () => {
         try {
            const products = await productRepository.findAllAvailableProducts();
            expect(products).toEqual(fakeProducts);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should have called the find method from product's model.", async () => {
         try {
            await productRepository.findAllAvailableProducts();
            expect(fakeProductsModel.find).toHaveBeenCalled();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("findById", () => {
      it("Should return an product by id.", async () => {
         try {
            const product = await productRepository.findById(fakeProduct._id);
            expect(product).toEqual(fakeProduct);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should have called the findById method from product's model.", async () => {
         try {
            await productRepository.findById(fakeProduct._id);
            expect(fakeProductsModel.findById).toHaveBeenCalled();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("createProduct", () => {
      it("Should return an product.", async () => {
         const newProduct = await productRepository.createProduct(fakeProduct);
         expect(newProduct).toEqual(fakeProduct);
      });

      it("Should have called the create method from product's model.", async () => {
         await productRepository.createProduct(fakeProduct);
         expect(fakeProductsModel.create).toHaveBeenCalled();
      });
   });

   describe("updateProduct", () => {
      it("Should return an product updated.", async () => {
         const updatedProduct = await productRepository.updateProduct(fakeObjectIdForProduct, fakeProduct);
         expect(updatedProduct).toEqual(fakeProduct);
      });

      it("Should have called the findByIdAndUpdate method from product's model.", async () => {
         await productRepository.updateProduct(fakeObjectIdForProduct, fakeProduct);
         expect(fakeProductsModel.findByIdAndUpdate).toHaveBeenCalled();
      });
   });

   describe("redeemProduct", () => {
      it("Should return an product.", async () => {
         const product = await productRepository.redeemProduct(fakeUser._id, fakeProduct._id);
         expect(product).toEqual(fakeProduct._id);
      });

      it("Should have called the updateOne method from user's model.", async () => {
         await productRepository.redeemProduct(fakeUser._id, fakeProduct._id);
         expect(fakeUserModel.updateOne).toHaveBeenCalled();
      });
   });
});
