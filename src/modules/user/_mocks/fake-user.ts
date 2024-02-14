import { UserRole } from "../../../utils/roles/roles";
import { fakeObjectId } from "../../_mocks/fake-objectId";
import { faker } from "@faker-js/faker";

const generateFakeImageFile = () => ({
   originalname: `${faker.string.uuid()}.jpg`,
   filename: `${faker.string.uuid()}.jpg`,
   mimetype: "image/jpeg",
   path: `/path/to/images/${faker.string.uuid()}.jpg`,
});

const fakeImageFile = generateFakeImageFile();

const generateFakeUser = () => ({
   _id: fakeObjectId,
   name: `${faker.person.prefix()} ${faker.person.lastName()}`,
   email: faker.internet.email(),
   password: faker.internet.password(),
   photo: fakeImageFile,
   role: UserRole.USER,
   jewelsAmount: faker.number.int({ min: 0, max: 100 }),
   products: faker.helpers.arrayElements([]),
   favoriteProducts: faker.helpers.arrayElements([]),
   createdAt: String(faker.date.past()),
   updatedAt: String(faker.date.past()),
});

export const fakeUser = generateFakeUser();

export const fakeUsers = () => {
   const users = [];
   for (let i = 0; i < 3; i++) {
      users.push(generateFakeUser());
   }
   return users;
};
