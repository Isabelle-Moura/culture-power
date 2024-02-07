import { IAdminService } from "../service/admin.services.interface";
import { fakeAdmin } from "./fake.admin.model";

export const fakeAdminService = {
    sendJewelsToUser() {
        return Promise.resolve(fakeAdmin)
    }, 
    findAdminEmail() {
        return Promise.resolve(fakeAdmin)
    }
  } as any