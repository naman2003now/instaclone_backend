import { Request, Response } from "express";

export enum METHODS {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  DELETE = "delete",
}

abstract class Route {
  abstract path: string;

  abstract method: METHODS;

  abstract router(req: Request, res: Response): void;
}

export default Route;
