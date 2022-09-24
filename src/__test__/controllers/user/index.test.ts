import supertest from "supertest";
import User from "../../../controllers/user";
import App from "../../../app";

const app = new App([new User()]);
const request = supertest(app.app);

describe("GET /user", () => {
  it("Should respond with status 200", async () => {
    const response = await request.get("/user");
    expect(response.status).toBe(200);
  });
});
