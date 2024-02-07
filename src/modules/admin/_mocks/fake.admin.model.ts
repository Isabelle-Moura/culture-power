import { IAdmin } from "../model/admin.model.interface";
import { UserRole } from "../../../enum/roles";

export const fakeAdmin = {
  _id: "1111111111111111111",
  name: "Admin Test",
  email: "admin@test.com",
  password: "admin123",
  role: UserRole.ADMIN,
} as unknown as IAdmin