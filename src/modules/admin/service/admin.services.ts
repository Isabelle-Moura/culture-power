import { hash } from "bcrypt";
import { IAdmin } from "../model/admin.model.interface";
import { AdminRepository } from "../repository/admin.repository";

export class AdminService {
   constructor(private repository: AdminRepository) {}

   async loginAdmin(email: string, password: string): Promise<IAdmin | null> {
      const adminEmail = await this.repository.findAdminEmail(email);

      if (!adminEmail) {
         throw new Error("Invalid credentials");
      }

      const information: IAdmin = {
         ...adminEmail,
         password: await hash(adminEmail?.password, 10),
      };

      const admin = await this.repository.loginAdmin(email, password);
      return admin;
   }
}
