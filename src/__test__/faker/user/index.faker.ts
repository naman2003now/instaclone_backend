import { faker } from "@faker-js/faker";

export default function getFakeUser() {
  const user = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    bio: faker.lorem.paragraph(),
    profileImage:
      Math.floor(Math.random() * 5) !== 0
        ? `${faker.image.people(400, 400)}?random=${Date.now()}`
        : undefined,
    username: "",
  };

  user.username = faker.internet.userName(
    user.name.split(" ")[0],
    user.name.split(" ")[1],
  );
  return user;
}
