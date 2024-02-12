import { UserRole } from "../../../utils/roles/roles";

export interface IAdmin extends Document {
   _id?: any;
   name?: string;
   email: string;
   password: string;
   role: UserRole.ADMIN;
}
