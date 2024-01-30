import "dotenv/config";
import { AdminModel } from "../../../modules/admin/model/admin.model";
import { HashBcrypt } from "../../../modules/admin/utils/hasher.bcrypt";
import { MongoConnection } from "../db-connection";

(async function AdminSeeder() {
   await MongoConnection.connect();
   await AdminModel.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: await HashBcrypt.encrypt("admin_here"),
   });
})();
