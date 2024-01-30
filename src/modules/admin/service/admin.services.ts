import { AdminRepository } from "../repository/admin.repository";
import { AdminDto } from "../dto/admin.dto";
import { IAdminService } from "./admin.services.interface";
import { HashBcrypt } from "../../../utils/hasher.bcrypt";

export class AdminService implements IAdminService {
   constructor(private repository: AdminRepository) {}
}
