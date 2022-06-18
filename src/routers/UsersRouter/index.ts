import Server from "../../components/Server";

import UsersController from "../../controllers/UsersController";

const usersController = UsersController.getController();

class UsersRouter {
  private static routerInstance: UsersRouter | null = null;

  private isInit: boolean = false;

  private constructor() {}

  public static getController(): UsersRouter {
    if (this.routerInstance === null) {
      this.routerInstance = new UsersRouter();
    }

    return this.routerInstance;
  }

  public init(server: Server): void {
    if (this.isInit) {
      return;
    }

    server.get("users", usersController.getAllUsers);
    server.get("users/*", usersController.getUser);
    server.post("users", usersController.createUser);
    server.put("users/*", usersController.updateUser);
    server.delete("users/*", usersController.deleteUser);
  }
}

export default UsersRouter;
