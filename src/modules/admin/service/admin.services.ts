import { AdminRepository } from "../repository/admin.repository";
import { AdminDto } from "../dto/admin.dto";
import { IAdminService } from "./admin.services.interface";
import { HashBcrypt } from "../utils/hasher.bcrypt";

export class AdminService implements IAdminService {
   constructor(private repository: AdminRepository) {}

   async loginAdmin(email: string, password: string): Promise<AdminDto> {
      try {
         const adminEmail = await this.repository.findAdminEmail(email);

         if (!adminEmail) {
            throw new Error("Invalid credentials.");
         }

         const passwordMatch = await HashBcrypt.compare(password, adminEmail.password);

         if (!passwordMatch) {
            throw new Error("Invalid credentials.");
         }

         return this.repository.loginAdmin(adminEmail.email, password)

      } catch (error: any) {
         throw new Error("Failed to login. " + error.message);
      }
   }
}
