import { Request, Response } from "express";
import UserModel from "../../models/user";
import Route, { METHODS } from "../../interfaces/route.interface";

export default class GetUserDataRoute extends Route {
  path = "/data/:username";

  method = METHODS.GET;

  async router(req: Request, res: Response) {
    const user = await UserModel.findOne({
      username: req.params.username,
    });
    res.status(200).send(user);
  }
}
