import { UserRole } from "../../../enum/roles";

export interface IUser extends Document {
   _id?: string;
   name: string;
   email: string;
   password: string;
   photo: string;
   role: UserRole;
}
