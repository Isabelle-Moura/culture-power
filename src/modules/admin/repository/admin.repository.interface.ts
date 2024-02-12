import { IUser } from "../../user/model/user.model.interface";
import { IAdmin } from "../model/admin.model.interface";

export interface IAdminRepository {
   findAdminByEmail(email: string): Promise<IAdmin | null>;
   sendJewelsToUser(userId: string): Promise<IUser | null>;
}
