import "dotenv/config";
import { AdminModel } from "../../../modules/admin/model/admin.model";
import { HashBcrypt } from "../../../utils/bcrypt/hasher.bcrypt";
import { MongoConnection } from "../db-connection";
import { UserRole } from "../../../enum/roles";

(async function AdminSeeder() {
   await MongoConnection.connect();
   await AdminModel.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: await HashBcrypt.encrypt("admin_here"),
      role: UserRole.ADMIN,
   });
})();
