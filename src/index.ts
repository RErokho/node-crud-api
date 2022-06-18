import Server from "./components/Server";
import UsersRouter from "./routers/UsersRouter";
import { API_URL } from "./constants";

import config from "./configuration/config";

const { port, host } = config;
const server = Server.getServer();

const userRouter = UsersRouter.getController();

server.setBaseUrl(API_URL);

userRouter.init(server);

server.start(port, host);
