import Controller from "../../interfaces/controller.interface";
import GetUsers from "./getUsers";

class User extends Controller {
  path = "/user";

  constructor() {
    super();
    this.initilizeRoutes([new GetUsers()]);
  }
}

export default User;
