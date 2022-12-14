import { Request, Response } from "express";
import UserModel from "../../models/user";
import Route, { METHODS } from "../../interfaces/route.interface";

export default class GetUsersRoute extends Route {
  path = "/";

  method = METHODS.GET;

  async router(req: Request, res: Response) {
    const users = await UserModel.find({}, "username name bio");
    res.status(200).send(
      users.map(({ username, name, bio }) => {
        return { name, username, bio };
      }),
    );
  }
}
