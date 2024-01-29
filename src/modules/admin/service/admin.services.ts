import { hash } from "bcrypt";
import { AdminRepository } from "../repository/admin.repository";
import { AdminDto } from "../dto/admin.dto";

export class AdminService {
   constructor(private repository: AdminRepository) {}

   async loginAdmin(email: string, password: string): Promise<AdminDto> {
      const adminEmail = await this.repository.findAdminEmail(email);

      if (!adminEmail) {
         throw new Error("Invalid credentials.");
      }

      const passwordHashed = await hash(password, 10)

      const admin = await this.repository.loginAdmin(adminEmail.email, passwordHashed);
      return admin;
   }
}
