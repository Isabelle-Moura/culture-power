import { AdminDto } from "../dto/admin.dto";
import { IAdmin } from "../model/admin.model.interface";

export interface IAdminRepository {
   findAdminEmail(email: string): Promise<AdminDto | string | null>;
   sendJewelsToUser(userId: string): Promise<void>;
}
