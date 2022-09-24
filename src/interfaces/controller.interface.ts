import { Router } from "express";
import Route from "./route.interface";

abstract class Controller {
  router = Router();

  abstract path: string;

  protected initilizeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.router[route.method](route.path, route.router);
    });
  }
}

export default Controller;
