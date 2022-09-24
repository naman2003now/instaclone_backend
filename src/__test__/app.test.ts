import supertest from "supertest";
import App from "../app";

const app = new App([]);
const request = supertest(app.app);

describe("App", () => {
  it("should be created", () => {
    expect(app).toBeInstanceOf(App);
  });
});

describe("GET /", () => {
  it("responds with a status 200", () => {
    request.get("/").expect(200);
  });
});
