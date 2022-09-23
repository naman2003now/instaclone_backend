import request from "supertest";
import App from "../app";

describe("App", () => {
  const app = new App([]);
  it("should be created", () => {
    expect(app).toBeInstanceOf(App);
  });

  describe("GET /", () => {
    it("responds with a status 200", () => {
      request(app.app).get("/").expect(200);
    });
  });
});
