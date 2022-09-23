import dotenv from "dotenv-safe";
import App from "./app";

dotenv.config();

const app = new App([]);
app.listen();
