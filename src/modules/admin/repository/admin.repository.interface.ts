import { AdminDto } from "../dto/admin.dto";

export interface IAdminRepository {
   findAdminEmail(email: string): Promise<AdminDto | string | null>;
   sendJewelsToUser(userId: string): Promise<void>;
}
