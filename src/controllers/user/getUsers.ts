import { Request, Response } from "express";
import Route, { METHODS } from "../../interfaces/route.interface";

export default class GetUsers extends Route {
  path = "/";

  method = METHODS.GET;

  router(req: Request, res: Response) {
    res.status(200).send("This is the fucking output");
  }
}
