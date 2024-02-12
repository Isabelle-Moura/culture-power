import { expect, describe, it, vi } from "vitest";
import { fakeUserService } from "../../user/_mocks/fake-user.services";
import { fakeProductService } from "../_mocks/fake.product.services";
import { ProductController } from "./product.controller";
import { fakeRequest, fakeResponse } from "../../_mocks/fake-req-res";
import { fakeProduct, fakeProductsArray } from "../_mocks/fake.product.model";

const productController = new ProductController(fakeProductService, fakeUserService);
const req = fakeRequest();
const res = fakeResponse();

describe("ProductController", () => {
   describe("findAllAvailableProducts", () => {
      it("Should return an array of products.", async () => {
         await productController.findAllAvailableProducts(req, res);
         expect(res.json).toHaveBeenCalledWith(fakeProductsArray);
      });

      it("Should return an status 200.", async () => {
         await productController.findAllAvailableProducts(req, res);
         expect(res.status).toHaveBeenCalledWith(200);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "findAllAvailableProducts").mockImplementation(() => Promise.reject("Cannot get products."));
         await productController.findAllAvailableProducts(req, res);
         expect(res.status).toHaveBeenCalledWith(500);
      });
   });

   describe("createProduct", () => {
      it("Should return a product.", async () => {
         await productController.createProduct(req, res);
         expect(res.json).toHaveBeenCalledWith(fakeProduct);
      });

      it("Should return an status 201.", async () => {
         await productController.createProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(201);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "createProduct").mockImplementation(() => Promise.reject("Cannot create product."));
         await productController.createProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(500);
      });
   });

   describe("updateProduct", () => {
      it("Should return a product.", async () => {
         await productController.updateProduct(req, res);
         expect(res.json).toHaveBeenCalledWith(fakeProduct);
      });

      it("Should return an status 200.", async () => {
         await productController.updateProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(200);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "updateProduct").mockImplementation(() => Promise.reject("Cannot update product."));
         await productController.updateProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(500);
      });
   });

   describe("findById", () => {
      it("Should return a product.", async () => {
         await productController.findById(req, res);
         expect(res.json).toHaveBeenCalledWith(fakeProduct);
      });

      it("Should return an status 200.", async () => {
         await productController.findById(req, res);
         expect(res.status).toHaveBeenCalledWith(200);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "findById").mockImplementation(() => Promise.reject("Cannot get product."));
         await productController.findById(req, res);
         expect(res.status).toHaveBeenCalledWith(500);
      });
   });

   describe("redeemProduct", () => {
      it("Should return a product.", async () => {
         await productController.redeemProduct(req, res);
         expect(res.json).toHaveBeenCalledWith(fakeProduct);
      });

      it("Should return an status 200.", async () => {
         await productController.redeemProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(200);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "redeemProduct").mockImplementation(() => Promise.reject("Cannot redeem product."));
         await productController.redeemProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(500);
      });
   });
});
