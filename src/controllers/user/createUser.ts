import { Request, Response } from "express";
import UserModel from "../../models/user";
import Route, { METHODS } from "../../interfaces/route.interface";

export interface IUser {
  username: string;
  name: string;
  bio: string;
  profile: string;
}

export async function createUser(object: IUser) {
  const user = await UserModel.create(object);
  return user;
}

export default class CreateUserRoute extends Route {
  path = "/create";

  method = METHODS.POST;

  async router(req: Request, res: Response) {
    try {
      const user = await createUser(req.body);
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
