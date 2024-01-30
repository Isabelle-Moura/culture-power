import jwt from "jsonwebtoken";
import { env } from "../../../config/dotenv";
import { UserRepository } from "../../user/repository/user.repository";
import { LoginDTO } from "../dto/auth.dto";
import { AdminRepository } from "../../admin/repository/admin.repository";
import { HashBcrypt } from "../../../utils/hasher.bcrypt";
import { IAuthService } from "./auth.services.interface";

export class AuthService implements IAuthService{
   constructor(private userRepository: UserRepository, private adminRepository: AdminRepository) {}

   async userLogin(data: LoginDTO): Promise<any> {
      try {
         const user = await this.userRepository.findByEmail(data.email);

         if (!user || !(await HashBcrypt.compare(data.password ?? "", user.password))) {
          return this.invalidCredentialsResponse();
         }

         const payload = { id: user._id, email: user.email };
         const token = await this.generateToken(payload);

         return { token, user };
      } catch (error) {
         console.error("Error during user login:", error);
         return this.errorResponse("Failed to authenticate user");
      }
   }

   async adminLogin(data: LoginDTO): Promise<any> {
      try {
         const admin = await this.adminRepository.findAdminEmail(data.email);

         if (!admin || !(await HashBcrypt.compare(data.password ?? "", admin.password))) {
            return this.invalidCredentialsResponse();
         }

         const payload = { id: admin._id, email: admin.email };
         const token = await this.generateToken(payload);

         return { token, admin };
      } catch (error) {
         console.error("Error during admin login:", error);
         this.errorResponse("Failed to authenticate admin");
      }
   }

   private invalidCredentialsResponse() {
      return {
         error: true,
         message: "Invalid credentials",
         status: 400,
      };
   }

   private errorResponse(message: string) {
      return {
         error: true,
         message,
         status: 500,
      };
   }
   
   private async generateToken(payload: { id?: string; email: string }) {
      const secretKey = env.JWT_SECRET_KEY;
      const options = { expiresIn: "1h" };
      return jwt.sign(payload, secretKey, options);
   }
}
