import { UserRole } from "../../../utils/roles/roles";
import { fakeObjectId } from "../../_mocks/fake-objectId";
import { faker } from "@faker-js/faker";

const generateFakeUser = () => ({
   _id: fakeObjectId,
   name: `${faker.person.prefix()} ${faker.person.lastName()}`,
   email: faker.internet.email(),
   password: faker.internet.password(),
   photo: faker.image.avatar(),
   role: UserRole.USER,
   jewelsAmount: faker.number.int({ min: 0, max: 10 }),
   products: faker.helpers.arrayElements([]),
   favoriteProducts: faker.helpers.arrayElements([]),
   createdAt: String(faker.date.past()),
   updatedAt: String(faker.date.past()),
});

export const fakeUser = generateFakeUser();

export const fakeUsers = () => {
   for (let i = 0; i < 3; i++) {
      generateFakeUser();
   }
};
