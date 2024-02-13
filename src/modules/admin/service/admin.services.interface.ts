import { IUser } from "../../user/model/user.model.interface";
import { IAdmin } from "../model/admin.model.interface";

export interface IAdminService {
   sendJewelsToUser(userId: string, amount: number): Promise<IUser | null>;
   findAdminByEmail(email: string): Promise<IAdmin | null>;
}
