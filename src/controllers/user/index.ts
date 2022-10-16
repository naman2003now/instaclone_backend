import Controller from "../../interfaces/controller.interface";
import GetUsersRoute from "./getUsers";
import GetUserDataRoute from "./getUserData";
import SearchUsersRoute from "./searchUsers";
import CreateUserRoute from "./createUser";

class User extends Controller {
  path = "/user";

  constructor() {
    super();
    this.initilizeRoutes([
      new GetUsersRoute(),
      new GetUserDataRoute(),
      new CreateUserRoute(),
      new SearchUsersRoute(),
    ]);
  }
}

export default User;
