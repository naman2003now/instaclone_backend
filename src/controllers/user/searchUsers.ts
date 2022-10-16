import { Request, Response } from "express";
import UserModel from "../../models/user";
import Route, { METHODS } from "../../interfaces/route.interface";

export default class SearchUsersRoute extends Route {
  path = "/search";

  method = METHODS.GET;

  async router(req: Request, res: Response) {
    const users = await UserModel.find({}, "profileImage username name");
    res.status(200).send(
      users.map(({ username, name, profileImage }) => {
        return { name, username, profileImage };
      }),
    );
  }
}
