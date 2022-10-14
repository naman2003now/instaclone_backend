import App from "./app";
import User from "./controllers/user";

const app = new App([new User()]);
app.listen();
