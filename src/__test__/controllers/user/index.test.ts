import supertest from "supertest";
import User from "../../../controllers/user";
import App from "../../../app";
import UserModel from "../../../models/user";
import getFakeUser from "../../faker/user/index.faker";

process.env.DATABASE_URL = process.env.DATABASE_URL?.replace(
  "Instagram",
  "InstagramTest",
);

const app = new App([new User()]);
const request = supertest(app.app);

beforeAll(async () => {
  await UserModel.deleteMany({});
});

afterAll(async () => {
  await UserModel.deleteMany({});
});

describe("POST /user/create", () => {
  it("Should create user", async () => {
    const response = await request.post("/user/create").send(getFakeUser());
    expect(response.status).toBe(201);
  });
});

describe("GET /user", () => {
  it("Should have one user created", async () => {
    const response = await request.get("/user");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });
});
