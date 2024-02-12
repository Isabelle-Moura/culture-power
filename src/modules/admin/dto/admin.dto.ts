import { UserRole } from "../../../utils/roles/roles";

export interface AdminDto {
   _id?: any;
   role: UserRole;
   name?: string;
   email: string;
   password: string;
}
