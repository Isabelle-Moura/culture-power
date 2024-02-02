import { UserRepository } from "../../user/repository/user.repository";
import { LoginDTO } from "../dto/auth.dto";
import { AdminRepository } from "../../admin/repository/admin.repository";
import { HashBcrypt } from "../../../utils/bcrypt/hasher.bcrypt";
import { IAuthService } from "./auth.services.interface";
import { JwtToken } from "../utils/jwt";
import { ErrorsResponse } from "../../../utils/errors/errors.response";

export class AuthService implements IAuthService {
  constructor(
    private userRepository: UserRepository,
    private adminRepository: AdminRepository
  ) {}

  async userLogin(data: LoginDTO): Promise<any> {
    try {
      const user = await this.userRepository.findByEmail(data.email);

      if (!user) {
        return await ErrorsResponse.invalidCredentials();
      }

      const password = await HashBcrypt.compare(
        data.password ?? "",
        user.password
      );

      if (!password) {
        return await ErrorsResponse.invalidCredentials();
      }

      const payload = { id: user._id, email: user.email, role: user.role };
      const token = await JwtToken.generateToken(payload);

      return { token, user };
    } catch (error) {
      return await ErrorsResponse.unauthorizedAccess();
    }
  }

  async adminLogin(data: LoginDTO): Promise<any> {
    try {
      const admin = await this.adminRepository.findAdminEmail(data.email);
      const password = await HashBcrypt.compare(
        data.password ?? "",
        admin.password
      );

      if (!admin || !password) {
        return await ErrorsResponse.invalidCredentials();
      }

      const payload = { id: admin._id, email: admin.email, role: admin.role };
      const token = await JwtToken.generateToken(payload);

      return { token, admin };
    } catch (error) {
      return await ErrorsResponse.unauthorizedAccess();
    }
  }
}
