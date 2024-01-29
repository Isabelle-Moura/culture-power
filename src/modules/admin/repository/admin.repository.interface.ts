import { IAdmin } from "../model/admin.model.interface";

export interface IAdminRepository {
   loginAdmin(email: string, password: string): Promise<IAdmin | null>;
   findAdminEmail(email: string): Promise<IAdmin | string | null>;
}
