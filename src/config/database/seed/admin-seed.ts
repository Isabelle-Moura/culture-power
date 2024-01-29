import "dotenv/config";
import { AdminModel } from "../../../modules/admin/model/admin.model";
import { HashBcrypt } from "../../../modules/admin/utils/hasher.bcrypt";
import { MongoConnection } from "../db-connection";

(async function AdminSeeder() {
   await MongoConnection.connect();
   const hasher = new HashBcrypt();
   await AdminModel.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: await hasher.encrypt("admin_here"),
   });
})();
