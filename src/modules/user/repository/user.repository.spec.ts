import { expect, describe, it, vi } from "vitest";
import { fakeUser, fakeUserModel, fakeUsersArray } from "../_mocks/fake.user.model";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository(fakeUserModel)

describe("UserRepository", () => {
    describe("getAll.", () => {
        it("Should return an array of users.", async () => {
            const users = await userRepository.getAll();
            expect(users).toEqual(fakeUsersArray);
        })
    
        it("Should return an error if no user is found.", async () => {
            vi.spyOn(userRepository, "getAll").mockRejectedValue(new Error("Users not found."));
            await expect(userRepository.getAll()).rejects.toThrowError("Users not found.");
        })
    })

    describe("createUser", () => {
        it("Should return an user.", async () => {
            expect(await userRepository.createUser(fakeUser)).toEqual(fakeUserModel);            
        })

        it("Should return an error if not able to create user.", async () => {
            vi.spyOn(userRepository, "createUser").mockRejectedValue(new Error("Cannot create user."));
            await expect(userRepository.createUser(fakeUser)).rejects.toThrowError("Cannot create user.");
        })
    })

    describe("getUserById", () => {
        it("Should return an user by id.", async () => {
            const user = await userRepository.getUserById(fakeUser._id);
            expect(user).toEqual(fakeUserModel);
        })  
        
        it("Should return an error if no user is found.", async () => {
            vi.spyOn(userRepository, "getUserById").mockRejectedValue(new Error("User not found."));
            await expect(userRepository.getUserById("50")).rejects.toThrowError("User not found.");
        })
    })

    describe("findByEmail", () => {
        it("Should return an user by e-mail.", async () => {
            const user = await userRepository.findByEmail(fakeUser.email);
            expect(user).toEqual(fakeUserModel);
        })

        it("Should return an error if no user is found.", async () => {
            vi.spyOn(userRepository, "findByEmail").mockRejectedValue(new Error("User not found."));
            await expect(userRepository.findByEmail("batata@potato.com")).rejects.toThrowError("User not found.");
        })
    })
})