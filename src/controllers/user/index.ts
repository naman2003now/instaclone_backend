import Controller from "../../interfaces/controller.interface";
import GetUsersRoute from "./getUsers";
import CreateUserRoute from "./createUser";

class User extends Controller {
  path = "/user";

  constructor() {
    super();
    this.initilizeRoutes([new GetUsersRoute(), new CreateUserRoute()]);
  }
}

export default User;
