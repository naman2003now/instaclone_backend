import { faker } from "@faker-js/faker";

export default function getFakeUser() {
  const user = {
    name: faker.name.fullName(),
    bio: faker.lorem.paragraph(),
    username: "",
  };
  user.username = faker.internet.userName(user.name);
  return user;
}
