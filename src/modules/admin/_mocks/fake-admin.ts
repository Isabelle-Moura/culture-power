import { UserRole } from "../../../utils/roles/roles";
import { fakeObjectIdForAdmin } from "../../_mocks/fake-objectId";
import { IAdmin } from "../model/admin.model.interface";

const generateFakeAdmin = () =>
   ({
      _id: fakeObjectIdForAdmin,
      name: "Admin Test",
      email: "admin@test.com",
      password: "admin123",
      role: UserRole.ADMIN,
   } as unknown as IAdmin);

export const fakeAdmin = generateFakeAdmin();
