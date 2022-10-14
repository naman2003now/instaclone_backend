import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv-safe";
import Controller from "./interfaces/controller.interface";
import apiErrorHandler from "./middlewares/api-error-handler";

dotenv.config();

class App {
  app = express();

  PORT = process.env.PORT;

  DATABASE_URL = process.env.DATABASE_URL || "NULL";

  constructor(controllers: Controller[]) {
    this.connectToMongoDB();
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
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
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

  private connectToMongoDB() {
    mongoose.connect(this.DATABASE_URL, () => {});
  }
}

export default App;
