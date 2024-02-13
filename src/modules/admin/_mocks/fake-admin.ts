import { UserRole } from "../../../utils/roles/roles";
import { fakeObjectIdForAdmin } from "../../_mocks/fake-objectId";
import { IAdmin } from "../model/admin.model.interface";
import { faker } from "@faker-js/faker";

const generateFakeAdmin = () => {
   return {
      _id: fakeObjectIdForAdmin,
      name: "Admin Test",
      email: "admin@test.com",
      password: "admin123",
      role: UserRole.ADMIN,
      createdAt: String(faker.date.past()),
      updatedAt: String(faker.date.past()),
   } as unknown as IAdmin;
};

export const fakeAdmin = generateFakeAdmin();
