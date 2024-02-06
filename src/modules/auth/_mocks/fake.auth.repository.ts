import { IAdminRepository } from "../../admin/repository/admin.repository.interface";
import { IUserRepository } from "../../user/repository/user.repository.interface";
import { fakeUser, fakeAdmin } from "./fake.auth.model";

export const fakeUserRepository: IUserRepository = {
  findByEmail() {
    
  }
};

export const fakeAdminRepository: IAdminRepository = {
    findAdminEmail() {
        return Promise.resolve()
    }, 
    sendJewelsToUser() {
        return Promise.resolve()        
    }
};
