import { AdminDto } from "../dto/admin.dto";

export interface IAdminService {
   loginAdmin(email: string, password: string): Promise<AdminDto | null>;
}