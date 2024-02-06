import { IUser } from "../../user/model/user.model.interface";
import { IAdmin } from "../model/admin.model.interface";

export interface IAdminService {
    sendJewelsToUser(token: string, userId: string): Promise<IUser | string>;
    findAdminEmail(email: string): Promise<IAdmin | string>; 
}