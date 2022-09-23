import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import Controller from "./interfaces/controller.interface";
import apiErrorHandler from "./middlewares/api-error-handler";

class App {
  app = express();

  PORT = process.env.PORT;

  constructor(controllers: Controller[]) {
    this.initilizeMiddlewares();
    this.initilizeControllers(controllers);
    this.initilizeHomeRoute();
    this.initilizeErrorHandler();
  }

  private initilizeControllers(controllers: Controller[]) {
    controllers.forEach((controller) =>
      this.app.use(controller.path, controller.router),
    );
  }

  private initilizeHomeRoute() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send(
        "Who the hell do you think I am? I don't give a fuck about your Instagram",
      );
    });
  }

  private initilizeMiddlewares() {
    this.app.use(cors());
    this.app.use(morgan("tiny"));
  }

  private initilizeErrorHandler() {
    this.app.use(apiErrorHandler);
  }

  public listen() {
    this.app.listen(this.PORT, () => {
      /* eslint no-console: [0] */
      console.log(`Server started: Listening on port ${this.PORT}`);
    });
  }
}

export default App;
