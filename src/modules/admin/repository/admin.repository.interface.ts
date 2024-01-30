import { IAdmin } from "../dto/admin.dto";

export interface IAdminRepository {
   loginAdmin(email: string, password: string): Promise<IAdmin | null>;
   findAdminEmail(email: string): Promise<IAdmin | string | null>;
}
