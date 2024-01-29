import { AdminDto } from "../dto/admin.dto";

export interface IAdminRepository {
   loginAdmin(adminData: string): Promise<AdminDto | null>;
   findAdminEmail(email: string): Promise<AdminDto | null>;
}
